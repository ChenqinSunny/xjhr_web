import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入路由
// import router 的router 一定要小写， 不要写成Router, 否则报 can't match的报错
import router from './router';
Vue.use(router);  
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
	el:"#app",
	router, 
  render: h => h(App)
})
