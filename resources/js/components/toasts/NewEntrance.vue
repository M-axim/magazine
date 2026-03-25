<template lang="pug">
.ToastNewEntrance
    .toast#newEntrance.w-75.m-auto.bg-light(role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false" tabindex="-1")
        .toast-header.fs-4
            form.row.g-3.w-100
                .col-12.col-md-4
                    label.form-label.w-100(:class="{'text-danger': idEntrance === ''}") Номер документа
                        input.form-control(type="text", name="idEntrance" v-model="idEntrance" placeholder="По умолчанию")
                .col-12.col-md-4
                    label.form-label.w-100(:class="{'text-danger': dateEntrace === ''}") Дата поступления
                        input.form-control(type="date", name="dateEntrace" v-model="dateEntrace" placeholder="")
                .col-12.col-md-4
                    label.form-label.w-100(:class="{'text-danger': provider === ''}") Поставщик
                        input.form-control(type="text", name="provider" v-model="provider" placeholder="Введите поставщика")
        .toast-body
            .toast-btn
                button.btn.btn-secondary.me-2#liveToastBtn(@click="showToas('goodsToats')" v-if="status !== 'Закрыт'" type="button") Добавить товар
            .warehouse-table.table-responsive-lg.overflow-scroll.mt-2.toast-overflow.scroll
                table.table.table-striped.table-hover.table-bordered.border-primary.table-success
                    thead
                        tr.fs-5.text-nowrap
                            th(scope="col") Артикуль
                            th(scope="col") Наименование
                            th(scope="col") Ед. изм.
                            th(scope="col") Цена закупки(руб.)
                            th(scope="col") Кол-во
                            th(scope="col") Сумма(руб.)
                            th(scope="col") Штрихкод
                            th(scope="col" v-if="status !== 'Закрыт'") Настройки
                    tbody
                        tr.fs-5.text-nowrap(v-for="(elem, index) in goodsList" :key="index")
                            th.user-select-none(scope="col") {{ index+1 }}
                            td.user-select-none {{ elem.title}}
                            td.user-select-none {{ elem.unitMeasurement }}
                            td.user-select-none {{ elem.price }}
                            td.user-select-none {{ elem.count }}
                            td.user-select-none {{ (elem.count * elem.price).toFixed(2)}}
                            td.user-select-none {{ elem.eanCode}}
                            td.user-select-none(v-if="status !== 'Закрыт'")
                                button.btn.btn-outline-primary.me-2(type="button" @click="goodsList = goodsList.filter( (good) => good.idGoods !== elem.idGoods)") Удалить


        .toast-footer.p-2.m-auto.d-flex.flex-column.align-content-end.text-end
            p.text-danger.w-100.m-0.pe-2 {{ error }}
            .buttons.w-100
                button.btn.btn-outline-primary.me-2(type="button" data-bs-dismiss="toast") Закрыть
                button.btn.btn-outline-primary.me-2(type="button" @click="updateWarehouseEntrance('Открыт')" :disabled="status === 'Закрыт'") Сохранить
                button.btn.btn-outline-primary.me-2(type="button" @click="updateWarehouseEntrance('Закрыт')" :disabled="status === 'Закрыт'") Сохранить и закрыть
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'


export default
{
    props: {
        title: String,
        default: "NULL"
    },
    components: {
        
    },
    data() {
        return {
            goodsList: [],
            idEntrance: "",
            dateEntrace: "",
            provider: "Не указано",
            status: "",
            error: ""
        }
    },
    computed: {
        ...mapGetters(["godsList", "activeCard", "user", "warehouseEntranceObject"])
    },
    methods: {
        ...mapActions(["fetchCatalogTreeGoods", "fetchWarehouseEntrance"]),
        ...mapMutations(["updateActiveCard", "updateCountGoods", "newWarehouseEntrance", "newWarehouseDocument", "updateWarehouseEntranceList"]),

        selectCard(index, event) {
            event.preventDefault()
            this.updateActiveCard(index)
        },
        async updateWarehouseEntrance(status) {
            if (this.idEntrance !== "" && this.dateEntrace !== "" && this.provider !== "") {
                let tmpObject = {
                    idEntrance: this.idEntrance,
                    dateEntrace: this.dateEntrace,
                    employerId: this.user.id,
                    provider: this.provider,
                    summ: this.goodsList.reduce( (sum, num) => { return sum + (num.count * num.price) }, 0),
                    countGoods: this.goodsList.length,
                    status,
                    goods: this.goodsList
                }

                this.updateWarehouseEntranceList(tmpObject)
                if (status === "Закрыт") {
                    this.updateCountGoods({obj: tmpObject.goods, operation: "+"})
                    new bootstrap.Toast(document.querySelector("#newEntrance"));
                    bootstrap.Toast.getInstance("#newEntrance").hide();

                    this.newWarehouseDocument({
                        date: this.dateEntrace,
                        idEntrance: this.idEntrance,
                        typeDocument: "Приходная накладная",
                        typeDocumentName: "receiptInvoice"
                    })
                    this.newWarehouseDocument({
                        date: this.dateEntrace,
                        idEntrance: this.idEntrance,
                        typeDocument: "ТОРГ-12",
                        typeDocumentName: "torg12"
                    })
                }
            } else {
                this.error = "Не все поля заполнены"
            }
            
        },
        showToas(id) {
            let toast = document.getElementById(id)
            toast = new bootstrap.Toast(toast)
            toast.show()
        },
    },
    async mounted() {
        //this.fetchGodsList()
    },
    watch: {
        warehouseEntranceObject: function() {
            if (this.warehouseEntranceObject !== {}) {

                this.goodsList = this.warehouseEntranceObject.goods
                this.idEntrance = this.warehouseEntranceObject.idEntrance
                this.dateEntrace = this.warehouseEntranceObject.dateEntrace
                this.status = this.warehouseEntranceObject.status
                this.provider = this.warehouseEntranceObject.provider
            }

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
