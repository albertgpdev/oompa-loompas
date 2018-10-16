<template>
    <main id="app" role="main">
        <navbar></navbar>
        <router-view></router-view>
        <div v-if="processing">
            <BlockUI :message="'Processing'">
                <font-awesome-icon prefix="fas" icon="spinner" size="lg" />
            </BlockUI>
        </div>
    </main>
</template>

<script>
    import Navbar from './components/Navbar.vue'
    import globalTypes from '@/types/global';
    import {mapGetters} from 'vuex';
    export default {
        name: 'app',
        components: {
            Navbar
        },
        computed: {
            ...mapGetters({
                processing: globalTypes.getters.processing,
            })
        },
    }
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
