<template lang="pug">
.row.m-2
    .sidenav.col-1
        sidenav()
    .speciality.mt-3.mb-3.col-11
        h1.text-center Главная
</template>
    
<script>

import {mapGetters, mapActions, mapMutations} from "vuex"
import indexMain from '../components/IndexMain'
import sidenav from "../components/blocks/Sidenav"
export default {
    components: {
        indexMain,
        sidenav
    },
}
</script>

<style lang="scss" scoped>

</style>