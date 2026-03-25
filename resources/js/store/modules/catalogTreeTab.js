export default {
    actions: {
        async fetchCatalogTreeTab(ctx) {
            let catalogTab = [ 
                {
                    id: "1",
                    label: "Товары",
                    nodes: [
                        {
                            id: "2",
                            label: "Консервы",
                        },
                        {
                            id: "3",
                            label: "Хлебобулочные изделия"
                        },
                        {
                            id: "4",
                            label: "Вода и напитки"
                        },
                        {
                            id: "5",
                            label: "Сахар и кондитерские изделия"
                        },
                        {
                            id: "6",
                            label: "Молоко и молочная продукция"
                        },
                        {
                            id: "7",
                            label: "Алкогольная продукция"
                        },
                        {
                            id: "8",
                            label: "Мясо и мясопродукты"
                        },
                        {
                            id: "9",
                            label: "Рыба и морепродукты"
                        },
                        {
                            id: "10",
                            label: "Масло растительное и другие жиры"
                        },
                        {
                            id: "11",
                            label: "Фрукты и ягоды"
                        },
                        {
                            id: "12",
                            label: "Овощи и бахчевые"
                        },
                        {
                            id: "13",
                            label: "Картофель"
                        },
                    ]
                }
            ]


            ctx.commit("updateCatalogTreeTab", catalogTab)
        }
    }, 
    mutations: {
        updateCatalogTreeTab(state, catalogTab) {
            state.catalogTab = catalogTab
        },
        updateLocalStorage(state) {
            localStorage.setItem('catalogTab', JSON.stringify(state.catalogTab));
        },
    },
    state: {
        catalogTab: [],
    },
    getters: {
        catalogTab(state) {
            return state.catalogTab
        }
    }
}