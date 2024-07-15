import { createRouter, createWebHistory } from 'vue-router'
//import Index from '@/pages/index/Index.vue'
//import About from '@/pages/about/About.vue'
//import Tutorials from '@/pages/tutorials/Tutorials.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
	{
		path: '/',
		name: 'Index',
		component: () => import('@/pages/index/Index.vue')
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('@/pages/about/About.vue')
	},
	{
		path: '/tutorials',
		name: 'Tutorials',
		component:() => import('@/pages/tutorials/Tutorials.vue')
	},
  ]
})

export default router
