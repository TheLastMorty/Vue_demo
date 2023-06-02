<template>
  <el-submenu :index=index>
  <template slot="title">
    <i class="el-icon-location"></i>
    <span>车间管理</span>
  </template>
  <el-menu-item-group>
    <WorkShopItem 
      v-for="workshop in workShopItems"
      :workShopName=workshop.workShopName
      :workShopId=workshop.workShopId
      :key=workshop.workShopId
    />
  </el-menu-item-group>
  </el-submenu>
</template>
<script>

import api from "../axios/api"
import WorkShopItem from "./WorkShopItem.vue"
export default {
   data() {
      return {
        workShopItems:[],
      }
   },
   created(){
   },
   components:{ WorkShopItem },
   computed:{
   },
   methods:{
   },
   props:["index"],
   beforeMount(){
    // 使用固定数据
      // this.factoryItem=[{factoryId:2,factoryName:"天振1号"},{factoryId:3,factoryName:"天振2号"}]

    // 发送ajax请求获取工厂列表
      // 使用vue-resource发送ajax请求
      // const url="http://127.0.0.1:8090/factory/getFactoryList"
      // this.$http.get(url).then(function (response) {
      //     console.log(response);
      //     this.factoryItem = response.data;
      //     console.log(this.factoryItem)

      //   },function (error) {
      //     console.log(error);
      //   });

      // 使用封装好的axios api 发送ajax请求
      // const requestData={factoryId:"2"}
      // const formdata=new FormData();
      // formdata.append("factoryId",2)
      api.getWorkShopList("2").then((response)=>{
        console.log(response.data)
        this.workShopItems=response.data
      },(error)=>{
        console.log(error)
      })
   }
}
</script>
<style lang="scss" scoped>

</style>
