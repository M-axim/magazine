export default {
    actions: {
        async fetchChecksList(ctx) {
            let checksList

            if (localStorage.getItem("checksList") && JSON.parse(localStorage.getItem("checksList")).length !== 0)
                checksList = JSON.parse(localStorage.getItem("checksList"))
            else {
                checksList = []
                localStorage.setItem('checksList', JSON.stringify(checksList));
            }        

            ctx.commit("updateChecksList", checksList)
        }
    }, 
    mutations: {
        updateChecksList(state, checksList) {
            state.checksList = checksList
        },
        deleteChecks(state, checksId) {
            state.checksList = state.checksList.filter( (elem) => elem.checksId !== checksId)
            this.commit("updateLocalStorage", state)
        },
        updateLocalStorage(state) {
            localStorage.setItem('checksList', JSON.stringify(state.checksList));
        },
        getCheckItem(state, id) {
            state.checksItem = state.checksList.filter( (elem) => elem.checksId == id)[0]
        },
        newChecksList(state, check) {
            state.checksList.push(
            {
                checksId: state.checksList.length + 1,
                cashierName: check.name,
                date: new Date().toLocaleString(),
                goods: check.goods
            })
            this.commit("updateLocalStorage", state)
        },
    },
    state: {
        checksList: [],
        checksItem: {}
    },
    getters: {
        checksList(state) {
            return state.checksList
        },
        checksItem(state) {
            return state.checksItem
        },
    }
}