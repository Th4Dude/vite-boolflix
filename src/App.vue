<script>
import appMain from './components/appMain.vue';
import appHeader from './components/appHeader.vue';
import axios from 'axios';
export default {
  name:'App',
  components: {
    appHeader,
    appMain,

  }
}
</script>

<template>
  
  <appHeader></appHeader>
  <appMain></appMain>


</template>


<style lang="scss">

</style>
