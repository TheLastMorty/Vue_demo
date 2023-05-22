
<template>
  <el-aside width="200px" height:100vh style="background-color: rgb(238, 241, 246)">
    <el-menu >
      <NavigationItem NavigationName="hanHello" to="Han" index=1></NavigationItem>
    </el-menu>
    <el-menu >
      <NavigationItem NavigationName="OrgHelloWorld" to="Org" index=2></NavigationItem>
    </el-menu>
    <el-menu>
      <SubNavigation index=3></SubNavigation>
    </el-menu>
  </el-aside>
</template>
<script>
import NavigationItem from "./NavigationItem.vue";
import SubNavigation from "./SubNavigation.vue";

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
    NavigationItem,SubNavigation
   }
}
</script>
<style lang="scss" scoped>

</style>
