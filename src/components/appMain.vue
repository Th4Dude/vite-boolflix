<script>

import movieApp from './movieApp.vue';
import seriesCard from './seriesCard.vue';

export default {
    name: 'Main',
    components: {
        movieApp,
        seriesCard,
    }
}

</script>

<template>
    <!-- component connection -->
    <movieApp></movieApp>
    <seriesCard></seriesCard>
    <!-- component connection -->
    <!-- footer -->
    <div class="footer">
        <h1>Enjoy it!!</h1>
    </div>
    <!-- footer -->
</template>

<style lang="scss" scoped>
.footer {
    background-color: #f9ac53;
    font-size: 72px;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 40px;
    h1 {
        color: #ff00c1;
    }
}
</style>