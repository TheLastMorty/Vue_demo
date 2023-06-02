<template>
  <el-descriptions :title="'变量名:  ' + this.displayName">
    <el-descriptions-item label="变量类型">
      {{ dataType }}
    </el-descriptions-item>
    <el-descriptions-item label="变量值">
      {{vuexValue }}
    </el-descriptions-item>
  </el-descriptions>
</template>
<script>
// import { log } from 'console'


// import api from '@/axios/api';
import { mapState } from 'vuex';
export default {
  data() {
    return {
      value: undefined,
      updateInterval: null
      // vuexValue:undefined
    }
  },
  created() {
  },
  computed: {
    ...mapState({
        vuexValue(state){
          // console.log(this,"computed");
          return state.valueList.get(this.variableId)
        }
      })
    // vuexValue:this.$store.state.valueList.get(this.variableId)
    
  },
  methods: {
  },
  beforeMount() {
    // console.log("变量名"+this.name)

    // console.log("变量名"+this.value)

    // this.vuexValue=this.$store.state.valueList.get(this.variableId)
    // console.log(this.$store.state);

    // const requestData = { variableId: this.variableId }
    // this.updateInterval = setInterval(() => {
    //   api.getVariableValueByVariableId(requestData).then((response) => {
    //     this.value = response.data[0].content;
    //   }, (error) => {
    //     console.log(error)
    //   })
    // }, 5000);

  },
  beforeDestroy() {
    // clearInterval(this.updateInterval);
  },
  props: ["variableName", "variableId", "displayName", "dataType"]
}
</script>
<style lang="scss" scoped></style>

