export default {
    actions: {
        async fetchGoodsList(ctx, filterLine = null) {
            // let goodsList = [
            //     {
            //         id: 1,
            //         title: "халва домашняя",
            //         description: "халва домашнаяя без красителей",
            //         price: 59,
            //         count: 4,
            //         img: "https://via.placeholder.com/50x50",
            //         eanCode: "9780201379624"
            //     },
            //     {
            //         id: 2,
            //         title: "молоко овсяное",
            //         description: "молоко овсянное, без глюкозы и лактозы",
            //         price: 129,
            //         count: 8,
            //         img: "https://via.placeholder.com/50x50",
            //         eanCode: "9843701379621"
            //     },
            //     {
            //         id: 3,
            //         title: "вода питьевая",
            //         description: "вода питьевая, забалкайская",
            //         price: 29.99,
            //         count: 12,
            //         img: "https://via.placeholder.com/50x50",
            //         eanCode: "4602441017485"
            //     },
            //     {
            //         id: 4,
            //         title: "мороженое пломбир",
            //         description: "пломбир в апельсиновой соке",
            //         price: 99,
            //         count: 13,
            //         img: "https://via.placeholder.com/50x50",
            //         eanCode: "9849471379625"
            //     },
            //     {
            //         id: 5,
            //         title: "дезодорант от пота",
            //         description: "защищает от пота и запахов на 24 часа",
            //         price: 129,
            //         count: 10,
            //         img: "https://via.placeholder.com/50x50",
            //         eanCode: "9849471361613"
            //     },
            //     {
            //         id: 6,
            //         title: "тарелка пластиковая",
            //         description: "пластиковая тарелка для одноразового использования",
            //         price: 17,
            //         count: 27,
            //         img: "https://via.placeholder.com/50x50",
            //         eanCode: "7841471361619"
            //     },
            //     {
            //         id: 7,
            //         title: "хлеб деревенский",
            //         description: "деревенский хлеб, свежевыпяченный",
            //         price: 37,
            //         count: 13,
            //         img: "https://via.placeholder.com/50x50",
            //         eanCode: "3307936724121"
            //     },
            //     {
            //         id: 8,
            //         title: "батон молочный",
            //         description: "батон молочный, из белой муки",
            //         price: 24.50,
            //         count: 7,
            //         img: "https://via.placeholder.com/50x50",
            //         eanCode: "7265261455379"
            //     },
            //     {
            //         id: 9,
            //         title: "булочка пикантная",
            //         description: "булочка пикантная местного производства",
            //         price: 19.99,
            //         count: 10,
            //         img: "https://via.placeholder.com/50x50",
            //         eanCode: "3442379393197"
            //     },
            // ]

            // if (filterLine !== null) {

            //     if (filterLine.length === 13 && parseInt(filterLine) !== NaN) {
            //         goodsList = goodsList.filter(god => god.eanCode === filterLine)
            //     }
            //     else {
            //         filterLine = filterLine.toLowerCase()
            //         goodsList = goodsList.filter(god => filterLine.split('').every(ch => {
            //             return god.title.includes(ch) || god.description.includes(ch) || god.eanCode.includes(ch)
            //         }))
            //     }
            // }
            // ctx.commit("updateGoodsList", goodsList)
        }
    }, 
    mutations: {
        // updateGoodsList(state, goodsList) {
        //     state.goodsList = goodsList
        // },
        // updateActiveCard(state, activeCard) {
        //     state.activeCard = activeCard
        // },
        // getGoods(state, {value, type = "id"}) {
        //     console.log(value);
        //     state.goods = state.goodsList.find( (e) => e[type] === value)
        //     console.log(state.goods);
        // }
    },
    state: {
        // goodsList: [],
        // goods: {},
        // activeCard: -1
    },
    getters: {
        // goodsList(state) {
        //     return state.goodsList
        // },
        // activeCard(state) {
        //     return state.activeCard
        // },
        // goods(state) {
        //     return state.goods
        // },
    }
}