<template lang="pug">
#Checks.h-100
    .warehouse-table.table-responsive-lg.overflow-scroll.scroll(:style="{'height': height - 160 + 'px'}")
        table.table.table-sm.table-hover.table-bordered.table-borderless
            thead.text-center
                tr.fs-5.text-nowrap
                    th(data-id="idChecks" scope="col") Код чека
                    th(data-id="dateEntrace" scope="col") Касса
                    th(data-id="provider" scope="col") Дата
                    th(data-id="setting" scope="col") Настройки
            tbody
                tr.fs-5.text-nowrap(v-for="(item, index) in checksList" :key="index")
                    th(scope="col") {{item.checksId}}
                    td {{item.cashierName }}
                    td {{item.date }}
                    td 
                        button.btn.btn-outline-primary.me-2(@click="getCheckItem(item.checksId), showToas('newCheck')") Просмотреть
    
.toast-container.position-absolute.top-50.start-50.translate-middle.w-100(:style="{'z-index': 2000}")
    NewCheck()
</template>

<script>

import { mapActions, mapGetters, mapMutations } from 'vuex'
import NewCheck from "./toasts/newCheck"
import { ref } from 'vue'

export default
{
    components: {
        NewCheck
    },
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters(["checksList"])
    },
    methods: {
        ...mapActions(["fetchChecksList"]),
        ...mapMutations(["getCheckItem"]),
        showToas(id) {
            let toast = document.getElementById(id)
            toast = new bootstrap.Toast(toast)
            toast.show()
        },
        getDate(strDate) {
            let date = String(strDate).split("-")
            return date[2] + "." + date[1] + "." + date[0] 
        }
    },
    async mounted() {
        await this.fetchChecksList()
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