
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
            return serie.vote_average / 2;
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
                <li>{{ serie.original_name }}</li>
                <li>{{ serie.original_language }}</li>
                <li><country-flag :country='getLanguage(serie)' size='small' /></li>
                <li>{{ getVote(serie) }}</li>
            </ul>
        </li>
    </ul>
</div>
    
</template>

<style lang="scss" scoped>
.background_color{
    background-color: aqua;
}

</style>