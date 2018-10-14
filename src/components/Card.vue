<template>
	<router-link class="card" style="width: 18rem;" tag="div" :to="{ name: 'oompa-loompa-details', params: { id: oompa.id }  }">
		<img class="card-img-top" :src="oompa.image" :alt="oompa.image">
		<div class="card-body">
			<h5 class="card-title">{{ oompa.first_name }} {{ oompa.last_name }}</h5>
			<p class="card-text">{{ oompa.gender | gender }}</p>
			<p class="card-text">{{ oompa.profession }}</p>
		</div>
	</router-link>
</template>
<script>
	export default {
		name: 'card',
		props: {
			oompa: {
				type: Object,
				required:true
			}
		},
		filters: {
			gender: function (value) {
			    if (!value) return ''
			    value = value.toString()
				if (value === 'F') {
					return 'Woman'
				} else if (value == 'M') {
					return 'Man'
				} else {
					return 'Undefined'
				}
			}
		}
	}
</script>
<style scoped>
	.card{
		cursor: pointer;
	}
</style>