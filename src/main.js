import Vue from 'vue'
import MuttVue from 'mutt-forms-vue'
Vue.use(MuttVue)

import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
