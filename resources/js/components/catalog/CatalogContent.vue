<template lang="pug">
#Catalog.h-100
    .catalog-row.row.h-100
        .col-3.h-100
            catalogTree()
        .col-9.h-100
            catalogView()
</template>

<script>
import catalogTree from "./CatalogTree"
import catalogView from "./CatalogView"
export default {
    components: {
        catalogTree,
        catalogView
    }
}
</script>

<style lang="scss" scoped>

</style>