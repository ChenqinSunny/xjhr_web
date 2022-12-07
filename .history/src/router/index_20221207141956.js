import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "../components/MainPage.vue"
import Login from "../components/Login.vue"
import Regist from "../components/Regist.vue"
import Identify from './identify'

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [{
		path: '/',
		component: r => require.ensure([], () => r(require('../components/MainPage.vue')), 'MainPage')
	},{
		path: '/Login',
		component: r => require.ensure([], () => r(require('../components/Login.vue')), 'Login')
	},{
		path: '/Regist',
		component: r => require.ensure([], () => r(require('../components/Regist.vue')), 'Regist')
	},{
		path: '/Identify',
		component: r => require.ensure([], () => r(require('../components/identify.vue')), 'identify')
	}

]



var router = new VueRouter({
	routes,
	mode: 'history'
})

export default router;
