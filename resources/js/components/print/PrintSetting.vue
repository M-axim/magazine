<template lang="pug">
.no-print.m-2.rounded-3.user-select-none
  //- button.btn.btn-outline-primary.ms-2.btn-add Добавить товар
  div.ms-2
    p.m-0 Нажмите на текст в ячейках в таблице, чтобы редактировать
  button.btn.btn-outline-primary.me-2.btn-print(onclick="window.print()") Печать
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>