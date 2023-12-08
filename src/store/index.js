import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const loginState = new BroadcastChannel('loginState')

   /*
      isFirst       ->  是否第一次进入App.vue
      serviceIndex  ->  服务中心 组件当前导航索引  (在哪页)
      token:        ->  用户token
      logined:      ->  是否已登录
      router:       ->    路由结构
      
  */

export default new Vuex.Store({
  state: {
    isFirst:true,            
    serviceIndex:'myOrder',  
    username:'',
    nickName:'',
    token:'', 
    logined:false,  
    router:{} 
  },
  getters: {
  },
  mutations: {
    updateServiceIndex(state,newIndex){
      state.serviceIndex = newIndex
    },
    updateUserInfo(state,info){
      state.username = info.username
      state.nickName = info.nickName
      state.token = info.token
    },
    updateLogined(state,logined){
      loginState.postMessage(logined)  //发送响应给首页 登录状态 已登录/已失效
      state.logined = logined
    },
    updateRouter(state,router){
      state.router = router
    },
    updateIsFirst(state,first){
      state.isFirst = first
    }
  },
  actions: {
  },
  modules: {
  },
  plugins:[
    createPersistedState({
    storage: window.localStorage,
    reducer(state){
      return{
        username: state.username,
        nickName: state.nickName,
        token: state.token
      }
    }
  })]
})
