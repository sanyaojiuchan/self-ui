import Vue from 'vue'
import App from './App.vue'
import SelfUi from '../packages'
Vue.config.productionTip = false
Vue.use(SelfUi)


new Vue({
  render: h => h(App),
}).$mount('#app')
