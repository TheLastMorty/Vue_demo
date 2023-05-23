<template>
  <el-submenu :index=index>
  <template slot="title">
    <i class="el-icon-location"></i>
    <span>工厂管理</span>
  </template>
  </el-submenu>
</template>
<script>
// import FactoryItem from './FactoryItem.vue';

export default {
   data() {
      return {
        factoryItem:[],
      }
   },
   created(){
   },
  //  components:{FactoryItem},
   computed:{
   },
   methods:{
   },
   props:["index"],
   beforeMount(){
    // 发送ajax请求获取工厂列表
      // this.factoryItem=[{factoryId:2,factoryName:"天振1号"},{factoryId:3,factoryName:"天振2号"}]
      const url="http://127.0.0.1:8090/factory/getFactoryList"
      // console.log("facatoryNavigation before mount  : ",this.factoryItem)
      this.$http.get(url).then(function (response) {
          console.log(response);
          this.factoryItem = response.data;
          console.log(this.factoryItem)

        },function (error) {
          console.log(error);
        });
   }
}
</script>
<style lang="scss" scoped>

</style>
