import Vue from "vue";
import VueRouter from "vue-router";
import l



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
	}

]



var router = new VueRouter({
	routes,
	mode: 'history'
})

export default router;
