// Dependencies
import Vue from 'vue'

import Vuex from 'vuex';
Vue.use(Vuex);

// types and modules
import globalTypes from '@/types/global';
import oompaLoompas from '@/modules/oompa-loompas';

export const store = new Vuex.Store({
	state: {
		processing: false,
		language: window.localStorage.getItem('selected_language') ? window.localStorage.getItem('selected_language') : 'en',	
	},
	actions: {
	},
	getters: {
		[globalTypes.getters.processing]: state => state.processing,
	},
	mutations: {
		[globalTypes.mutations.startProcessing] (state){
			state.processing = true
		},
		[globalTypes.mutations.stopProcessing] (state){
			state.processing = false
		},

	},
	modules: {
		oompaLoompas,
	}
});