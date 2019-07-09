<template>
    <div class="container" ref="scrollele" @scroll="scmore">

        <div v-for="(item,index) in list" :key="index">
            <!-- {{list[0]}} -->
            <van-card
            num="1"
            tag="特惠"
            :price="item.price"
            :desc="item.info"  
            :title="item.name"
            :thumb="item.img" 
            origin-price="500.00"
        />
        </div>
        <div class="btn-box">
            <van-button icon="star-o" type="primary" @click="loadmore">{{hasMore?"点击加载更多":"没有数据了"}}</van-button>
            
        </div>
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <p>刷新次数: {{ count }}</p>
        </van-pull-refresh>
    </div>
</template>
<script>
import { getPage} from "../api";

export default {
    data(){
        return {
            list:[],
            page:1, //默认拿第一页的数据
            hasMore:true,//默认有下一页数据
            count: 0,
            isLoading: false
        }
    },
    created(){
        this.getPagelist()
    },
    mounted(){
       console.dir(this.$refs.scrollele)
    },
    methods:{
       
        scmore(){
            clearTimeout(this.timer);
            //防抖和节流
            this.timer = setTimeout(()=>{
                console.log(2);
                let scrollele = this.$refs.scrollele;
                let {scrollTop,scrollHeight,clientHeight} = scrollele
                //判断到底部加载更多
                if(clientHeight+scrollTop+10>scrollHeight){
                    this.loadmore()
                }
            },1000)
            
        },
        async getPagelist(){
            //前端获取第一页的数据
            let {list,hasMore} = await getPage(this.page);
            //把新请求回来的数据和原来的数据this.list 的数据合并就可以保留所有数据
            //this.list = this.list.concat(list)
            this.hasMore = hasMore;
            this.list = [...this.list,...list]  //es60
            
        },
        //点击加载下一页
        loadmore(){
            //如果没有更多数据了，就不再发送请求了
            if(this.hasMore == false) return;
            //console.log(hasMore)
            //页数加一
            this.page = this.page++;
            //发送请求拿到下一页的数据
            this.getPagelist()
            
        },
         onRefresh() {
            setTimeout(() => {
                this.$toast('刷新成功');
                this.isLoading = false;
                this.count++;
            }, 13);
        },
    }
}
</script>
<style scoped>
   .btn-box{
       text-align: center
   }
</style>