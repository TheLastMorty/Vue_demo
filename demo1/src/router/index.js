import VueRouter from "vue-router"
import HanHelloWorld from "../components/HanHelloWorld"
import HelloWorld from "../components/HelloWorld"


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