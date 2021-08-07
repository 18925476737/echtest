import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import animate from 'animate.css'
import dataV from '@jiaminghi/data-view'
import * as echarts from 'echarts';
import  "echarts-liquidfill";

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(animate);
Vue.use(dataV);
Vue.prototype.$echarts = echarts;

new Vue({
  render: h => h(App),
}).$mount('#app')
