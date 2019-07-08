<template>
  <div id="app">
    <Nav></Nav>
    <Navs></Navs>
    <router-view/>
  </div>
</template>
<script>
import Nav from './components/Nav'
import Navs from './components/Navs'
export default {
  components:{
    Nav,
    Navs
  }
}
</script>

<style>
  .container{
    position: fixed;
    width: 100%;
    overflow-y:scroll;
  }
</style>
