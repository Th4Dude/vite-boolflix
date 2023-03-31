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
           <h1 class="color_red">VAPORFLIX</h1>
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
    color: #ff00c1;
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
    background-color: #9600ff ;
    background-image: url(https://c4.wallpaperflare.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 200px;  
    width: 100%;
   
}

button{
    background-color:#4900ff;
    border: 2px solid #ff00c1;
    border-radius: 10px;
    width: 70px;
    height: 30px;
    margin-left: 15px;
    color: #ff00c1;
}
button:hover {
    transform: scale(1.5);
    transition: all 0.4s ease-out;
}
input{
    background-color: #4900ff;
    border: 2px solid #ff00c1;
    border-radius: 10px;
    height: 30px;
    width: 40%;
    color: #ff00c1;
    font-size: 26px;
}


/* Hex 	RGB
	#ff00c1 	(255,0,193)
	#9600ff 	(150,0,255)
	#4900ff 	(73,0,255)
	#00b8ff 	(0,184,255)
	#00fff9 	(0,255,249)
 */


</style>