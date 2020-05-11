import Vue from 'vue'
import demo from './index.vue'
import vcytoscape from '../../vcytoscape'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './iconfont/iconfont.css'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(vcytoscape)
new Vue({
  render: h => h(demo)
}).$mount('#app')
