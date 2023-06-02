import service from "./request";
// import {get,post} from "./request"

export default{
  getFactoryList(){
    const url="factory/getFactoryList"
    return service({
      url:url,
      method:"get"
    })
  },
  getWorkShopList(data){
    const url="workShop/getWorkShopList"+"/"+data
    return service({  
      url:url,
      method:"get"
    })
  },
  getVariableByWorkShopId(data){
    const url="variable/getVariableByWorkShopId"+"/"+data.workShopId
    return service({
      url:url,
      method:"get",
    })
  },
  getVariableValueByVariableId(data){
    const url="variableRecord/getVariableRecordById"
    return service({
      url:url,
      method:"post",
      data
    })
  },
  getVariableRecordsByIdList(data){
    const url="variableRecord/getVariableRecordsByIdList"

    return service.post(url,
      data
    )
  },
  
  getVariableRecordsByIdList2(data){
    const url="variableRecord/getVariableRecordsByIdList"
    return service({
      url:url,
      method:"post",
      data:JSON.stringify(data),
      headers:{
        "Content-Type":"application/json;charset=UTF-8"
      }
    })
  }
}

  