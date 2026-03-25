<template lang="pug">
.toast-container.position-absolute.top-50.start-50.translate-middle.w-100
    .toast#torg12Toats.w-100.m-auto.bg-light(role="alert" aria-live="assertive" aria-atomic="true")
        .toast-header.fs-4 Товарная накладная
            button.ms-auto.btn-close(type="button" data-bs-dismiss="toast" aria-label="Close")
        .toast-body.toast-overflow
            table.table.table-small.table-striped.table-hover.table-bordered.border-primary.table-success.m-0#torg12
                thead
                    tr.fs-6
                        td.user-select-none(colspan="15")
                        td.user-select-none(colspan="1" ) Код
                    tr.fs-6
                        td.user-select-none(colspan="14")
                        td.user-select-none(colspan="1") Форма по ОКУД
                        td.user-select-none(colspan="1") 
                    tr.fs-6
                        td.user-select-none(colspan="14") ________________________________
                        td.user-select-none(colspan="1") ПО ОКПО
                        td.user-select-none(colspan="1") 
                    tr.fs-6
                        td.user-select-none.small-td(colspan="14" align="center") (наименование организации, адрес, номер телефона, банковские реквизиты)
                        td.user-select-none.small-td(colspan="2")
                    tr.fs-6
                        td.user-select-none(colspan="15") ________________________________
                        td.user-select-none(colspan="1")                         
                    tr.fs-6
                        td.user-select-none.small-td(colspan="14" align="center") (наименование организации, адрес, номер телефона, банковские реквизиты)
                        td.user-select-none.small-td(colspan="2")
                    tr.fs-6
                        td.user-select-none(colspan="14")
                        td.user-select-none(colspan="1") Вид деятельности по ОКДП
                        td.user-select-none(colspan="1") 
                    tr.fs-6
                        td.user-select-none.small-td(colspan="14" align="center") (наименование организации, адрес, номер телефона, банковские реквизиты)
                        td.user-select-none.small-td(colspan="2")
                    tr.fs-6
                        td.user-select-none(colspan="2") Грузополучатель
                        td.user-select-none(colspan="12") ________________________________
                        td.user-select-none(colspan="1") ПО ОКПО
                        td.user-select-none(colspan="1") 
                    tr.fs-6
                        td.user-select-none.small-td(colspan="14" align="center") (наименование организации, адрес, номер телефона, банковские реквизиты)
                        td.user-select-none.small-td(colspan="2")
                    tr.fs-6
                        td.user-select-none(colspan="2") Поставщик
                        td.user-select-none(colspan="12") ________________________________
                        td.user-select-none(colspan="1") ПО ОКПО
                        td.user-select-none(colspan="1")
                    tr.fs-6
                        td.user-select-none.small-td(colspan="14" align="center") (наименование организации, адрес, номер телефона, банковские реквизиты)
                        td.user-select-none.small-td(colspan="2")
                    tr.fs-6
                        td.user-select-none(colspan="2") Плательщик 
                        td.user-select-none(colspan="12") ________________________________
                        td.user-select-none(colspan="1") ПО ОКПО
                        td.user-select-none(colspan="1")
                    tr.fs-6
                        td.user-select-none.small-td(colspan="14" align="center") (наименование организации, адрес, номер телефона, банковские реквизиты)
                        td.user-select-none.small-td(colspan="2")
                    tr.fs-6
                        td.user-select-none(colspan="2") Основание 
                        td.user-select-none(colspan="12") ________________________________
                        td.user-select-none(colspan="1") номер
                        td.user-select-none(colspan="1")
                    tr.fs-6
                        td.user-select-none.small-td(colspan="14" align="center") (наименование организации, адрес, номер телефона, банковские реквизиты)
                        td.user-select-none.small-td(colspan="2")
                    tr.fs-6
                        td.user-select-none(colspan="14")  
                        td.user-select-none(colspan="1") дата
                        td.user-select-none(colspan="1")
                    tr.fs-6
                        td.user-select-none(colspan="12")
                        td.user-select-none(colspan="2") Транспортная накладная
                        td.user-select-none(colspan="1") номер
                        td.user-select-none(colspan="1")
                    tr.fs-6
                        td.user-select-none(colspan="14")  
                        td.user-select-none(colspan="1") дата
                        td.user-select-none(colspan="1")
                    tr.fs-6
                        td.user-select-none(colspan="14")
                        td.user-select-none(colspan="1") Вид операции
                        td.user-select-none(colspan="1")
                tbody
                    tr.fs-6
                        td.user-select-none(colspan="10")
                        td.user-select-none(colspan="1") Номер документа
                        td.user-select-none(colspan="1") Дата составления
                        td.user-select-none(colspan="4")
                    tr.fs-6
                        td.user-select-none(colspan="6")
                        td.user-select-none(colspan="4") Товарная накладная
                        td.user-select-none(colspan="1")
                        td.user-select-none(colspan="1")
                        td.user-select-none(colspan="4")
                    tr.fs-6
                        td.user-select-none(colspan="16")
                    tr.fs-6
                        td.user-select-none(colspan="1" rowspan="2") Номер по порядку
                        td.user-select-none(colspan="3") Товар
                        td.user-select-none(colspan="2") Единица измерения
                        td.user-select-none(colspan="1" rowspan="2") Вид упаковки
                        td.user-select-none(colspan="2") Количество
                        td.user-select-none(colspan="1" rowspan="2") Масса брутто
                        td.user-select-none(colspan="1" rowspan="2") Количество (масса нетто)
                        td.user-select-none(colspan="1" rowspan="2") Цена, руб. коп
                        td.user-select-none(colspan="1" rowspan="2") Сумма без учета НДС, руб. коп.
                        td.user-select-none(colspan="2") НДС
                        td.user-select-none(colspan="1" rowspan="2") Сумма с учетом НДС,
                    tr.fs-6
                        td.user-select-none(colspan="2") наименование, характеристика, сорт, артикул товара 
                        td.user-select-none(colspan="1") код
                        td.user-select-none(colspan="1") наименование
                        td.user-select-none(colspan="1") код по ОКЕИ
                        td.user-select-none(colspan="1") в одном месте
                        td.user-select-none(colspan="1") мест, штук
                        td.user-select-none(colspan="1") ставка, %
                        td.user-select-none(colspan="1") сумма, руб. коп.
                    tr.fs-6
                        td.user-select-none(colspan="1") 1
                        td.user-select-none(colspan="2") Молоко
                        td.user-select-none(colspan="1") mk-12
                        td.user-select-none(colspan="1") л.
                        td.user-select-none(colspan="1") 715
                        td.user-select-none(colspan="1") -
                        td.user-select-none(colspan="1") -
                        td.user-select-none(colspan="1") -
                        td.user-select-none(colspan="1") -
                        td.user-select-none(colspan="1") 2
                        td.user-select-none(colspan="1") 40
                        td.user-select-none(colspan="1") 80
                        td.user-select-none(colspan="1") 15%
                        td.user-select-none(colspan="1") 12
                        td.user-select-none(colspan="1") 92
                tfoot
                    tr.fs-6
                        td.user-select-none(colspan="2")
                        td.user-select-none(colspan="5") Товарная накладная имеет приложение на -
                        td.user-select-none(colspan="5") ______________________
                        td.user-select-none(colspan="1") листах
                        td.user-select-none(colspan="3") 
                    tr.fs-6
                        td.user-select-none(colspan="2")
                        td.user-select-none(colspan="2") И содержит
                        td.user-select-none(colspan="6") ______________________
                        td.user-select-none(colspan="3") порядковых номеров записей
                        td.user-select-none(colspan="3") 
                    tr.fs-6
                        td.user-select-none(colspan="8")
                        td.user-select-none(colspan="1") (прописью)
                        td.user-select-none(colspan="7")
                    tr.fs-6
                        td.user-select-none(colspan="7")
                        td.user-select-none(colspan="3") Масса груза (нетто)
                        td.user-select-none(colspan="4") ______________________
                        td.user-select-none(colspan="2") ______________________
                    tr.fs-6
                        td.user-select-none(colspan="2")
                        td.user-select-none(colspan="2") Всего мест
                        td.user-select-none(colspan="2") ______________________
                        td.user-select-none(colspan="1")
                        td.user-select-none(colspan="3") Масса груза (брутто)
                        td.user-select-none(colspan="4") ______________________
                        td.user-select-none(colspan="2") ______________________
                    tr.fs-6
                        td.user-select-none(colspan="4")
                        td.user-select-none(colspan="1") (прописью)
                        td.user-select-none(colspan="7")
                        td.user-select-none(colspan="1") (прописью)
                        td.user-select-none(colspan="5")
                    tr.fs-6
                        td.user-select-none(colspan="16")
                    tr.fs-6
                        td.user-select-none(colspan="4") Приложение (паспорта, сертификаты и т.п.) на
                        td.user-select-none(colspan="3") __________________ 
                        td.user-select-none(colspan="1") листах
                        td.user-select-none(colspan="2") По договоренности №
                        td.user-select-none(colspan="1") __________________ 
                        td.user-select-none(colspan="1") от
                        td.user-select-none(colspan="1") «__________»
                        td.user-select-none(colspan="1") __________________ 
                        td.user-select-none(colspan="1") «_____»
                        td.user-select-none(colspan="1") года,
                    tr.fs-6
                        td.user-select-none(colspan="5")
                        td.user-select-none(colspan="6") (прописью)
                        td.user-select-none(colspan="10") 
                    tr.fs-6
                        td.user-select-none(colspan="3") Всего отпущено на сумму
                        td.user-select-none(colspan="4") __________________
                        td.user-select-none(colspan="1") выданной
                        td.user-select-none(colspan="8") __________________
                    tr.fs-6
                        td.user-select-none(colspan="5")
                        td.user-select-none(colspan="1") (прописью)
                        td.user-select-none(colspan="5") 
                        td.user-select-none(colspan="7") (кем, кому (организация, место работы, должность, фамилия, и., о.))
                    tr.fs-6
                        td.user-select-none(colspan="4") __________________
                        td.user-select-none(colspan="1") руб
                        td.user-select-none(colspan="2") 
                        td.user-select-none(colspan="1") коп.
                        td.user-select-none(colspan="8") __________________
                    tr.fs-6
                        td.user-select-none(colspan="2") Отпуск разрешил
                        td.user-select-none(colspan="2") __________________
                        td.user-select-none(colspan="2") __________________
                        td.user-select-none(colspan="2") __________________
                        td.user-select-none(colspan="8") __________________
                    tr.fs-6
                        td.user-select-none(colspan="2")
                        td.user-select-none(colspan="1") (должность)
                        td.user-select-none(colspan="2")
                        td.user-select-none(colspan="1") (подпись)
                        td.user-select-none(colspan="2") (Расшифровка подписи)
                        td.user-select-none(colspan="8") __________________
                    tr.fs-6
                        td.user-select-none(colspan="4") Главный (старший) бухгалтер
                        td.user-select-none(colspan="2") __________________
                        td.user-select-none(colspan="2") __________________
                        td.user-select-none(colspan="2") Груз принял
                        td.user-select-none(colspan="2") __________________
                        td.user-select-none(colspan="2") __________________
                        td.user-select-none(colspan="2") __________________
                    tr.fs-6
                        td.user-select-none(colspan="4")
                        td.user-select-none(colspan="1") (подпись)
                        td.user-select-none(colspan="1")
                        td.user-select-none(colspan="2") (Расшифровка подписи)
                        td.user-select-none(colspan="2")
                        td.user-select-none(colspan="1") (должность)
                        td.user-select-none(colspan="1")
                        td.user-select-none(colspan="2") (подпись)
                        td.user-select-none(colspan="2") (Расшифровка подписи)
                    tr.fs-6
                        td.user-select-none(colspan="3") Отпуск груза произвел
                        td.user-select-none(colspan="2") __________________
                        td.user-select-none(colspan="1") __________________
                        td.user-select-none(colspan="2") __________________
                        td.user-select-none(colspan="3") Груз получил грузополучатель
                        td.user-select-none(colspan="2") __________________
                        td.user-select-none(colspan="1") __________________
                        td.user-select-none(colspan="2") __________________
                    tr.fs-6
                        td.user-select-none(colspan="3")
                        td.user-select-none(colspan="2") (должность)
                        td.user-select-none(colspan="1") (подпись)
                        td.user-select-none(colspan="2") (Расшифровка подписи)
                        td.user-select-none(colspan="3")
                        td.user-select-none(colspan="2") (должность)
                        td.user-select-none(colspan="1") (подпись)
                        td.user-select-none(colspan="2") (Расшифровка подписи) 
                    tr.fs-6
                        td.user-select-none(colspan="1") М.П.
                        td.user-select-none(colspan="7")
                        td.user-select-none(colspan="1") М.П.
                        td.user-select-none(colspan="7")

        .toast-footer.fs-4.text-end.m-2
            button.btn.btn-outline-secondary.me-auto.p-2.ms-2(type="button" data-bs-dismiss="toast") Выйти
            //button.btn.btn-outline-secondary.me-auto.p-2.ms-2(type="button" @click="exportExcell()")#btn-torg12-export Экспортировать в excell
            
            a.btn.btn-outline-secondary.me-auto.p-2.ms-2#btn-torg12-export(href="print", target="_blank", rel="noopener noreferrer") печать
</template>

<script>
export default
{
    components: {

    },
    data() {
        return {
        }
    },
    methods: {
        exportExcell() {
             const table = document.getElementById('torg12');
             const wb = XLSX.utils.table_to_book(table, {sheet: 'sheet-1'});
             XLSX.writeFile(wb, 'torg12.xlsx', {cellStyles: true});
        }
    },
    async mounted() {
    }
}
</script>

<style lang="scss" scoped>
    .toast-overflow {
        height: 400px;
        overflow-x: auto;
        overflow-y: auto;
    }
    .table-small > :not(caption) > * > * {
        padding: 0.2rem 0.2rem !important;
    }
    .small-td {
        padding: 0;
        margin: 0;
    }

    

</style>