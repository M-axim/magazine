<template lang="pug">
#Entrance.h-100
    .warehouse-setting.mb-2.row.align-items-center
        .col-12.col-sm-4.mb-2
            button.btn.btn-primary.me-2(@click="newWarehouseEntranceObject()" type="button") Новое поступление
        .col-12.col-sm-8.mb-2
            warehouseSearch()

    .warehouse-table.table-responsive-lg.overflow-scroll.scroll(:style="{'height': height - 160 + 'px'}")
        table.table.table-sm.table-hover.table-bordered.table-borderless
            thead.text-center
                tr.fs-5.text-nowrap
                    th(data-id="idEntrance" scope="col") Код документа
                    th(data-id="dateEntrace" scope="col") Дата
                    th(data-id="provider" scope="col") Поставщик
                    th.w-25(data-id="summ" scope="col") Сумма(руб)
                    th(data-id="countGoods" scope="col") Кол-во позиций
                    th(data-id="status" scope="col") Статус
                    th(data-id="setting" scope="col") Настройки
            tbody
                tr.fs-5.text-nowrap(v-for="(item, index) in warehouseEntranceList" :key="index")
                    th(scope="col") {{item.idEntrance}}
                    td {{item.dateEntrace === "" ? "Не указано" : getDate(item.dateEntrace)}}
                    td {{item.provider === "" ? "Не указан" : item.provider}}
                    td {{item.summ.toFixed(2)}}
                    td {{item.countGoods}}
                    td {{item.status}}
                    td 
                        //- button.btn.btn-outline-primary.me-2(@click="deleteWarehouseEntrance(item.idEntrance)" type="submit") Удалить
                        button.btn.btn-outline-primary.me-2(@click="getWarehouseEntranceObject(item.idEntrance), showToas('newEntrance')" type="submit") Изменить
    
    .toast-container.position-absolute.top-50.start-50.translate-middle.w-100(:style="{'z-index': 2000}")
        toastSelectGodsVue(v-bind:title="`warehouse`")
    .toast-container.position-absolute.top-50.start-50.translate-middle.w-100
        newEntrance(v-bind:title="`Entrance`")
    .toast-container.position-absolute.top-50.start-50.translate-middle(:style="{'z-index': 2010}")
        scanner()
</template>

<script>

import { mapActions, mapGetters, mapMutations } from 'vuex'

import toastSelectGodsVue from '../toasts/ToastSelectGods'
import warehouseSearch from '../blocks/WarehouseSearch'
import newEntrance from '../toasts/NewEntrance'
import scanner from '../toasts/Scanner'
import { ref } from 'vue'

export default
{
    components: {
        toastSelectGodsVue,
        warehouseSearch,
        newEntrance,
        scanner
    },
    data() {
        return {
            searchSetting: [
                {
                    id: "idEntrance",
                    name: "Код документа",
                    inputType: "text",
                    optionsList: null
                },
                {
                    id: "dateEntrace",
                    name: "Дата",
                    inputType: "date",
                    optionsList: null
                },
                {
                    id: "provider",
                    name: "Поставщик",
                    inputType: "select",
                    optionsList:
                    [
                        {
                            id: 0,
                            name: "ООО Василек"
                        },
                        {
                            id: 1,
                            name: "ООО Ромашка"
                        },
                        {
                            id: 1,
                            name: "ООО Тюльпан"
                        }
                    ],
                },
                {
                    id: "summ",
                    name: "Сумма(руб)",
                    inputType: "number",
                    optionsList: null
                },
                {
                    id: "countGoods",
                    name: "Общ. кол-во товаров",
                    inputType: "number",
                    optionsList: null
                },
                {
                    id: "status",
                    name: "Статус",
                    inputType: "select",
                    optionsList:
                    [
                        {
                            id: 0,
                            name: "Открыт"
                        },
                        {
                            id: 1,
                            name: "Закрыт"
                        }
                    ],
                },
            ],
            documentTitle: "Entrance",
            height: ref(window.innerHeight)

        }
    },
    computed: {
        ...mapGetters(["warehouseEntranceList", "godsList", "activeCard", "warehouseDocumentName", "warehouseCurrentTab"])
    },
    methods: {
        ...mapActions(["fetchWarehouseEntrance", "fetchGodsList"]),
        ...mapMutations(["updateActiveCard", "fullUpdateWarehouseSetting", "deleteWarehouseEntrance", "getWarehouseEntranceObject", "newWarehouseEntrance"]),
        showToas(id) {
            let toast = document.getElementById(id)
            toast = new bootstrap.Toast(toast)
            toast.show()
        },
        async newWarehouseEntranceObject() {
            await this.newWarehouseEntrance()
            await this.getWarehouseEntranceObject(this.warehouseEntranceList.length)
            this.showToas('newEntrance')
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
        await this.fetchWarehouseEntrance()
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
.z-index {
    z-index: 2000;
}
.good-col:hover {
    top: 5px;
}
.warehouse-table {
    height: 500px;
}
</style>