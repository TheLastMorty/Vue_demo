import Vue from 'vue';
import Vuex from "vuex";
import api from "../axios/api"

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    variableList:undefined,
    valueList:new Map(),
    requireList:new Map(),
    thresholdList:new Map()
  },
  // mutation里只能存放同步的操作
  mutations:{
    updateValueList(state,values){
      // for([key,value] of values.entries){
      //   state.valueList.set(key,value)
      // }
      state.valueList=values
    },
    getVariableList(state,variables){
      // for([key,value] of variables.entries){
      // }
      console.log("mutatinos中 getVariableList方法被调用了")

      state.variableList=variables
    },
    getRequireList(state,requires){
      state.requireList=requires
    },
    getThresholdList(state,thresholds){
      state.thresholdList=thresholds
    }
  },
  // actions里可以存放异步任务
  // actions提交mutation，并不直接更改state
  actions:{
    getVariableList(context,workShopId){
      const requireData={workShopId}
      console.log("actions中 getVariableList方法被调用了")
      api.getVariableByWorkShopId(requireData).then((response)=>{
        context.commit("getVariableList",response.data)
        return context.getters.variableList
      },(error)=>{
        console.log(error)
      })
    }
  },
  getters:{
    variableList:state => {
      console.log("getters中 variableList方法被调用了")

      return state.variableList
    }
  }
})