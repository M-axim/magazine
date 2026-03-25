<template lang="pug">
printSetting()
printContent(:table="torg12")
</template>

<script>
import printSetting from '../components/print/PrintSetting'
import printContent from '../components/print/PrintContent'

export default {
    components: {
        printSetting,
        printContent
    },
    data() {
        return {
            torg12: {
                goodsList: [
                    {
                        id: 1,
                        goodsName: "Футболка для мальчика 523BNT",
                        unitName: "шт.",
                        goodsCode: 796,
                        packagingType: "",
                        countGoodsPacking: 0,
                        countPieces: 12,
                        massaBruto: 0,
                        massNetto: 12.000,
                        goodsPrice: 90.00,
                        goodsPriceNoNDC: 1080.00,
                        percent: "Без НДС",
                        summPercent: 0,
                        goodsPriceWithNDC: 1080.00,
                    },
                    {
                        id: 1,
                        goodsName: "Футболка для мальчика 523BNT",
                        unitName: "шт.",
                        goodsCode: 796,
                        packagingType: "",
                        countGoodsPacking: 0,
                        countPieces: 12,
                        massaBruto: 0,
                        massNetto: 12.000,
                        goodsPrice: 90.00,
                        goodsPriceNoNDC: 1080.00,
                        percent: "Без НДС",
                        summPercent: 0,
                        goodsPriceWithNDC: 1080.00,
                    },
                    {
                        id: 1,
                        goodsName: "Футболка для мальчика 523BNT",
                        unitName: "шт.",
                        goodsCode: 796,
                        packagingType: "",
                        countGoodsPacking: 0,
                        countPieces: 12,
                        massaBruto: 0,
                        massNetto: 12.000,
                        goodsPrice: 90.00,
                        goodsPriceNoNDC: 1080.00,
                        percent: "Без НДС",
                        summPercent: 0,
                        goodsPriceWithNDC: 1080.00,
                    },
                    {
                        id: 1,
                        goodsName: "Футболка для мальчика 523BNT",
                        unitName: "шт.",
                        goodsCode: 796,
                        packagingType: "",
                        countGoodsPacking: 0,
                        countPieces: 12,
                        massaBruto: 0,
                        massNetto: 12.000,
                        goodsPrice: 90.00,
                        goodsPriceNoNDC: 1080.00,
                        percent: "Без НДС",
                        summPercent: 0,
                        goodsPriceWithNDC: 1080.00,
                    },
                    {
                        id: 1,
                        goodsName: "Футболка для мальчика 523BNT",
                        unitName: "шт.",
                        goodsCode: 796,
                        packagingType: "",
                        countGoodsPacking: 0,
                        countPieces: 12,
                        massaBruto: 0,
                        massNetto: 12.000,
                        goodsPrice: 90.00,
                        goodsPriceNoNDC: 1080.00,
                        percent: "Без НДС",
                        summPercent: 0,
                        goodsPriceWithNDC: 1080.00,
                    },
                    {
                        id: 1,
                        goodsName: "Футболка для мальчика 523BNT",
                        unitName: "шт.",
                        goodsCode: 796,
                        packagingType: "",
                        countGoodsPacking: 0,
                        countPieces: 12,
                        massaBruto: 0,
                        massNetto: 12.000,
                        goodsPrice: 90.00,
                        goodsPriceNoNDC: 1080.00,
                        percent: "Без НДС",
                        summPercent: 0,
                        goodsPriceWithNDC: 1080.00,
                    },
                    {
                        id: 1,
                        goodsName: "Футболка для мальчика 523BNT",
                        unitName: "шт.",
                        goodsCode: 796,
                        packagingType: "",
                        countGoodsPacking: 0,
                        countPieces: 12,
                        massaBruto: 0,
                        massNetto: 12.000,
                        goodsPrice: 90.00,
                        goodsPriceNoNDC: 1080.00,
                        percent: "Без НДС",
                        summPercent: 0,
                        goodsPriceWithNDC: 1080.00,
                    },
                    {
                        id: 1,
                        goodsName: "Футболка для мальчика 523BNT",
                        unitName: "шт.",
                        goodsCode: 796,
                        packagingType: "",
                        countGoodsPacking: 0,
                        countPieces: 12,
                        massaBruto: 0,
                        massNetto: 12.000,
                        goodsPrice: 90.00,
                        goodsPriceNoNDC: 1080.00,
                        percent: "Без НДС",
                        summPercent: 0,
                        goodsPriceWithNDC: 1080.00,
                    },
                ]
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.td-no-print {
    @media print {display: none;}
}

.no-print {
    background: #f3f3f3;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    margin-top: 10px;
    margin-bottom: 20px;
    @media print {display: none;}
    .btn-print,
    .btn-add,
    .btn-delete {
    align-items: center;
    display: flex;
    justify-content: center;
    cursor: pointer;
    height: 50px;
    width: 33.333%;
    transition: all ease .3s;
    &:hover {background: #bbb;}
    }
}
// /* HTML5 display-role reset for older browsers */
// article, aside, details, figcaption, figure, 
// footer, header, hgroup, menu, nav, section {
//     display: block;
// }
// body {
//     line-height: 1;
// }
// ol, ul {
//     list-style: none;
// }
// blockquote, q {
//     quotes: none;
// }
// blockquote:before, blockquote:after,
// q:before, q:after {
//     content: '';
//     content: none;
// }
// table {
//     border-collapse: collapse;
//     border-spacing: 0;
// }
// html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}
// /*# sourceMappingURL=/sm/5d8a97cdb40a6c49031b52d63494a6eca084416b5b035e5698fdc5fa0969b2c3.map */

// body {
//     font-family: Arial;
//     font-size: 9pt;
// }
// table {
//     font-size: 9pt;
// }
// table thead td {
//     text-align: center;
//     font-weight: 700;
// }


// .print > tbody > tr > td {
//     border: none;
// }
// h3 {
//     font-size: 14pt;
//     font-weight: 700;
//     margin-top: 10pt;
// }

// /* helpers */
// .table-border td {border: 1px solid #000;}
// .row-desc {
//     border: none;
//     text-align: center;
//     font-size: 7pt;
//     padding-top: 3px;
//     padding-bottom: 3px;
// }
// // border
// .b {border: 1px solid #000;}
// .bb {border-bottom: 1px solid #000;}
// .bt {border-top: 1px solid #000;}
// .bl {border-left: 1px solid #000;}
// .br {border-right: 1px solid #000}

// .bb2 {border: 2px solid #000;}
// .bbl {border-left: 2px solid #000;}
// .bbr {border-right: 2px solid #000;}
// .bbt {border-top: 2px solid #000;}
// .bbb {border-bottom: 2px solid #000;}
// // no-border
// .no-b {border: none!important;}
// .no-bb {border-bottom: none;}
// .no-bt {border-top: none;}
// .no-bl {border-left: none!important;}
// .no-br {border-right: none;}
// // padding
// .psm {padding: 0 5px;}
// .pt-5 {padding-top: 5px;}
// .pt-10 {padding-top: 10px;}
// .pt-15 {padding-top: 15px;}
// .pl-10 {padding-left: 10px;}
// .pr-10 {padding-right: 10px;}
// // text
// .text-bold {font-weight: 700;}
// .text-center {text-align: center;}
// .text-right {text-align: right;}
// .text-lead {font-size: 11pt;}
// // height & width
// .h20 {height: 20px;padding-top: 0;padding-bottom: 0;}
// .h17 {height: 17px;padding-top: 0;padding-bottom: 0;}
// .w20 {width: 20px;}
// // table vertical align
// .valign-bottom,
// .valign-bottom td {vertical-align: bottom;}
// .valign-middle,
// .valign-middle td {vertical-align: middle;}
// // common styles
// // top panel

// .td-no-print {
//     @media print {display: none;}
// }

// .no-print {
//     background: #f3f3f3;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     height: 50px;
//     margin-top: 10px;
//     margin-bottom: 20px;
//     @media print {display: none;}
//     .btn-print,
//     .btn-add,
//     .btn-delete {
//     align-items: center;
//     display: flex;
//     justify-content: center;
//     cursor: pointer;
//     height: 50px;
//     width: 33.333%;
//     transition: all ease .3s;
//     &:hover {background: #bbb;}
//     }
// }


// // torg12
// .print.ttn {width: 830pt;}
// .table-ttn-date {
//     td {padding: 2px;}
//     tbody tr:last-child {
//     td {
//         border-top: 2px solid #000;
//         border-bottom: 2px solid #000;
//         &:first-child {border-left: 2px solid #000;}
//         &:last-child {border-right: 2px solid #000;}
//     }
//     }
// }



// .table-torg12 {
//     thead {
//     td {
//         font-weight: normal;
//         vertical-align: middle;
//     }
//     }
//     tbody {
//     td {
//         font-size: 8pt;
//         padding: 1px 2px;
//     }
//     .td1 {width: 37px;text-align: center;}
//     .td2 {width: 325px;}
//     .td3 {width: 55px;text-align: center;}
//     .td4 {width: 50px;text-align: center;}
//     .td5 {width: 75px;text-align: center;}
//     .td6 {width: 50px;text-align: center;}
//     .td7 {width: 40px;text-align: center;}
//     .td8 {width: 55px;text-align: center;}
//     .td9 {width: 55px;text-align: center;}
//     .td10 {width: 55px;text-align: center;}
//     .td11 {width: 50px;text-align: center;}
//     .td12 {width: 65px;text-align: right;}
//     .td13 {width: 65px;text-align: center;}
//     .td14 {width: 65px;text-align: right;}
//     .td15 {width: 65px;text-align: right;}
//     }
// }

// @media print {
//     h1, div#header, div#sidebar, div#footer { display: none; }
//     a[href]:after {content: none !important}
//     @page {
//             margin-top: 0;
//             margin-bottom: 0;
//             }
//             body  {
//             padding-top: 72px;
//             padding-bottom: 72px ;
//             }
//     @page :footer {
//         display: none
//     }
    
//     @page :header {
//         display: none
//     }
//     a[href]:after {
//         content: none !important;
//     }
// }

// </style>