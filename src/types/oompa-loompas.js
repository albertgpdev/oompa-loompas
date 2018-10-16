import nampespace from '@/utils/namespace.js';

export default nampespace('oompa-loompas', {
	actions: [
		'fetchOompas',
		'fetchOompa',
	],
	getters: [
		'oompas',
		'oompa',
		'search'
	],
	mutations: [
		'recivedOompas',
		'setSearch',
		'clearFilters',
		'incrementPage'
	]
}) 