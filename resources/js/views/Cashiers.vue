<template lang="pug">
.row.m-2.h-100
    .sidenav.col-1.ps-0
        .sidenav-bg.bg-primary.h-100.rounded-3
            sidenav()
    .content.p-3.col-11.bg-light.rounded-3(:style="{'height': height - 80 + 'px'}")
        cashiersContent()
</template>    
<script>
import { ref } from 'vue'
import {mapGetters, mapActions, mapMutations} from "vuex"
import sidenav from "../components/blocks/Sidenav"
import cashiersContent from "../components/cashiers/CashiersContent"

export default {
    components: {
        sidenav,
        cashiersContent
    },
    data() {
        return {
            height: ref(window.innerHeight)
        }
    },
    methods: {
        resizeHandler(e) {this.height = ref(window.innerHeight)}
    },
    async mounted() {
        window.addEventListener("resize", this.resizeHandler)
    },
    destroyed() {
        window.removeEventListener("resize", this.resizeHandler)
    },
}
</script>

<style lang="scss" scoped>

</style>