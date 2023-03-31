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

    /* Chiamate al server */

    methods: {
        search() {

            /* Chiamata per movie */

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

            /* Chiamata per movie */

            /* Chiamata per serie */

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

            /* Chiamata per serie */
        }
    }

    /* Chiamate al server */
}

</script>

<template>
    <appHeader @searchName="search"></appHeader>
    <appMain></appMain>
</template>


<style lang="scss"></style>
