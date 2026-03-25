<template lang="pug">
.ToastSelectGods.rounded-3.h-100.overflow-hidden(:class="{'bg-light': type === 'block'}")
    #goodsToats.m-auto.p-2.bg-light(:class="{toast: type === 'toast', 'bg-light': type === 'block', 'w-75': type === 'toast'}" role="alert" data-bs-autohide="false" aria-live="assertive" aria-atomic="true")
        .toast-header.fs-4(v-if="type === 'toast'") Выберите товар
            button.ms-auto.btn-close(type="button" data-bs-dismiss="toast" aria-label="Close")
        .toast-search.mb-2.align-items-center
            .input-group.mb-3.flex-column-reverse.flex-lg-row
                button.btn.btn-sm.btn-secondary.mt-2.rounded.me-lg-2.mt-lg-1#liveToastBtn(@click="showToas('scanner')" type="button") По штрихкоду
                input.form-control.w-auto(type="text" v-model="searchList" @input="fetchSearchGods()" placeholder="Поиск по названию, коду, номеру")
        .toast-body.bg-light.scroll
            .toast-content.overflow-x-hidden.overflow-y-visibles.scroll(
                :style="{'height': height / (type === 'block' ? this.width <= '992' ? 1.6 : 1.2 : 2) + 'px'}")
                .row.g-2.scroll
                    .good-col.position-relative.col-6.col-xxl-2.col-lg-3.col-md-4.mb-2(v-for="(elem, index) in catalogGoodsList")
                        a.card.border.border-3.text-decoration-none.h-100(href="#" @click="selectCard(elem.idGoods, $event, elem.count)" :class="{ 'border-secondary': index == activeCard}")
                            img.card-img-top(:src="elem.img")
                            .card-body.p-1.text-center
                                h5.card-title.fs-7.fw-bold  {{ truncated(elem.title, 21) }}
                                p.card-text.fs-7 {{ truncated(elem.description, 45)}}
                            .card-footer.p-1.text-center
                                p.text-muted.m-0 {{ elem.eanCode }}
                                p.text-danger.m-0.p-0.fs-7(v-if="elem.count <= 0") Товара нет на складе

        .toast-footer.ps-2.mt-2.row(v-if="type === 'toast'")
                .col-8.d-flex
                    label.form-label.me-2.mb-0(:class="{'text-danger': count <= 0}") Кол-во:
                        input.form-control(type="number", v-model="count" @input="count = count < 0 ? 1 : count" name="count")
                    label.form-label.me-2.mb-0(:class="{'text-danger': price <= 0}") Стоимость за ед.(руб.):
                        input.form-control(type="number", v-model="price" @input="price = price < 0 ? 1 : price" name="price")
                .col-4.text-end.align-self-center
                    p.text-danger.m-0.p-0.me-2.d-block {{ errorAddGood }}
                    p.text-success.m-0.p-0.me-2.d-block(v-if="successMessage") Товар добавлен
                    button.btn.btn-outline-secondary.me-2(type="button" data-bs-dismiss="toast") Закрыть
                    button.btn.btn-outline-secondary.me-2(type="button" @click="addGoodToEntrance()") Выбрать
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import { ref } from 'vue'
export default
{
    props: {
        title: {
            type: String,
            default: ""
        },
        type: {
            type: String,
            default: "toast"
        }
    },
    data() {
        return {
            searchList: "",
            height: ref(window.innerHeight),
            width: ref(window.innerWidth),
            price: 0,
            count: 0,
            errorAddGood: "",
            successMessage: ""
        }
    },
    components: {
        
    },
    computed: {
        ...mapGetters(["catalogGoodsList", "activeCard", "warehouseEntranceObject", "catalogGood"])
    },
    methods: {
        ...mapActions(["fetchCatalogTreeGoods"]),
        ...mapMutations(["updateActiveCard", "updateCountGoods", "newWarehouseEntrance", "setWarehouseEntranceObjectGood", "getGoods"]),

        selectCard(index, event, count) {
            event.preventDefault()
            if (count > 0 && this.type !== 'toast') {
                this.updateActiveCard(index - 1)
                this.getGoods({value: this.activeCard + 1})
                this.updateCountGoods({obj: Array(this.catalogGood), operation: "-", select: true})
            } else if (this.type === 'toast') {
                this.updateActiveCard(index - 1)
            }
        },
        is(text) {
            this.newWarehouseEntrance()
        },
        successMessageInterval() {
            setInterval(() => {
                this.successMessage = false
            }, 2000);
        },
        addGoodToEntrance() {
            if (this.activeCard + 1) {
                this.getGoods({value: this.activeCard + 1})
                let findId = this.warehouseEntranceObject.goods.findIndex((e) => (e.idGoods == this.catalogGood.idGoods))
                if (findId === -1) {
                    let tmpGood = this.catalogGood

                    if (this.price > 0 && this.count > 0) {
                        tmpGood.count = this.count
                        tmpGood.price = this.price
                        this.setWarehouseEntranceObjectGood(tmpGood)
                        this.successMessage = "Товар добавлен"
                        this.errorAddGood = ""
                    } else {
                        this.errorAddGood = "Не все поля заполнены" 
                    }
                }
                else 
                    this.errorAddGood = "Этот товар уже добавлен" 
            } else {
                this.errorAddGood = "Товар для добавления не выбран"
            }
            
        },
        showToas(id) {
            let toast = document.getElementById(id)
            toast = new bootstrap.Toast(toast)
            toast.show()
        },
        truncated(str, maxLength) {
            return str.length >= maxLength ? str.substring(0, maxLength) + "..." : str
        },
        fetchSearchGods() {
            this.fetchCatalogTreeGoods({filterLine: this.searchList})
        }
    },
    async mounted() {
        this.fetchCatalogTreeGoods({})
    },
    watch: {
        searchList: function() {
            console.log(this.searchList);
        },
        successMessage: function() {
            this.successMessageInterval()
        }
    }
}
</script>

<style lang="scss" scoped>
.toast-height {
    height: 300px;
}
.full-height {
    height: calc(100vh - 85px)
}
.adaptive-height {
    height: calc(100vh - 174px)
}
.fs-7 {
    font-size: 0.7rem;
}
.good-col:hover {
    top: 5px;
}
</style>
