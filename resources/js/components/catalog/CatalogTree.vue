<template lang="pug">
.catalog-tree.h-100.d-flex.flex-column.p-2.bg-dark.rounded-2.bg-gradient(style="--bs-bg-opacity: .2")
    input.form-control.mb-2(type="text" v-model="searchText" placeholder="Поиск по дереву")
    .overflow-tree.h-100.overflow-auto.scroll
        Tree(
            :nodes="data"
            :search-text="searchText"
            :gap="0"
            :indentSize="5"
            show-child-count
            @nodeClick="onNodeClick")
    //- .catalog-tree_footer.w-100.btn-group.pt-3.rounded-0.border-top
    //-     button.w-100.btn.btn-sm.btn-outline-primary Добавить
    //-     button.w-100.btn.btn-sm.btn-outline-primary Изменить
    //-     button.w-100.btn.btn-sm.btn-outline-primary Удалить
</template>

<script>
import Tree from "vue3-tree";
import "vue3-tree/dist/style.css";
import {mapGetters, mapActions, mapMutations} from "vuex"

export default {
    components: {
        Tree
    },
    data() {
        return {
            data: [],
            searchText: ""
        }
    },
    computed: {
        ...mapGetters(["catalogTab"])
    },
    methods: {
        ...mapActions(["fetchCatalogTreeGoods", "fetchCatalogTreeTab"]),
        ...mapMutations(["updateSelectCategoryGoods"]),
        onNodeClick(node) {
            this.updateSelectCategoryGoods(String(node.id))
            this.fetchCatalogTreeGoods({categoryGoods: String(node.id)})
        }
    },
    async mounted() {
        this.fetchCatalogTreeTab()
        this.data = this.catalogTab
    },
    // watch: {
    //     catalogTab: {
    //         handler(e) {
    //             console.log("hello");
    //         },
    //         deep: true
    //     },
    // }

}
</script>

<style lang="scss">
.tree-row:hover,
.tree-row-item:hover {
    cursor: pointer !important;
}

.tree-row-item {
    user-select: none;
}

.tree {
    overflow: auto !important;
}

</style>