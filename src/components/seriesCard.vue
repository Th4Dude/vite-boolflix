
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
        getVote(serie) {
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
            <h1 class="title"><em> $ERIE$ &#169; </em></h1>
        </div>
        <div class="container-series">
            <!-- Card Movie -->
            <div class="series flip-card" v-for="serie in store.series">
                <div class="flip-card-inner">
                    <!-- Img -->
                    <div class="flip-card-front">
                        <div><img :src="getImage(serie)" alt="Poster" /></div>
                    </div>
                    <!-- Img -->
                    <!-- Descrizione -->
                    <div class="flip-card-back">
                        <div class="padding-30">
                            <h1> {{ serie.name }}</h1>
                            <h4>{{ serie.original_name }}</h4>
                        </div>
                        <div>
                            <h4>{{ serie.original_language }}</h4>
                            <country-flag :country='getLanguage(serie)' size='small' />
                        </div>
                        <div class="color_pink">
                            <font-awesome-icon icon="fa-solid fa-star" v-for="star in getVote(serie)" />
                            <font-awesome-icon icon="fa-regular fa-star" v-for="star in 5 - getVote(serie)" />
                        </div>
                    </div>
                    <!-- Descrizione -->
                </div>
            </div>
             <!-- Card Movie -->
        </div>
    </div>

</template>

<style lang="scss" scoped>
/* common */

.padding-30 {
    padding: 30px 0;
}

.color_pink {
    color: #9600ff;
}

/* common */

.container-series {
    background-color: #9600ff;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    padding: 30px 10px;

    img {
        height: 100%;
        width: 100%;
        border-radius: 10px;
    }

    .series {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: calc(100% / 5 - 1.25rem);
    }
}

.box-title {
    width: 100%;
    background-color: #00b8ff;
    border: 2px solid #ff00c1;
    padding: 20px 0;
}

.title {
    text-align: center;
    color: #ff00c1;
}

.flip-card {
    background-color: transparent;
    width: 100%;
    height: 614px;
    perspective: 1000px;
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}

.flip-card-back {
    background-color: #ff00c1;
    width: 100%;
    height: 100%;
    color: white;
    border-radius: 10px;
    transform: rotateY(180deg);
}

</style>