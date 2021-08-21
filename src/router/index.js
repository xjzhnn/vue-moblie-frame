import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../components/main.vue";

Vue.use(VueRouter);

const routes = [{
		path: "/",
		// name: "main",
		component: Main,
		children: [{
				path: '/',
				component: () => import('@/views/Home.vue'),
				name: 'Home'
			},
			{
				path: '/me',
				component: () => import('@/views/Me.vue'),
				name: 'Me'
			},
		]
	},
	{
		path: '/about',
		component: () => import('@/views/About.vue'),
		name: 'About'
	},
	{
		path: '/px',
		component: () => import('@/views/Px.vue'),
		name: 'Px'
	},
	{
		path: '/news',
		component: () => import('@/views/News.vue'),
		name: 'News'
	},
	{
		path: '/newsDetail',
		component: () => import('@/views/NewsDetail.vue'),
		name: 'NewsDetail'
	},
	{
		path: '/me/self',
		component: () => import('@/views/Self.vue'),
		name: 'Self'
	},
	{
		path: '/mock',
		component: () => import('@/views/Mock.vue'),
		name: 'Mock'
	}
];

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
	mode: "history",
	routes
});



export default router;
