<template>
    <div>
      <VariableCard
        v-for="variable in this.variables"
        :variableName=variable.variableName
        :displayName=variable.displayName
        :dataType=variable.dataType
        :variableId=variable.variableId
        :vuexValue=values.get(variable.variableId)
        :key=variable.variableId
      />
      <h2>{{ testdata.get("a") }}</h2>
    </div>
</template>
<script>
  // import api from "../axios/api";
  import VariableCard from "./VariableCard.vue";
export default {

   data() {
      return {
        variables:[],
        values:[],
        updateValueInterval:null,
        testdata:new Map()
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
    this.testdata.set("a","a")
    // 发送ajax请求，获取当前车间下的所有内容（小卡片）
    this.$store.dispatch("getVariableList",this.workshopId).then((response)=>{
      // this.variables=this.$store.getters.variableList
      this.variables=response
      // console.log(this.$store.state.valueList)
      this.values=this.$store.state.valueList
      this.updateValueInterval=setInterval(() => {
       this.$store.dispatch("getVariableRecordList",this.variables)
      }, 5000);
      },(error)=>{
        console.log(error)
    })
   
   },
   beforeDestroy(){
    clearInterval(this.updateValueInterval)
   }
}
</script>
<style lang="scss" scoped>

</style>
