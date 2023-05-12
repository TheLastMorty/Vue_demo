<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <HanHelloWorld/> -->
    <router-link class="routeLink" to="/Han"> han ni hao </router-link>
    <router-link class="routeLink" to="/Org"> org ni hao </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import HanHelloWorld from './components/HanHelloWorld.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld
    // HanHelloWorld
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
</style>
