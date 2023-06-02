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
      // state.valueList=values
      state.valueList=new Map();
      for(let variable of values){
        state.valueList.set(variable.variableId,variable.content)
        // console.log(variable.variableId)
        // console.log(state.valueList.get(variable.variableId))
      }
    },
    getVariableList(state,variables){
      state.variableList=variables
      for(let variable of variables){
        state.valueList.set(variable.variableId,0)
        // console.log(variable.variableId)
        // console.log(state.valueList.get(variable.variableId))
      }
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
      // const formData=new FormData()
      // formData.append("workShopId",workShopId)
      return api.getVariableByWorkShopId(requireData).then((response)=>{
        context.commit("getVariableList",response.data)
        return response.data
      },(error)=>{
        console.log(error)
      })
    },
    getVariableThreshold(context,variables){
      const variableIdList=new Array()
      for(let variable of variables){
        variableIdList.push(variable.variableId);
      }
      const requireData={variableIdList}
      return api.getVariableThresholdList(requireData).then((response)=>{
        context.commit("getThresholdList",response.data)
        // return response.data
      },(error)=>{
        console.log(error)
      })
    },
    getVariableRequire(context,variables){
      const variableIdList=new Array()
      for(let variable of variables){
        variableIdList.push(variable.variableId);
      }
      const requireData={variableIdList}
      return api.getVariableRequireList(requireData).then((response)=>{
        context.commit("getRequireList",response.data)
        // return 
      },(error)=>{
        console.log(error)
      })
    },
    getVariableRecordList(context,variables){
      const variableIdList=new Array()
      for(let variable of variables){
        variableIdList.push(variable.variableId);
      }
      let requireData={IdList:variableIdList,Id:2}
      console.log(requireData)
      api.getVariableRecordsByIdList(requireData).then((response)=>{
        context.commit("updateValueList",response.data)
      })
    }

  },
  getters:{
    variableList:state => {
      return state.variableList
    }
  }
})