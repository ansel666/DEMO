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
import { getBanner,getList } from "../api";
import { constants } from "fs";
export default {
  name: "home",
  created() {
    // ajax 异步 越早发送越好 一般放 created
    this.getSlider();
    this.getL()
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
    //轮播图请求
    async getSlider() {
      let { banner } = await getBanner();
      this.slider = banner;
    },
    
    async getL() {
      //发送ajax请求
      let {list} = await getList();
      //把ajax拿回来的数据挂到this上
      this.homeList = list;
    }
  }
};
</script>
<style scoped>
  /* ul{
    margin-left:150px;

  }
  li{
    float: left;
    margin-left:30px;
    list-style: none;
  } */
  
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
    width:56%;
    border-radius: 5px;
  }
</style>

