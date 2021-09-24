import Vue from 'vue'
import App from './App.vue'
import local from '../utils/localstorage'
import router from './router'
import store from './store/Count.js'


Vue.config.productionTip = false
Vue.prototype.local = local

new Vue({
    router,
    render: h => h(App),
    store: store
}).$mount('#app')