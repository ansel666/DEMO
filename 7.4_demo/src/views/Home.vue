<template>
  <div class="home">
    <span>这是首页</span>
    <abc :msg="msg"></abc>
    <Banner :sliders="sliders"></Banner>
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue'
import {getBanner} from '../api/home';
import abc from '../components/abc'

export default {
  data(){
    return {
      sliders:[],
      msg:"hello world"
    }
  },
  created(){
    this.getSlider()
  },
  components: {
    Banner,
    abc
  },
  methods:{
    async getSlider(){
      let {banner} = await getBanner()
      this.sliders = banner
    }
  }
}
</script>
<style scpoed>
  span{
    font-size: 30px;
    color:red;
  }
</style>

