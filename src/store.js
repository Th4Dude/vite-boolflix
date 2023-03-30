import { reactive } from 'vue';

export const store = reactive({
    searchText: '',
    movies: [],
    series: [],
    config: {
        apiKey: '7d03e34b0df8120d363ead6790f49829',
        url_movies: 'https://api.themoviedb.org/3/search/movie',
        ulr_series: 'https://api.themoviedb.org/3/search/tv',
    }
});