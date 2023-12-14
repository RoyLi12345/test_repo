import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

//实例化频道
const loginState = new BroadcastChannel('loginState')

   /*
      isFirst       ->  是否第一次进入App.vue
      serviceIndex  ->  服务中心 组件当前导航索引  (在哪页)
      userId        ->  用户ID (唯一性)(持久化)
      userName      ->  用户名
      nickName      ->  用户昵称
      email         ->  用户邮箱
      token:        ->  token  (持久化)
      logined:      ->  是否已登录
      router:       ->  主路由结构
      
  */

export default new Vuex.Store({
  state: {
    isFirst:true,
    userId:'',
    nickName:'',
    userName:'',
    email:'',
    token:'',
    logined:false,
    router:{},
    dialogContent:''
  },
  getters: {
  },
  mutations: {
    updateUserInfo(state,info){
      state.userId = info.userId
      state.userName = info.userName
      state.nickName = info.nickName
      state.email = info.email
    },
    updateNickName(state,nickName){
      state.nickName = nickName
    },
    updateToken(state,token){
      state.token = token
    },
    updateLogined(state,logined){
      loginState.postMessage(logined)  //通过频道 发送响应给首页 登录状态 已登录/已失效
      state.logined = logined
    },
    updateRouter(state,router){
      state.router = router
    },
    updateIsFirst(state,first){
      state.isFirst = first
    },
    updateDialogContent(state,content){
      state.dialogContent = content
    }
  },
  actions: {
  },
  modules: {
  },
  plugins:[
    //将用户信息 持久化 存于localStorage里
    createPersistedState({
    storage: window.localStorage,
    reducer(state){
      return{
        userId: state.userId,
        token: state.token
      }
    }
  })]
})
