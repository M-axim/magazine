<template lang="pug">
#Invoice.h-100
    .warehouse-setting.mb-2.row.align-items-center
        .col-12.col-sm-4.mb-2
            //button.btn.btn-secondary.me-2(type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop") Новый документ
            button.btn.btn-primary.me-2(type="button") Новый документ
        .col-12.col-sm-8.mb-2
            warehouseSearch()

    .warehouse-table.table-responsive-lg.overflow-scroll.scroll(:style="{'height': height - 160 + 'px'}")
        table.table.table-sm.table-hover.table-bordered.table-borderless
            thead.text-center
                tr.fs-5.text-nowrap
                    th(data-id="idDocument" scope="col") Код документа
                    th(data-id="idEntrance" scope="col") Номер поступления
                    th(data-id="date" scope="col") Дата
                    th(data-id="typeDocument" scope="col") Тип документа
                    th(data-id="setting" scope="col") Настройки
            tbody
                tr.fs-5.text-nowrap(v-for="(item, index) in warehouseDocumentList" :key="index")
                    th(scope="col") {{item.idDocument}}
                    th {{item.idEntrance}}
                    td {{ getDate(item.date) }}
                    td {{item.typeDocument}}
                    td
                        router-link.btn.btn-outline-primary.me-2(v-if="item.typeDocumentName === 'torg12'" :to="`print/` + item.idEntrance") Просмотреть
                        button.btn.btn-outline-primary.me-2(v-else :data-id="item.id" type="submit" @click="showDocument(item.idEntrance, item.typeDocumentName)") Просмотреть
    receiptInvoice
    torg12
</template>
    
<script>
import receiptInvoice from '../toasts/ReceiptInvoice'
import torg12 from '../toasts/Torg12'
import warehouseSearch from '../blocks/WarehouseSearch'
import { mapActions, mapGetters, mapMutations } from 'vuex'
import { ref } from 'vue'

export default
{
    components: {
        receiptInvoice,
        torg12,
        warehouseSearch
    },
    data() {
        return {
            searchSetting: [
                {
                    id: "idDocument",
                    name: "Код документа",
                    inputType: "text",
                    optionsList: null
                },
                {
                    id: "idEntrance",
                    name: "Номер поступления",
                    inputType: "text",
                    optionsList: null
                },
                {
                    id: "date",
                    name: "Дата",
                    inputType: "date",
                    optionsList: null
                },
                {
                    id: "typeDocument",
                    name: "Тип документа",
                    inputType: "select",
                    optionsList: [
                        {
                            id: 0,
                            name: "Приходная накладная"
                        },
                        {
                            id: 1,
                            name: "ТОРГ-12"
                        },
                    ]
                }
            ],
            documentTitle: "Invoice",
            height: ref(window.innerHeight)

        }
    },
    computed: {
        ...mapGetters(["warehouseDocumentList", "warehouseEntranceList", "warehouseDocumentName", "warehouseCurrentTab"])
    },
    methods: {
        ...mapActions(["fetchWarehouseDocument", "fetchWarehouseEntrance"]),
        ...mapMutations(["updateActiveCard", "fullUpdateWarehouseSetting", "getWarehouseEntranceObject"]),
        exportExcell() {
            const table = document.getElementById('table-inventory');
            const wb = XLSX.utils.table_to_book(table, {sheet: 'sheet-1'});
            XLSX.writeFile(wb, 'MyTable.xlsx');
        },
        showToas(id) {
            let toast = document.getElementById(id + "Toats")
            toast = new bootstrap.Toast(toast)
            toast.show()
        },
        async showDocument(idEntrance, typeDocumentName) {
            await this.fetchWarehouseEntrance()
            this.getWarehouseEntranceObject(idEntrance)
            this.showToas(typeDocumentName)
        },
        getDate(strDate) {
          let date = String(strDate).split("-")
          return date[2] + "." + date[1] + "." + date[0] 
        }
    },
    watch: {
        warehouseCurrentTab: function () {
            this.fullUpdateWarehouseSetting([this.searchSetting, this.documentTitle])
        },
    },
    async mounted() {
        this.fetchWarehouseDocument()
    },
}
</script>

<style lang="scss" scoped>

</style>
