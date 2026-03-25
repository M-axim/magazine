export default {
    actions: {
        async fetchEmployerList(ctx, filterSetting = null) {
            let employerList

            if (localStorage.getItem("employerList") && JSON.parse(localStorage.getItem("employerList")).length !== 0)
                employerList = JSON.parse(localStorage.getItem("employerList"))
            else {
                employerList = [
                    {
                        idEmployer: "1",
                        fullname: "Косарев Алексей Адамович",
                        tel: "+7 (970) 348-56-81",
                        position: "Администратор",
                        positionId: 1,
                        password: "admin",
                        status: "Работает",
                        statusId: 2,
                    },
                    {
                        idEmployer: "2",
                        fullname: "Мельникова Амира Арсентьевна",
                        tel: "+7 (982) 135-37-26",
                        position: "Кассир",
                        positionId: 2,
                        password: "cashier",
                        status: "Работает",
                        statusId: 2,
                    },
                    {
                        idEmployer: "3",
                        fullname: "Лавров Андрей Романович",
                        tel: "+7 (940) 651-85-76",
                        position: "Кладовщик",
                        positionId: 3,
                        password: "storekeeper",
                        status: "Работает",
                        statusId: 2,
                    },
                    {
                        idEmployer: "4",
                        fullname: "Комиссарова Алиса Львовна",
                        tel: "+7 (973) 570-73-58",
                        position: "Кассир",
                        positionId: 2,
                        password: "cashier",
                        status: "Работает",
                        statusId: 2,
                    },
                    {
                        idEmployer: "5",
                        fullname: "Ткачева Виктория Арсентьевна",
                        tel: "+7 (971) 501-10-46",
                        position: "Кассир",
                        positionId: 2,
                        password: "cashier",
                        status: "Уволен",
                        statusId: 1,
                    },
                ]
                localStorage.setItem('employerList', JSON.stringify(employerList));
            }

            if (filterSetting !== null && filterSetting.last === "null") {
                employerList = employerList.filter( item => item[filterSetting.type] === filterSetting.first)
            }
            else if (filterSetting !== null && filterSetting.last !== "null") {
                employerList = employerList.filter( item => item[filterSetting.type] >= filterSetting.first && item[filterSetting.type] <= filterSetting.last)
            }

            ctx.commit("updateEmployerList", employerList)
        }
    }, 
    mutations: {
        updateEmployerList(state, employerList) {
            state.employerList = employerList
        },
        updateEmployer(state, employer) {
            state.employerList[employer.idEmployer - 1] = employer
            this.commit("updateLocalStorage", state)
        },
        deleteEmployer(state, idEmployer) {
            state.employerList = state.employerList.filter( (elem) => elem.idEmployer !== idEmployer)
            this.commit("updateLocalStorage", state)
        },
        checkAuthorization(state, user) {
            let authorization = state.employerList.filter( (elem) => elem.idEmployer == user.idEmployer && elem.password === user.password)
            if (authorization.length > 0)
                this.commit("setAuthorization", {fullname: authorization[0].fullname, role: authorization[0].position, status: "success"})
            else
                this.commit("setAuthorization", {fullname: null, role: null, cashierName: "", status: "error"})
        },
        updateLocalStorage(state) {
            localStorage.setItem('employerList', JSON.stringify(state.employerList));
        },
        newEmployerItem(state, employer) {
            state.employerList.push(
            {
                idEmployer: state.employerList.length + 1,
                fullname: employer.fullname,
                tel: employer.tel,
                position: employer.position,
                positionId: employer.positionId,
                password: employer.password,
                status: employer.status,
                statusId: employer.statusId,
            })
            this.commit("updateLocalStorage", state)
        },
        getEmployerEdit(state, employerId) {
            state.employerEdit = state.employerList[employerId - 1]
        },
        setAuthorization(state, value) {
            state.authorization = value
        },
        resetEmployerEdit(state) {
            state.employerEdit = null
        }
    },
    state: {
        employerList: [],
        employerEdit: {},
        authorization: ""
    },
    getters: {
        employerList(state) {
            return state.employerList
        },
        employerEdit(state) {
            return state.employerEdit
        },
        authorization(state) {
            return state.authorization
        },
    }
}