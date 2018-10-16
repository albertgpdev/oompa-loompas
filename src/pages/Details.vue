<template>
<div class="container">
	<div class="row">
		<div class="col-12 col-md-6 image">
			<img :src="oompa.image" alt="">
		</div>
		<div class="col-12 col-md-6">
			<h3>{{ oompa.name }}</h3>
			<p>{{ oompa.gender | gender }}</p>
			<p >{{ oompa.profession }}</p>

			<p v-html="oompa.description"></p>
		</div>	
	</div>
</div>
</template>
<script>
	import oompaTypes from '@/types/oompa-loompas';
	import {mapGetters , mapActions} from 'vuex'
	export default {
		name: 'oompa-loompas-details',
		filters: {
			gender: function (value) {
			    if (!value) {
			    	return ''
			    }
			    value = value.toString()
				if (value === 'F') {
					return 'Woman'
				} else if (value == 'M') {
					return 'Man'
				} else {
					return 'Undefined'
				}
			},
		},
		methods: {
			...mapActions({
				fetchOompa: oompaTypes.actions.fetchOompa
			})
		},
		computed: {
			...mapGetters({
				oompa: oompaTypes.getters.oompa
			})
        },
		mounted() {
			this.fetchOompa()
		}
	}
</script>
<style scoped>
	.image img {
		width: 100%;
	}	
</style>