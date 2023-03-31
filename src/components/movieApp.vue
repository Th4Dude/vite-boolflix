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
        getVote(movie) {
            return Math.ceil(movie.vote_average / 2);
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
    <div class="main-box">
        <div class="box-title">
            <h1 class="title" >MOVIES</h1>
        </div>
        <div class="container-movies">
            <div class="movie flip-card" v-for="movie in store.movies">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <div><img :src="getImage(movie)" alt="Poster" /></div>
                    </div>
                    <div class="flip-card-back">
                        <h4> {{ movie.title }}</h4>
                        <div>{{ movie.original_title }}</div>
                        <div>{{ movie.original_language }}</div>
                        <div><country-flag :country='getLanguage(movie)' size='small' /></div>
                        <font-awesome-icon icon="fa-solid fa-star" v-for="star in getVote(movie)" />
                        <font-awesome-icon icon="fa-regular fa-star" v-for="star in 5 - getVote(movie)" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.container-movies {
    background-color:  #ff00c1;
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    width: 100%;

    img {
        max-height: 100%;
        width: 100%;
        border-radius: 10px;
    }

    .movie {
        display: flex;
        justify-content: center;
        align-items: center;
        width: calc(100% / 5);
    }
    
}
.box-title{
        width: 100%;
        background-color: #00b8ff;
        border: 2px solid #ff00c1;
    }
    .title{
        text-align: center;
    }



.flip-card {
    background-color: transparent;
    width: 100%;
    height: 614px;
    border: 1px solid #f1f1f1;
    perspective: 1000px;
    /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    /* Safari */
    backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
    /*   background-color: #bbb; */
    color: black;
}

/* Style the back side */
.flip-card-back {
    background-color: #ff00c1;
    color: white;
    transform: rotateY(180deg);
}
</style>