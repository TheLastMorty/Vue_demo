<template>
    <el-submenu :index=index>
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>{{this.name}}</span>
      </template>
      <el-menu-item-group>
        <NavigationItem v-for="item in items " 
           :NavigationName=item.name :to=item.to :key=item.index
        >
        </NavigationItem>

      </el-menu-item-group>
    </el-submenu>
</template>
<script>
import NavigationItem from './NavigationItem.vue';

export default {
    data() {
        return {
          items:[]
        };
    },
    created() {
    },
    computed: {},
    methods: {},
    props: ["index","name"],
    components: { NavigationItem },
    beforeMount(){
      // 发送ajax请求获取items
      this.items=[{name:"Han",to:"Han",index:1},{name:"Org",to:"Org",index:2},{name:"车间1",to:"Variable",index:3}]
    }
}
</script>
<style lang="scss" scoped>

</style>
