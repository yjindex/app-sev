// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// Vue.component(Button.name, Button)
Vue.config.productionTip = false
    // 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
// 导入扩展图标样式
import './lib/mui/css/icons-extra.css'


// 按需导入 Mint-UI 中的组件   
import { Header, Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})