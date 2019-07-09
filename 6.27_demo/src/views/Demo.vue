<template>
    <div>
        演示refs用的组件
        <Mybutton ref="btn"></Mybutton>
    </div>
</template>
<script>
import Mybutton from '../components/Mybutton'
export default {
    components:{
        Mybutton
    },
    mounted(){
        let btn = this.$refs.btn
        btn.msg = "按钮1"; //一般用不到
        console.log(btn.msg);
        this.$refs.btn.CK()
    }
}
</script>

