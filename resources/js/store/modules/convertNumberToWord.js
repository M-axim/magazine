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
        },
        convert_millions(num) {
            if (num >= 1000000) {
              return convert_millions(Math.floor(num / 1000000)) + " million " + convert_thousands(num % 1000000);
            } else {
              return convert_thousands(num);
            }
        },
        convert_thousands(num) {
            if (num >= 1000) {
              return convert_hundreds(Math.floor(num / 1000)) + " thousand " + convert_hundreds(num % 1000);
            } else {
              return convert_hundreds(num);
            }
        },
        convert_hundreds(num) {
            if (num > 99) {
              return ones[Math.floor(num / 100)] + " hundred " + convert_tens(num % 100);
            } else {
              return convert_tens(num);
            }
        },
        convert_tens(num) {
            if (num < 10) return ones[num];
            else if (num >= 10 && num < 20) return teens[num - 10];
            else {
              return tens[Math.floor(num / 10)] + " " + ones[num % 10];
            }
        }
    },
    state: {
        shoppingCart: [],
        ones: ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'],
        tens: ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'],
        teens: ['десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'Шестнадцать', 'Семнадцать', 'Восемнадцать', 'Девятнадцать'],


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