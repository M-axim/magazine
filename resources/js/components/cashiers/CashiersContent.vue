<template lang="pug">
#cashier.h-100.overflow-auto
    .cashier-setting.m-3
        button.btn.btn-primary.me-2(@click="newCashierList()" type="button") Новая касса
    .cashier-cols.m-sm-3
        .row.row-cols-1.row-cols-md-4.g-2
            .col(v-for="(elem, index) in cashierList" :key="index")
                .card.h-100
                    .card-header.p-2 Касса {{ elem.cashierId }}
                    .card-body.p-2
                        .card-list.row
                            .row
                                p.card-text.col-sm-6.fs-7 Дата активации:
                                p.card-text.col-sm-6.fs-7.text-end {{ elem.dateActivation}}
                            .row
                                p.card-text.col-sm-6.fs-7 Была в сети:
                                p.card-text.col-sm-6.fs-7.text-end {{ elem.dateLastActive}}
                            .row
                                p.card-text.col-sm-5.fs-7.mb-0 Статус:
                                select.col-sm-7.form-select-sm.p-0(@change="updateCashier({cashierId : elem.cashierId, status : Number($event.target.value)})")
                                    option(v-for="(option, optionIndex) in cashierStatusList"
                                    :key="optionIndex"
                                    :value="option.value"
                                    :selected="option.value === elem.status") {{ option.text }}
                    .card-footer.w-100.p-2
                        button.btn.btn-danger.btn-sm.w-100.mt-2(@click="deleteCashier(elem.cashierId)") Удалить

</template>

<script>
import {mapGetters, mapActions, mapMutations} from "vuex"
export default {
    components: {
    },
    data() {
        return {
            cashierStatusList: [
                {
                    value: 0,
                    text: "Не назначено",
                },
                {
                    value: 1,
                    text: "На обслуживании",
                },
                {
                    value: 2,
                    text: "В сети",
                },
                {
                    value: 3,
                    text: "Оффлайн",
                },
                {
                    value: 4,
                    text: "Не активна",
                }
            ],
            cashierStatus: ""
        }
    },
    computed: {
        ...mapGetters(["cashierList"]),
    },
    methods: {
        ...mapActions(["fetchCashierList"]),
        ...mapMutations(["newCashierList", "updateCashier", "deleteCashier"]),
        updateCashie(setting) {
            console.log(setting);
        }
    },
    async mounted() {
        this.fetchCashierList()
    },
    watch: {
        cashierStatus: function() {
            this.updateCashier({})
        }
    },
}
</script>

<style lang="scss" scoped>
.fs-7 {
    font-size: 0.8rem;
}
</style>