export default {
    actions: {
        async fetchWarehouseEntrance(ctx, filterSetting = null) {
            let warehouseEntranceList

            if (localStorage.getItem("warehouseEntranceList") && JSON.parse(localStorage.getItem("warehouseEntranceList")).length !== 0)
                warehouseEntranceList = JSON.parse(localStorage.getItem("warehouseEntranceList"))
            else {
                warehouseEntranceList = [
                    {
                        idEntrance: 1,
                        dateEntrace: "2023-09-10",
                        provider: "ООО Василек",
                        employerId: 3,
                        summ: 1513,
                        countGoods: 1,
                        status: "Закрыт",
                        goods: [
                            {
                                idGoods: 1,
                                title: "халва домашняя",
                                description: "халва домашнаяя без красителей",
                                categoryGoodsType: "5",
                                eanCode: "9780201379624",
                                img: "https://via.placeholder.com/50x50",
                                count: 101,
                                unitMeasurement: "кг.",
                                price: "14.99",
                                weightGoods: false,
                                nds: 20,
                            },
                        ]
                    },
                ]
                localStorage.setItem('warehouseEntranceList', JSON.stringify(warehouseEntranceList));
            }

            if (filterSetting !== null && filterSetting.last === "null") {
                warehouseEntranceList = warehouseEntranceList.filter( item => item[filterSetting.type] === filterSetting.first)
            }
            else if (filterSetting !== null && filterSetting.last !== "null") {
                warehouseEntranceList = warehouseEntranceList.filter( item => item[filterSetting.type] >= filterSetting.first && item[filterSetting.type] <= filterSetting.last)
            }
            ctx.commit("updateWarehouseEntrance", warehouseEntranceList)
        }
    }, 
    mutations: {
        updateWarehouseEntrance(state, warehouseEntranceList) {
            state.warehouseEntranceList = warehouseEntranceList
        },
        updateWarehouseEntranceList(state, warehouseEntranceObject) {
            let findId = -1
            state.warehouseEntranceList.map( (elem, index) => {
                if (elem.idEntrance == warehouseEntranceObject.idEntrance) {
                    findId = index
                }
            })[0]
            state.warehouseEntranceList[findId] = warehouseEntranceObject
            this.commit("updateLocalStorage", state)
        },
        deleteWarehouseEntrance(state, id) {
            state.warehouseEntranceList = state.warehouseEntranceList.filter( (elem) => elem.idEntrance === id)
            this.commit("updateLocalStorage", state)
        },
        setWarehouseEntranceObjectGood(state, good) {
            state.warehouseEntranceObject.goods.push(good)
            let totalPrice = state.warehouseEntranceObject.goods.reduce( (sum, num) => { return sum + (num.count * num.price) }, 0)
            state.warehouseEntranceObject.summ = totalPrice
            state.warehouseEntranceObject.countGoods = state.warehouseEntranceObject.goods.length + 1
            this.commit("updateLocalStorage", state)
        },
        newWarehouseEntrance(state) {
            state.warehouseEntranceList.push(
            {
                idEntrance: state.warehouseEntranceList.length + 1,
                dateEntrace: "",
                provider: "",
                employerId: "",
                summ: 0,
                countGoods: 0,
                status: "Открыт",
                goods: []
            })
            this.commit("updateLocalStorage", state)
        },
        updateLocalStorage(state) {
            localStorage.setItem('warehouseEntranceList', JSON.stringify(state.warehouseEntranceList));
        },
        getWarehouseEntranceObject(state, id = null) {
            state.warehouseEntranceObject = state.warehouseEntranceList.filter( (elem) => elem.idEntrance == id)[0]
        }
    },
    state: {
        warehouseEntranceList: [],
        warehouseEntranceObject: {},
        warehouseEntranceEditId: "0"
    },
    getters: {
        warehouseEntranceList(state) {
            return state.warehouseEntranceList
        },
        warehouseEntranceObject(state) {
            return state.warehouseEntranceObject
        },
    }
}