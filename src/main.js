// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from "vue-router"
Vue.use(VueRouter);
// Vue.component(Button.name, Button)
Vue.config.productionTip = false
import VueResource from "vue-resource";
// 2.2 安装 vue-resource
Vue.use(VueResource);
// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
// 导入扩展图标样式
import './lib/mui/css/icons-extra.css'

import router from '@/router'
import App from "./App";

// 按需导入 Mint-UI 中的组件   
import { Header, Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

/* eslint-disable no-new */
var vm = new Vue({
    el: '#app',
    render: c => c(App),
    router
})