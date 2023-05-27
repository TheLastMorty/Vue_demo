<template>
  <el-descriptions :title="'变量名:  '+this.displayName">
    <el-descriptions-item label="变量类型">
      {{ this.dataType }}
    </el-descriptions-item>
    <el-descriptions-item label="变量值">
      {{ this.value }}
    </el-descriptions-item>
  </el-descriptions>
</template>
<script>

import api from '@/axios/api';

export default {
   data() {
      return {
        value:undefined,
        updateInterval:null
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
    const requestData={variableId:this.variableId}
    this.updateInterval=setInterval(() => {
        api.getVariableValueByVariableId(requestData).then((response)=>{
          // console.log("updateInterval被调用了")
          console.log(response.data);
          this.value=response.data[0].content;
          // console.log(response.data)
        },(error)=>{
          console.log(error)
        })
    }, 5000);

   }, 
   beforeDestroy(){
    clearInterval(this.updateInterval);
   },
   props:["variableName","variableId","displayName","dataType"]
}
</script>
<style lang="scss" scoped>

</style>

