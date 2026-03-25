<template lang="pug">
nav.nav.d-flex.flex-column.h-100
    div.w-100(v-for="(nav, index) in navs" :key="index" :class="{'mt-auto': nav.bottom}")
        router-link(
            :to="nav.link"
            @click="tabClick(nav.tabId)"
            class="w-100 btn btn-sm rounded-0 btn-outline-info text-center"
            :class="{'rounded-top-3': index === 0}"
            v-if="getRole(nav.role)")
            i.bi.fs-3.text-white(:class="nav.icon")
            span.text-white.d-block {{ nav.name }}
</template>

<script>

import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
    data() {
        return {
            navs: [
                {
                    name: "Товары",
                    icon: "bi-box-seam",
                    link: "/",
                    role: ["Администратор", "Кладовщик"],
                    top: false
                },
                {
                    name: "Склад",
                    icon: "bi-boxes",
                    link: "/Entrance",
                    role: ["Администратор", "Кладовщик"],
                    top: false
                },
                {
                    name: "Кассы",
                    icon: "bi-pc-display-horizontal",
                    link: "/Cashiers",
                    role: ["Администратор"],
                    top: false
                },
                {
                    name: "Накладные",
                    icon: "bi-journal-text",
                    tabId: "document",
                    link: "/Invoice",
                    role: ["Администратор", "Кладовщик"],
                    top: false
                },
                {
                    name: "Сотрудники",
                    icon: "bi-person",
                    tabId: "employer",
                    link: "/Employer",
                    role: ["Администратор"],
                    top: false
                },
                {
                    name: "Чеки",
                    icon: "bi-receipt-cutoff",
                    tabId: "check",
                    link: "/Check",
                    role: ["Администратор"],
                    top: false
                },
                {
                    name: "Моя касса",
                    icon: "bi-cart",
                    tabId: "boxOffice",
                    link: "/BoxOffice",
                    role: ["Администратор"],
                    bottom: true
                }
            ]
        }
    },
    computed: {
        ...mapGetters(["user"])
    },
    methods: {
        ...mapMutations(["updateWarehouseCurrentTab"]),
        tabClick(tabId) {
            this.updateWarehouseCurrentTab(tabId)
        },
        getRole(roles) {
            return roles.some((role) => role === this.user.role)
        }
    },
    async mounted() {
        this.tabClick(this.$route.name)
    }
}
</script>

<style lang="scss" scoped>
.router-link-active {
    padding-left: 0 !important;
    padding-right: 0 !important;
    background-color: #0dcaf0;
}
</style>