import VueRouter from "vue-router"
import HanHelloWorld from "../components/HanHelloWorld"
import HelloWorld from "../components/HelloWorld"


export default new VueRouter({
    routes:[
        {
            path:"/Han",
            component:HanHelloWorld
        },
        {
            path:"/Org",
            component:HelloWorld
        },
        {
          path:"/",
          component:HelloWorld
        }
    ]
});