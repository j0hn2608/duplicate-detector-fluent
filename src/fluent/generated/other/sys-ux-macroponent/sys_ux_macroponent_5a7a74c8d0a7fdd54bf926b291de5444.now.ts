import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['5a7a74c8d0a7fdd54bf926b291de5444'],
    table: 'sys_ux_macroponent',
    data: {
        bundles: `[
    {
        "definitionId": "69785d8f4725211030576848946d43e3",
        "instanceId": "_1",
        "name": "Record list 1",
        "useByReference": false
    }
]`,
        category: 'page',
        composition:
            '[{"bundleLink": {"bundleInstanceId": "_1", "elementType": "member", "originalElementId": "list_viewport_modal"}, "conditionals": null, "definition": {"id": "61c315e9ccb8970546c30f3e2da41a32", "type": "MACROPONENT_VIEWPORT"}, "elementId": "list_viewport_modal", "elementLabel": "List Viewport Modal", "eventMappings": [], "extensionPoints": [{"controllerElementId": "list_controller", "name": "List page modals", "sysId": "33d76156b7312110a2cb18075e11a9d8"}], "isHidden": null, "overrides": null, "preset": {"controllerElementId": "list_controller", "disabledEventTargetIds": [], "id": "431df4d94fc3e404af2a7a1604dd08d6"}, "propertyValues": {"disableDismiss": {"type": "JSON_LITERAL", "value": false}, "size": {"type": "JSON_LITERAL", "value": "md"}}, "slot": null, "styles": null}, {"definition": {"id": "d356d14b6e293a3020a244b63d278d8f", "type": "MACROPONENT"}, "elementId": "banner_container", "elementLabel": "Banner Container", "overrides": {"composition": [{"definition": {"id": "bf92083f53eaac57f936a4b56809f411", "type": "MACROPONENT"}, "elementId": "banner_custom_illustration", "elementLabel": "Banner Custom Illustration", "propertyValues": {"alt": {"type": "JSON_LITERAL", "value": "CMDB workspace banner"}, "height": {"type": "JSON_LITERAL", "value": "100%"}, "src": {"type": "JSON_LITERAL", "value": "sn_cmdb_ws.landing_page_theme_agnostic_banner.svg"}, "width": {"type": "JSON_LITERAL", "value": "100%"}}}, {"definition": {"id": "4335ba6dca80378f7ba7a67cd6667bec", "type": "MACROPONENT"}, "elementId": "banner_header", "elementLabel": "Banner Header", "preset": null, "propertyValues": {"configAria": {"container": {}, "type": "MAP_CONTAINER"}, "css": {"type": "JSON_LITERAL", "value": "* { color: RGB(var(--now-color_text--primary)); font-family: var(--now-heading--header-primary--font-family); margin-block: unset; }"}, "tag": {"type": "JSON_LITERAL", "value": "h1"}, "text": {"type": "TRANSLATION_LITERAL", "value": {"comment": "", "message": "Duplicate Detector"}}}}], "layout": {"default": {"items": [{"element_id": "banner_custom_illustration", "styles": {"align-self": "flex-end", "height": "11.75rem", "overflow": "hidden", "width": "78.25rem"}}, {"element_id": "banner_header", "styles": {"margin-top": "-10rem", "padding": "0 3rem"}}], "styles": {"display": "flex", "flex-direction": "column"}, "templateId": "5832fd4d53c31010e6bcddeeff7b12db", "type": "flex"}, "version": "3.0.0"}}, "propertyValues": {"type": {"type": "JSON_LITERAL", "value": "section"}}}, {"definition": {"id": "d356d14b6e293a3020a244b63d278d8f", "type": "MACROPONENT"}, "elementId": "page_body", "elementLabel": "Page Body", "overrides": {"composition": [{"definition": {"id": "d356d14b6e293a3020a244b63d278d8f", "type": "MACROPONENT"}, "elementId": "page_container", "elementLabel": "Page Container", "overrides": {"composition": [{"definition": {"id": "d356d14b6e293a3020a244b63d278d8f", "type": "MACROPONENT"}, "elementId": "settings_container", "elementLabel": "Settings container", "overrides": {"composition": [{"definition": {"id": "d356d14b6e293a3020a244b63d278d8f", "type": "MACROPONENT"}, "elementId": "heading_container", "elementLabel": "Heading container", "overrides": {"composition": [{"definition": {"id": "1f6e0643eca7a637e36bd7833549ec9e", "type": "MACROPONENT"}, "elementId": "settings_heading", "elementLabel": "Settings heading", "preset": null, "propertyValues": {"align": {"type": "JSON_LITERAL", "value": "start"}, "hasNoMargin": {"type": "JSON_LITERAL", "value": true}, "label": {"type": "TRANSLATION_LITERAL", "value": {"message": "Settings"}}, "level": {"type": "JSON_LITERAL", "value": "2"}, "variant": {"type": "JSON_LITERAL", "value": "header-secondary"}, "wontWrap": {"type": "JSON_LITERAL", "value": false}}}], "layout": {"default": {"items": [{"element_id": "settings_heading", "styles": {}}], "styles": {"align-items": "center", "display": "flex", "flex-direction": "row", "gap": "var(--now-scalable-space--sm)", "margin-bottom": "var(--now-scalable-space--sm)", "width": "100%"}, "templateId": "5832fd4d53c31010e6bcddeeff7b12db", "type": "flex"}, "version": "3.0.0"}}, "preset": null, "propertyValues": {"ariaRegionHeadingLevel": {"type": "JSON_LITERAL", "value": "1"}, "ariaRegionName": {"type": "TRANSLATION_LITERAL", "value": {"code": null, "comment": "", "message": ""}}, "ariaRole": {"type": "JSON_LITERAL", "value": ""}, "hideEmptyStateUi": {"type": "JSON_LITERAL", "value": true}, "includeAriaHeading": {"type": "JSON_LITERAL", "value": false}, "slotWrapperBehavior": {"type": "JSON_LITERAL", "value": "fullheight"}, "type": {"type": "JSON_LITERAL", "value": "section"}}}, {"definition": {"id": "4335ba6dca80378f7ba7a67cd6667bec", "type": "MACROPONENT"}, "elementId": "settings_description", "elementLabel": "Settings Description", "preset": null, "propertyValues": {"configAria": {"container": {}, "type": "MAP_CONTAINER"}, "css": {"type": "JSON_LITERAL", "value": "* { }"}, "tag": {"type": "JSON_LITERAL", "value": "span"}, "text": {"type": "TRANSLATION_LITERAL", "value": {"code": null, "comment": "", "message": "Select the field or combination of fields that should be unique in your table."}}}}, {"definition": {"id": "d356d14b6e293a3020a244b63d278d8f", "type": "MACROPONENT"}, "elementId": "settings_items_container", "elementLabel": "Settings items container", "eventMappings": [], "isHidden": {"type": "JSON_LITERAL", "value": null}, "overrides": {"composition": [{"definition": {"id": "71f1524f8add06dff994f183471bfa7c", "type": "MACROPONENT"}, "elementId": "fields_input", "elementLabel": "Fields input", "eventMappings": [{"eventMappingId": "VgKKhvPADUkyjjeeddADoDuNepWT", "isConfiguration": false, "offRowStorageId": null, "sourceEventApiName": "sn_typeahead.NOW_TYPEAHEAD_MULTI#SELECTED_ITEMS_SET", "sourceEventCorrelationId": null, "sourceEventDefinition": {"apiName": "sn_typeahead.NOW_TYPEAHEAD_MULTI#SELECTED_ITEMS_SET", "id": null, "type": "UXEVENT"}, "sourceEventSysId": null, "targets": [{"broker": null, "clientScript": null, "clientTransformScript": "", "conditional": null, "declarativeAction": null, "event": {"apiName": "sn_uxf.MACROPONENT_STATE_UPDATE_REQUESTED", "payload": {"container": {"propName": {"type": "JSON_LITERAL", "value": "rawSelectedFields"}, "value": {"binding": {"address": ["value"]}, "type": "EVENT_PAYLOAD_BINDING"}}, "type": "MAP_CONTAINER"}, "sysId": "32408b42ff7a10109046e490703bf176"}, "interaction": null, "operation": null, "targetId": "IiiBXZeehhZsBaaeDjjWIOccEEvYTlb", "type": "EVENT"}]}], "isHidden": {"type": "JSON_LITERAL", "value": null}, "preset": null, "propertyValues": {"autofocus": {"type": "JSON_LITERAL", "value": null}, "configAria": {"container": {"panel": {"container": {"aria-label": {"type": "TRANSLATION_LITERAL", "value": {"code": null, "comment": "", "message": "Options"}}}, "type": "MAP_CONTAINER"}}, "type": "MAP_CONTAINER"}, "disableAutoClose": {"type": "JSON_LITERAL", "value": false}, "disabled": {"type": "JSON_LITERAL", "value": null}, "fieldLayout": {"type": "JSON_LITERAL", "value": {"layout": "vertical"}}, "helperContent": {"type": "JSON_LITERAL", "value": null}, "hideRequiredIndicator": {"type": "JSON_LITERAL", "value": false}, "invalid": {"type": "JSON_LITERAL", "value": null}, "items": {"script": {"apiVersion": "2.0.0", "controllerElementId": null, "inlineScript": null, "scriptSysId": "9cde4e0059fc43a0839b9774d9028e45", "target": null}, "type": "CLIENT_TRANSFORM_SCRIPT"}, "itemsListConstrain": {"type": "JSON_LITERAL", "value": null}, "label": {"type": "TRANSLATION_LITERAL", "value": {"code": null, "comment": "", "message": "Field(s)"}}, "landmark": {"type": "JSON_LITERAL", "value": null}, "manageInvalid": {"type": "JSON_LITERAL", "value": false}, "manageSelectedItems": {"type": "JSON_LITERAL", "value": false}, "manageValue": {"type": "JSON_LITERAL", "value": false}, "maxlength": {"type": "JSON_LITERAL", "value": null}, "messages": {"container": [], "type": "LIST_CONTAINER"}, "name": {"type": "JSON_LITERAL", "value": "uniqueFields"}, "optional": {"type": "JSON_LITERAL", "value": false}, "placeholder": {"type": "TRANSLATION_LITERAL", "value": {"code": null, "comment": "", "message": ""}}, "readonly": {"type": "JSON_LITERAL", "value": null}, "required": {"type": "JSON_LITERAL", "value": false}, "search": {"type": "JSON_LITERAL", "value": "contains"}, "selectedItems": {"binding": {"address": ["rawSelectedFields"]}, "type": "STATE_BINDING"}, "size": {"type": "JSON_LITERAL", "value": "md"}, "value": {"type": "TRANSLATION_LITERAL", "value": {"code": null, "comment": "", "message": ""}}, "wrapLabel": {"type": "JSON_LITERAL", "value": false}}, "slot": null, "styles": null}], "layout": {"default": {"children": null, "items": [{"element_id": "fields_input", "styles": {}}], "root": null, "rules": null, "styles": {"display": "flex", "flex-direction": "row", "gap": "var(--now-scalable-space--xl)"}, "templateId": "5832fd4d53c31010e6bcddeeff7b12db", "type": "flex"}, "version": "3.0.0"}}, "preset": null, "propertyValues": {"ariaRegionHeadingLevel": {"type": "JSON_LITERAL", "value": "1"}, "ariaRegionName": {"type": "TRANSLATION_LITERAL", "value": {"code": null, "comment": "", "message": ""}}, "ariaRole": {"type": "JSON_LITERAL", "value": ""}, "hideEmptyStateUi": {"type": "JSON_LITERAL", "value": true}, "includeAriaHeading": {"type": "JSON_LITERAL", "value": false}, "slotWrapperBehavior": {"type": "JSON_LITERAL", "value": "fullheight"}, "type": {"type": "JSON_LITERAL", "value": "section"}}, "slot": null, "styles": null}, {"definition": {"id": "d37ce8abca89d02905fed903c8e34d8e", "type": "MACROPONENT"}, "elementId": "run", "elementLabel": "Run", "eventMappings": [{"eventMappingId": "heevOsfkrAkocjjwUFiiAAebbIqs", "isConfiguration": false, "offRowStorageId": null, "sourceEventApiName": "sn_button.NOW_BUTTON#CLICKED", "sourceEventCorrelationId": null, "sourceEventDefinition": {"apiName": "sn_button.NOW_BUTTON#CLICKED", "id": null, "type": "UXEVENT"}, "sourceEventSysId": null, "targets": [{"broker": null, "clientScript": {"payload": {"type": "JSON_LITERAL", "value": {}}, "sysId": "ecfd345b4be0c8758fe938066c877ccb"}, "clientTransformScript": "", "conditional": null, "declarativeAction": null, "event": null, "interaction": null, "operation": null, "targetId": "uJeaaofuVBaazLeeddNMAbbeOJjQlp", "type": "CLIENT_SCRIPT"}, {"broker": null, "clientScript": null, "clientTransformScript": "", "conditional": null, "declarativeAction": null, "event": null, "interaction": null, "operation": {"dataBrokerId": "bae3ca80241583570c6be75c9b9a3d4e", "operationName": "REFRESH", "parentResourceId": "generateduplicatequery_1", "payload": {"type": "JSON_LITERAL", "value": {}}}, "targetId": "hShhlueehhaaLBEWTjjpwJbbneeddEWWgC", "type": "DATABROKER_OP"}]}], "isHidden": {"type": "JSON_LITERAL", "value": null}, "preset": null, "propertyValues": {"active": {"type": "JSON_LITERAL", "value": false}, "animatedIcon": {"type": "JSON_LITERAL", "value": null}, "configAria": {"type": "JSON_LITERAL", "value": null}, "disabled": {"type": "JSON_LITERAL", "value": false}, "icon": {"type": "JSON_LITERAL", "value": null}, "label": {"type": "TRANSLATION_LITERAL", "value": {"code": null, "comment": "", "message": "Run"}}, "landmark": {"type": "JSON_LITERAL", "value": null}, "size": {"type": "JSON_LITERAL", "value": "md"}, "tooltipContent": {"type": "TRANSLATION_LITERAL", "value": {"code": null, "comment": "", "message": "Enter a label"}}, "variant": {"type": "JSON_LITERAL", "value": "secondary"}}, "slot": null, "styles": {}}], "layout": {"default": {"items": [{"element_id": "heading_container", "styles": {}}, {"element_id": "settings_description", "styles": {"margin-bottom": "var(--now-static-space--lg)"}}, {"element_id": "settings_items_container", "styles": {"flex": "none"}}, {"element_id": "run", "styles": {}}], "styles": {"flex-direction": "column"}, "templateId": "5832fd4d53c31010e6bcddeeff7b12db", "type": "flex"}, "version": "3.0.0"}}, "preset": null, "propertyValues": {"ariaRegionHeadingLevel": {"type": "JSON_LITERAL", "value": "1"}, "ariaRegionName": {"type": "TRANSLATION_LITERAL", "value": {"code": null, "comment": "", "message": ""}}, "ariaRole": {"type": "JSON_LITERAL", "value": ""}, "hideEmptyStateUi": {"type": "JSON_LITERAL", "value": true}, "includeAriaHeading": {"type": "JSON_LITERAL", "value": false}, "slotWrapperBehavior": {"type": "JSON_LITERAL", "value": "fullheight"}, "type": {"type": "JSON_LITERAL", "value": "section"}}}, {"definition": {"id": "d356d14b6e293a3020a244b63d278d8f", "type": "MACROPONENT"}, "elementId": "list_container", "elementLabel": "List container", "overrides": {"composition": [{"definition": {"id": "1f6e0643eca7a637e36bd7833549ec9e", "type": "MACROPONENT"}, "elementId": "list_title", "elementLabel": "List title", "preset": null, "propertyValues": {"align": {"type": "JSON_LITERAL", "value": "start"}, "hasNoMargin": {"type": "JSON_LITERAL", "value": true}, "label": {"transform": {"operands": {"container": [{"type": "JSON_LITERAL", "value": "Duplicated "}, {"binding": {"address": ["list_controller", "current", "listTitle"]}, "type": "DATA_OUTPUT_BINDING"}, {"type": "JSON_LITERAL", "value": "s"}], "type": "LIST_CONTAINER"}, "operator": "CONCAT"}, "type": "CLIENT_TRANSFORM"}, "level": {"type": "JSON_LITERAL", "value": "2"}, "variant": {"type": "JSON_LITERAL", "value": "header-secondary"}, "wontWrap": {"type": "JSON_LITERAL", "value": false}}}, {"bundleLink": {"bundleInstanceId": "_1", "elementType": "root", "originalElementId": "list_bundle"}, "conditionals": null, "definition": {"id": "d356d14b6e293a3020a244b63d278d8f", "type": "MACROPONENT"}, "elementId": "list_bundle", "elementLabel": "Record List", "eventMappings": [], "isHidden": null, "overrides": {"composition": [{"bundleLink": {"bundleInstanceId": "_1", "elementType": "member", "originalElementId": "record_list_header_1"}, "conditionals": null, "definition": {"id": "b685c9c6773ab64a2c11c88564fc9f62", "type": "MACROPONENT"}, "elementId": "record_list_header_1", "elementLabel": "Record List Header", "eventMappings": [], "isHero": true, "isHidden": null, "preset": {"controllerElementId": "list_controller", "disabledEventTargetIds": [], "id": "7390b78659717406599eca6a55e68c44"}, "propertyValues": {"enableGrouping": {"type": "JSON_LITERAL"}, "enableTitleWrap": {"type": "JSON_LITERAL", "value": false}, "showCopyURLButton": {"type": "JSON_LITERAL"}, "showCount": {"type": "JSON_LITERAL"}, "showSubtitle": {"type": "JSON_LITERAL"}, "showTitle": {"type": "JSON_LITERAL", "value": false}}, "slot": null, "styles": null}, {"bundleLink": {"bundleInstanceId": "_1", "elementType": "member", "originalElementId": "resizable_panes_1"}, "definition": {"id": "07b0bb09419d26f0af681796bc548f19", "type": "MACROPONENT"}, "elementId": "resizable_panes_1", "elementLabel": "Resizable panes 1", "eventMappings": [], "isHidden": {"type": "JSON_LITERAL", "value": null}, "overrides": {"composition": [{"bundleLink": {"bundleInstanceId": "_1", "elementType": "member", "originalElementId": "presentational_list_1"}, "conditionals": null, "definition": {"id": "eee2590820335fa22d8fb7319a825a82", "type": "MACROPONENT"}, "elementId": "presentational_list_1", "elementLabel": "Presentational List", "eventMappings": [], "isHero": true, "isHidden": null, "preset": {"controllerElementId": "list_controller", "disabledEventTargetIds": [], "id": "33f6672f7d096e5a32e4e96b497748e4"}, "propertyValues": {"options": {"type": "JSON_LITERAL", "value": {}}}, "slot": "left", "styles": {}}, {"bundleLink": {"bundleInstanceId": "_1", "elementType": "member", "originalElementId": "list_panel_viewport"}, "definition": {"id": "MACROPONENT_VIEWPORT_HEADLESS", "type": "MACROPONENT_VIEWPORT_HEADLESS"}, "elementId": "list_panel_viewport", "elementLabel": "List Panel Viewport", "eventMappings": [], "extensionPoints": [{"appShell": "76a83a645b122010b913030a1d81c780", "controller": "5865e308432021105571609dc7b8f23b", "controllerElementId": "list_controller", "controllerName": "List Controller", "inUse": false, "isControllerPresent": true, "name": "List Page Panes", "subroutes": [], "sysId": "4d9e0c2143efa11041505119ebb8f270", "sysScope": {"displayValue": "now-list-commons", "scopeName": "sn_now_list_common", "value": "015dd2fa796d247253ef940e685b9ebd"}, "type": "viewport"}], "isHidden": {"type": "JSON_LITERAL", "value": null}, "preset": null, "propertyValues": {"pageCollectionMode": {"type": "JSON_LITERAL", "value": true}}, "slot": "right", "styles": null}]}, "preset": {"controllerElementId": "list_controller", "disabledEventTargetIds": [], "id": "c98d4a8dfa4f61d096e06642b002039f"}, "propertyValues": {}, "slot": null, "styles": null}, {"bundleLink": {"bundleInstanceId": "_1", "elementType": "member", "originalElementId": "pagination_control_1"}, "conditionals": null, "definition": {"id": "63ea66b3c5a122819f729b7254789c34", "type": "MACROPONENT"}, "elementId": "pagination_control_1", "elementLabel": "Pagination control", "eventMappings": [], "isHidden": null, "preset": {"controllerElementId": "list_controller", "disabledEventTargetIds": [], "id": "47d85e949cd381e3930037367b16fdaa"}, "propertyValues": {"total": {"binding": {"address": ["list_controller", "paginationProps", "totalRecordCount"]}, "type": "DATA_OUTPUT_BINDING"}}, "slot": "", "styles": null}, {"bundleLink": {"bundleInstanceId": "_1", "elementType": "member", "originalElementId": "record_list_footer_container_1"}, "definition": {"id": "d356d14b6e293a3020a244b63d278d8f", "type": "MACROPONENT"}, "elementId": "record_list_footer_container_1", "elementLabel": "Footer Container", "eventMappings": [], "isHidden": {"operation": {"operand": {"binding": {"address": ["list_controller", "listProps", "enableViewAllLink"]}, "type": "DATA_OUTPUT_BINDING"}, "operator": "NOT"}, "type": "UNARY"}, "overrides": {"composition": [{"bundleLink": {"bundleInstanceId": "_1", "elementType": "member", "originalElementId": "view_all_link_1"}, "definition": {"id": "abe7db0526ec8705a0eff03521febfa3", "type": "MACROPONENT"}, "elementId": "view_all_link_1", "elementLabel": "View All Link", "eventMappings": [], "isHidden": null, "preset": {"controllerElementId": "list_controller", "disabledEventTargetIds": [], "id": "420a0cb7b684a7db1915765e1b4d64d1"}, "propertyValues": {"download": {"type": "JSON_LITERAL", "value": null}, "iconEnd": {"type": "JSON_LITERAL", "value": null}, "iconStart": {"type": "JSON_LITERAL", "value": null}, "opensWindow": {"type": "JSON_LITERAL", "value": false}, "underlined": {"type": "JSON_LITERAL", "value": false}}, "slot": null, "styles": {"padding": "var(--now-scalable-space--lg)", "padding-block-end": "var(--now-scalable-space--lg)", "padding-block-start": "var(--now-scalable-space--lg)", "padding-inline-end": "var(--now-scalable-space--lg)", "padding-inline-start": "var(--now-scalable-space--lg)"}}], "layout": {"default": {"children": null, "items": [{"element_id": "view_all_link_1", "styles": {"font-size": "var(--now-global-font-size--md)", "margin-inline-start": "var(--now-scalable-space--lg)"}}], "root": null, "rules": null, "styles": {"align-items": "center", "display": "flex", "flex-direction": "row", "height": "40px", "width": "100%"}, "templateId": "5832fd4d53c31010e6bcddeeff7b12db", "type": "flex"}, "version": "3.0.0"}}, "preset": null, "propertyValues": {"ariaRegionHeadingLevel": {"type": "JSON_LITERAL", "value": "1"}, "ariaRegionName": {"type": "TRANSLATION_LITERAL", "value": {"code": null, "comment": "", "message": ""}}, "ariaRole": {"type": "JSON_LITERAL", "value": ""}, "hideEmptyStateUi": {"type": "JSON_LITERAL", "value": true}, "includeAriaHeading": {"type": "JSON_LITERAL", "value": false}, "slotWrapperBehavior": {"type": "JSON_LITERAL", "value": "fullheight"}, "type": {"type": "JSON_LITERAL", "value": "section"}}, "slot": null, "styles": null}], "layout": {"default": {"children": null, "items": [{"element_id": "record_list_header_1", "styles": {}}, {"element_id": "resizable_panes_1", "styles": {"height": "", "min-height": "305px"}}, {"element_id": "pagination_control_1", "styles": {"min-height": "unset", "min-width": "unset"}}, {"element_id": "record_list_footer_container_1", "styles": {}}], "root": null, "rules": null, "styles": {"flex-direction": "column", "height": "100%"}, "templateId": "5832fd4d53c31010e6bcddeeff7b12db", "type": "flex"}, "version": "3.0.0"}}, "preset": null, "propertyValues": {"ariaRegionHeadingLevel": {"type": "JSON_LITERAL", "value": "1"}, "ariaRegionName": {"type": "TRANSLATION_LITERAL", "value": {"code": null, "comment": "", "message": ""}}, "ariaRole": {"type": "JSON_LITERAL", "value": ""}, "hideEmptyStateUi": {"type": "JSON_LITERAL", "value": true}, "includeAriaHeading": {"type": "JSON_LITERAL", "value": false}, "type": {"type": "JSON_LITERAL", "value": "section"}}, "slot": null, "styles": null}], "layout": {"default": {"items": [{"element_id": "list_title", "styles": {}}, {"element_id": "list_bundle", "styles": {}}], "styles": {"display": "flex", "flex-direction": "column", "padding-top": "var(--now-static-space--3xl)"}, "templateId": "5832fd4d53c31010e6bcddeeff7b12db", "type": "flex"}, "version": "3.0.0"}}, "preset": null, "propertyValues": {"ariaRegionHeadingLevel": {"type": "JSON_LITERAL", "value": "1"}, "ariaRegionName": {"type": "TRANSLATION_LITERAL", "value": {"code": null, "comment": "", "message": ""}}, "ariaRole": {"type": "JSON_LITERAL", "value": ""}, "hideEmptyStateUi": {"type": "JSON_LITERAL", "value": true}, "includeAriaHeading": {"type": "JSON_LITERAL", "value": false}, "slotWrapperBehavior": {"type": "JSON_LITERAL", "value": "fullheight"}, "type": {"type": "JSON_LITERAL", "value": "section"}}}], "layout": {"default": {"items": [{"element_id": "settings_container", "styles": {"width": "100%"}}, {"element_id": "list_container", "styles": {"width": "100%"}}], "styles": {"display": "flex", "flex-direction": "column", "padding": "var(--now-static-space--xxl)"}, "templateId": "5832fd4d53c31010e6bcddeeff7b12db", "type": "flex"}, "version": "3.0.0"}}, "preset": null, "propertyValues": {"ariaRegionHeadingLevel": {"type": "JSON_LITERAL", "value": "1"}, "ariaRegionName": {"type": "TRANSLATION_LITERAL", "value": {"code": null, "comment": "", "message": ""}}, "ariaRole": {"type": "JSON_LITERAL", "value": ""}, "hideEmptyStateUi": {"type": "JSON_LITERAL", "value": true}, "includeAriaHeading": {"type": "JSON_LITERAL", "value": false}, "slotWrapperBehavior": {"type": "JSON_LITERAL", "value": "fullheight"}, "type": {"type": "JSON_LITERAL", "value": "section"}}}], "layout": {"default": {"items": [{"element_id": "page_container", "styles": {"background": "rgb(var(--now-color_background--primary))", "border-color": "RGB(var(--now-color--neutral-5))", "border-radius": "var(--now-static-border-radius--md)", "border-style": "solid", "border-width": "0.0625rem", "box-shadow": "var(--now-static-drop-shadow--sm)", "width": "100%"}}], "styles": {"display": "flex", "flex-direction": "column", "gap": "var(--now-static-space--xl)", "margin-bottom": "var(--now-static-space--3xl)", "margin-left": "3rem", "margin-right": "3rem", "margin-top": "-4.25rem"}, "templateId": "5832fd4d53c31010e6bcddeeff7b12db", "type": "flex"}, "version": "3.0.0"}}, "preset": null, "propertyValues": {"ariaRegionHeadingLevel": {"type": "JSON_LITERAL", "value": "1"}, "ariaRegionName": {"type": "TRANSLATION_LITERAL", "value": {"code": null, "comment": "", "message": ""}}, "ariaRole": {"type": "JSON_LITERAL", "value": ""}, "hideEmptyStateUi": {"type": "JSON_LITERAL", "value": true}, "includeAriaHeading": {"type": "JSON_LITERAL", "value": false}, "slotWrapperBehavior": {"type": "JSON_LITERAL", "value": "fullheight"}, "type": {"type": "JSON_LITERAL", "value": "section"}}}]',
        data: `[
    {
        "bundleLinks": [
            {
                "bundleInstanceId": "_1",
                "elementType": "controller",
                "originalElementId": "list_controller"
            }
        ],
        "definition": {
            "id": "5865e308432021105571609dc7b8f23b",
            "type": "CONTROLLER"
        },
        "dependencies": {},
        "elementId": "list_controller",
        "elementLabel": "List Controller",
        "eventMappings": [
            {
                "eventMappingId": "clkubblwubaaccgffddbhhplggtlhhiiay",
                "isConfiguration": false,
                "offRowStorageId": null,
                "sourceEventApiName": "sn_now_list_common.LIST_CTRL#ADD_NOTIFICATIONS_REQUESTED",
                "sourceEventCorrelationId": null,
                "sourceEventDefinition": {
                    "apiName": "sn_now_list_common.LIST_CTRL#ADD_NOTIFICATIONS_REQUESTED",
                    "id": null,
                    "type": "UXEVENT"
                },
                "sourceEventSysId": null,
                "targets": [
                    {
                        "broker": null,
                        "bundleLinks": [
                            {
                                "bundleInstanceId": "_1",
                                "elementType": "eventMappingTarget"
                            }
                        ],
                        "clientScript": null,
                        "conditional": null,
                        "declarativeAction": null,
                        "event": {
                            "apiName": "sn_uxf_page.NOW_UXF_PAGE#ADD_NOTIFICATIONS",
                            "payload": {
                                "container": {
                                    "items": {
                                        "binding": {
                                            "address": [
                                                "items"
                                            ]
                                        },
                                        "type": "EVENT_PAYLOAD_BINDING"
                                    }
                                },
                                "type": "MAP_CONTAINER"
                            },
                            "sysId": null
                        },
                        "operation": null,
                        "targetId": "clkubblwucaaccgggddbhhpvtfmthffdd",
                        "type": "EVENT"
                    }
                ]
            },
            {
                "eventMappingId": "clkwayluyaacchzddbhhqwnbbmqowii",
                "isConfiguration": false,
                "offRowStorageId": null,
                "sourceEventApiName": "sn_now_list_common.LIST_CTRL#CLEAR_NOTIFICATIONS_REQUESTED",
                "sourceEventCorrelationId": null,
                "sourceEventDefinition": {
                    "apiName": "sn_now_list_common.LIST_CTRL#CLEAR_NOTIFICATIONS_REQUESTED",
                    "id": null,
                    "type": "UXEVENT"
                },
                "sourceEventSysId": null,
                "targets": [
                    {
                        "broker": null,
                        "bundleLinks": [
                            {
                                "bundleInstanceId": "_1",
                                "elementType": "eventMappingTarget"
                            }
                        ],
                        "clientScript": null,
                        "conditional": null,
                        "declarativeAction": null,
                        "event": {
                            "apiName": "sn_uxf_page.NOW_UXF_PAGE#CLEAR_NOTIFICATIONS",
                            "payload": {}
                        },
                        "operation": null,
                        "targetId": "clkwayluyaacciaaddbhhqggntpcgpbb",
                        "type": "EVENT"
                    }
                ]
            },
            {
                "eventMappingId": "clmtghpyffaabbcjjddbhhvbbqzjjoywp",
                "isConfiguration": false,
                "offRowStorageId": null,
                "sourceEventApiName": "sn_now_list_common.LIST_CTRL#REFERENCE_LINK_CLICKED",
                "sourceEventCorrelationId": null,
                "sourceEventDefinition": {
                    "apiName": "sn_now_list_common.LIST_CTRL#REFERENCE_LINK_CLICKED",
                    "id": null,
                    "type": "UXEVENT"
                },
                "sourceEventSysId": null,
                "targets": [
                    {
                        "broker": null,
                        "bundleLinks": [
                            {
                                "bundleInstanceId": "_1",
                                "elementType": "eventMappingTarget"
                            }
                        ],
                        "clientScript": null,
                        "conditional": null,
                        "declarativeAction": null,
                        "event": null,
                        "operation": {
                            "dataBrokerId": "5865e308432021105571609dc7b8f23b",
                            "operationName": "LIST_CTRL#NAV_ITEM_SELECTED",
                            "parentResourceId": "list_controller",
                            "payload": {
                                "container": {
                                    "isFirstNonRef": {
                                        "binding": {
                                            "address": [
                                                "isFirstNonRef"
                                            ]
                                        },
                                        "type": "EVENT_PAYLOAD_BINDING"
                                    },
                                    "nativeEvent": {
                                        "binding": {
                                            "address": [
                                                "nativeEvent"
                                            ]
                                        },
                                        "type": "EVENT_PAYLOAD_BINDING"
                                    },
                                    "route": {
                                        "type": "JSON_LITERAL",
                                        "value": "record"
                                    },
                                    "row": {
                                        "binding": {
                                            "address": [
                                                "row"
                                            ]
                                        },
                                        "type": "EVENT_PAYLOAD_BINDING"
                                    },
                                    "sys_id": {
                                        "binding": {
                                            "address": [
                                                "sys_id"
                                            ]
                                        },
                                        "type": "EVENT_PAYLOAD_BINDING"
                                    },
                                    "table": {
                                        "binding": {
                                            "address": [
                                                "table"
                                            ]
                                        },
                                        "type": "EVENT_PAYLOAD_BINDING"
                                    }
                                },
                                "type": "MAP_CONTAINER"
                            }
                        },
                        "targetId": "clmtghpyggaabbcaddbhhvmkgiijjjjddl",
                        "type": "DATABROKER_OP"
                    }
                ]
            },
            {
                "eventMappingId": "clnbbnjjoffiiaaccnpddbhhsffirbbcmbbf",
                "isConfiguration": false,
                "offRowStorageId": null,
                "sourceEventApiName": "sn_now_list_common.LIST_CTRL#CREATE_NEW_RECORD",
                "sourceEventCorrelationId": null,
                "sourceEventDefinition": {
                    "apiName": "sn_now_list_common.LIST_CTRL#CREATE_NEW_RECORD",
                    "id": null,
                    "type": "UXEVENT"
                },
                "sourceEventSysId": null,
                "targets": [
                    {
                        "broker": null,
                        "bundleLinks": [
                            {
                                "bundleInstanceId": "_1",
                                "elementType": "eventMappingTarget"
                            }
                        ],
                        "clientScript": null,
                        "conditional": null,
                        "declarativeAction": null,
                        "event": null,
                        "operation": {
                            "dataBrokerId": "5865e308432021105571609dc7b8f23b",
                            "operationName": "LIST_CTRL#NAV_ITEM_SELECTED",
                            "parentResourceId": "list_controller",
                            "payload": {
                                "container": {
                                    "external": {
                                        "binding": {
                                            "address": [
                                                "external"
                                            ]
                                        },
                                        "type": "EVENT_PAYLOAD_BINDING"
                                    },
                                    "fields": {
                                        "binding": {
                                            "address": [
                                                "fields"
                                            ]
                                        },
                                        "type": "EVENT_PAYLOAD_BINDING"
                                    },
                                    "multiInstField": "sysId",
                                    "params": {
                                        "binding": {
                                            "address": [
                                                "params"
                                            ]
                                        },
                                        "type": "EVENT_PAYLOAD_BINDING"
                                    },
                                    "passiveNavigation": {
                                        "binding": {
                                            "address": [
                                                "passiveNavigation"
                                            ]
                                        },
                                        "type": "EVENT_PAYLOAD_BINDING"
                                    },
                                    "redirect": {
                                        "binding": {
                                            "address": [
                                                "redirect"
                                            ]
                                        },
                                        "type": "EVENT_PAYLOAD_BINDING"
                                    },
                                    "route": {
                                        "binding": {
                                            "address": [
                                                "route"
                                            ]
                                        },
                                        "type": "EVENT_PAYLOAD_BINDING"
                                    },
                                    "title": {
                                        "binding": {
                                            "address": [
                                                "title"
                                            ]
                                        },
                                        "type": "EVENT_PAYLOAD_BINDING"
                                    }
                                },
                                "type": "MAP_CONTAINER"
                            }
                        },
                        "targetId": "clnbbnjjoffiiaaccnqddbhhscehheaddve",
                        "type": "DATABROKER_OP"
                    }
                ]
            }
        ],
        "inputValues": {
            "actionConfigId": {
                "binding": {
                    "address": [
                        "actionConfigId"
                    ],
                    "category": "app"
                },
                "type": "CONTEXT_BINDING"
            },
            "allRecordsSelected": {
                "type": "JSON_LITERAL",
                "value": false
            },
            "appId": {
                "binding": {
                    "address": [
                        "appId"
                    ],
                    "category": "app"
                },
                "type": "CONTEXT_BINDING"
            },
            "columnLimit": {
                "type": "JSON_LITERAL",
                "value": 0
            },
            "columnPreferenceKey": {
                "type": "JSON_LITERAL",
                "value": ""
            },
            "columns": null,
            "currentPage": {
                "type": "JSON_LITERAL",
                "value": 0
            },
            "enableCellFiltering": {
                "type": "JSON_LITERAL",
                "value": true
            },
            "enableColumnCalculations": {
                "type": "JSON_LITERAL",
                "value": true
            },
            "enableColumnFiltering": {
                "type": "JSON_LITERAL",
                "value": true
            },
            "enableColumnGrouping": {
                "type": "JSON_LITERAL",
                "value": true
            },
            "enableColumnSorting": {
                "type": "JSON_LITERAL",
                "value": true
            },
            "enableDeclarativeActions": {
                "type": "JSON_LITERAL",
                "value": false
            },
            "enableDotWalk": {
                "type": "JSON_LITERAL",
                "value": true
            },
            "enableInfiniteScroll": {
                "type": "JSON_LITERAL",
                "value": false
            },
            "enableLiveList": {
                "type": "JSON_LITERAL",
                "value": false
            },
            "enableQuickEdit": {
                "type": "JSON_LITERAL",
                "value": true
            },
            "enableQuickFormNavigation": {
                "type": "JSON_LITERAL",
                "value": true
            },
            "enableReferenceLinks": {
                "type": "JSON_LITERAL",
                "value": true
            },
            "enableRelatedHierarchy": {
                "type": "JSON_LITERAL",
                "value": false
            },
            "enforceViewRulesForQuickForm": {
                "type": "JSON_LITERAL",
                "value": true
            },
            "fetchHighlightedValues": {
                "type": "JSON_LITERAL",
                "value": true
            },
            "filter": null,
            "fixedFilter": {
                "binding": {
                    "address": [
                        "query"
                    ]
                },
                "type": "STATE_BINDING"
            },
            "fuzzyCounts": {
                "binding": {
                    "address": [
                        "fuzzyCount"
                    ],
                    "category": "app"
                },
                "type": "CONTEXT_BINDING"
            },
            "groupBy": null,
            "highlightedValueConfigId": {
                "binding": {
                    "address": [
                        "highlightedValueConfigId"
                    ],
                    "category": "app"
                },
                "type": "CONTEXT_BINDING"
            },
            "listControllerId": {
                "type": "JSON_LITERAL",
                "value": "b0e3Q47UoAk8I9ooFJ3qHaEyX"
            },
            "listId": {
                "type": "JSON_LITERAL",
                "value": ""
            },
            "listType": {
                "type": "JSON_LITERAL",
                "value": "default"
            },
            "liveUpdates": {
                "type": "JSON_LITERAL",
                "value": "off"
            },
            "nestBy": null,
            "onlyEnableSelectionWhenRequiredByActions": {
                "type": "JSON_LITERAL",
                "value": true
            },
            "pageSysId": {
                "binding": {
                    "address": [
                        "nowMacroponentSysId"
                    ],
                    "category": "props"
                },
                "type": "CONTEXT_BINDING"
            },
            "recordCountLimit": {
                "type": "JSON_LITERAL",
                "value": 2
            },
            "table": {
                "binding": {
                    "address": [
                        "table"
                    ],
                    "category": "props"
                },
                "type": "CONTEXT_BINDING"
            },
            "view": {
                "type": "JSON_LITERAL",
                "value": ""
            }
        },
        "readEvaluationMode": "EAGER"
    },
    {
        "definition": {
            "id": "65f74b4f939b92104d0a423b928918ed",
            "type": "TRANSFORM"
        },
        "elementId": "fetch_table_column_list",
        "elementLabel": "Fetch Table Column List",
        "eventMappings": [],
        "inputValues": {
            "tableName": {
                "binding": {
                    "address": [
                        "table"
                    ],
                    "category": "props"
                },
                "type": "CONTEXT_BINDING"
            }
        },
        "readEvaluationMode": "EAGER"
    },
    {
        "definition": {
            "id": "bae3ca80241583570c6be75c9b9a3d4e",
            "type": "TRANSFORM"
        },
        "elementId": "generateduplicatequery_1",
        "elementLabel": "generateDuplicateQuery 1",
        "eventMappings": [
            {
                "eventMappingId": "cckUdIPzKDkggWjjSsBteeddJhkenh",
                "isConfiguration": false,
                "offRowStorageId": null,
                "sourceEventApiName": "sn_uxf.DATA_FETCH_SUCCEEDED",
                "sourceEventCorrelationId": null,
                "sourceEventDefinition": {
                    "apiName": "sn_uxf.DATA_FETCH_SUCCEEDED",
                    "id": null,
                    "type": "UXEVENT"
                },
                "sourceEventSysId": null,
                "targets": [
                    {
                        "broker": null,
                        "clientScript": null,
                        "clientTransformScript": "",
                        "conditional": null,
                        "declarativeAction": null,
                        "event": {
                            "apiName": "sn_uxf.MACROPONENT_STATE_UPDATE_REQUESTED",
                            "payload": {
                                "container": {
                                    "propName": {
                                        "type": "JSON_LITERAL",
                                        "value": "query"
                                    },
                                    "value": {
                                        "binding": {
                                            "address": [
                                                "generateduplicatequery_1",
                                                "output"
                                            ]
                                        },
                                        "type": "DATA_OUTPUT_BINDING"
                                    }
                                },
                                "type": "MAP_CONTAINER"
                            },
                            "sysId": "32408b42ff7a10109046e490703bf176"
                        },
                        "interaction": null,
                        "operation": null,
                        "targetId": "YHlWdeehhjjFAkSmjjhhwBfoHwTQaaf",
                        "type": "EVENT"
                    }
                ]
            }
        ],
        "inputValues": {
            "fieldsArray": {
                "binding": {
                    "address": [
                        "fields"
                    ]
                },
                "type": "STATE_BINDING"
            },
            "initialQuery": {
                "binding": {
                    "address": [
                        "initialQuery"
                    ],
                    "category": "props"
                },
                "type": "CONTEXT_BINDING"
            },
            "tableName": {
                "binding": {
                    "address": [
                        "table"
                    ],
                    "category": "props"
                },
                "type": "CONTEXT_BINDING"
            }
        },
        "readEvaluationMode": "EXPLICIT"
    }
]`,
        disable_auto_reflow: 'false',
        extends: '19be392623033300f4b4c50947bf65ba',
        form_factors: `{
    "custom_ff_1": {
        "max-width": 640,
        "reference": "macroponent"
    }
}`,
        internal_event_mappings: '{}',
        keyboard_shortcuts: '{}',
        layout: `{
    "default": {
        "children": null,
        "isInline": null,
        "items": [
            {
                "element_id": "banner_container",
                "styles": {
                    "background": "linear-gradient(to right, rgba(var(--now-color--interactive-0)), rgba(var(--now-color_selection--primary-0)))",
                    "min-height": "188px",
                    "width": "100%"
                }
            },
            {
                "element_id": "page_body",
                "styles": {
                    "height": "100%",
                    "width": "100%"
                }
            }
        ],
        "root": null,
        "rules": null,
        "styles": {
            "background": "rgb(var(--now-color_background--secondary))",
            "flex-direction": "column",
            "height": "",
            "min-height": "100%",
            "width": "100%"
        },
        "templateId": "5832fd4d53c31010e6bcddeeff7b12db",
        "type": "flex"
    },
    "version": "3.0.0"
}`,
        name: 'Home',
        props: `[
    {
        "description": "",
        "fieldType": "string",
        "id": "VeehhajceehheehhnDkLajjYaaPeeQOeKhuw",
        "inherited": false,
        "label": "Table",
        "mandatory": false,
        "name": "table",
        "readOnly": false,
        "selectable": false,
        "typeMetadata": null,
        "valueType": "string"
    },
    {
        "description": "",
        "fieldType": "string",
        "id": "wEshhLvqiAaaiiaaeeddDQPIjfWffbbMa",
        "inherited": false,
        "label": "initialQuery",
        "mandatory": false,
        "name": "initialQuery",
        "readOnly": false,
        "selectable": false,
        "typeMetadata": null,
        "valueType": "string"
    }
]`,
        required_translations: `[ {
  "message" : "Duplicate Detector",
  "code" : "",
  "comment" : ""
}, {
  "message" : "Enter a label",
  "code" : "",
  "comment" : ""
}, {
  "message" : "Field(s)",
  "code" : "",
  "comment" : ""
}, {
  "message" : "Options",
  "code" : "",
  "comment" : ""
}, {
  "message" : "Run",
  "code" : "",
  "comment" : ""
}, {
  "message" : "Select the field or combination of fields that should be unique in your table.",
  "code" : "",
  "comment" : ""
}, {
  "message" : "Settings",
  "code" : "",
  "comment" : ""
} ]`,
        schema_version: '1.0.0',
        state_properties:
            '[{"description": null, "fieldType": "json", "initialValue": {"type": "JSON_LITERAL", "value": []}, "label": "Selected fields", "name": "fields", "shape": "", "valueType": "json"}, {"description": null, "fieldType": "string", "initialValue": {"type": "JSON_LITERAL", "value": null}, "label": "Duplicate encoded query", "name": "query", "shape": "", "valueType": "string"}, {"description": null, "fieldType": "json", "initialValue": {"type": "JSON_LITERAL", "value": []}, "label": "Raw selected fields", "name": "rawSelectedFields", "shape": "", "valueType": "json"}]',
        style_config: '{}',
    },
})
