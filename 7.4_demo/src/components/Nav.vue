<template>
    <div>
        <van-tabbar v-model="active">
            <van-tabbar-item icon="fire">
               <router-link to="/">
                    首页
               </router-link>
            </van-tabbar-item>
            <van-tabbar-item icon="bars">
               <router-link to="/list">
                    列表
               </router-link>
            </van-tabbar-item>
            <van-tabbar-item icon="shopping-cart">
                    购物车
            </van-tabbar-item>
            <van-tabbar-item icon="manager">
                    我的
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
export default { 
    data() {
        return {
            active: 0
        }
    }
}
</script>

