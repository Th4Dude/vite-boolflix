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

                
                axios.get(store.config.ulr_series, {
                params: {
                    api_key: store.config.apiKey,
                    query: store.searchText
                }
            })
                .then((response) => {
                    this.store.series = response.data.results;
                    console.log(this.store.series);
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
