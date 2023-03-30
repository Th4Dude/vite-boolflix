<script>
import { store } from '../store';
import CountryFlag from 'vue-country-flag-next'
export default {
    name: 'Header',
    components: {
        CountryFlag,
    },
    data() {
        return {
            store,
        }
    },
   /*  computed: {
        getLanguage() {
            switch (this.movie.original_language) {

                case 'en':
                    console.log('gb')
                    return 'gb';

                default:
                return this.movie.original_language;
            }
        }
    }, */
    emits: ["searchName"]
}

</script>

<template>

    <div class="main_container">
        <div class="header_container">
            <form @submit.prevent="$emit('searchName')">
                <input type="text" placeholder="Search Film" v-model="store.searchText">
                <button type="submit">Search</button>
            </form>
            <ul>
                <li v-for="movie in store.movies">
                    <h4> {{ movie.title }}</h4>
                    <ul>
                        <li>{{ movie.original_title }}</li>
                        <li>{{ movie.original_language }}</li>
                        <li><country-flag :country='movie.original_language' size='small' /></li>
                        <li>{{ movie.vote_average }}</li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>

</template>

<style lang="scss" scoped>
.main_container {
    display: flex;
    justify-content: center;
}
</style>