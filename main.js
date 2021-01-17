import Vue from 'vue'
import App from './App'
Vue.config.productionTip = false
import Antd from 'ant-design-vue';
// import antdv from "@/utils/components"
import 'ant-design-vue/dist/antd.css';
// import App from './App.vue';
import {router,RouterMount} from './router/index.js'  //路径换成自己的
Vue.use(router)
Vue.use(Antd);

// Vue.use(antdv)

App.mpType = 'app'

const app = new Vue({
    ...App
})

// #ifdef H5
	RouterMount(app,router,'#app')
// #endif

// #ifndef H5
	app.$mount(); //为了兼容小程序及app端必须这样写才有效果
// #endif