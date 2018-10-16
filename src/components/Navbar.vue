<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top mb-2">
        <router-link class="navbar-brand" to="/"><img src="https://s3.eu-central-1.amazonaws.com/napptilus/level-test/imgs/logo-umpa-loompa.png" alt="" class="logo"> Oompa Loompa's Crew</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
    </nav>
</template>
<script>
    export default{
        name: 'navigation'
    }
</script>
<style scoped>
.logo{
    height: 20px;
    margin-right: 5px;
}
</style>