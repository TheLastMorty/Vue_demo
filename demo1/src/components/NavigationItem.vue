<template>
    <div>
      <el-menu-item  @click=navigate :index=index>
        <i class="el-icon-setting"></i>
        <span>{{NavigationName}}</span>
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
   methods:{
      navigate(){
        // console.log("router push 被调用了",this.to)
          this.$router.push({
            name:this.to
          }      
        )
      }
   },
   props:["NavigationName","to","index"]
}
</script>
<!-- <style lang="scss" scoped>

</style> -->
