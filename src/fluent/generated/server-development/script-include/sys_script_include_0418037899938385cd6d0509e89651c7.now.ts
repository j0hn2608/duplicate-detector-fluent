import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['0418037899938385cd6d0509e89651c7'],
    name: 'DuplicateRecordUtil',
    script: Now.include('./sys_script_include_0418037899938385cd6d0509e89651c7.server.js'),
    description:
        'Finds duplicate records on any table using GlideAggregate. Called server-side by the generateDuplicateQuery data broker. Not client-callable by design.',
    apiName: 'x_916323_duplicate.DuplicateRecordUtil',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    active: true,
})
