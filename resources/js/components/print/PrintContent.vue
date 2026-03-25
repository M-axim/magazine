<template lang="pug">

table.print.ttn.m-auto
  tbody
    tr
      td.text-right.row-desc(colspan='2')
        p Унифицированная форма № ТОРГ-12 Утверждена постановлением Госкомстата России от 25.12.98 № 132
    tr
      td.pt-5(colspan='2')
    tr
      td
        table.valign-middle(width='100%')
          tbody
            tr
              td(colspan='3')
              td.b.text-center(width='100') Код
            tr
              td.h17.psm.text-right(colspan='3') Форма по ОКУД
              td.text-center.bb2.no-bb(contenteditable) c
            tr
              td.bb(colspan='2', contenteditable)
                | ИП Веренина М.М., 056206931398, 141281, г. Оскол, Буденного 16,
                br
                | р/с 40802810270010175519, в банке МОСКОВСКИЙ ФИЛИАЛ АО КБ "МОДУЛЬБАНК", БИК 044525092, к/с 30101810645250000092
              td.psm.text-right по ОКПО
              td.b.bbl.bbr.text-center(contenteditable)
            tr
              td.row-desc(colspan='2') (организация-грузоотправитель, адрес, телефон, факс, банковские реквизиты)
              td
              td.b.bbl.bbr.text-center(rowspan='2', contenteditable)
            tr
              td.bb(colspan='3', contenteditable) –
            tr
              td.row-desc(colspan='2') (структурное подразделение)
              td Вид деятельности по ОКДП
              td.b.bbl.bbr.text-center(contenteditable)
            tr
              td(width='105px') Грузоотправитель 
              td.bb(contenteditable) {{ warehouseEntranceObject.provider }}
              td.psm.text-right по ОКПО
              td.b.bbl.bbr.text-center(contenteditable)
            tr
              td.row-desc(colspan='2') (организация, адрес, телефон, факс, банковские реквизиты)
              td
              td.b.bbl.bbr.text-center(rowspan='2', contenteditable)
            tr
              td Поставщик
              td.bb(contenteditable) {{ warehouseEntranceObject.provider }}
              td.psm.text-right по ОКПО
            tr
              td.row-desc(colspan='2') (организация, адрес, телефон, факс, банковские реквизиты)
              td
              td.b.bbl.bbr.text-center(rowspan='2', contenteditable)
            tr
              td Плательщик
              td.bb(contenteditable)
                | ИП Веренина М.М., 056206931398, 141281, г. Оскол, Буденного 16,
                br
                | р/с 40802810270010175519, в банке МОСКОВСКИЙ ФИЛИАЛ АО КБ "МОДУЛЬБАНК", БИК 044525092, к/с 30101810645250000092
              td.psm.text-right по ОКПО
            tr
              td.row-desc(colspan='2') (организация, адрес, телефон, факс, банковские реквизиты)
              td.b.text-right.psm(rowspan='2') номер
              td.b.bbl.bbr.text-center(rowspan='2', contenteditable)
            tr
              td.no-bb Основание
              td.bb(contenteditable) Договор
            tr
              td.row-desc(colspan='2') (договор, заказ-наряд)
              td.b.h17.text-right.psm дата
              td.b.bbl.bbr.text-center(contenteditable)
            tr
              td(colspan='2')
                p.text-lead.text-right.psm Транспортная накладная
              td.b.h17.psm.text-right номер
              td.b.bbl.bbr.text-center(contenteditable)
            tr
              td(colspan='2')
              td.b.h17.text-right.psm дата
              td.b.bbl.bbr.text-center(contenteditable) {{ getDate() }}
            tr
              td.text-right.psm(colspan='3') Вид операции
              td.b.bbb.bbl.bbr.h17.text-center(contenteditable)

    tr
      td(colspan='2')
        table(width='100%')
          tbody
            tr
              td.text-lead.text-bold.text-right.psm(style='vertical-align: middle') ТОВАРНАЯ НАКЛАДНАЯ
              td.psm
                table.text-center.table-border.table-ttn-date
                  tbody
                    tr
                      td Номер документа
                      td Дата составления
                    tr
                      td(contenteditable) {{ this.$route.params.id }}
                      td(contenteditable) {{ getDate()}}
    tr
      td(colspan='2')
        br
        table.table-torg12.table-border(width='100%')
          thead
            tr
              td.text-center(rowspan='2') Но 
                span мер 
                span по по 
                span рядку
              td(colspan='2') Товар
              td(colspan='2') Единица измерения
              td(rowspan='2') Вид упа 
                span ковки
              td(colspan='2') Количество
              td(rowspan='2') Масса 
                span брутто
              td(rowspan='2') Коли
                span.d-block чество 
                span (масса 
                span нетто)
              td(rowspan='2') Цена,
                span руб. коп.
              td(rowspan='2') Сумма без 
                span учета НДС, 
                span руб. коп.
              td(colspan='2') НДС
              td(rowspan='2') Сумма с 
                span учетом 
                span НДС, 
                span руб. коп. 
            tr
              td наименование, характеристика, сорт, артикул товара
              td код
              td наиме 
                span нование
              td код по ОКЕИ
              td в 
                span одном 
                span месте 
              td мест, 
                span штук
              td ставка, %
              td сумма,
                span руб. коп.
            tr
              td(v-for="(index) in 15" :key="index") {{ index }}
          tbody.torg12-content
            tr(v-for="(elem, index) in warehouseEntranceObject.goods" :key="index" contenteditable)
              td.td1 {{ index + 1 }}
              td.td2.text-center {{ elem.title}}
              td.td3 {{ elem.idGoods }}
              td.td4 {{ elem.unitMeasurement }}
              td.td5 
              td.td6 {{ elem.packagingType }}
              td.td7 {{ elem.count !== 0 ? elem.count : "" }}
              td.td8 {{ elem.count !== 0 ? elem.count : "" }}
              td.td9 {{ elem.massaBruto !== 0 ? elem.massaBruto : "" }}
              td.td10 {{ elem.massNetto }}
              td.td11 {{ elem.price }}
              td.td12.text-center {{ (elem.price * elem.count).toFixed(2) }}
              td.td13 {{ elem.nds }}
              td.td14 {{ getTotalNSDSum(elem.count, elem.price, elem.nds).toFixed(2) }}
              td.td15.text-center {{ ((elem.price * elem.count) + getTotalNSDSum(elem.count, elem.price, elem.nds)).toFixed(2) }}
              //td.td15.text-center.td-no-print(contenteditable='false')
                button.btn.btn-sm.user-select-none Убрать
            
          tbody
            tr(contenteditable)
              td.no-b.psm(colspan='7', align='right') Итого
              td(align='center') {{ totalCountGoods }}
              td
              td(align='center')
              td(align='center') X
              td(align='right') {{ totalSum.toFixed(2) }}
              td(align='center') X
              td
              td(align='right') {{ (totalSum + totalNDSSum).toFixed(2) }}
            tr.sale-row()
              td.no-b.psm(colspan='7', align='right') Скидка:
              td.no-b
              td.no-b
              td.no-b
              td(align='center') X
              td(align='right' contenteditable @input="getPercent") {{ percent }}
              td(align='center') X
              td
              td(align='right' contenteditable @input="getPercent") {{ percent }}
            tr(contenteditable)
              td.no-b.psm(colspan='7', align='right') Всего по накладной
              td(align='center') {{ totalCountGoods  }}
              td
              td(align='center') 
              td(align='center') X
              td(align='right') {{ totalSum.toFixed(2) }}
              td(align='center') X
              td(align='right') {{ totalNDSSum.toFixed(2) }}
              td(align='right') {{ (totalSum + totalNDSSum - percent).toFixed(2) }}

        br
        table(width='85%', align='right')
          tbody
            tr
              td
                table(width='60%')
                  tbody
                    tr
                      td(colspan='2') Товарная накладная имеет приложение на
                      td.bb(width='50%', contenteditable) -
                      td листах
                table(width='100%')
                  tbody
                    tr
                      td и содержит
                      td.bb(colspan='2', width='45%', contenteditable) {{ goodsLengthToWords }}
                      td порядковых номеров записей
                    tr
                      td.row-desc(colspan='3') (прописью)

        table.valign-bottom(width='85%', align='right')
          tbody
            tr
              td.pr-10(colspan='3', align='right') Масса груза (нетто)
              td.bb(contenteditable, align='center') -
              td.bb2.h20(width='195', align='center', contenteditable)
            tr
              td(colspan='3')
              td.row-desc (прописью)
              td.bb2(rowspan='2', align='center', contenteditable)
            tr
              td(width='100') Всего мест
              td.bb(width='130', contenteditable) -
              td.pr-10(width='150', align='right') Масса груза (брутто)
              td.bb(contenteditable, align='center') -
            tr
              td
              td.row-desc (прописью)
              td
              td.row-desc (прописью)
              td

    tr
      td
        br
        br
        table(width='100%')
          tbody
            tr
              td(width='50%', style='border-right: 1px solid #000;')
                table
                  tbody
                    tr
                      td.pr-10 Приложение (паспорта, сертификаты и т.п.) на
                      td.bb(width='150', contenteditable) -
                      td.pl-10 листах
                    tr
                      td
                      td.row-desc (прописью)
                      td
                    tr
                      td.text-bold.bb(colspan='3') Всего отпущено на сумму 
                        span.d-block {{totalSumWord}}
                    tr
                      td.row-desc(colspan='3') (прописью)
                // ----------------
                table
                  tbody
                    tr
                      td.pr-10 Отпуск груза разрешил
                      td.bb(width='120', align='center', contenteditable) ИП
                      td.w20
                      td.bb(width='100')
                      td.w20
                      td.bb(width='140', align='center', contenteditable) Веренина М.М.
                    tr
                      td
                      td.row-desc (должность)
                      td
                      td.row-desc (подпись)
                      td
                      td.row-desc (расшифровка подписи)
                    tr
                      td.pr-10(colspan='2') Главный (старший) бухгалтер
                      td.w20
                      td.bb(width='100')
                      td.w20
                      td.bb(width='140', contenteditable align='center') Веренина М.М.
                    tr
                      td(colspan='2')
                      td
                      td.row-desc (подпись)
                      td
                      td.row-desc (расшифровка подписи)
                    tr
                      td.pr-10 Отпуск груза произвел
                      td.bb(width='120', align='center', contenteditable) ИП
                      td.w20
                      td.bb(width='100')
                      td.w20
                      td.bb(width='140', align='center', contenteditable) Веренина М.М.
                    tr
                      td
                      td.row-desc (должность)
                      td
                      td.row-desc (подпись)
                      td
                      td.row-desc (расшифровка подписи)
                br
                table(align='right', width='75%', contenteditable)
                  tbody
                    tr
                      td(width='25%') М.П.
                      td.psm "     "
                      td.bb(width='25%')
                      td 2024 года
                      td(width='25%')

              td.pl-10
                table.valign-bottom
                  tbody
                    tr(contenteditable)
                      td.pr-10 По доверенности №
                      td.bb(width='150')
                      td.psm.bb(style='border-bottom-color: #fff;') от
                      td.bb(width='245')
                    tr
                      td выданной
                      td.bb.h20(colspan='3' contenteditable)
                    tr(contenteditable)
                      td
                      td.row-desc(colspan='3') (кем, кому (организация, должность, фамилия, и. о.))
                    tr
                      td
                      td.bb.h20(colspan='3' contenteditable)
                br
                table
                  tbody
                    tr
                      td.pr-10 Груз принял
                      td.bb(width='120' align="center") {{ employer.position }}
                      td.w20
                      td.bb(width='100')
                      td.w20
                      td.bb(width='140' align="center") {{ getName(employer.fullname) }}
                    tr
                      td
                      td.row-desc (должность)
                      td
                      td.row-desc (подпись)
                      td
                      td.row-desc (расшифровка подписи)
                    tr
                      td.pr-10 Груз получил грузополучатель
                      td.bb(width='120' style="vertical-align: bottom" align="center") {{ employer.position }}
                      td.w20
                      td.bb(width='100')
                      td.w20
                      td.bb(width='140' style="vertical-align: bottom" align="center") {{ getName(employer.fullname) }}
                    tr
                      td
                      td.row-desc (должность)
                      td
                      td.row-desc (подпись)
                      td
                      td.row-desc (расшифровка подписи)
                br
                table(align='right', width='75%', contenteditable)
                  tbody
                    tr
                      td(width='25%') М.П.
                      td.psm "     "
                      td.bb(width='25%')
                      td.psm 20     года
                      td(width='25%')
