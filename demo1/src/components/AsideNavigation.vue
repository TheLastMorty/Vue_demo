
<template>
  <el-aside width="200px" height:100vh style="background-color: rgb(238, 241, 246)">
    <el-menu >
      <NavigationItem NavigationName="hanHello" to="Han" index=1></NavigationItem>
    </el-menu>
    <el-menu >
      <NavigationItem NavigationName="OrgHelloWorld" to="Org" index=2></NavigationItem>
    </el-menu>
    <el-menu>
      <SubNavigation index=3 name="变量管理"></SubNavigation>
      <!-- <FactoryNavigation index=4></FactoryNavigation> -->
      <WorkShopNavigation index=4></WorkShopNavigation>
    </el-menu>
  </el-aside>
</template>
<script>
import NavigationItem from "./NavigationItem.vue";
import SubNavigation from "./SubNavigation.vue";
import WorkShopNavigation from "./WorkShopNavigation.vue";

export default {
   data() {
      return {
      }
   },
   created(){
   },
   computed:{
   },
   methods:{
   },
   components:{
    NavigationItem,SubNavigation,WorkShopNavigation
   }
}
</script>
<style lang="scss" scoped>

</style>
