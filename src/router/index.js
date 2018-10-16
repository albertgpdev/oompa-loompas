// Dependencies
import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

// Components
import Crew from '@/pages/Crew.vue';
import Details from '@/pages/Details.vue';

const router = new Router({
	mode: 'history',
	linkActiveClass: 'active',
	routes: [
		{
			path: '/',
			name: 'oompa-loompa-list',
			component: Crew,
			meta: {
				title: 'Oompa Loompa\'s | Crew', 
			},
		},
		{
			path: '/:id',
			name: 'oompa-loompa-details',
			component: Details,
			meta: {
				title: 'Oompa Loompa\'s | Details', 
			},
		},
	]
});

router.beforeEach((to, from, next) => {
	document.title = to.meta.title;
	next();
	
})
export default router;










