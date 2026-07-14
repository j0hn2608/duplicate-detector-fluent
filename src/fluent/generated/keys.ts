import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    '0418037899938385cd6d0509e89651c7': {
                        table: 'sys_script_include'
                        id: '0418037899938385cd6d0509e89651c7'
                    }
                    '1131d47a920e0c440da832a5ab767d42': {
                        table: 'sys_ui_interaction'
                        id: '1131d47a920e0c440da832a5ab767d42'
                    }
                    '274b9a5a7d968e906c5df6a24bf8566e': {
                        table: 'sys_ux_screen'
                        id: '274b9a5a7d968e906c5df6a24bf8566e'
                    }
                    '4da806525b064d07422941250fdc17b0': {
                        table: 'sys_declarative_action_assignment'
                        id: '4da806525b064d07422941250fdc17b0'
                    }
                    '5a7a74c8d0a7fdd54bf926b291de5444': {
                        table: 'sys_ux_macroponent'
                        id: '5a7a74c8d0a7fdd54bf926b291de5444'
                    }
                    '805a07497b1e85a62d00832a45b0a62e': {
                        table: 'sys_ux_page_registry'
                        id: '805a07497b1e85a62d00832a45b0a62e'
                    }
                    '8210f1c49af8331b92d33a087d7181fb': {
                        table: 'sys_ux_app_config'
                        id: '8210f1c49af8331b92d33a087d7181fb'
                    }
                    '890034a0458fa130237f853cfdd83de2': {
                        table: 'sys_ux_page_property'
                        id: '890034a0458fa130237f853cfdd83de2'
                    }
                    '91419679f83ef05e84c3652d93f1a529': {
                        table: 'sys_ux_app_route'
                        id: '91419679f83ef05e84c3652d93f1a529'
                    }
                    '9cde4e0059fc43a0839b9774d9028e45': {
                        table: 'sys_ux_client_script'
                        id: '9cde4e0059fc43a0839b9774d9028e45'
                    }
                    ad74fca000540fc64f065ec6fb3d780c: {
                        table: 'sys_security_acl'
                        id: 'ad74fca000540fc64f065ec6fb3d780c'
                    }
                    bae3ca80241583570c6be75c9b9a3d4e: {
                        table: 'sys_ux_data_broker_transform'
                        id: 'bae3ca80241583570c6be75c9b9a3d4e'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: '3a809e5e4b71498e8e5a669c4841b7ad'
                    }
                    e033613c309ac99fa9b2826aaeddf4e1: {
                        table: 'sys_ux_page_property'
                        id: 'e033613c309ac99fa9b2826aaeddf4e1'
                    }
                    ecfd345b4be0c8758fe938066c877ccb: {
                        table: 'sys_ux_client_script'
                        id: 'ecfd345b4be0c8758fe938066c877ccb'
                    }
                    f8979af59cbd296da05355b9cb261171: {
                        table: 'sys_ux_screen_type'
                        id: 'f8979af59cbd296da05355b9cb261171'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '12bb25ee09874052bc7f02b874c041b4'
                    }
                }
                composite: [
                    {
                        table: 'sys_security_acl_role'
                        id: '3452b44582b8ec55cc43eeb5a0944060'
                        key: {
                            sys_security_acl: 'ad74fca000540fc64f065ec6fb3d780c'
                            sys_user_role: {
                                id: '81518b6a59a68731d1fcaa886657868e'
                                key: {
                                    name: 'x_916323_duplicate.duplicate_viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '81518b6a59a68731d1fcaa886657868e'
                        key: {
                            name: 'x_916323_duplicate.duplicate_viewer'
                        }
                    },
                ]
            }
        }
    }
}
