import Vue from 'vue'
import App from './App'
Vue.config.productionTip = false

import antdv from "@/utils/components"
import 'ant-design-vue/dist/antd.css';


Vue.use(antdv)
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
