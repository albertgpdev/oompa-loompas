import types from '@/types/oompa-loompas';
import globalTypes from '@/types/global';
import Vue from 'vue';

const state = {
	oompas: [],
	query: {
		search:'',
	}
};
const actions = {
	[types.actions.fetchOompas]: ({commit}) => {
		commit(globalTypes.mutations.startProcessing)
		Vue.http.get('?page=1').then(oompas => {
			commit(types.mutations.recivedOompas, {apiResponse: oompas})
			commit(globalTypes.mutations.stopProcessing)

		})
	}
};

const getters = {
	[types.getters.search]: state => state.query.search,
	[types.getters.oompas]: (state) => {
		let oompas = state.oompas
		if(state.query.search) {
			oompas = oompas
						.filter(oompa => oompa.first_name
										.concat(oompa.last_name)
										.concat(oompa.profession)
										.trim()
										.toLowerCase()
										.includes(state.query.search
												 .trim()
												 .toLowerCase()))
		}
		return oompas;
	}
};

const mutations = {
	[types.mutations.recivedOompas]: (state, {apiResponse}) => {
		state.oompas = apiResponse.data.results
	},
	[types.mutations.setSearch]: (state, query) =>  {
		state.query.search = query
	},
	[types.mutations.clearFilters]: (state) => {
		state.query= {
			search: ''
		}
	}
};

export default {
	state,
	actions,
	getters,
	mutations
}