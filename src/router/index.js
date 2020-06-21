import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../components/main.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
	children:[
		 { path: '/', component: () => import('@/views/Home.vue'), name: 'home' },
		 { path: '/me', component: () => import('@/views/me.vue'), name: 'me' },
	]
  },
  {
	  path:'/about', component: () => import('@/views/About.vue'), name: 'About'
  },
  {
  	  path:'/me/self', component: () => import('@/views/self.vue'), name: 'self'
  }
];

const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  routes
});



export default router;
