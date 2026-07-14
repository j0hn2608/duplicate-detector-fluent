import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['9cde4e0059fc43a0839b9774d9028e45'],
    table: 'sys_ux_client_script',
    data: {
        macroponent: '5a7a74c8d0a7fdd54bf926b291de5444',
        name: 'fields_input/items',
        required_translations: '[]',
        script: `/**
  * @param {params} params
  * @param {api} params.api
  * @param {TransformApiHelpers} params.helpers
  */
function evaluateProperty({api, helpers}) {
	const fields = api.data.fetch_table_column_list.output; 

    if (!fields) return [];

    return Object.values(fields)
        .sort((a, b) => a.index - b.index)
        .map(item => ({
            id: item.id,
            label: item.label
        }));
}`,
        script_api_version: '2.0.0',
        target: 'macroponent',
        type: 'transform',
    },
})
