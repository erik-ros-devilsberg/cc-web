import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/pages/index/Index.vue'
import About from '@/pages/about/About.vue'
import Tutorials from '@/pages/tutorials/Tutorials.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
	{
		path: '/',
		name: 'Index',
		component: Index
	},
	{
		path: '/about',
		name: 'About',
		component: About
	},
	{
		path: '/tutorials',
		name: 'Tutorials',
		component: Tutorials
	},
  ]
})

export default router
