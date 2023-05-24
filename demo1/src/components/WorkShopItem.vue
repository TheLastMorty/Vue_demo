<template>
  <div>
    <el-menu-item  @click=WorkShopNavigate :index=this.workShopId.toString()>
      <i class="el-icon-setting"></i>
      <span>{{workShopName}}</span>
    </el-menu-item>
  </div>
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
   props:["workShopName","workShopId"],
   methods:{
    WorkShopNavigate(){
      console.log("router push 被调用了",this.workShopId)
        this.$router.push({
          name:"WorkShop",
          query:{
            workShopId:this.workShopId
          }
        }      
      )
    }
   },
}
</script>
<style lang="scss" scoped>

</style>
