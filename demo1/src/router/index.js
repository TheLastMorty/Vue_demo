import VueRouter from "vue-router"
import HanHelloWorld from "../components/HanHelloWorld"
import HelloWorld from "../components/HelloWorld"

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
        }

    ]
});