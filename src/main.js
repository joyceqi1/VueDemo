import Vue from 'vue'
import App from './App.vue'
import local from '../utils/localstorage'

Vue.config.productionTip = false
Vue.prototype.local = local

new Vue({
    render: h => h(App),
}).$mount('#app')