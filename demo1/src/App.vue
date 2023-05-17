<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <HanHelloWorld/> -->
    <!-- <el-button>默认按钮</el-button>
    <router-link class="routeLink" to="/Han"> han ni hao </router-link>
    <router-link class="routeLink" to="/Org"> org ni hao </router-link>
    <router-view></router-view> -->
    <el-container style="height: 100vh; border: 1px solid #eee">
      <el-aside width="200px" height:100vh style="background-color: rgb(238, 241, 246)">
        <el-menu >
          <NavigationItem NavigationName="hanHello" to="Han"></NavigationItem>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import NavigationItem from "./components/NavigationItem.vue";

export default {
  name: 'App',
  components: {
    NavigationItem
  },
  methods:{

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

@import "./assets/stylesheet/bootstrap.css";
</style>