</template>

<script>
import { mapActions, mapMutations, mapGetters } from 'vuex'
import { convert as convertNumberToWordsRu } from 'number-to-words-ru'

export default
{
    components: {

    },
    data() {
        return {
            totalSum: 0,
            totalNDSSum: 0,
            goodsLength: 0,
            goodsLengthToWords: "",
            totalCountGoods: 0,
            totalNDSSumGoods: 0,
            totalSumWord: 0,
            percent: 0,
            employer: {}
        }
    },
    computed: {
        ...mapGetters(["warehouseEntranceObject", "user", "employerList"])
    },
    methods: {
        ...mapMutations(["getWarehouseEntranceObject"]),
        ...mapActions(["fetchWarehouseEntrance", "fetchEmployerList"]),
        exportExcell() {
             const table = document.getElementById('torg12');
             const wb = XLSX.utils.table_to_book(table, {sheet: 'sheet-1'});
             XLSX.writeFile(wb, 'torg12.xlsx', {cellStyles: true});
        },
        getTotalNSDSum(count, price, nds) {
          return (count * price) * nds / 100
        },
        getName(str) {
          if (str && str.length > 1) {
            let initials = ""
            let names = str.split(" ")
            return initials = names[0] + " " + names[1].substring(0, 1).toUpperCase() + "." + names[2].substring(0, 1).toUpperCase() + "."
          }
        },
        getPercent(e) {
          this.percent = e.target.innerText
        },
        getDate() {
          let date = String(this.warehouseEntranceObject.dateEntrace).split("-")
          return date[2] + "." + date[1] + "." + date[0] 
        }
    },
    async mounted() {

        await this.fetchWarehouseEntrance()
        await this.fetchEmployerList()

        this.getWarehouseEntranceObject(this.$route.params.id)

        this.employer = this.employerList.filter( (e) => e.idEmployer == this.warehouseEntranceObject.employerId)[0]

        this.totalSum = this.warehouseEntranceObject.goods.reduce( (sum, num) => { return sum + (num.count * num.price) }, 0)
    
        // НДС = итоговая сумма товара × ставку НДС / 100,
        this.totalNDSSum = this.warehouseEntranceObject.goods.reduce( (sum, num) => { return sum + ( (num.count * num.price) * num.nds / 100) }, 0)
        
        this.totalCountGoods = this.warehouseEntranceObject.goods.reduce( (sum, num) => { return sum + num.count }, 0)

        this.goodsLength = this.warehouseEntranceObject.goods.length

        this.goodsLengthToWords = convertNumberToWordsRu(this.goodsLength, {
          showNumberParts: {
            fractional: false
          },
          showCurrency: {
            integer: false
          }
        })

        this.totalSumWord = convertNumberToWordsRu((this.totalSum + this.totalNDSSum - this.percent).toFixed(2))
    }
}
</script>

