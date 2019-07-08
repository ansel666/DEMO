<template>
  <div class="home">
    <span>this in home</span>
    <Banner :sliders="sliders"></Banner>
    <Navs></Navs>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue'
import Navs from '../components/Navs'
import {getBanner} from '../api/index'
export default {
  data(){
    return {
      sliders:[]
    }
  },
  components: {
    Banner,
    Navs
  },
  created(){
    this.getSliders()
  },
  methods:{
    async getSliders(){
      let {banner} = await getBanner();
      this.sliders = banner
    }
  }
}
</script>
<style scoped>
  span{
    color:blue;
  }
</style>

