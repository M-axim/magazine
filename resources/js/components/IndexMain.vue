<template lang="pug">
.accordion-block
    accordionSetting
    #accordionGroup.accordion
        accordionItem
</template>

<script>
import accordionItem from './accordionGroup/AccordionItem'
import accordionSetting from './accordionGroup/AccordionSetting'

    export default {
        components: {
            accordionItem,
            accordionSetting
        }
    }
</script>

<style lang="scss" scoped>

</style>