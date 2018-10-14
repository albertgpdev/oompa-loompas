import types from '@/types/oompa-loompas';
import globalTypes from '@/types/global';
import Vue from 'vue';

const state = {
	
};

const actions = {
	
};

const getters = {
	[types.getters.skills]: (state) => {
		return state.skills;
	},
};

const mutations = {
};

export default {
	state,
	actions,
	getters,
	mutations
}