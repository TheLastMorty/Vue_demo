<template>
    <div>
      <el-menu-item index="1">
        <i class="el-icon-setting"></i>
        <span @click=navigate>{{NavigationName}}</span>
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
        console.log("router push 被调用了",this.to)
          this.$router.push({
            name:this.to
          }      
        )
      }
   },
   props:["NavigationName","to"]
}
</script>
<style lang="scss" scoped>

</style>
