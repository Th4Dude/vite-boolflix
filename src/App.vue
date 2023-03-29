<script>

import axios from 'axios';
import { store } from './store';
import appMain from './components/appMain.vue';
import appHeader from './components/appHeader.vue';


export default {
    name: 'App',
    components: {
        appHeader,
        appMain,

    },
    data() {
        return {
            store
        }
    },
    methods: {
        search() {
            console.log('ho ascoltato questo evento');
            axios.get(store.config.url_movies, {
                params: {
                    api_key: store.config.apiKey,
                    query: store.searchText
                }
            })
                .then((response) => {
                    this.store.movies = response.data.results;
                    console.log(this.store.movies);
                })
        }
    }
}

</script>

<template>
    <appHeader @searchName="search"></appHeader>
    <appMain></appMain>
</template>


<style lang="scss"></style>
