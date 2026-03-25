<template lang="pug">
label.form-label.w-100 {{label}}
    select.form-select.fs-6(:class="{'form-select-sm': small, 'py-0': small}", aria-label="select example" @change="$emit('update:value', $event.target.value)")
        option(
            v-for="(option, index) in options"
            :key="index"
            :value="option.value"
            :selected="option.value === rating") {{option.text}}
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            default: ""
        },
        small: {
            type: Boolean,
            default: false 
        },
        rating: {
            type: Number,
            default: -1
        },
        options: {
            type: Array,
            default: [
                {
                    value: -1,
                    text: "0"
                },
                {
                    value: 3,
                    text: "3(Удовлетворительно)"
                },
                {
                    value: 4,
                    text: "4(Хорошо)"
                },
                {
                    value: 5,
                    text: "5(Отлично)"
                },
                {
                    value: 0,
                    text: "Зачтено"
                },
            ]
        }
    },
    emits: ['update:value'],
    methods: {
        changeValue(value) {
            this.$emit("update:value", value)
        }
    },
}
</script>

<style scoped>

</style>