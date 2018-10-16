<template>
	<div class="input-group">
	 	<input 
			type="search" 
			v-model="search"
			class="form-control py-2 border-right-0 border" 
			placeholder="Search"
			aria-label="Search" 
			aria-describedby="search"
			id="example-search-input"
		>
        <span class="input-group-append">
            <div class="input-group-text bg-transparent"><font-awesome-icon prefix="fas" icon="search" /></div>
        </span>
    </div>
</template>
<script>
	import {mapGetters, mapMutations} from 'vuex'
	import oompaTypes from '@/types/oompa-loompas';
	export default {
		name: 'filters',
		methods:{
			...mapMutations({
				setSearch: oompaTypes.mutations.setSearch,
				clearFilters: oompaTypes.mutations.clearFilters,
			})
		},
		computed: {
			...mapGetters({
				query: oompaTypes.getters.search,
			}),
			search: {
				get () {
					return this.query
				},
				set (value) {
					this.setSearch(value)
				}
			}
		}
	}
</script>