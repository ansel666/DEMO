<template>
    <button @click="CK">{{msg}}</button>
</template>
<script>
export default {
    data(){
        return{
             msg:"我的按钮"
        }
       
    },
    methods:{
        CK(){
           console.log("1234");
        }
    }
}
</script>
<style scoped>

</style>


