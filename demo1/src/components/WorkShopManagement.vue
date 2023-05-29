<template>
    <div>
      <VariableCard
        v-for="variable in this.variables"
        :variableName=variable.variableName
        :displayName=variable.displayName
        :dataType=variable.dataType
        :variableId=variable.variableId
        :key=variable.variableId
      />
    </div>
</template>
<script>
  // import api from "../axios/api";
  import VariableCard from "./VariableCard.vue";
export default {

   data() {
      return {
        variables:[]
      }
   },
   components:{
    VariableCard
   }, 
   created(){
   },
   computed:{
   },
   methods:{
   },
   props:["workshopId"],
   beforeMount(){
    // 发送ajax请求，获取当前车间下的所有内容（小卡片）
    this.$store.dispatch("getVariableList",this.workshopId).then((response)=>{
      // this.variables=this.$store.getters.variableList
      this.variables=response;
    },(error)=>{
      console.log(error)
    })
   }
}
</script>
<style lang="scss" scoped>

</style>
