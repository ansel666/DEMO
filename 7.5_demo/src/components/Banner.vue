<template>
  <div class="container">
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in sliders" :key="item.id">
        <img :src="item.imgurl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
    props:{
        sliders:{
            type:Array,
            default:()=>[]
        }
    }
}
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
   .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
   .el-carousel__item img {
        width: 100%;
        height: auto;
    }
  .el-carousel__container {
    width:100%;
    height:500px !important;
  }
</style>



