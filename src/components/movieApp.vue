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
            return Math.ceil(movie.vote_average / 2) ;
        },
        getImage(movie) {
            if (movie.poster_path) {
                return `${store.config.url_img}${movie.poster_path}`;
            } else {
                return "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png";
            }
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
                <li><img :src="getImage(movie)" alt="Poster" /></li>
                <li>{{ movie.original_title }}</li>
                <li>{{ movie.original_language }}</li>
                <li><country-flag :country='getLanguage(movie)' size='small' /></li>
                <font-awesome-icon icon="fa-solid fa-star" v-for="star in getVote(movie)" />
                <font-awesome-icon icon="fa-regular fa-star" v-for="star in 5-getVote(movie)" />
                
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