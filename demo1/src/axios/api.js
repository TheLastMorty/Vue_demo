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
    const url="workShop/getWorkShopList"
    return service({
      url:url,
      method:"post",
      data
    })
  }
}

  