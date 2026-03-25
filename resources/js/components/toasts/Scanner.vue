<template lang="pug">
.Toast-scanner
    .toast#scanner.m-auto.bg-light(ref="scanner" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false" tabindex="-1")
        .toast-header.fs-4 Scanner
            button.ms-auto.btn-close(type="button" data-bs-dismiss="toast" aria-label="Close")
        .taost-body
            #qr.w-100
</template>

<script>
import { mapActions, mapGetters, mapMutations, ref} from 'vuex'
export default {
    data() {
        return {
            formatsToSupport: [
                Html5QrcodeSupportedFormats.QR_CODE,
                Html5QrcodeSupportedFormats.UPC_A,
                Html5QrcodeSupportedFormats.UPC_E,
                Html5QrcodeSupportedFormats.UPC_EAN_EXTENSION,
                Html5QrcodeSupportedFormats.EAN_13,
                Html5QrcodeSupportedFormats.EAN_8,
            ],
            html5QrcodeScanner: null
        }
    },
    computed: {
        ...mapGetters(["activeCard", "catalogGood"])
    },
    methods: {
        ...mapActions(["fetchGoodsList"]),
        ...mapMutations(["getGoods", "updateActiveCard", "updateShoppingCart", "updateTotalPriceCart"]),

        onScanSuccess(decodedText, decodedResult) {
            //this.fetchGoodsList(String(decodedText))
            this.getGoods({value: String(decodedText.substring(0, decodedText.length - 1)), type: "eanCode"})
            this.updateShoppingCart(this.catalogGood)
            this.updateTotalPriceCart()
            bootstrap.Toast.getInstance(this.$refs.scanner).dispose()

            this.scannerStart()            
        },
        startScanner() {
            this.html5QrcodeScanner = new Html5QrcodeScanner("qr", 
            { 
                fps: 60,
                qrbox: 300,
                rememberLastUsedCamera: true,
                formatsToSupport: this.formatsToSupport,
            });
            this.html5QrcodeScanner.render(this.onScanSuccess);
        },
        changeButtonUI() {
            let buttons = document.getElementById("qr").getElementsByTagName("button")
            for (let node of buttons) {
                node.classList.add("btn", "btn-sm", "btn-secondary")
            }
        },
        hideHeaderScanner() {
            let qrNodes = document.getElementById("qr")
            qrNodes.childNodes[0].classList.add("d-none")
        },
        scannerStart() {
            this.startScanner()
            this.changeButtonUI()
            this.hideHeaderScanner()
        }
    },
    mounted() {
        this.scannerStart()
    },
}
</script>

<style lang="scss" scoped>

</style>