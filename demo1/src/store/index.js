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
      state.valueList=values
    },
    getVariableList(state,variables){
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
    }

  },
  getters:{
    variableList:state => {
      return state.variableList
    }
  }
})