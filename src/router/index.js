import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/pages/index/Index.vue'
import About from '@/pages/about/About.vue'

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
  ]
})

export default router
