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

        <div class="flex-justify-content padding-top-15 box">
           <h1 class="color_red">BOOLFLIX</h1>
        </div>
        <div class=" padding-top-15 ">
            <form class="box flex-justify-content" @submit.prevent="$emit('searchName')">
                <input type="text" placeholder="Search Film" v-model="store.searchText">
                <button type="submit">Search</button>
            </form>
        </div>

    </div>

</template>

<style lang="scss" scoped>

/* common */

.flex-justify-content{
    display: flex;
    justify-content: center;
    align-items: center;
}

.color_red{
    color: red;
    font-size: 56px
}

.padding-top-15{
    padding-top: 15px;
}
.box{
    width: 100%;
}
/* common */

.main_container {
    background-color: #141414 ;
    height: 200px;  
    width: 100%;
   
}

button{
    background-color: aquamarine;
    border: none;
    border-radius: 10px;
    width: 70px;
    height: 30px;
    margin-left: 15px;
}
input{
    border: none;
    border-radius: 10px;
    height: 30px;
    width: 40%;
}


</style>