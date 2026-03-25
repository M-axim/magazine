export default {
    mutations: {
        updateWarehouseSearchSetting(state, warehouseSearchSetting) {
            state.warehouseSearchSetting = warehouseSearchSetting
        },
        updateWarehouseSearchSettingCurrent(state, searchSettingCurrent) {
            state.warehouseSearchSettingCurrent = searchSettingCurrent
        },
        updateWarehouseDocumentName(state, documentName) {
            state.warehouseDocumentName = documentName
        },
        updateWarehouseCurrentTab(state, currentTab) {
            state.warehouseCurrentTab = currentTab
        },
        fullUpdateWarehouseSetting(state, [warehouseSearchSetting, documentTitle])
        {
            state.warehouseSearchSetting = warehouseSearchSetting
            state.warehouseSearchSettingCurrent = warehouseSearchSetting[0]
            state.warehouseDocumentName = documentTitle
        }
    },
    state: {
        warehouseSearchSetting: [],
        warehouseSearchSettingCurrent: {},
        warehouseDocumentName: "",
        warehouseCurrentTab: ""
    },
    getters: {
        warehouseSearchSetting(state) {
            return state.warehouseSearchSetting
        },
        warehouseSearchSettingCurrent(state) {
            return state.warehouseSearchSettingCurrent
        },
        warehouseDocumentName(state) {
            return state.warehouseDocumentName
        },
        warehouseCurrentTab(state) {
            return state.warehouseCurrentTab
        },
    }
}