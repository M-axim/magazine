<template lang="pug">
.d-flex.justify-content-center.align-items-center.align-self-center.vh-100
    form.w-25.p-3.border.border-primary.border-3.rounded.bg-light.bg-gradient
        h2.text-center Вход
        .mb-3
            v-inputSelect(v-bind:label="`Пользователь`" v-model:value="userId" v-bind:options="optionsList")
            p.fs-7.text-danger {{ userError }}
        .mb-3(v-if="cashierAccess()")
            v-inputSelect(v-bind:label="`Касса`" v-model:value="cashierId" v-bind:options="optionsCashierList")
            p.fs-7.text-danger {{ passwordError }}
        .mb-3
            label.form-label.w-100 Пароль
                input.form-control(type="password", :class="{'border': passwordError, 'border-danger': passwordError}" name="password" v-model="password" placeholder="******")
            p.fs-7.text-danger {{ passwordError }}
        .mb-3
            p.fs-7.text-danger {{ formError }}
            button.btn.btn-sm.btn-primary.w-100(@click="checkAuthorizationBtn()" type="button") Войти

.position-fixed.bottom-0.end-0.p-3(style='z-index: 11')
  .toast.show(role='alert' aria-live='assertive' aria-atomic='true')
    .toast-header
      strong.me-auto Подсказки
      button.btn-close(type='button' data-bs-dismiss='toast' aria-label='Close')
    .toast-body
        p.m-0 Для всех 
            strong кассиров 
            p пароль: 
                strong cashier
        p.m-0 Для всех 
            strong администраторов 
            p пароль: 
                strong admin
        p.m-0 Для всех 
            strong кладовщиков 
            p пароль: 
                strong storekeeper
</template>

<script>
import {mapGetters, mapActions, mapMutations} from "vuex"

export default {
    data() {
        return {
            optionsList: [],
            optionsCashierList: [],
            userId: "",
            userError: "",
            password: "",
            cashierId: "",
            cashierError: "",
            passwordError: "",
            formError: ""
        }
    },
    computed: {
        ...mapGetters(["employerList", "authorization", "cashierList"])
    },
    methods: {
        ...mapActions(["fetchEmployerList", "fetchCashierList"]),
        ...mapMutations(["checkAuthorization", "setAuthorization", "updateUser"]),

        clearParams() {
            this.userError = ""
            this.passwordError = ""
        },

        checkAuthorizationBtn() {
            this.clearParams()

            if (!this.cashierAccess())
                this.cashierId = -1

            if (this.userId == 0)
                this.userError = "Выберите пользователя"
            if (this.cashierId == 0)
                this.cashierError = "Выберите кассу"
            if (this.password === "" || this.password.length < 5)
                this.passwordError = "Пароль должен быть минимум 5 символов"

            if (this.userId !== 0 && this.cashierId !== 0 && this.password !== "" && this.password.length >= 5)
                this.checkAuthorization({idEmployer: this.userId, password: this.password, cashierName: this.cashierId})
        },

        cashierAccess() {
            let access = false
            this.employerList.map( (elem) => {
                if (elem.idEmployer === this.userId && elem.positionId !== 3) {
                    access = true
                }
            })
            return access
        }

    },
    async mounted() {
        this.fetchEmployerList()
        this.fetchCashierList()

        
        this.employerList.map( (elem) => {
            if (elem.status === "Работает") {
                this.optionsList.push({
                    value: elem.idEmployer,
                    text: elem.fullname
                })
            }
        })

        this.optionsList.unshift({
            value: 0,
            text: "Выберите пользователя"
        })
        
        this.cashierList.map( (elem) => {
            if (elem.status === 2) {
                this.optionsCashierList.push({
                    value: elem.cashierId,
                    text: "Касса " + elem.cashierId
                })
            }
        })

        this.optionsCashierList.unshift({
            value: 0,
            text: "Выберите кассу"
        })
    },
    watch: {
        authorization: function() {
            if (this.authorization.status === "success") {
                if (!this.cashierAccess())
                    this.cashierId = -1
                this.updateUser({id: this.userId, name: this.authorization.fullname, role: this.authorization.role, cashierName: this.cashierId})
                this.$router.push({ name: 'Home'})
            } else if (this.authorization.status === "error") {
                this.formError = "Ошибка авторизации, попробуйте еще раз"
            }
        },
        userId: function() {
            this.cashierAccess()
        }
    }
}
</script>

<style lang="scss" scoped>
.fs-7 {
    font-size: .8rem;
}
</style>