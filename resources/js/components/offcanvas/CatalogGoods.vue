<template lang="pug">
#catalogGoods.offcanvas.offcanvas-end.offcanvas-width(tabindex='-1' data-bs-backdrop="static" aria-labelledby='CatalogGoods')
    .offcanvas-header
        h5#CatalogGoodsLabels.offcanvas-title Добавление товара
        button.btn-close(type='button' data-bs-dismiss='offcanvas' aria-label='Close')
    .offcanvas-body.overflow-auto.scroll
        form.scroll
            .row.mb-3
                label.col-sm-3.col-form-label(for="idGoods") Артикуль
                .col-sm-9
                    input.form-control#idGoods(type="text" readonly v-model="idGoods" placeholder="По умолчанию")
            .row.mb-3
                label.col-sm-3.col-form-label(for="title") Наименование
                .col-sm-9
                    input.form-control#title(type="text" v-model="title")
            .row.mb-3
                label.col-sm-3.col-form-label(for="title") Описание
                .col-sm-9
                    textarea.form-control#description(type="text" v-model="description")
            .row.mb-3
                label.col-sm-3.col-form-label(for="goodsCategory") Группа
                .col-sm-9
                    v-inputSelect(v-bind:rating="categoryGoodsType" v-model:value="categoryGoodsType" v-bind:options="categoryGoodsTypeList")
            .row.mb-3
                label.col-sm-3.col-form-label(for="eanCode") Штрихкод
                .col-sm-9
                    .text-center.mb-2
                        img(:src="`https://barcode.tec-it.com/barcode.ashx?data=${eanCode}&imagetype=Png&code=EAN13&translate-esc=on'`" v-if="eanCodeLine !== ''")
                    input.form-control#eanCode(type="text" v-model="eanCodeLine")
                    .ean-buttons.mt-2
                        button.btn.btn-sm.btn-outline-primary.me-2(type="button" @click="setEanCode()") Добавить
                        button.btn.btn-sm.btn-outline-primary(type="button" @click="generateEanCode()") Сгенерировать
            .row.mb-3
                label.col-sm-3.col-form-label(for="unitMeasurement") Ед измерения
                .col-sm-9
                    v-inputSelect(v-bind:rating="unitMeasurement" v-model:value="unitMeasurement" v-bind:options="unitMeasurementList")
            .row.mb-3
                label.col-sm-3.col-form-label(for="count") Остаток
                .col-sm-9
                    input.form-control#count(type="number" v-model="count")
            .row.mb-3
                label.col-sm-3.col-form-label(for="goodsPrice") Цена
                .col-sm-9
                    .input-group
                        input.form-control#goodsPrice(type="number" step="any" v-model="price")
                        .input-group-text руб. за {{ getText() }}
                    .form-check.mt-2
                        input.form-check-input#weightGoods(type="checkbox" v-model="weightGoods")
                        label.form-check-label.user-select-none(for="weightGoods") Весовой товар
            .row.mb-3
                label.col-sm-3.col-form-label(for="nds") НДС
                .col-sm-9
                    .input-group
                        input.form-control#nds(type="number" min="0" v-model="nds" placeholder="Введите НДС")
                        .input-group-text %
                    .btn-group.mt-2(role="group")
                        button.btn.btn-sm.btn-primary(@click="nds = 0" type="button") 0%
                        button.btn.btn-sm.btn-primary(@click="nds = 10" type="button") 10%
                        button.btn.btn-sm.btn-primary(@click="nds = 18" type="button") 18%
                        button.btn.btn-sm.btn-primary(@click="nds = 20" type="button") 20%
                        button.btn.btn-sm.btn-primary(@click="nds = 25" type="button") 25%
                    
    .catalog-footer.mt-2.p-3
        button.btn.btn-primary.w-100(@click="newGoods()" data-bs-dismiss='offcanvas') {{ idGoods === null ? "Сохранить" : "Изменить"}}

</template>

<script>
import {mapGetters, mapActions, mapMutations} from "vuex"

export default {
    data() {
        return {
            idGoods: null,
            eanCode: "",
            title: "",
            description: "",
            img: "",
            categoryGoodsType: "",
            eanCodeLine: "",
            unitMeasurement: "",
            count: "",
            price: "",
            weightGoods: false,
            nds: 0,
            unitMeasurementList: [
                {
                    value: "1",
                    text: "шт."
                },
                {
                    value: "2",
                    text: "л."
                }
            ],
            categoryGoodsTypeList: []
        }
    },
    computed: {
        ...mapGetters(["catalogGoodsEdit", "catalogGood", "catalogTab"]),
    },
    methods: {
        ...mapMutations(["newCatalogGoods", "getCatalogGood", "updateCatalogGoods"]),

        clearParams() {
            this.idGoods = null,
            this.eanCode = "",
            this.title = "",
            this.img = "",
            this.description = "",
            this.categoryGoodsType = "",
            this.eanCodeLine = "",
            this.unitMeasurement = "",
            this.count = "",
            this.price = "",
            this.weightGoods = false,
            this.nds = 0
        },

        newGoods() {
            let tmpCatalogGood = {
                idGoods: this.idGoods,
                title: this.title,
                description: this.description,
                img: this.img,
                categoryGoodsType: this.categoryGoodsType,
                eanCode: String(this.eanCode),
                count: this.count,
                price: this.price,
                unitMeasurement: this.unitMeasurement,
                weightGoods: this.weightGoods,
                nds: this.nds,
                }
            if (this.idGoods === null)
            {
                this.newCatalogGoods(tmpCatalogGood)
            }
            else {
                this.updateCatalogGoods(tmpCatalogGood)
            }

        },

        setEanCode() {
            this.eanCode = String(this.eanCodeLine)
        },
        generateEanCode() {
            this.eanCode = String(Math.floor(100000000000 + Math.random() * 900000000000))
            this.eanCodeLine = this.eanCode
        },
        getText() {
            return this.weightGoods ? "100 гр." : "ед."
        }
    },
    watch: {
        catalogGoodsEdit: function() {
            if (this.catalogGoodsEdit === null) {
                this.clearParams()
            }
            else {
                this.idGoods = this.catalogGoodsEdit.idGoods
                this.getCatalogGood(
                    {
                        categoryGoods: this.catalogGoodsEdit.categoryGoods,
                        idGoods: this.catalogGoodsEdit.idGoods
                    })

                this.idGoods = this.catalogGood.idGoods
                this.title = this.catalogGood.title
                this.description = this.catalogGood.description
                this.img = this.catalogGood.img
                this.categoryGoodsType = this.catalogGood.categoryGoodsType
                this.eanCodeLine = this.catalogGood.eanCode
                this.count = this.catalogGood.count
                this.price = this.catalogGood.price
                this.unitMeasurement = this.catalogGood.unitMeasurement
                this.weightGoods = this.catalogGood.weightGoods
                this.nds = this.catalogGood.nds

                this.setEanCode()
            }
        }
    },
    async mounted() {
        this.setEanCode()
        this.categoryGoodsTypeList = this.catalogTab[0].nodes.map( (elem) => ({
            value: elem.id,
            text: elem.label
        }))
    },

}
</script>

<style lang="scss" scoped>
.offcanvas-width {
    width: 500px;
}
</style>