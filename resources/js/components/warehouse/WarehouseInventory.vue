<template lang="pug">
    
.tab-pane.fade(role="tabpanel" aria-labelledby="inventory-tab" :id="documentTitle")
    .warehouse-setting.mb-2.row.align-items-center
        .col-12.mb-2
            warehouseSearch()

    .warehouse-table.table-responsive-lg.overflow-scroll.scroll
        table.table.table-striped.table-hover.table-bordered.border-primary.caption-top.table-success
            thead
                tr.fs-5.text-nowrap
                    th(data-id="idGoods" scope="col") Артикуль
                    th(data-id="nameGoods" scope="col") Наименование
                    th(data-id="typeGoods" scope="col") Категория
                    th(data-id="unitGoods" scope="col") Ед. изм.
                    th(data-id="priceGoods" scope="col") Цена закупки(руб.)
                    th(data-id="countGoods" scope="col") Кол-во
                    th(data-id="summCountGoods" scope="col") Сумма(руб.)
                    th(data-id="eanCodeGoods" scope="col") Код штрихкода
            tbody
                tr.fs-5.text-nowrap(v-for="(item, index) in warehouseInventoryList" :key="index")
                    th(scope="col") {{item.idGoods}}
                    td {{item.nameGoods}}
                    td {{item.typeGoods}}
                    td {{item.unitGoods}}
                    td {{item.priceGoods}}
                    td {{item.countGoods}}
                    td {{item.summCountGoods }}
                    td {{item.eanCodeGoods}}
</template>

<script>
import warehouseSearch from '../blocks/WarehouseSearch';
import {mapMutations, mapActions, mapGetters} from 'vuex'
export default
{
    components: {
        warehouseSearch
    },
    data() {
        return {
            searchSetting: [
                {
                    id: "idGoods",
                    name: "Артикуль",
                    inputType: "text",
                    optionsList: null
                },
                {
                    id: "nameGoods",
                    name: "Название товара",
                    inputType: "text",
                    optionsList: null
                },
                {
                    id: "typeGoods",
                    name: "Категория товара",
                    inputType: "select",
                    optionsList:
                    [
                        {
                            id: 0,
                            name: "Молочная продукция"
                        },
                        {
                            id: 1,
                            name: "Конфеты"
                        },
                        {
                            id: 2,
                            name: "Мучное"
                        },
                    ]
                },
                {
                    id: "unitGoods",
                    name: "Единица измерения",
                    inputType: "select",
                    optionsList:
                    [
                        {
                            id: 0,
                            name: "л."
                        },
                        {
                            id: 1,
                            name: "кг."
                        }
                    ],
                },
                {
                    id: "priceGoods",
                    name: "Цена закупки",
                    inputType: "number",
                    optionsList: null
                },
                {
                    id: "countGoods",
                    name: "Количество товара",
                    inputType: "number",
                    optionsList: null
                },
                {
                    id: "summCountGoods",
                    name: "Сумма",
                    inputType: "number",
                    optionsList: null
                },
            ],
            documentTitle: "inventory"
        }
    },
    computed: {
        ...mapGetters(["warehouseInventoryList", "warehouseDocumentName", "warehouseCurrentTab"])
    },
    methods: {
        ...mapActions(["fetchWarehouseInventory"]),
        ...mapMutations(["updateWarehouseSearchSetting","fullUpdateWarehouseSetting"]),
    },
    watch: {
        warehouseCurrentTab: function () {
            if (this.documentTitle === this.warehouseCurrentTab)
                this.fullUpdateWarehouseSetting([this.searchSetting, this.documentTitle])
        },
    },
    async mounted() {
        this.fetchWarehouseInventory()
    },
}
</script>

<style lang="scss" scoped>

.good-col:hover {
    top: 5px;
}
.warehouse-table {
    height: 500px;
}
</style>
