
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
                return "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/%22Evolution%22_and_life_in_vaporwave_flavours._%2848475685782%29.png/640px-%22Evolution%22_and_life_in_vaporwave_flavours._%2848475685782%29.png";
            }
        }
    },

    emits: ["searchName"]

}


</script>

<template>
    
<div class="main-box">
        <div class="box-title">
            <h1 class="title">SERIES</h1>
        </div>
        <div class="container-series">
            <div class="series flip-card" v-for="serie in store.series">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <div><img :src="getImage(serie)" alt="Poster" /></div>
                    </div>
                    <div class="flip-card-back">
                        <h4> {{ serie.name }}</h4>
                        <div>{{ serie.original_name }}</div>
                        <div>{{ serie.original_language }}</div>
                        <div><country-flag :country='getLanguage(serie)' size='small' /></div>
                        <font-awesome-icon icon="fa-solid fa-star" v-for="star in getVote(serie)" />
                        <font-awesome-icon icon="fa-regular fa-star" v-for="star in 5 - getVote(serie)" />
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>

.container-series {
    background-color:  #9600ff;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    padding: 30px 10px;
    img {
        max-height: 100%;
        width: 100%;
        border-radius: 10px;
    }

    .series {
        display: flex;
        justify-content: center;
        align-items: center;
        width: calc(100% / 5 - 1.25rem);
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
    border-radius: 10px;
}

</style>