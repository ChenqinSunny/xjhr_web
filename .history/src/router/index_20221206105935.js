import Vue from "vue";
import VueRouter from "vue-router";



// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [{
		path: '/',
		component: r => require.ensure([], () => r(require('../components/MainPage.vue')), 'MainPage')
	}，{
		path: '/',
		component: r => require.ensure([], () => r(require('../components/MainPage.vue')), 'MainPage')
	}

]



var router = new VueRouter({
	routes,
	mode: 'history'
})

export default router;
