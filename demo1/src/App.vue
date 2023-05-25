<template>
  <div id="app">

    <el-container style="height: 100vh; border: 1px solid #eee">
      <AsideNavigation style="height:100vh"></AsideNavigation>
      <el-main>
        <router-view :key="key"></router-view>
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
  computed:{
    key() {
        return this.$route.name !== undefined? this.$route.name + +new Date(): this.$route + +new Date()
    }
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
