<template>
  <div id="app">
    <Nav></Nav>
    <Banner></Banner>
    <router-view/>
  </div>
</template>
<script>
import Nav from './components/Nav'
import Banner from './components/Banner'
export default {
  components:{
    Nav,
    Banner
  }
}
</script>


<style>
  
</style>
