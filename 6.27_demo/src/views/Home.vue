<template>
  <div>
    <div class="container">
      <Banner :swiperSlides="slider" />
      <div >
        <ul class="homelist">
          <li v-for="(item,index) in homeList" :key="index">
            <img :src="item.img" alt="">
            <p>{{item.name}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Banner from "../components/Banner";
// import * as obj from "../api";
// console.log(obj.getBanner.toString());
import { getHomeAll } from "../api";
import { constants } from "fs";
export default {
  name: "home",
  async created() {
    // ajax 异步 越早发送越好 一般放 created
    //console.log(await getHomeAll())
    this.getAll()
    // let [{banner},{list}] = await getHomeAll();
    // let banner = res[0].banner
    // this.getSlider();
    // this.getL()
  },
  data() {
    return {
      slider: [],
      homeList:[]
    };
  },
  components: {
    Banner
  },
  methods: {
    async getAll(){
      //可以多个请求完成之后把数据集合到一起
      let [{banner},{list}] = await getHomeAll();
      this.slider = banner;
      this.homeList = list;
    },
    //轮播图请求
    // async getSlider() {
    //   try{
    //     let { banner } = await getHomeAll();
    //     this.slider = banner;
    //   }catch(err){console.log(err)}
    // },
    
    // async getL() {
    //   //发送ajax请求
    //   let {list} = await getHomeAll();
    //   //把ajax拿回来的数据挂到this上
    //   this.homeList = list;
    // }
  }
};
</script>
<style scoped>
  .homelist{
    display:flex;
    flex-wrap: wrap;
    width: 100%;
  
  }
  .homelist li {
    width:50%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .homelist li img{
    width:45%;
    border-radius: 5px;
  }
</style>

