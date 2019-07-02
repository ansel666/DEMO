<template>
  <div id="app">
    <!-- 3 用标签的形式使用 -->
    <Nav/>
    <Banner/>
    <router-view/>
  </div>
</template>
<script>
//引入组件
import Nav from './components/Nav'
import Banner from './components/Banner'
export default {
  //2注册
  components:{
    Nav,
    Banner
  }
}
</script>

<style>
.container{
    position: fixed;
    top:0;
    width: 100%;
    bottom: 58px;
    overflow-y:scroll;
  }
  ul li {
    list-style:none;
  }
  *{
    margin:0;
    padding:0;
  }
  a{
    text-decoration: none;
    color: #333;
  }
</style>
