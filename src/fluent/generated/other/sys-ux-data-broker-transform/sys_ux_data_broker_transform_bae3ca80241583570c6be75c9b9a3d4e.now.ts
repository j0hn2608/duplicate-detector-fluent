import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['bae3ca80241583570c6be75c9b9a3d4e'],
    table: 'sys_ux_data_broker_transform',
    data: {
        api_name: 'x_916323_duplicate.generateDuplicateQuery',
        batch_exclude: 'false',
        mutates_server_data: 'false',
        name: 'generateDuplicateQuery',
        private: 'false',
        props: `[\r
    {\r
        "name": "tableName",\r
        "label": "Table Name",\r
        "description": "The backend name of the table (e.g., incident)",\r
        "readOnly": false,\r
        "fieldType": "string",\r
        "mandatory": true,\r
        "defaultValue": ""\r
    },\r
    {\r
        "name": "initialQuery",\r
        "label": "Initial Query",\r
        "description": "The encoded query string to filter records",\r
        "readOnly": false,\r
        "fieldType": "string",\r
        "mandatory": false,\r
        "defaultValue": ""\r
    },\r
    {\r
        "name": "fieldsArray",\r
        "label": "Fields Array",\r
        "description": "Array of fields to retrieve",\r
        "readOnly": false,\r
        "fieldType": "json",\r
        "mandatory": true,\r
        "defaultValue": ""\r
    }\r
]`,
        schema_version: '1.0.0',
        script: `function transform(input) {
    var finder = new DuplicateRecordUtil(input.tableName, input.initialQuery);
    var result = finder.buildDuplicateQuery(input.fieldsArray);

    if (result.truncated) {
        gs.warn('[DuplicateDetector] Truncated result for table ' + input.tableName + '.');
    }
    return result.query;
}`,
    },
})
