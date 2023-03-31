
<script>

import CountryFlag from 'vue-country-flag-next'
import { store } from '../store';
export default {
    name: 'seriesCard',
    components: {
        CountryFlag,
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        getLanguage(serie) {
            if (serie.original_language === 'en') {
                return 'gb';
            } else {
                return serie.original_language;
            }
        },
        getVote(serie){
            return Math.ceil(serie.vote_average / 2);
        },
        getImage(serie) {
            if (serie.poster_path) {
                return `${store.config.url_img}${serie.poster_path}`;
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
        <li v-for="serie in store.series">
            <h4> {{ serie.name }}</h4>
            <ul>
                <li><img :src="getImage(serie)" alt="Poster" /></li>
                <li>{{ serie.original_name }}</li>
                <li>{{ serie.original_language }}</li>
                <li><country-flag :country='getLanguage(serie)' size='small' /></li>
                <font-awesome-icon icon="fa-solid fa-star" v-for="star in getVote(serie)" />
                <font-awesome-icon icon="fa-regular fa-star" v-for="star in 5-getVote(serie)" />
            </ul>
        </li>
    </ul>
</div>
    
</template>

<style lang="scss" scoped>
.background_color{
    background-color: #00fff9;
}

</style>