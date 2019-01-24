import Vue from 'vue';
// import Router from 'vue-router';
import Home from './views/Home.vue';
import { IonicVueRouter } from '@modus/ionic-vue';

Vue.use(IonicVueRouter);

export default new IonicVueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/about',
			name: 'about',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
		}
	],
	direction: 1,
	viewCount: 0
});
