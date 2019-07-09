<template>
    <div>
        Vant.vue
        <van-button type="default" @click="btnclick()">默认按钮</van-button>
        <van-icon name="star" />
        <van-card
            num="2"
            price="2.00"
            desc="描述信息"  
            title="商品标题"
            thumb="https://img.yzcdn.cn/vant/t-thirt.jpg" 
        />
    </div>
</template>
<script>
export default {
    methods:{
        btnclick(){
            console.log(1111)
        }
    }
}
</script>
<style>

</style>
