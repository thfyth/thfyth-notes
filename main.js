import Vue from 'vue'
import App from './App'
Vue.config.productionTip = false
import Antd from 'ant-design-vue';
// import antdv from "@/utils/components"
import 'ant-design-vue/dist/antd.css';
// import App from './App.vue';

Vue.use(Antd);

// Vue.use(antdv)

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
