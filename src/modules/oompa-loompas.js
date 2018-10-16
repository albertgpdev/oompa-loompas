import types from '@/types/oompa-loompas';
import globalTypes from '@/types/global';
import Vue from 'vue';
import lscache from 'lscache';
import router from '@/router';

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
			})
		}
		commit(globalTypes.mutations.stopProcessing)
	},
	[types.actions.fetchOompa]: ({commit}) => {
		commit(globalTypes.mutations.startProcessing)
		let id = router.currentRoute.params.id
		let searchedOompa = state.oompas.find(oompa => oompa.id === parseInt(id))
		if(!searchedOompa.description){
			Vue.http.get(String(id)).then(oompa => {
				commit(types.mutations.recivedOompa, {apiResponse: oompa.data, id})
			})
		} else {
			// Hago este else porque no encuentro la manera de que se 
			// actualize el getter si no entra a la mutacion.
			commit(types.mutations.recivedOompa, {apiResponse: '', id:'-1'})
		}
		commit(globalTypes.mutations.stopProcessing)
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
		if(oompas) {
			oompas = oompas.slice(0, state.page * 25)
		}
		return oompas;
	},
	[types.getters.oompa]: (state) => {
		let id = parseInt(router.currentRoute.params.id)
		let oompa = state.oompas.find(oompa => oompa.id === id);
		return oompa
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
	[types.mutations.recivedOompa]: (state , {apiResponse, id}) => {
		let  list = []
		let oompa = {}

		oompa.id = parseInt(id)
		oompa.name = apiResponse.first_name + ' ' + apiResponse.last_name
		oompa.gender = apiResponse.gender
		oompa.profession = apiResponse.profession
		oompa.description = apiResponse.description
		oompa.image = apiResponse.image
		oompa.timestamp = new Date().getTime()

		if(lscache.get("oompas")){
			list = lscache.get("oompas")
		}
		let searchedOompaIndex = list.findIndex(x => x.id === parseInt(id));
		list[searchedOompaIndex] = oompa

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