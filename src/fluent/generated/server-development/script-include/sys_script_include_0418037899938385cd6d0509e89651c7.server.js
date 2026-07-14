var DuplicateRecordUtil = Class.create();

/**
 * Finds groups of records that share the same value across one or more fields.
 *
 * The table and the base filter are the context of a search, so they are set once
 * at construction rather than threaded through every call:
 *
 *     var finder = new DuplicateRecordUtil('sys_user', 'active=true');
 *     finder.findDuplicates('email');              // duplicate groups
 *     finder.buildDuplicateQuery('email').query;   // encoded query selecting the records
 *
 * Responsibilities are kept apart: _aggregate and _resolveSysIds touch the
 * database, _encode is pure string work, and canRun states the preconditions.
 */
DuplicateRecordUtil.prototype = {

    /** An encoded query that deliberately matches nothing. */
    NO_MATCH: 'sys_idISEMPTY',

    /** Upper bound on sys_ids embedded in a query, to keep it usable. */
    MAX_SYS_IDS: 5000,

    /**
     * @param {string} tableName    table to search, e.g. 'sys_user'
     * @param {string} [initialQuery] encoded query narrowing the records to scan
     */
    initialize: function(tableName, initialQuery) {
        this.tableName = tableName || '';
        this.initialQuery = initialQuery || '';
    },

    /**
     * Whether a search can run at all.
     *
     * Callers must check this before trusting an empty result. A scoped
     * application cannot read every table, and "no access" must never be
     * mistaken for "no duplicates".
     *
     * @return {boolean}
     */
    canRun: function() {
        if (!this.tableName) {
            return false;
        }

        var gr = new GlideRecord(this.tableName);
        if (!gr.isValid()) {
            gs.warn('[DuplicateDetector] Unknown table: ' + this.tableName);
            return false;
        }
        if (!gr.canRead()) {
            gs.warn('[DuplicateDetector] Read access denied on table: ' + this.tableName);
            return false;
        }
        return true;
    },

    /**
     * Groups of records sharing the same value across the given field(s).
     *
     * @param {string|Array} fields one field name, or several that must be unique together
     * @return {Array} [{ values: { field: value, ... }, count: n }, ...]
     */
    findDuplicates: function(fields) {
        var fieldList = this._normalizeFields(fields);
        if (!fieldList.length || !this.canRun()) {
            return [];
        }
        return this._aggregate(fieldList);
    },

    /**
     * Encoded query selecting every record that belongs to a duplicate group.
     *
     * @param {string|Array} fields
     * @return {Object} { query: string, groups: number, truncated: boolean }
     */
    buildDuplicateQuery: function(fields) {
        var fieldList = this._normalizeFields(fields);
        var groups = this.findDuplicates(fieldList);

        if (!groups.length) {
            return { query: this.NO_MATCH, groups: 0, truncated: false };
        }
        return this._encode(fieldList, groups);
    },

    // ---------------------------------------------------------------- internals

    _normalizeFields: function(fields) {
        if (!fields) {
            return [];
        }
        var list = (typeof fields === 'string') ? [fields] : fields;
        return list.filter(function(field) {
            return !!field;
        });
    },

    /**
     * Database access: a single grouped COUNT query.
     */
    _aggregate: function(fields) {
        var ga = new GlideAggregate(this.tableName);

        if (this.initialQuery) {
            ga.addEncodedQuery(this.initialQuery);
        }
        for (var i = 0; i < fields.length; i++) {
            ga.groupBy(fields[i]);
        }
        ga.addAggregate('COUNT');

        // Push "count > 1" down into the SQL HAVING clause, so the database returns
        // only the duplicate groups instead of every distinct value on the table.
        // Guarded: where the scoped API does not honour it, the check below still
        // filters correctly — only less efficiently.
        try {
            ga.addHaving('COUNT', '>', '1');
        } catch (e) {
            gs.info('[DuplicateDetector] addHaving unavailable, filtering counts in script.');
        }

        ga.query();

        var groups = [];
        while (ga.next()) {
            var count = parseInt(ga.getAggregate('COUNT'), 10);
            if (count <= 1) {
                continue;   // a no-op once HAVING has been applied
            }

            var values = {};
            for (var j = 0; j < fields.length; j++) {
                values[fields[j]] = ga.getValue(fields[j]) || '';
            }
            groups.push({ values: values, count: count });
        }
        return groups;
    },

    /**
     * Pure serialisation — no database access.
     *
     * Encoded queries have no escaping mechanism, so a value containing '^' or ','
     * cannot be expressed in one. Those groups are resolved to sys_ids instead;
     * the rest keep the cheap value-based form. Only the offending groups pay the
     * price, rather than the whole result.
     */
    _encode: function(fields, groups) {
        var encodable = [];
        var opaque = [];

        for (var i = 0; i < groups.length; i++) {
            (this._isEncodable(fields, groups[i]) ? encodable : opaque).push(groups[i]);
        }

        var blocks = this._encodeByValue(fields, encodable);
        var truncated = false;

        if (opaque.length) {
            var resolved = this._resolveSysIds(fields, opaque);
            if (resolved.sysIds.length) {
                blocks.push('sys_idIN' + resolved.sysIds.join(','));
            }
            truncated = resolved.truncated;
        }

        return {
            query: blocks.length ? blocks.join('^NQ') : this.NO_MATCH,
            groups: groups.length,
            truncated: truncated
        };
    },

    /** Value-based conditions: cheap, and the common case. */
    _encodeByValue: function(fields, groups) {
        if (!groups.length) {
            return [];
        }

        var self = this;

        // One field: the IN operator is the most compact and efficient form.
        if (fields.length === 1) {
            var field = fields[0];
            var values = groups.map(function(group) {
                return group.values[field];
            });
            return [self._withInitialQuery(field + 'IN' + values.join(','))];
        }

        // Several fields: one OR-block per group, each an AND of its field values.
        return groups.map(function(group) {
            var conditions = fields.map(function(field) {
                return field + '=' + group.values[field];
            });
            return self._withInitialQuery(conditions.join('^'));
        });
    },

    /**
     * Database access, isolated: resolve groups to concrete sys_ids.
     *
     * Done in a single query. Candidates are fetched by OR-ing the first field's
     * values (passed as parameters, so any character is safe), then filtered in
     * memory on the full group signature.
     */
    _resolveSysIds: function(fields, groups) {
        var first = fields[0];

        var gr = new GlideRecord(this.tableName);
        if (this.initialQuery) {
            gr.addEncodedQuery(this.initialQuery);
        }

        var condition = gr.addQuery(first, groups[0].values[first]);
        for (var i = 1; i < groups.length; i++) {
            condition.addOrCondition(first, groups[i].values[first]);
        }
        gr.query();

        var wanted = {};
        for (var g = 0; g < groups.length; g++) {
            wanted[this._signature(fields, groups[g].values)] = true;
        }

        var sysIds = [];
        var truncated = false;
        while (gr.next()) {
            if (sysIds.length >= this.MAX_SYS_IDS) {
                truncated = true;
                gs.warn('[DuplicateDetector] Result truncated to ' + this.MAX_SYS_IDS +
                        ' records on table ' + this.tableName + '.');
                break;
            }

            var row = {};
            for (var f = 0; f < fields.length; f++) {
                row[fields[f]] = gr.getValue(fields[f]) || '';
            }
            if (wanted[this._signature(fields, row)]) {
                sysIds.push(gr.getUniqueValue());
            }
        }

        return { sysIds: sysIds, truncated: truncated };
    },

    /**
     * Identifies a group by its field values. The separator must be a character that
     * cannot appear in a column value, or ['a b','c'] and ['a','b c'] would collide.
     */
    _signature: function(fields, values) {
        return fields.map(function(field) {
            return values[field];
        }).join('\u0000');
    },

    /** False when a value contains a character an encoded query cannot represent. */
    _isEncodable: function(fields, group) {
        for (var i = 0; i < fields.length; i++) {
            var value = String(group.values[fields[i]]);
            if (value.indexOf('^') > -1 || value.indexOf(',') > -1) {
                return false;
            }
        }
        return true;
    },

    _withInitialQuery: function(condition) {
        return this.initialQuery ? this.initialQuery + '^' + condition : condition;
    },

    type: 'DuplicateRecordUtil'
};