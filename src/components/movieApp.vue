<script>

import CountryFlag from 'vue-country-flag-next'
import { store } from '../store';
export default {
    name: 'movieApp',
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
    
<div>
    <ul class="background_color">
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
</div>
    
</template>

<style lang="scss" scoped>
.background_color{
    background-color: rgb(49, 83, 83);
}

</style>