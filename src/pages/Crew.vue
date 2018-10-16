<template>
	<div class="album py-5">
		<div class="container">
			<div class="row">
				<div class="col-12 col-md-3 offset-md-8">
					<filters></filters>
				</div>
			</div>
			<div class="row">
				<div class="col-12 col-md-4 oompa" v-for="(oompa, key) in oompas">
					<card
						:oompa = "oompa"
						:key = "key"
					></card>
				</div>
				
			</div>
		</div>
	</div>
</template>
<script>
	import Card from '@/components/Card';
	import Filters from '@/components/Filters';
	import oompaTypes from '@/types/oompa-loompas';
	import {mapGetters , mapActions} from 'vuex'

	export default {
		name:'crew-list',
		components: {
			Card,
			Filters
		},
		data() {
            return {
             	
           } 
        },
        methods: {
        	...mapActions({
        		fetchOompas: oompaTypes.actions.fetchOompas
        	}),
        	scroll () {
			    window.onscroll = () => {
			      	let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;

			      	if (bottomOfWindow) {
			      		let nextPage = this.currentPages + 1
			        	this.fetchOompas(nextPage)
			      	}
			    };
			},
        },
        computed: {
        	...mapGetters({
        		oompas: oompaTypes.getters.oompas
        	}),
        	currentPages: function() {
        		return Math.floor(this.oompas.length / 25)
        	}
        },
        mounted() {
        	this.fetchOompas()
        	this.scroll();
        }
}
</script>
<style>
	.oompa{
		margin-top:10px;
	}
</style>