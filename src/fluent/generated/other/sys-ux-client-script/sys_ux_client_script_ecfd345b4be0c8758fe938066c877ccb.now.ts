import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['ecfd345b4be0c8758fe938066c877ccb'],
    table: 'sys_ux_client_script',
    data: {
        macroponent: '5a7a74c8d0a7fdd54bf926b291de5444',
        name: 'setSelectedField',
        required_translations: '[]',
        script: `/**
 * @param {params} params
 * @param {api} params.api
 * @param {any} params.event
 * @param {any} params.imports
 * @param {ApiHelpers} params.helpers
 */
function handler({
    api,
    event,
    helpers,
    imports
}) {
    // 1. On lit l'état brut (qui contient les objets complexes)
    var selectedObjects = api.state.rawSelectedFields;
    
    if (!selectedObjects || selectedObjects.length === 0) {
        console.warn("Aucun champ n'a été sélectionné.");
        return;
    }

    var cleanIds = [];

    // 2. On extrait uniquement les IDs
    for (var i = 0; i < selectedObjects.length; i++) {
        if (selectedObjects[i] && selectedObjects[i].id) {
            cleanIds.push(selectedObjects[i].id);
        }
    }

    // 3. Vous pouvez maintenant mettre à jour votre état final 'fields' 
    // (celui qui sert pour la recherche des doublons)
    api.setState('fields', cleanIds);
    console.log("Extraction réussie :", cleanIds);
 
}`,
        script_api_version: '2.0.0',
        target: 'macroponent',
        type: 'default',
    },
})
