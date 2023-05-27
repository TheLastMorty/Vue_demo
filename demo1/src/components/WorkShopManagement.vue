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
    // console.log(this)

    (this.$store.dispatch("getVariableList",this.workshopId))
    this.variables=this.$store.getters.variableList

    // const requestData={workShopId:this.workshopId}

    // api.getVariableByWorkShopId(requestData).then((response)=>{
    //   // console.log(response)
    //   this.variables=response.data
    // },(error)=>{
    //   console.log(error)
    // })
      // dataType: "real"
      // displayName: "电机温度"
      // equipmentId: ""
      // variableId: "Connectivity/GeKong/G1/t1"
      // variableName: "t1"
      // workShopId: 0
      // workShopName: ""
   }
}
</script>
<style lang="scss" scoped>

</style>
