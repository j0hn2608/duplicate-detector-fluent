import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['1131d47a920e0c440da832a5ab767d42'],
    table: 'sys_ui_interaction',
    data: {
        active: 'true',
        inputs: '[]',
        label: 'Show duplicates',
        on_start: 'navigate_to_url_1',
        required_builder_translations: '[ ]',
        required_translations: '[ ]',
        step_definitions: '25a277e1ffb622109557ffffffffffd6',
        steps: `{
    "navigate_to_url_1": {
        "id": "navigate_to_url_1",
        "inputs": {
            "openInNewWindow": {
                "type": "JSON_LITERAL",
                "value": true
            },
            "url": {
                "script": {
                    "apiVersion": "2.0.0",
                    "inlineScript": "/**\\n* @param {Context} context - dynamic content available for this UI interaction (ex: context.inputs)\\n* @param {ApiHelpers} helpers.translate: helper function to request translations\\n*/\\nfunction evaluateProperty(context, helpers) {\\n    return '/x/916323/duplicate-detector/home/'+ context.list.table;\\n}\\n",
                    "scriptSysId": ""
                },
                "type": "CLIENT_TRANSFORM_SCRIPT"
            }
        },
        "label": "Navigate to URL 1",
        "nextSteps": {},
        "stepDefinition": "25a277e1ffb622109557ffffffffffd6"
    }
}`,
        sys_domain: 'global',
        type: '7b91c765ff7222109557ffffffffffc5',
    },
})
