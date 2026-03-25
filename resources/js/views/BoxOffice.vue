<template lang="pug">
.m-2.overflow-hidden.h-100
    // Offcanvas menu
    cashierSetting()

    .boxOffice.w-100.position-relative.rounded-3.p-0(:style="{'height': (height - headerHeight - 30) + 'px'}" :class="{'row': this.widthWindow >= 993}")
        .boxOffice-cash.col-12.col-lg-4(:class="{'boxOffice-cash__show': this.widthWindow <= 992 && this.boxOfficeOpen, 'h-100': this.boxOfficeOpen === true, 'boxOffice-cash__close': this.boxOfficeOpen === false}")
            .boxOffice-cash__wrapper.p-2.bg-light.rounded-3.h-100
                nav.navbar.boxOffice-cash__header.row.position-relative
                    .boxOffice-burger.position-absolute.top-50.start-0.translate-middle-y.ms-2.w-25(:style="{'z-index': '10'}")
                        button.navbar-toggler(type="button" data-bs-toggle="offcanvas" data-bs-target="#cashierSetting" aria-controls="cashierSetting" aria-expanded="false" aria-label="Переключатель настроек")
                            span.navbar-toggler-icon.fs-6.m-0
                    .col-12.text-center
                        h2.fw-bold.mb-0.fs-5 Чек {{ checksList.length + 1 }}
                    .position-absolute.top-50.end-0.translate-middle-y.d-lg-none.text-end
                        button.btn.btn-sm.rounded-pill.btn-primary(@click="this.boxOfficeOpen = false") К товарам
                .divider.w-100.bg-dark.opacity-50.my-2
                .boxOffice-cash__body
                    .boxOffice-goods.row.overflow-y-auto.flex-column.flex-nowrap.w-100(:style="{'height': height - headerHeight - 170 + 'px'}")
                        .boxOffice-good.row.mb-2.fs-5.w-100.mx-auto(v-for="(elem, index) in shoppingCart" :key="index")
                            .boxOffice-col__left.col-2.d-flex.align-self-center
                                button.btn.btn-sm(@click="removeGoodsShoppingCart(elem), updateCountGoods({obj: Array({idGoods: elem.idGoods, count: 1}), operation: '+'})")
                                    trashIcon()
                            .boxOffice-col__main.col-7.fs-6 {{truncated(elem.shoppingName, 40)}}
                            .boxOffice-col__right.col-3
                                .boxOffice-price.vstack.text-end.fw-bold.fs-6
                                    .boxOffice-price-top {{ (elem.price * elem.count).toFixed(2) }}
                                    .boxOffice-price-bottom.opacity-50 {{ elem.price }} * {{ elem.count }}
                            .divider.w-100.bg-dark.opacity-50.my-3

                .boxOffice-cash__footer.mt-3.px-2
                    button.btn.btn-sm.row.rounded-pill.btn-primary.m-auto.w-100.d-flex.align-items-center(@click="submitCheck()")
                        span.boxIffce-cash__left.col-6.fs-6.text-start К оплате
                            span.ms-2 
                                arrowRight()
                        span.boxIffce-cash__right.col-6.fs-6.text-end {{ this.totalPriceCart }} Руб.
        .boxOffice-goods.col-12.col-lg-8.pt-lg-0.rounded-3.h-100(:class="{'boxOffice-goods__padding': this.widthWindow <= 992}")
            toastSelectGodsVue(:title="`boxOffice`" :type="`block`")
    .toast-container.position-absolute.top-50.start-50.translate-middle
        scanner()
</template>

<script>
import scanner from '../components/toasts/Scanner'
import toastSelectGodsVue from '../components/toasts/ToastSelectGods'
import cashierSetting from "../components/blocks/CashierSetting"
import trashIcon from "../components/icons/Trash-icon"
import arrowRight from "../components/icons/Arrow-right"
import { mapActions, mapGetters, mapMutations } from 'vuex'
import { ref } from 'vue'

export default {
    components: {
        toastSelectGodsVue,
        scanner,
        cashierSetting,
        trashIcon,
        arrowRight
    },
    data() {
        return {
            widthWindow: 0,
            boxOfficeOpen: true,
            height: ref(window.innerHeight),
            headerHeight: 0
        }
    },
    computed: {
        ...mapGetters([
            "shoppingCart",
            "activeCard",
            "catalogGood",
            "totalPriceCart",
            "user",
            "checksList"])
    },
    methods: {
        ...mapActions(["fetchUser", "fetchChecksList", "fetchCashierList"]),
        ...mapMutations([
            "updateShoppingCart",
            "newChecksList",
            "updateTime",
            "updateTotalPriceCart",
            "removeGoodsShoppingCart",
            "clearShoppingCart",
            "getGoods",
            "updateActiveCard",
            "updateUser",
            "updateCountGoods"]),

        truncated(str, maxLength) {
            return str.length >= maxLength ? str.substring(0, maxLength) + "..." : str
        },
        changeScrollBody() {
            let body = document.getElementsByTagName('body')
            body[0].classList.toggle('overflow-hidden')
        },
        submitCheck() {
            if (this.boxOfficeOpen === false) {
                this.boxOfficeOpen = true
            }
            else {
                // this.updateCountGoods({obj: this.shoppingCart, operation: "-"})
                this.newChecksList({
                    name: "Касса " + this.user.cashierName,
                    goods: this.shoppingCart
                })
                this.updateTime({
                    cashierId: this.user.cashierName,
                    time: new Date().toLocaleString()
                })
                this.clearShoppingCart()
                this.updateTotalPriceCart()
            }

        }
    },
    created() {
        window.addEventListener('resize', onResize);
        const onResize = () => this.widthWindow = window.innerWidth
        onResize();

        if (this.widthWindow <= 992)
            this.changeScrollBody()
    },
    async mounted() {
        await this.fetchCashierList()
        await this.fetchChecksList()
    },
    watch: {
        activeCard: {
            handler(e) {
                this.getGoods({value: this.activeCard + 1})
                this.updateShoppingCart(this.catalogGood)
                this.updateTotalPriceCart()
                // Сбрасываем активную карточку для возможности бесперебойного
                // добавления одного и того же товара
                this.updateActiveCard(-1)
            },
            deep: true
        },
        boxOfficeOpen: function () {
            this.changeScrollBody()
        }
    }
}
</script>

<style lang="scss" scoped>
.divider {
    display: block;
    height: 1px;
}
.ToastSelectGods {
    background-color: black;
}

.boxOffice-cash__mobile {
    position: absolute;
    z-index: 3;
    overflow-x: hidden;
}

.boxOffice-cash__close {
    position: absolute;
    z-index: 3;
    bottom: 90%;
    overflow-x: hidden;
}

.boxOffice-cash__show {
    position: absolute;
    z-index: 3;
    bottom: 0%;
    overflow-x: hidden;
}

.right-arrow {
    display: inline-block;
    width: 15px;
    height: 15px;
    border-top: 2px solid #ffffff;
    border-right: 2px solid #ffffff;
    transform: rotate(45deg);
}

.boxOffice-goods__padding {
    padding-top: 5rem;
}

</style>