<style lang="scss" scoped>
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
    display: block;
}
body {
    line-height: 1;
}
ol, ul {
    list-style: none;
}
blockquote, q {
    quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}

body {
    font-family: Arial;
    font-size: 9pt;
}
table {
    font-size: 9pt;
}
table thead td {
    text-align: center;
    font-weight: 700;
}

.td-no-print {
    @media print {display: none;}
}
.print > tbody > tr > td {
    border: none;
}
h3 {
    font-size: 14pt;
    font-weight: 700;
    margin-top: 10pt;
}

/* helpers */
.table-border td {border: 1px solid #000;}
.row-desc {
    border: none;
    text-align: center;
    font-size: 7pt;
    padding-top: 3px;
    padding-bottom: 3px;
}
// border
.b {border: 1px solid #000;}
.bb {border-bottom: 1px solid #000;}
.bt {border-top: 1px solid #000;}
.bl {border-left: 1px solid #000;}
.br {border-right: 1px solid #000}

.bb2 {border: 2px solid #000;}
.bbl {border-left: 2px solid #000;}
.bbr {border-right: 2px solid #000;}
.bbt {border-top: 2px solid #000;}
.bbb {border-bottom: 2px solid #000;}
// no-border
.no-b {border: none!important;}
.no-bb {border-bottom: none;}
.no-bt {border-top: none;}
.no-bl {border-left: none!important;}
.no-br {border-right: none;}
// padding
.psm {padding: 0 5px;}
.pt-5 {padding-top: 5px;}
.pt-10 {padding-top: 10px;}
.pt-15 {padding-top: 15px;}
.pl-10 {padding-left: 10px;}
.pr-10 {padding-right: 10px;}
// text
.text-bold {font-weight: 700;}
.text-center {text-align: center;}
.text-right {text-align: right;}
.text-lead {font-size: 11pt;}
// height & width
.h20 {height: 20px;padding-top: 0;padding-bottom: 0;}
.h17 {height: 17px;padding-top: 0;padding-bottom: 0;}
.w20 {width: 20px;}
// table vertical align
.valign-bottom,
.valign-bottom td {vertical-align: bottom;}
.valign-middle,
.valign-middle td {vertical-align: middle;}
// common styles
// top panel


// torg12
.print.ttn {width: 830pt;}
.table-ttn-date {
    td {padding: 2px;}
    tbody tr:last-child {
    td {
        border-top: 2px solid #000;
        border-bottom: 2px solid #000;
        &:first-child {border-left: 2px solid #000;}
        &:last-child {border-right: 2px solid #000;}
    }
    }
}



.table-torg12 {
    thead {
    td {
        font-weight: normal;
        vertical-align: middle;
    }
    }
    tbody {
    td {
        font-size: 8pt;
        padding: 1px 2px;
    }
    .td1 {width: 37px;text-align: center;}
    .td2 {width: 325px;}
    .td3 {width: 55px;text-align: center;}
    .td4 {width: 50px;text-align: center;}
    .td5 {width: 75px;text-align: center;}
    .td6 {width: 50px;text-align: center;}
    .td7 {width: 40px;text-align: center;}
    .td8 {width: 55px;text-align: center;}
    .td9 {width: 55px;text-align: center;}
    .td10 {width: 55px;text-align: center;}
    .td11 {width: 50px;text-align: center;}
    .td12 {width: 65px;text-align: right;}
    .td13 {width: 65px;text-align: center;}
    .td14 {width: 65px;text-align: right;}
    .td15 {width: 65px;text-align: right;}
    }
}

@media print {
    h1, div#header, div#sidebar, div#footer { display: none; }
    a[href]:after {content: none !important}
    @page {
            margin-top: 0;
            margin-bottom: 0;
            }
            body  {
            padding-top: 72px;
            padding-bottom: 72px ;
            }
    @page :footer {
        display: none
    }
    
    @page :header {
        display: none
    }
    a[href]:after {
        content: none !important;
    }
}

</style>