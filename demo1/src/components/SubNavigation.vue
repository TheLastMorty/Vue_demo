<template>
    <el-submenu :index=index>
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>车间选择</span>
      </template>
      <el-menu-item-group>
        <NavigationItem v-for="(item,sub_index) in items" 
          :index=sub_index :NavigationName=item.name :to=item.to :key=sub_index
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
    props: ["index"],
    components: { NavigationItem },
    beforeMount(){
      // 发送ajax请求获取items
      this.items=[{name:"Han",to:"Han"},{name:"Org",to:"Org"}]
    }
}
</script>
<style lang="scss" scoped>

</style>
