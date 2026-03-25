<template lang="pug">
label.form-label.w-100.fs-5.text-secondary 
    span.ps-2.ms-1.mb-2.d-block {{label}}
    input.form-control.fs-5(:type="type" :name="id" :disabled="disabled" :value="value")
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            default: ""
        },
        value: {
            type: String,
            default: ""
        },
        label: {
            type: String,
            default: "Номер приказа"
        },
        type: {
            type: String,
            default: "text"
        },
        disabled: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped>

</style>