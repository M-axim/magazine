<template lang="pug">
.catalog-tree-wrapper.p-3.h-100
    .catalog-top
        .catalog-title 
            h2 Все товары
        .catalog-setting.row
            .col-12.col-sm-3
                button.btn.btn-sm.btn-outline-primary(
                    data-bs-toggle="offcanvas"
                    data-bs-target="#catalogGoods"
                    @click="this.setCatalogGoodsEdit(null)")
                    i.bi.bi-plus.cursor-pointer.fst-normal.fs-5 Товар
                button.btn.btn-sm.btn-outline-primary.fs-5.ms-2(@click="this.exportExcell()") Печать
            .col-12.col-sm-9
                .input-group.mb-3.flex-column-reverse.flex-lg-row.w-100
                    input.form-control.w-100(type="text" v-model="searchList" @input="fetchSearchGods()" placeholder="Поиск по наименованию")

    .catalog-tree-table.table-responsive-lg.overflow-scroll.scroll
        table.table.table-sm.table-hover.table-bordered.table-borderless#TableToExport(data-table-header="Товары")
            thead.text-center
                tr.fs-6.text-nowrap.text-center.user-select-none
                    th(data-id="idGoods" scope="col" width="50") Код товара
                    th(data-id="title" scope="col" width="100%") Наименования
                    th(data-id="count" scope="col") Кол-во
                    th(data-id="price" scope="col") Цена (за ед.)
                    th(scope="col") Настройки
            tbody
                tr.fs-5.text-nowrap.align-middle.link-hover.user-select-none.text-center(v-if="catalogGoodsList.length < 1")
                    th(data-table-export="no-export" colspan="5") Товар не найден
                tr.fs-5.text-nowrap.align-middle.link-hover.user-select-none(v-for="(item, index) in catalogGoodsList" :key="index++" v-else)
                    th(data-table-export="Код товара") {{ index }}
                    td(data-table-export="Наименования") {{item.title}}
                    td(data-table-export="Кол-во") {{item.count }}
                    td(data-table-export="Цена (за ед.)") {{item.price}} руб.
                    td(data-table-export="no-export")
                        button.btn.btn-sm.btn-primary(data-bs-toggle="offcanvas" data-bs-target="#catalogGoods" @click="this.setCatalogGoodsEdit({categoryGoods:selectCategoryGoods, idGoods:item.idGoods})") Подробнее
catalogGoods()
</template>

<script>
import {mapGetters, mapActions, mapMutations} from "vuex"
import catalogGoods from "../offcanvas/CatalogGoods"
export default {
    components: {
        catalogGoods
    },
    data() {
        return {
            searchList: ""
        }
    },
    computed: {
        ...mapGetters(["catalogGoodsList", "selectCategoryGoods", "catalogGoodsEdit"])
    },
    methods: {
        ...mapActions(["fetchCatalogTreeGoods"]),
        ...mapMutations(["updateCatalogGoodsList", "newCatalogGoods", "setCatalogGoodsEdit", "getCatalogGood"]),
        exportExcell() {
            const data = []
            //gets table
            let oTable = document.getElementById('TableToExport')
            let tableHeader = oTable.getAttribute("data-table-header")
            let rowLength = oTable.rows.length
            for (let i = 1; i < rowLength; i++) {
                // Получаем ячейки в строке
                let oCells = oTable.rows.item(i).cells

                // Получаем data атрибуты и значения ячеек
                let tmpObjList = [...oCells].filter( (elem, index) => elem.getAttribute("data-table-export") !== "no-export")
                
                // трансформируем массив объектов в один массив
                data[i - 1] = Object.fromEntries(tmpObjList.map(item => [item.getAttribute("data-table-export"), item.innerHTML]));
            }

            let wb = XLSX.utils.book_new(), //creates a new workbook
            ws = XLSX.utils.json_to_sheet(data);
            XLSX.utils.book_append_sheet(wb, ws, `${tableHeader}`)
            XLSX.writeFile(wb, `${tableHeader}` + ".xlsx")
        },
        fetchSearchGods() {
            this.fetchCatalogTreeGoods({categoryGoods: this.selectCategoryGoods, filterSetting: this.searchList})
        }
    },
    async mounted() {
        this.fetchCatalogTreeGoods({})
    },
}
</script>

<style lang="scss" scoped>
.catalog-tree-table {
    height: calc(100% - 80px);
}
</style>