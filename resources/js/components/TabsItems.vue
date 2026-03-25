<template lang="pug">
ul.nav.nav-pills.fs-4.pt-3.text-nowrap.flex-nowrap.position-relative.overflow-auto(role="tablist")
    li.nav-item.p-1(role="presentation" v-for="(tabsItem, index) in TabsItems" :key="index")
        button.nav-link(
            data-bs-toggle="tab"
            :data-bs-target="'#' + tabsItem.tabId"
            type="button"
            role="tab"
            @click="tabClick(tabsItem.tabId)"
            :aria-controls="tabsItem.tabId"
            :aria-selected="tabsItem.selected"
            :class="{active: tabsItem.selected}") {{tabsItem.text}}
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
    props: {
        TabsItems: {
            type: Array
        }
    },
    data() {
        return {
            selectPage : ""
        }
    },
    methods: {
        ...mapMutations(["updateWarehouseCurrentTab"]),
        tabClick(tabId) {
            this.updateWarehouseCurrentTab(tabId)
        }
    },
}
</script>

<style lang="scss" scoped>

</style>