import VueRouter from "vue-router"
import HanHelloWorld from "../components/HanHelloWorld"
import HelloWorld from "../components/HelloWorld"
import VariableManagement from "../components/VariableManagement"
// import WorkShopManagement from "../components/WorkShopManagement"
const WorkShopManagement = ()=>import("../components/WorkShopManagement") 

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new VueRouter({
    routes:[
        {
            path:"/Han",
            name:"Han",
            component:HanHelloWorld
        },
        {
            path:"/Org",
            name:"Org",
            component:HelloWorld
        },
        {
          path:"/Variable",
          name:"Variable",
          component:VariableManagement,
          props: route => ({ name: route.query.name })
        },
        {
          path:"/WorkShop",
          name:"WorkShop",
          component:WorkShopManagement,
          props:route =>({
            workshopId:route.query.workShopId
          })
        }

    ]
});