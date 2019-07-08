<template>
    <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in sliders" :key="item.id">
            <img :src="item.imgurl" alt="">
        </van-swipe-item>
    </van-swipe>
</template>
<script>
export default {
    props:{
        sliders:{
            type:Array,
            default:() => []
        }
    }
}
</script>
<style>
    .van-swipe-item img {
        width: 100%;
        height: auto;
    }
</style>


