<template lang="pug">

header.header.user-select-none(v-if="user.role !== 'Кассир' && user.role !== 'print' && user.role !== 'user'").no-print
  nav.navbar.navbar-expand-lg.navbar-dark.bg-primary.rounded-3.m-2
    .container-fluid
      router-link(:to="`/`" class="text-white nav-link") На главную
      button.navbar-toggler.p-1.p-md-2(type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='offcanvasDarkNavbar')
        span.navbar-toggler-icon
      .collapse.navbar-collapse#navbarSupportedContent
        ul.navbar-nav.ms-auto
          li.nav-item.position-relative.align-items-center.h-100.dropdown.dropstart.btn-group(v-if="user.role !== 'user'")
            
            span.text-white.nav-link.py-0 {{ getName(name) }} ({{ user.role }})
            .vr.bg-white.mx-3

            button.btn.btn-sm.btn-primary.px-3.rounded-5(@click="updateRole('user')")
              i.bi.bi-box-arrow-in-left.cursor-pointer.icon-padding Выйти
              
</template>
    
<script>
import {mapActions, mapGetters, mapMutations} from "vuex"

import tabsItems from "./TabsItems"

    export default {
      data() {
        return {
          name: ""
        }
      },
      components: {
        tabsItems
      },
      computed: {
        ...mapGetters(["user"])
      },
      methods: {
        ...mapMutations(["updateRole", "updateUser"]),
        ...mapActions(["fetchUser"]),
        getName(str) {
          if (str && str.length > 1) {
            let initials = ""
            let names = str.split(" ")
            return initials = names[0] + " " + names[1].substring(0, 1).toUpperCase() + "." + names[2].substring(0, 1).toUpperCase() + "."
          }
        }
      },
      async mounted()
      {
        this.fetchUser()
      },
      // watch: {
      //   user: function() {
      //     if (JSON.parse(localStorage.getItem('user')).role === "user")
      //       this.$router.push({ name: 'Home'});
      //     else
      //       this.$router.push({ name: 'Cashiers'});
      //   }
      // },
      watch: {
        user: { 
          handler() {
            if (JSON.parse(localStorage.getItem('user')).role === "user")
              this.$router.push({ name: 'Auth'});
            else if (JSON.parse(localStorage.getItem('user')).role === "Кассир")
              this.$router.push({ name: 'BoxOffice'})
            else {
              this.name = JSON.parse(localStorage.getItem("user")).name
            }
          },
          deep: true
        }
      },
}
</script>

<style lang="scss" scoped>
button i::before {
  margin-right: 0.3rem;
}
.fs-7 {
  font-size: 0.7rem;
}
</style>