<template lang="pug">
.newCheck
    .toast#newCheck.w-75.m-auto.bg-light(role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false" tabindex="-1")
        .toast-body
            .warehouse-table.table-responsive-lg.overflow-scroll.mt-2.toast-overflow.scroll
                table.table.table-striped.table-hover.table-bordered.border-primary.table-success#table-check-inventory
                    thead
                        tr.fs-5.text-nowrap
                            th(scope="col") Код таблицы
                            th(scope="col") Код товара
                            th(scope="col") Название товара
                            th(scope="col") Цена за единицу
                            th(scope="col") Кол-во
                            th(scope="col") Штрихкод
                    tbody
                        tr.fs-5.text-nowrap(v-for="(elem, index) in checksItem.goods" :key="index")
                            th.user-select-none(scope="col") {{ index+1 }}
                            td.user-select-none {{ elem.idGoods}}
                            td.user-select-none {{ elem.shoppingName }}
                            td.user-select-none {{ elem.price }}
                            td.user-select-none {{ elem.count }}
                            td.user-select-none {{ elem.eanCode}}


        .toast-footer.p-2.m-auto.d-flex.flex-column.align-content-end.text-end
            .buttons.w-100
                button.btn.btn-outline-primary.me-2(type="button" @click="exportExcell()") Печать
                button.btn.btn-outline-primary.me-2(type="button" data-bs-dismiss="toast") Закрыть
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'


export default
{
    data() {
    },
    computed: {
        ...mapGetters(["checksItem"])
    },
    methods: {
        ...mapActions(["fetchChecksList"]),
        exportExcell() {
            const table = document.getElementById('table-check-inventory');
            const wb = XLSX.utils.table_to_book(table, {sheet: 'sheet-1'});
            XLSX.writeFile(wb, 'MyTable.xlsx');
        },
    },
    async mounted() {
        await this.fetchChecksList()
    },
    watch: {
        checksItem: {
            handler() {
                console.log(this.checksItem);
            },
            deep: true
        }
    }
}
</script>

<style lang="scss" scoped>
.toast-overflow {
    height: 400px;
    overflow-x: hidden;
    overflow-y: auto;
}

.good-col:hover {
    top: 5px;
}
</style>
