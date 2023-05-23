<template>
    <div>
      <VariableCard v-for="variable in variables"
      :key=variable.index :name=variable.name :value=variable.value 
      />
    </div>
</template>
<script>

import VariableCard from './VariableCard.vue';

export default {
   data() {
      return {
        variables:[]
      }
   },
   created(){
   },
   computed:{
   },
   methods:{
   },
   components:{VariableCard},
   props:["name"],
   beforeMount(){
    // console.log(this.name)
    // 发送ajax请求获取对应变量域的所有变量值，并且启动一个定时器，动态地更新变量值
    this.variables=[{name:"风机1号",value:100,index:1},{name:"风机2号",value:200,index:2}]
   }
}
</script>
<style lang="scss" scoped>

</style>
