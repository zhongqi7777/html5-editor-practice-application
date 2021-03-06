import Vue from 'vue'
import App from './App.vue'
import "normalize.css/normalize.css"; // A modern alternative to CSS resets
import "./style/index.scss"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
