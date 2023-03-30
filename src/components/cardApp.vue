<script>

import CountryFlag from 'vue-country-flag-next'
import { store } from '../store';
export default {
    name: 'CardApp',
    components: {
        CountryFlag,
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        getLanguage(movie) {
            if (movie.original_language === 'en') {
                return 'gb';
            } else {
                return movie.original_language;
            }
        },
        getVote(movie){
            return movie.vote_average / 2;
        }
    },
    
    emits: ["searchName"]

}


</script>

<template>

    <ul>
        <li v-for="movie in store.movies">
            <h4> {{ movie.title }}</h4>
            <ul>
                <li>{{ movie.original_title }}</li>
                <li>{{ movie.original_language }}</li>
                <li><country-flag :country='getLanguage(movie)' size='small' /></li>
                <li>{{ getVote(movie) }}</li>
            </ul>
        </li>
    </ul>
    
</template>

<style lang="scss" scoped></style>