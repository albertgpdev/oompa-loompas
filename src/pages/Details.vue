<template>
<div class="container">
	<div class="row">
		<div class="col-12 col-md-4">
			<img src="" alt="">
		</div>
		<div class="col-12 col-md-8">
			<h3>Oompa Lompa's Name</h3>
			<p>Gender</p>
			<p>Professions</p>

			<p>random_text</p>
		</div>	
	</div>
</div>
</template>
<script>
	import oompaTypes from '@/types/oompa-loompas';
	import {mapGetters , mapActions} from 'vuex'
	export default {
		name: 'oompa-loompas-details',
		data() {
			return {

			}
		},
		methods: {
		},
		computed: {
        	...mapGetters({
        		oompa: oompaTypes.getters.oompa
        	})
        },
		
	}
</script>