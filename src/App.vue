<template>
  <div class="">
    <!-- top-nav 组件渲染顶部黑色条 -->
    <top-nav v-if="$route.path != '/login' && $route.path != '/404'"></top-nav>

      <router-view></router-view>
     
   
  </div>
</template>

<script>

import topNav from "./components/topNav.vue";
import store from "./store";
import router from "./router";
//引用检查token函数 和 获取用户信息函数 (通用函数)
import {check_tokenHandler, saveUserDataHandler} from '@/utils/commonFunc'

export default {
  name: "app",
  mixins:[check_tokenHandler,saveUserDataHandler],
  components: {
    topNav,
  },
  mounted() {

    //----初次登录 检查token情况
    this.check_token()
    //----加载路由主体结构
    this.initRouter()
    //----获取用户信息并存储到vuex

    if(store.state.userId){
      this.saveUserData(store.state.userId)
    }

    

  },
  methods: {

    //存放路由结构 到store仓库  该结构用于给路由做拦截
    initRouter() {

      const routePaths = {};
      // 递归将路由都放到变量里
      function getRoutePath(arr) {
        return arr.map((item) => {
          
          routePaths[item.path] = item.name;

          if (item.children && item.children.length > 0) {
            getRoutePath(item.children);
          }

        });
      }


      getRoutePath(router.options.routes);
      store.commit('updateRouter',routePaths)

    },
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
</style>
