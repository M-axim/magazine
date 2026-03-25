<template lang="pug">
form.input-group
    button.btn.btn-outline-primary.dropdown-toggle(type="button" data-bs-toggle="dropdown" aria-expanded="false") Фильтр: "{{warehouseSearchSettingCurrent.name}}"
    ul.dropdown-menu
        li(v-for="(item, index) in warehouseSearchSetting" :index="index")
            a.dropdown-item(href="#" :data-search-setting="item.id" @click="changeSearchSettingCurrent(index)") {{item.name}}
    label.form-label.col.m-0(v-if="InputShow(warehouseSearchSettingCurrent, 'select')")
        select.form-select(@change="selectFilter($event)")
            option(selected value="clear") Выберите: "{{ warehouseSearchSettingCurrent.name }}"
            option(:value="item.name" v-for="(item, index) in warehouseSearchSettingCurrent.optionsList" :key="item.id") {{ item.name }}
    label.form-label.col.m-0.input-group(v-else-if="InputShow(warehouseSearchSettingCurrent, 'number')")
        input.form-control(type="number" aria-label="First name" :placeholder="`${warehouseSearchSettingCurrent.name}(от):`" v-model="inputNumberFirst")
        input.form-control(type="number" aria-label="Last name" :placeholder="`${warehouseSearchSettingCurrent.name}(до):`" v-model="inputNumberLast")
    label.form-label.col.m-0(v-else-if="InputShow()")
        input.form-control(type="text" :placeholder="`Поиск по: \"${warehouseSearchSettingCurrent.name}\"`" v-model="inputText")
    
    button.btn.btn-outline-primary(type="reset" @click="clear()") Сбросить
    button.btn.btn-outline-primary(type="button" @click="filter()") Поиск
</template>

<script>
import {mapMutations, mapGetters, mapActions} from 'vuex'

    export default {
        data() {
            return {
                optionsList: [
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
                ],
                inputFormWarehouseType: 
                [   
                    "text",
                    "select",
                    "number"
                ],
                inputFormWarehouseActiveIndex: 0,
                currentOptionList: [],
                inputText: "",
                inputNumberFirst: 0,
                inputNumberLast: 0,
            }
        },
        methods: {
            ...mapMutations(["updateWarehouseSearchSetting", "updateWarehouseSearchSettingCurrent"]),
            ...mapActions(["fetchWarehouseInventory",
            "fetchWarehouseEntrance",
            "fetchWarehouseDocument",
            "fetchEmployerList"]),
            changeSearchSettingCurrent(id) {
                this.updateWarehouseSearchSettingCurrent(this.warehouseSearchSetting[id])
            },
            InputShow(item = null, warehouseType = "text") {

                if (item === null) return 1

                if (item.inputType === warehouseType)
                {
                    let selectTypeOption = this.inputFormWarehouseType.findIndex( (i) => i === item.inputType)
                    this.inputFormWarehouseActiveIndex = selectTypeOption
                    return (selectTypeOption !== -1)
                }
            },
            filter() {
                switch(this.inputFormWarehouseActiveIndex) {
                    case 0:
                        this.fetchFilteredDataList({ first: this.inputText, last: null })
                        console.log("Значение " + this.warehouseSearchSettingCurrent.id + ": " + this.inputText)
                        break
                    case 2:
                        console.log("Значение " + this.warehouseSearchSettingCurrent.id + "(от): " + this.inputNumberFirst);
                        console.log("Значение " + this.warehouseSearchSettingCurrent.id + "(до): " + this.inputNumberLast);
                        this.fetchFilteredDataList({ first: this.inputNumberFirst, last: this.inputNumberLast })
                        break
                }
            },
            selectFilter(event) {

                if (event.target.value === "clear") this.clear()
                else this.fetchFilteredDataList({first : event.target.value, last: null})
            },
            fetchFilteredDataList(filter) {
                switch(this.warehouseDocumentName)
                {
                    case "inventory":
                        this.fetchWarehouseInventory({
                            type: this.warehouseSearchSettingCurrent.id,
                            first: String(filter.first),
                            last: String(filter.last)
                        })
                    break
                    case "Entrance":
                        this.fetchWarehouseEntrance({
                                type: this.warehouseSearchSettingCurrent.id,
                                first: String(filter.first),
                                last: String(filter.last)
                            })
                    break
                    case "Invoice":
                        this.fetchWarehouseDocument({
                                type: this.warehouseSearchSettingCurrent.id,
                                first: String(filter.first),
                                last: String(filter.last)
                            })
                    break
                    case "Employer":
                        this.fetchEmployerList({
                                type: this.warehouseSearchSettingCurrent.id,
                                first: String(filter.first),
                                last: String(filter.last)
                            })
                    break
                }

            },
            clear() {
                switch(this.warehouseDocumentName)
                {
                    case "inventory":
                        this.fetchWarehouseInventory()
                    break
                    case "Entrance":
                        this.fetchWarehouseEntrance()
                    break
                    case "Invoice":
                        this.fetchWarehouseDocument()
                    break
                    case "Employer":
                        this.fetchEmployerList()
                    break
                }
            }
        },
        computed: {
            ...mapGetters(["warehouseSearchSetting", "warehouseSearchSettingCurrent", "warehouseDocumentName"])
        },
        watch: {
        }
}
</script>

<style lang="scss" scoped>

</style>