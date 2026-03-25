import './bootstrap'
import { createApp } from 'vue'
import router from "./router"
import store from "./store/store"

// Import vue-components
import header from './components/Header'
import spinner from "./components/blocks/Spinner"
import inputLine from './components/blocks/InputLine'
import inputNumber from "./components/blocks/InputNumber"
import inputSelect from "./components/blocks/InputSelect"
import inputTextarea from "./components/blocks/InputTextarea"
import inputDatalist from "./components/blocks/InputDataList"

const app = createApp({})

app.component('v-header', header).default
app.component('v-spinner', spinner).default
app.component('v-inputLine', inputLine).default
app.component('v-inputNumber', inputNumber).default
app.component('v-inputSelect', inputSelect).default
app.component('v-inputTextarea', inputTextarea).default
app.component('v-inputDatalist', inputDatalist).default

app.use(router);
app.use(store);
app.mount('#app');