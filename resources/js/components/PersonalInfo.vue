<template lang="pug">
.personal-info.mt-4
    form.row
        .col-12.col-lg-6(v-for="(personalInfoSide, index) in personalInfo" :key="index")
            .personal-info__line.mb-3(v-for="personalInfoLine in personalInfoSide")
                label.form-label.w-100.fs-5.ps-2.ms-1.text-secondary(:for="personalInfoLine.labelId") {{personalInfoLine.labelName}}
                input.form-control.fs-4#personalFullname(:type="personalInfoLine.inputType" :value="personalInfoLine.inputValue")
        .w-100.pt-1.text-center.text-lg-end
            button.btn.btn-primary.fs-4(type="submit") Обновить личные данные студента
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex"

export default {
    data() {
        return {
            personalFormContext: [{
                
            }]
        }
    },
    computed: {
        ...mapGetters(["personalInfo"])
    },
    methods: {
        ...mapActions(["fetchPersonalInfo"])
    },
    async mounted() {
        this.fetchPersonalInfo()     
    },
}
</script>

<style scoped>

</style>