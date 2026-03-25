import {createRouter, createWebHistory} from 'vue-router'
import store from "./store/store"
import { sync } from 'vuex-router-sync'


import Index from './views/Index'
import Group from './views/Group'
import Student from './views/Student'
import Students from './views/Students'
import Entrance from './views/Entrance'
import Check from './views/Check'
import BoxOffice from './views/BoxOffice'
import Print from "./views/Print"
import Invoice from "./views/Invoice"
import Catalog from "./views/Catalog"
import Cashiers from "./views/Cashiers"
import Employer from "./views/Employer"
import Auth from "./views/Auth"

let routes = [
    {
        name: "Home",
        path: "/",
        component: Catalog,
    },
    {
        name: "BoxOffice",
        path: "/boxOffice",
        component: BoxOffice
    },
    {
        name: "Entrance",
        path: "/entrance",
        component: Entrance 
    },
    {
        name: "Cashiers",
        path: "/cashiers",
        component: Cashiers 
    },
    {
        name: "Invoice",
        path: "/invoice",
        component: Invoice
    },
    {
        name: "Employer",
        path: "/employer",
        component: Employer
    },
    {
        name: "Check",
        path: "/check",
        component: Check
    },
    {
        name: "Auth",
        path: "/auth",
        component: Auth
    },
    {
        name: "Print",
        path: "/print/:id",
        component: Print
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

sync(store, router)

export default router