export default {
    actions: {
        async fetchWarehouseInventory(ctx, filterSetting = null) {
            let warehouseInventoryList = [
                {
                    idGoods: "0",
                    nameGoods: "Молоко",
                    idTypeGoods: "0",
                    typeGoods: "Молочная продукция",
                    idUnitGoods: "0",
                    unitGoods: "л.",
                    priceGoods: "40",
                    countGoods: "100",
                    summCountGoods: "4000",
                    eanCodeGoods: "3114127543821"
                },
                {
                    idGoods: "1",
                    nameGoods: "Конфеты 'Милка'",
                    idTypeGoods: "1",
                    typeGoods: "Конфеты",
                    idUnitGoods: "1",
                    unitGoods: "кг.",
                    priceGoods: "84",
                    countGoods: "250",
                    summCountGoods: "4000",
                    eanCodeGoods: "51144527571121"
                },
                {
                    idGoods: "2",
                    nameGoods: "Конфеты 'Ромашка'",
                    idTypeGoods: "1",
                    typeGoods: "Конфеты",
                    idUnitGoods: "1",
                    unitGoods: "кг.",
                    priceGoods: "120",
                    countGoods: "250",
                    summCountGoods: "4000",
                    eanCodeGoods: "51144527571121"
                },
            ]

            if (filterSetting !== null && filterSetting.last === "null") {
                warehouseInventoryList = warehouseInventoryList.filter( item => item[filterSetting.type] === filterSetting.first)
            }
            else if (filterSetting !== null && filterSetting.last !== "null") {
                warehouseInventoryList = warehouseInventoryList.filter( item => item[filterSetting.type] >= filterSetting.first && item[filterSetting.type] <= filterSetting.last)
            }
            ctx.commit("updateWarehouseInventory", warehouseInventoryList)
        }
    }, 
    mutations: {
        updateWarehouseInventory(state, warehouseInventoryList) {
            state.warehouseInventoryList = warehouseInventoryList
        },
    },
    state: {
        warehouseInventoryList: [],
    },
    getters: {
        warehouseInventoryList(state) {
            return state.warehouseInventoryList
        },
    }
}