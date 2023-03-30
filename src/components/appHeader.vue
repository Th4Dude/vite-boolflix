<script>

import { store } from '../store';
export default {
    name: 'Header',
    data() {
        return {
            store,
        }
    }
}

</script>

<template>

    <div class="main_container">
        <div class="header_container">
            <form @submit.prevent="$emit('searchName')">
                <input type="text" placeholder="Search Film" v-model="store.searchText">
                <button type="submit">Search</button>
            </form>
        </div>
    </div>

</template>

<style lang="scss" scoped>
.main_container {
    display: flex;
    justify-content: center;
}

</style>