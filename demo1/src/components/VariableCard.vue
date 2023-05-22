<template>
    <div>
      <el-descriptions :title="'变量名:  '+this.name">
        <el-descriptions-item label="值">
          {{ this.value }}
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
    console.log("变量名"+this.name)

    console.log("变量名"+this.value)
   }, 
   props:["name","value"]
}
</script>
<style lang="scss" scoped>

</style>
