<template lang="pug">
.ToastNewEmployer
    .toast#newEmployer.w-75.m-auto.bg-light(role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false" tabindex="-1")
        .toast-body.toast-overflow
            form.row.g-3.w-100
                .col-12.col-md-4
                    label.form-label.w-100 ФИО
                        input.form-control(type="text", name="fullname" v-model="fullname" placeholder="ФИО")
                    .invalid-feedback Необходимо ввести ФИО сотрудника
                .col-12.col-md-4
                    label.form-label.w-100 Телефон
                        input.form-control(type="tel", name="tex" v-model="tel" placeholder="79997314941")
                    .invalid-feedback Необходимо ввести телефон сотрудника
                .col-12.col-md-4
                    v-inputSelect(v-bind:label="`Должность`" v-model:value="positionId" v-bind:rating="Number(positionId)" v-bind:options="positionList")
                .col-12.col-md-4
                    label.form-label.w-100 Пароль
                        input.form-control(type="password", name="password" v-model="password" placeholder="******")
                    .invalid-feedback Необходимо ввести телефон сотрудника
                .col-12.col-md-4
                    v-inputSelect(v-bind:label="`Статус`"  v-model:value="statusId" v-bind:rating="Number(statusId)" v-bind:options="statusList")

        .toast-footer.p-2.m-auto.d-flex.justify-content-end
            button.btn.btn-outline-secondary.me-2(type="button" @click="clearParams()" data-bs-dismiss="toast") Выйти
            button.btn.btn-outline-secondary.me-2(type="button" @click="newEmployer(), clearParams()" data-bs-dismiss="toast") Сохранить
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'


export default
{
    data() {
        return {
            idEmployer: null,
            fullname: "",
            tel: "",
            position: "",
            positionId: "",
            password: "",
            status: "",
            statusId: "",
            positionList: [
                {
                    value: 0,
                    text: "Выберите должность"
                },
                {
                    value: 1,
                    text: "Администратор"
                },
                {
                    value: 2,
                    text: "Кладовщик"
                },
                {
                    value: 3,
                    text: "Кассир"
                }
            ],
            statusList: [
                {
                    value: 0,
                    text: "Выберите статус"
                },
                {
                    value: 1,
                    text: "Уволен"
                },
                {
                    value: 2,
                    text: "Работает"
                },
                {
                    value: 3,
                    text: "В отпуске"
                }
            ],
        }
    },
    components: {
        
    },
    computed: {
        ...mapGetters(["employerEdit"])
    },
    methods: {
        ...mapMutations(["updateEmployer", "newEmployerItem"]),
        clearParams() {
            this.idEmployer = null
            this.fullname = ""
            this.tel = ""
            this.position = ""
            this.positionId = ""
            this.password = ""
            this.status = ""
            this.statusId = ""
        },
        newEmployer() {
            let empEmployer = {
                idEmployer: this.idEmployer,
                fullname: this.fullname,
                tel: this.tel,
                position: this.positionList[this.positionId].text,
                positionId: this.positionId,
                password: this.password,
                status: this.statusList[this.statusId].text,
                statusId: this.statusId,
            }

            if (this.idEmployer === null)
                this.newEmployerItem(empEmployer)
            else
                this.updateEmployer(empEmployer)

        }
    },
    async mounted() {
        //this.fetchGodsList()
    },
    watch: {
        employerEdit: function() {
            if (this.employerEdit === null) {
                this.clearParams()
            } else {
                this.idEmployer = this.employerEdit["idEmployer"]
                this.fullname =  this.employerEdit["fullname"]
                this.tel = this.employerEdit["tel"]
                this.position = this.employerEdit["position"]
                this.positionId = this.employerEdit["positionId"]
                this.password =this.employerEdit["password"]
                this.status = this.employerEdit["status"]
                this.statusId = this.employerEdit["statusId"]
            }

        },
    },
}
</script>

<style lang="scss" scoped>
.toast-overflow {
    height: 250px;
    overflow-x: hidden;
    overflow-y: auto;
}

.good-col:hover {
    top: 5px;
}
</style>
