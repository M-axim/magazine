export default {
    actions: {
        async fetchCatalogTreeGoods(ctx, {categoryGoods = "1", filterSetting = null, filterLine = null}) {
            let catalogGoodsList

            if (localStorage.getItem("catalogGoodsList") && JSON.parse(localStorage.getItem("catalogGoodsList")).length !== 0)
                catalogGoodsList = JSON.parse(localStorage.getItem("catalogGoodsList"))
            else {
                catalogGoodsList = [
                    // {
                        // goods: [
                            {
                                idGoods: 1,
                                title: "халва домашняя",
                                description: "халва домашнаяя без красителей",
                                categoryGoodsType: "5",
                                eanCode: "9780201379624",
                                img: "https://via.placeholder.com/50x50",
                                count: 101,
                                unitMeasurement: "л.",
                                price: "14.99",
                                weightGoods: false,
                                nds: 20,
                            },
                            {
                                idGoods: 2,
                                title: "молоко овсяное",
                                description: "молоко овсянное, без глюкозы и лактозы",
                                categoryGoodsType: "6",
                                eanCode: "9843701379621",
                                img: "https://via.placeholder.com/50x50",
                                count: 59,
                                unitMeasurement: "шт.",
                                price: "129",
                                weightGoods: false,
                                nds: 20,
                            },
                            {
                                idGoods: 3,
                                title: "вода питьевая",
                                description: "вода питьевая, забалкайская",
                                categoryGoodsType: "4",
                                eanCode: "4602441017485",
                                img: "https://via.placeholder.com/50x50",
                                count: 89,
                                unitMeasurement: "шт.",
                                price: "29.99",
                                weightGoods: false,
                                nds: 20,
                            },
                            {
                                idGoods: 4,
                                title: "мороженое пломбир",
                                description: "пломбир в апельсиновой соке",
                                categoryGoodsType: "6",
                                eanCode: "9849471379625",
                                img: "https://via.placeholder.com/50x50",
                                count: 210,
                                unitMeasurement: "шт.",
                                price: "49.99",
                                weightGoods: false,
                                nds: 20,
                            },
                            {
                                idGoods: 5,
                                title: "хлеб деревенский",
                                description: "деревенский хлеб, свежевыпяченный",
                                categoryGoodsType: "3",
                                eanCode: "3307936724121",
                                img: "https://via.placeholder.com/50x50",
                                count: 67,
                                unitMeasurement: "шт.",
                                price: "49.99",
                                weightGoods: false,
                                nds: 20,
                            },
                            {
                                idGoods: 6,
                                title: "батон молочный",
                                description: "батон молочный, из белой муки",
                                categoryGoodsType: "3",
                                eanCode: "7265261455379",
                                img: "https://via.placeholder.com/50x50",
                                count: 37,
                                unitMeasurement: "шт.",
                                price: "24.99",
                                weightGoods: false,
                                nds: 20,
                            },
                            {
                                idGoods: 7,
                                title: "Крупные шпроты",
                                description: "Консервы рыбные Шпроты в масле крупные Вкусные",
                                categoryGoodsType: "2",
                                eanCode: "4750010502020",
                                img: "https://via.placeholder.com/50x50",
                                count: 61,
                                unitMeasurement: "шт.",
                                price: "124.99",
                                weightGoods: false,
                                nds: 20,
                            },
                            {
                                idGoods: 8,
                                title: "Чай 'липтон'",
                                description: "Чай 'липтон' с яблоком и шиповником",
                                categoryGoodsType: "4",
                                eanCode: "4607051159365",
                                img: "https://via.placeholder.com/50x50",
                                count: 29,
                                unitMeasurement: "шт.",
                                price: "259.99",
                                weightGoods: false,
                                nds: 20,
                            },
                        // ]
                    // },
                    // {
                    //     categoryGoodsType: "2",
                    //     goods: [
                    //         {
                    //             idGoods: "1",
                    //             goodsName: "Семга",
                    //             price: "21.99",
                    //             count: "79"
                    //         },
                    //         {
                    //             idGoods: "2",
                    //             goodsName: "Шпиг",
                    //             price: "49.99",
                    //             count: "41"
                    //         },
                    //         {
                    //             idGoods: "3",
                    //             goodsName: "Тушенка свиная",
                    //             price: "29.99",
                    //             count: "59"
                    //         },
                    //     ]
                    // },
                    // {
                    //     categoryGoodsType: "3",
                    //     goods: [
                    //         {
                    //             idGoods: "1",
                    //             goodsName: "Булочка с маком",
                    //             price: "14.99",
                    //             count: "101"
                    //         },
                    //         {
                    //             idGoods: "2",
                    //             goodsName: "Батон молочный",
                    //             price: "19.99",
                    //             count: "49"
                    //         },
                    //         {
                    //             idGoods: "3",
                    //             goodsName: "Хлеб урожайный",
                    //             price: "39.00",
                    //             count: "29"
                    //         },
                    //     ]
                    // },
                    // {
                    //     categoryGoodsType: "4",
                    //     goods: [
                    //         {
                    //             idGoods: "1",
                    //             goodsName: "Лимонад с мандарином",
                    //             price: "39.99",
                    //             count: "23"
                    //         },
                    //         {
                    //             idGoods: "2",
                    //             goodsName: "Лимонад 'Буратино'",
                    //             price: "29.99",
                    //             count: "39"
                    //         },
                    //     ]
                    // },
                ]
                localStorage.setItem('catalogGoodsList', JSON.stringify(catalogGoodsList));
            }

            if (filterLine !== null) {

                if (filterLine.length === 13 && parseInt(filterLine) !== NaN) {
                    catalogGoodsList = catalogGoodsList.filter(catalogGoods => catalogGoods.eanCode === filterLine)
                }
                else {
                    filterLine = filterLine.toLowerCase()
                    catalogGoodsList = catalogGoodsList.filter(catalogGoods => filterLine.split('').every(ch => {
                        return catalogGoods.title.includes(ch) || catalogGoods.description.includes(ch) || catalogGoods.eanCode.includes(ch)
                    }))
                }
            } else {
                if (categoryGoods !== "1")
                    catalogGoodsList = catalogGoodsList.filter( (elem) => elem.categoryGoodsType === categoryGoods)

                if (filterSetting !== null && filterSetting !== "") {
                    catalogGoodsList = catalogGoodsList.filter(item => filterSetting.split().every(l => item.title.includes(l)))
                }
            }

            ctx.commit("updateCatalogGoodsList", catalogGoodsList)
        }
    }, 
    mutations: {
        updateCatalogGoodsList(state, goodsList) {
            state.catalogGoodsList = goodsList
        },
        updateSelectCategoryGoods(state, categoryGoods) {
            state.selectCategoryGoods = categoryGoods
        },
        updateLocalStorage(state) {
            localStorage.setItem('catalogGoodsList', JSON.stringify(state.catalogGoodsList));
        },
        updateActiveCard(state, activeCard) {
            state.activeCard = activeCard
        },
        updateCountGoods(state, {obj = [], operation = "", select = false}) {

            obj.map( (goodsObject, goodsIndex) => {
                let findId = -1
                state.catalogGoodsList.map( (elem, index) => {
                    if (elem.idGoods == goodsObject.idGoods) {
                        findId = index
                    }
                })

                if (findId !== -1) {
                    switch(operation) {
                        case "+":
                            state.catalogGoodsList[findId].count += goodsObject.count
                            break;
                        case "-":
                            state.catalogGoodsList[findId].count -= select === true ? 1 : goodsObject.count
                            break;
                    }
                    this.commit("updateLocalStorage", state)
                }

            })
        },
        subtractCountGoods(state, obj) {
            obj.map( (goodsObject, goodsIndex) => {
                let findId = -1
                state.catalogGoodsList.map( (elem, index) => {
                    if (elem.idGoods == goodsObject.id) {
                        findId = index
                    }
                })

                if (findId !== -1) {
                    state.catalogGoodsList[findId].count -= goodsObject.count
                    this.commit("updateLocalStorage", state)
                }

            })
        },
        getGoods(state, {value, type = "idGoods"}) {
            // Исправить проблему со штрихкодом
            state.catalogGood = state.catalogGoodsList.find( (e) => e[type] === value)
        },
        newCatalogGoods(state, goods) {
            state.catalogGoodsList.push(
            {
                idGoods: state.catalogGoodsList.length + 1,
                title: goods.title,
                description: goods.description,
                categoryGoodsType: goods.categoryGoodsType,
                eanCode: goods.eanCode,
                img: "https://via.placeholder.com/50x50",
                categoryGoodsType: goods.categoryGoodsType,
                eanCode: goods.eanCode,
                count: goods.count,
                unitMeasurement: goods.unitMeasurement,
                price: goods.price,
                weightGoods: goods.weightGoods,
                nds: goods.nds,
            })
            this.commit("updateLocalStorage", state)
        },
        updateCatalogGoods(state, goods) {
            state.catalogGoodsList[goods.idGoods - 1] = goods
            this.commit("updateLocalStorage", state)
        },
        getCatalogGood(state, filter) {
            state.catalogGood = state.catalogGoodsList.filter( (elem) => elem.idGoods == filter.idGoods)[0]
        },
        setCatalogGoodsEdit(state, value) {
            state.catalogGoodsEdit = value
        }
    },
    state: {
        catalogGoodsList: [],
        catalogGood: {},
        selectCategoryGoods: "1",
        catalogGoodsEdit: null,
        activeCard: -1,
    },
    getters: {
        catalogGoodsList(state) {
            return state.catalogGoodsList
        },
        catalogGoodsEdit(state) {
            return state.catalogGoodsEdit
        },
        selectCategoryGoods(state) {
            return state.selectCategoryGoods
        },
        activeCard(state) {
            return state.activeCard
        },
        catalogGood(state) {
            return state.catalogGood
        },
    }
}