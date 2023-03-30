<script>

import movieApp from './movieApp.vue';
import seriesCard from './seriesCard.vue';

export default {
    name: 'Main',
    components:{
        movieApp,
        seriesCard,
    }
}

</script>

<template>

    <movieApp></movieApp>
    <seriesCard></seriesCard>

</template>

<style lang="scss" scoped></style>