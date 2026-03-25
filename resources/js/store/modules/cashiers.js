export default {
    actions: {
        async fetchCashierList(ctx) {
            let cashierList

            if (localStorage.getItem("cashierList") && JSON.parse(localStorage.getItem("cashierList")).length !== 0)
                cashierList = JSON.parse(localStorage.getItem("cashierList"))
            else {
                cashierList = [
                    {
                        cashierId: 1,
                        dateActivation: "22.08.2019 18:00",
                        dateLastActive: "22.05.2024 15:00",
                        status: 2
                    },
                    {
                        cashierId: 2,
                        dateActivation: "22.08.2019 18:00",
                        dateLastActive: "22.05.2024 15:00",
                        status: 2
                    },
                    {
                        cashierId: 3,
                        dateActivation: "22.08.2019 18:00",
                        dateLastActive: "22.05.2024 15:00",
                        status: 3
                    },
                    {
                        cashierId: 4,
                        dateActivation: "22.08.2019 18:00",
                        dateLastActive: "22.05.2024 15:00",
                        status: 4
                    },
                    {
                        cashierId: 5,
                        dateActivation: "22.08.2019 18:00",
                        dateLastActive: "22.05.2024 15:00",
                        status: 2
                    },
                ]
                localStorage.setItem('cashierList', JSON.stringify(cashierList));
            }        

            ctx.commit("updateCashierList", cashierList)
        }
    }, 
    mutations: {
        updateCashierList(state, cashierList) {
            state.cashierList = cashierList
        },
        updateCashier(state, cashier) {
            state.cashierList[cashier.cashierId - 1].status = cashier.status
            this.commit("updateLocalStorage", state)
        },
        updateTime(state, cashier) {
            let findId = state.cashierList.findIndex( (elem) => elem.cashierId == cashier.cashierId)
            console.log(findId);
            state.cashierList[findId].dateLastActive = cashier.time
            this.commit("updateLocalStorage", state)
        },
        deleteCashier(state, cashierId) {
            state.cashierList = state.cashierList.filter( (elem) => elem.cashierId !== cashierId)
            this.commit("updateLocalStorage", state)
        },
        updateLocalStorage(state) {
            localStorage.setItem('cashierList', JSON.stringify(state.cashierList));
        },
        newCashierList(state, cashierList) {
            state.cashierList.push(
            {
                cashierId: state.cashierList.length + 1,
                dateActivation: new Date().toLocaleString(),
                dateLastActive: "Никогда",
                status: 0
            })
            this.commit("updateLocalStorage", state)
        },
    },
    state: {
        cashierList: []
    },
    getters: {
        cashierList(state) {
            return state.cashierList
        },
    }
}