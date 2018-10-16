import types from '@/types/oompa-loompas';
import globalTypes from '@/types/global';
import Vue from 'vue';
import lscache from 'lscache'

const state = {
	oompas: lscache.get('oompas'),
	query: {
		search:'',
	},
	page: 1,
};
const actions = {
	[types.actions.fetchOompas]: ({commit}, page = 1) => {
		commit(globalTypes.mutations.startProcessing)
		commit(types.mutations.incrementPage, page)
		if(!lscache.get('oompas') || lscache.get('oompas') === 'undefined' || (page * 25 >= lscache.get('oompas').length)){
			Vue.http.get('?page=' + page).then(oompas => {
				commit(types.mutations.recivedOompas, {apiResponse: oompas.data.results})
				commit(globalTypes.mutations.stopProcessing)

			})
		}
	}
};

const getters = {
	[types.getters.search]: state => state.query.search,
	[types.getters.oompas]: (state) => {
		let oompas = state.oompas
		if(state.query.search) {
			oompas = oompas
						.filter(oompa => oompa.name
										.concat(oompa.profession)
										.trim()
										.toLowerCase()
										.includes(state.query.search
												 .trim()
												 .toLowerCase()))
		}
		oompas = oompas.slice(0, state.page * 25)
		return oompas;
	}
};

const mutations = {
	[types.mutations.recivedOompas]: (state, {apiResponse}) => {
		let  list = []
		apiResponse.forEach((item, index) => {
			let oompa = {}
			oompa.id = item.id
			oompa.name = item.first_name + ' ' + item.last_name
			oompa.gender = item.gender
			oompa.profession = item.profession
			oompa.image = item.image
			oompa.timestamp = new Date().getTime()
			list.push(oompa)
		})
		if(lscache.get("oompas")){
			list = lscache.get("oompas").concat(list)
		}
		lscache.set("oompas", list, 360000 * 24);

		state.oompas = lscache.get("oompas")
	},
	[types.mutations.setSearch]: (state, query) =>  {
		state.query.search = query
	},
	[types.mutations.clearFilters]: (state) => {
		state.query= {
			search: ''
		}
	},
	[types.mutations.incrementPage]: (state, page) =>  {
		state.page = page
	},
};

export default {
	state,
	actions,
	getters,
	mutations
}