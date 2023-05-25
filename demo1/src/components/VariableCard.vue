<template>
    <div>
      <el-descriptions :title="'变量名:  '+this.displayName">
        <el-descriptions-item label="变量类型">
          {{ this.dataType }}
        </el-descriptions-item>
      </el-descriptions>
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
   },
   beforeMount(){
    // console.log("变量名"+this.name)

    // console.log("变量名"+this.value)
   }, 
   props:["variableName","displayName","dataType"]
}
</script>
<style lang="scss" scoped>

</style>

