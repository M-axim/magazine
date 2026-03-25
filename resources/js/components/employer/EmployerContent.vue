<template lang="pug">
#employer.h-100
    .warehouse-setting.mb-2.row.align-items-center
        .col-12.col-sm-4.mb-2
            button.btn.btn-primary.me-2(@click="resetEmployerEdit(), showToas('newEmployer')" type="button") Новый сотрудник
            button.btn.btn-primary.me-2(@click="exportExcell()" type="button") Печать
        .col-12.col-sm-8.mb-2
            warehouseSearch()

    .warehouse-table.table-responsive-lg.overflow-scroll
        table.table.table-sm.table-hover.table-bordered.table-borderless#TableToExport(data-table-header="Сотрудники")
            thead.text-center
                tr.fs-5.text-nowrap
                    th(data-id="idEmployer" scope="col") Номер сотрудника
                    th(data-id="fullname" scope="col") ФИО
                    th(data-id="tel" scope="col") Телефон
                    th(data-id="position" scope="col") Должность
                    th(data-id="password" scope="col") Пароль
                    th(data-id="status" scope="col") Статус
                    th(data-id="setting" scope="col") Настройки
            tbody
                tr.fs-5.text-nowrap(v-for="(item, index) in employerList" :key="index")
                    th(data-table-export="Номер сотрудника") {{item.idEmployer}}
                    td(data-table-export="ФИО") {{item.fullname}}
                    td(data-table-export="Телефон") {{item.tel}}
                    td(data-table-export="Должность") {{item.position}}
                    td(data-table-export="no-export") {{item.password}}
                    td(data-table-export="Статус") {{item.status}}
                    td(data-table-export="no-export")
                        button.btn.btn-outline-primary.me-2(:data-id="item.idEmployer" @click="deleteEmployer(item.idEmployer)" type="submit") Удалить
                        button.btn.btn-outline-primary.me-2(:data-id="item.idEmployer" @click="getEmployerEdit(item.idEmployer), showToas('newEmployer')" type="submit") Изменить
    .toast-container.position-absolute.top-50.start-50.translate-middle.w-100(:style="{'z-index': 2000}")
        newEmployer()
</template>

<script>

import { mapActions, mapGetters, mapMutations } from 'vuex'

import warehouseSearch from '../blocks/WarehouseSearch'
import newEmployer from '../toasts/NewEmployer'
export default
{
    components: {
        warehouseSearch,
        newEmployer
    },
    data() {
        return {
            searchSetting: [
                {
                    id: "idEmployer",
                    name: "Номер сотрудника",
                    inputType: "text",
                    optionsList: null
                },
                {
                    id: "fullname",
                    name: "ФИО",
                    inputType: "text",
                    optionsList: null
                },
                {
                    id: "tel",
                    name: "Телефон",
                    inputType: "text",
                    optionsList: null
                },
                {
                    id: "position",
                    name: "Должность",
                    inputType: "select",
                    optionsList:
                    [
                        {
                            id: 1,
                            name: "Администратор"
                        },
                        {
                            id: 2,
                            name: "Кладовщик"
                        },
                        {
                            id: 3,
                            name: "Кассир"
                        }
                    ],
                },
                {
                    id: "status",
                    name: "Статус",
                    inputType: "select",
                    optionsList:
                    [
                        {
                            id: 1,
                            name: "Уволен"
                        },
                        {
                            id: 2,
                            name: "Работает"
                        },
                        {
                            id: 3,
                            name: "В отпуске"
                        }
                    ],
                },
            ],
            documentTitle: "Employer",
            tableId: "employer-table"
        }
    },
    computed: {
        ...mapGetters(["employerList", "warehouseCurrentTab"])
    },
    methods: {
        ...mapActions(["fetchEmployerList"]),
        ...mapMutations(["newEmployerItem", "deleteEmployer", "resetEmployerEdit", "getEmployerEdit", "fullUpdateWarehouseSetting"]),
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
        showToas(id) {
            let toast = document.getElementById(id)
            toast = new bootstrap.Toast(toast)
            toast.show()
        },
    },
    watch: {
        warehouseCurrentTab: function () {
            this.fullUpdateWarehouseSetting([this.searchSetting, this.documentTitle])
        },
    },
    async mounted() {
        this.fetchEmployerList()
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