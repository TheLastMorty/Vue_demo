<template>
  <div id="app">

    <el-container style="height: 100vh; border: 1px solid #eee">
      <AsideNavigation style="height:100vh"></AsideNavigation>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import AsideNavigation from './components/AsideNavigation.vue';

export default {
  name: 'App',
  components: {
    AsideNavigation
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
