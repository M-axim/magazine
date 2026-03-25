export default {
    actions: {
        async fetchWarehouseDocument(ctx, filterSetting = null) {
            let warehouseDocumentList = []

            if (localStorage.getItem("warehouseDocumentList") && JSON.parse(localStorage.getItem("warehouseDocumentList")).length !== 0)    
                warehouseDocumentList = JSON.parse(localStorage.getItem("warehouseDocumentList"))
            else {
                warehouseDocumentList = [
                    {
                        idDocument: "1",
                        idEntrance: "1",
                        date: "2024-05-04",
                        typeDocument: "Приходная накладная",
                        typeDocumentName: "receiptInvoice"
                    },
                    {
                        idDocument: "2",
                        idEntrance: "1",
                        date: "2024-05-04",
                        typeDocument: "ТОРГ-12",
                        typeDocumentName: "torg12"
                    }
                ]
                localStorage.setItem('updateLocalStorage', JSON.stringify(warehouseDocumentList));

            }
            
            if (filterSetting !== null && filterSetting.last === "null") {
                warehouseDocumentList = warehouseDocumentList.filter( item => item[filterSetting.type] === filterSetting.first)
            }
            else if (filterSetting !== null && filterSetting.last !== "null") {
                warehouseDocumentList = warehouseDocumentList.filter( item => item[filterSetting.type] >= filterSetting.first && item[filterSetting.type] <= filterSetting.last)
            }
            ctx.commit("updateWarehouseDocument", warehouseDocumentList)
        }
    }, 
    mutations: {
        updateWarehouseDocument(state, warehouseDocumentList) {
            state.warehouseDocumentList = warehouseDocumentList
        },
        updateLocalStorage(state) {
            localStorage.setItem('warehouseDocumentList', JSON.stringify(state.warehouseDocumentList));
        },
        newWarehouseDocument(state, warehouseDocument) {
            state.warehouseDocumentList.push(
            {
                idDocument: state.warehouseDocumentList.length + 1,
                idEntrance: warehouseDocument.idEntrance,
                date: warehouseDocument.date,
                typeDocument: warehouseDocument.typeDocument,
                typeDocumentName: warehouseDocument.typeDocumentName
            })
            this.commit("updateLocalStorage", state)
        }
    },
    state: {
        warehouseDocumentList: [],
    },
    getters: {
        warehouseDocumentList(state) {
            return state.warehouseDocumentList
        },
    }
}