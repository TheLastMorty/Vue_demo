import VueRouter from "vue-router"
import HanHelloWorld from "../components/HanHelloWorld"
import HelloWorld from "../components/HelloWorld"


export default router =new VueRouter({
    routes:[
        {
            path:"/Han",
            component:HanHelloWorld
        },
        {
            path:"/Org",
            component:HelloWorld
        }
    ]
});