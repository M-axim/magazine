<template lang="pug">
label.form-label.w-100.fs-6.text-secondary 
    span.ps-2.ms-1.mb-2.d-block {{label}}
    input.form-control.fs-4(type="number" :name="id" :value="value" :min="min", :max="max")
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            default: "Number"
        },
        value: {
            type: Number,
            default: 1
        },
        label: {
            type: String,
            default: "Номер приказа"
        },
        min: {
            type: Number,
            default: 0
        },
        max: {
            type: Number,
            default: 4
        }
    }
}
</script>

<style scoped>

</style>