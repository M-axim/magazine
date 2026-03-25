import Vuex from "vuex"
import academicLeaveList from "./modules/academicLeaveList"
import academicPerformanceList from "./modules/academicPerformanceList"
import consolidatedStatement from "./modules/consolidatedStatement"
import accordionItem from "./modules/accordionItem"
import accordionGroupList from "./modules/accordionGroupList"
import groupInfo from "./modules/groupInfo"
import groupStudents from "./modules/groupStudents"
import studentsList from "./modules/studentsList"
import user from "./modules/user"

// warehouse
import warehouseDocumentList from "./modules/warehouse/warehouseDocumentList"
import warehouseSearchSetting from "./modules/warehouse/warehouseSearchSetting"
import warehouseEntranceList from "./modules/warehouse/warehouseEntrance"
import warehouseInventory from "./modules/warehouse/warehouseInventory"

// goods
import toastsSelectGods from "./modules/toastsSelectGods"
import shoppingList from "./modules/shoppingList"
import catalogTreeGoods from "./modules/catalogTreeGoods"
import catalogTreeTab from "./modules/catalogTreeTab"

// cashier
import cashiersList from "./modules/cashiers"
import checks from "./modules/checks"
// employer
import employerList from "./modules/employerList"

const store = new Vuex.Store({
    modules: {
        academicLeaveList,
        academicPerformanceList,
        consolidatedStatement,
        accordionItem,
        checks,
        accordionGroupList,
        groupInfo,
        groupStudents,
        studentsList,
        warehouseEntranceList,
        warehouseDocumentList,
        warehouseInventory,
        warehouseSearchSetting,
        toastsSelectGods,
        user,
        shoppingList,
        catalogTreeGoods,
        cashiersList,
        employerList,
        catalogTreeTab
    }
})

export default store