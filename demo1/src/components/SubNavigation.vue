<template>
    <el-submenu index=100>
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>导航一</span>
      </template>
      <el-menu-item-group>
        <el-menu-item v-for="(name,index) in names"></el-menu-item>


      </el-menu-item-group>
    </el-submenu>
</template>
<script>
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
   props:["names","index"]
   
}
</script>
<style lang="scss" scoped>

</style>
