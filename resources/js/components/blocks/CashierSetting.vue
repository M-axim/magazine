<template lang="pug">

.offcanvas.offcanvas-start.position.relative(ref="offCanvas" tabindex="-1" id="cashierSetting" data-bs-backdrop="false" aria-labelledby="cashierOffcanvas")
    .offcanvas-header
        h5.offcanvas-title#cashierOffcanvas Касса
        button.btn-close(data-bs-dismiss="offcanvas" aria-label="Закрыть")
    .offcanvas-body.pt-0.d-flex.flex-column
        .offcanvas-user.fs-6.text-center
            .offcanvas-user__lastName.fs-4.fw-bold {{user.name}}
            //.offcanvas-user__shift Смена №1 от 02.02.2024 20:14
            .offcanvas-user__boxOffice Касса - {{user.cashierName}}
        hr
        //- .offcanvas-list.list-group 
        //-     .list-group-item Настройка 1
        //-     .list-group-item Настройка 2
        .offcanvas-exit.w-100.mt-auto
            button.btn.btn-primary.rounded-pill.w-100(@click="updateRole('user')") Выйти
    .offcanvas-menu.offcanvas-menu__first.position-absolute

</template>

<style lang="scss">

</style>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex"

export default {
    computed: {
        ...mapGetters(["user"])
      },
      methods: {
        ...mapMutations(["updateRole"]),
        hideThisCanvas() {
            let myOffcanvas = this.$refs.Offcanvas
            let bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas);
            bsOffcanvas.hide();
        }
      },
      destroyed() {
            //this.hideThisCanvas()
      },
      mounted()
      {

      }
}
</script>