import nampespace from '@/utils/namespace.js';

export default nampespace('oompa-loompas', {
	actions: [
		'fetchOompas',
		'fetchOompa',
	],
	getters: [
		'search',
		'oompas',
		'oompa',
	],
	mutations: [
		'recivedOompas',
		'recivedOompa',
		'setSearch',
		'clearFilters',
		'incrementPage'
	]
}) 