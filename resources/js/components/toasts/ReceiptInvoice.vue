<template lang="pug">
.toast-container.position-absolute.top-50.start-50.translate-middle.w-100
    .toast#receiptInvoiceToats.w-75.m-auto.bg-light(role="alert" aria-live="assertive" aria-atomic="true")
        .toast-header.fs-4 Приходная накладная
            button.ms-auto.btn-close(type="button" data-bs-dismiss="toast" aria-label="Close")
        .toast-body.toast-overflow.scroll
            table.table.table-striped.table-hover.table-bordered.border-primary.table-success.m-0#receiptInvoice
                thead
                    tr.fs-5
                        td.user-select-none(colspan="1") Поставщик:
                        td.user-select-none(colspan="6") {{warehouseEntranceObject?.provider}}
                    tr.fs-5
                        td.user-select-none(colspan="1")
                        td.user-select-none(colspan="6")
                    tr.fs-5
                        td.user-select-none(colspan="1") Покупатель:
                        td.user-select-none(colspan="6") Магазин
                    tr.fs-5
                        td.user-select-none(colspan="1")
                        td.user-select-none(colspan="6") 
                    tr.fs-5
                        td.user-select-none(colspan="7")
                    tr.fs-5
                        th(scope="col") №
                        th(scope="col") Артикуль
                        th(scope="col") Товар
                        th(scope="col") Ед. изм.
                        th(scope="col") Цена закупки(руб.)
                        th(scope="col") Кол-во
                        th(scope="col") Сумма(руб.)
                tbody
                    tr.fs-5(v-for=" (elem, index) in warehouseEntranceObject.goods")
                        th.user-select-none(scope="col") {{ index + 1 }}
                        th.user-select-none(scope="col") {{ elem.idGoods }}
                        td.user-select-none {{ elem.title }}
                        td.user-select-none {{ elem.unitMeasurement }}
                        th.user-select-none {{ elem.count }}
                        td.user-select-none {{ elem.price }}
                        td.user-select-none {{ (elem.count * elem.price).toFixed(2) }}
                tfoot
                    tr.fs-5 
                        td.user-select-none.text-end(colspan="6" ) Итого:
                        td.user-select-none(colspan="1") {{ totalSum }}
                    tr.fs-5 
                        td.user-select-none.text-end(colspan="6" ) В том числе НДС:
                        td.user-select-none(colspan="1") {{ totalNDSSum.toFixed(2) }}
                    tr.fs-5 
                        td.user-select-none(colspan="7") Всего наименований {{ countGoods }}, на сумму {{ totalSum.toFixed(2) }} руб
                    tr.fs-5 
                        td.user-select-none(colspan="7" ) {{ totalSumWord}}
                    tr.fs-5
                        td.user-select-none(colspan="1" ) Получил
                        td.user-select-none(colspan="2" ) ________________
                        td.user-select-none()
                        td.user-select-none(colspan="1" ) Отпустил
                        td.user-select-none(colspan="2" ) ________________
        .toast-footer.fs-4.text-end.m-2
            button.btn.btn-outline-secondary.me-auto.p-2.ms-2(type="button" data-bs-dismiss="toast") Выйти
            button.btn.btn-outline-secondary.me-auto.p-2.ms-2(type="button" @click="exportExcell()")#btn-torg12-export Экспортировать в excell
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import { convert as convertNumberToWordsRu } from 'number-to-words-ru'

export default {
    setup () {
        return {}
    },
    data() {
        return {
            totalSum: 0,
            totalNDSSum: 0,
            countGoods: 0,
            totalSumWord: 0
        }
    },
    computed: {
        ...mapGetters(["warehouseEntranceObject"])
    },
    methods: {
        exportExcell() {
            const table = document.getElementById('receiptInvoice');
            const wb = XLSX.utils.table_to_book(table, {sheet: 'sheet-1'});
            XLSX.writeFile(wb, 'receiptInvoice.xlsx');
        }
    },
    watch: {
        warehouseEntranceObject: function() {
            if (this.$route.name === "Invoice") {
                this.totalSum = this.warehouseEntranceObject.goods.reduce( (sum, num) => { return sum + (num.count * num.price) }, 0)
            
                // НДС = итоговая сумма товара × ставку НДС / 100,
                this.totalNDSSum = this.warehouseEntranceObject.goods.reduce( (sum, num) => { return sum + ( (num.count * num.price) * num.nds / 100) }, 0)
                
                this.countGoods = this.warehouseEntranceObject.goods.length

                this.totalSumWord = convertNumberToWordsRu(this.totalSum)
            }

        }
    }
}
</script>

<style lang="scss" scoped>
.toast-overflow {
    height: 100%;
    max-height: 400px;
    overflow-x: auto;
    overflow-y: auto;
}
.td-underline::after {
    content: "";
    display: block;
    border-bottom: 1px solid black;
    width: 100%;
    top: 1rem;
    position: relative;
}
</style>