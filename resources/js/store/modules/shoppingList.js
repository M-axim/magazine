export default {
    actions: {}, 
    mutations: {
        updateShoppingCart(state, goods) {

            if (goods)
            {
                state.tmpShoppingList = {
                    idGoods: goods.idGoods,
                    shoppingName: goods.title,
                    price: goods.price,
                    count: 1,
                    eanCode: goods.eanCode
                }

                let goodsInShoppingCart = false

                if (state.shoppingCart.length >= 1)
                {
                    state.shoppingCart.map( (elem, index) => {
                        if (elem.eanCode === state.tmpShoppingList.eanCode) {
                            elem.count += 1
                            goodsInShoppingCart = true
                        }
                    })
                }

                if (!goodsInShoppingCart)
                    state.shoppingCart.unshift(state.tmpShoppingList)
            }
        },
        removeGoodsShoppingCart(state, goods) {
            state.shoppingCart = state.shoppingCart.filter( (elem) => {
                if (elem.idGoods === goods.idGoods) {

                    if (elem.count > 1)
                        return elem.count -= 1
                    else 
                        return false
                }
                else {
                    return true
                }
            })
            this.commit("updateTotalPriceCart")
        },
        clearShoppingCart(state) {
            state.shoppingCart = []
        },
        updateTotalPriceCart(state) {
            state.totalPriceCart = (state.shoppingCart.reduce( (accum, curVal) => accum + (curVal.price * curVal.count), 0)).toFixed(2)
        }
    },
    state: {
        shoppingCart: [],
        tmpShoppingList: {
            idGoods: 1,
            shoppingName: "",
            price: 0,
            count: 1,
            eanCode: "0000000000000"
        },
        totalPriceCart: 0
    },
    getters: {
        shoppingCart(state) {
            return state.shoppingCart
        },
        totalPriceCart(state) {
            return state.totalPriceCart
        },
    }
}