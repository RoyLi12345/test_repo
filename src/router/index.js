import store from '@/store'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/home',
  },
  {
    path:'/login', 
    name:'login',
    component:()=>import('../views/login/login.vue')
  },
  {
    path: '/home',
    name: 'home',
    meta:['首页'],   //meta给面包屑导航 显示目前在第几页
    redirect:'/index',
    component: () => import('../views/home.vue'),
    children:[
      {
        path: '/index',
        name: 'index',
        meta:['首页'],
        component: () => import('../views/index.vue'),
      },
      {
        path: '/category',
        name: 'category',
        meta:['全部分类'],
        component: () => import('../views/category.vue'),
      },
      {
        path: '/limited',
        name: 'limited',
        meta:['限时秒杀'],
        component: () => import('../views/limited.vue'),
      },
      {
        path: '/help',
        name: 'help',
        meta:['帮助中心'],
        component: () => import('../views/help.vue'),
      },
      {
        path:'/goods',
        name:'good',
        meta:['浏览商品中...'],
        component:()=>import('../views/goods.vue')
      },
      {
        path:'/service',
        name:'service',
        redirect:'/service/myOrder',
        meta:['服务中心'],
        component:()=>import('../views/service.vue'),
        children:[
          {
            path:'/service/myOrder',
            name:'myOrder',
            meta:['我的订单'],
            component:()=>import('../views/service/OrderModule/myOrder.vue'),
            children:[
              {
                path:'/service/unPaid',
                name:'unPaid',
                meta:['待支付'],
                component:()=>import('../views/service/OrderModule/unPaid.vue'),
              },
              {
                path:'/service/unReceived',
                name:'unReceived',
                meta:['待收货'],
                component:()=>import('../views/service/OrderModule/unReceived.vue'),
              },
              {
                path:'/service/recovery',
                name:'recovery',
                meta:['订单回收'],
                component:()=>import('../views/service/OrderModule/recovery.vue'),
              },
            ]
          },
          {
            path:'/service/myCart',
            name:'myCart',
            meta:['我的个人中心'],
            component:()=>import('../views/service/PersonalModule/myCart.vue')
          },
          {
            path:'/service/myProfile',
            name:'myProfile',
            meta:['我的个人中心'],
            component:()=>import('../views/service/PersonalModule/myProfile.vue')
          },
          {
            path:'/service/myItem',
            name:'myItem',
            meta:['喜欢的商品'],
            component:()=>import('../views/service/PersonalModule/myItem.vue')
          },
          {
            path:'/service/myAddress',
            name:'myAddress',
            meta:['收货地址'],
            component:()=>import('../views/service/PersonalModule/myAddress.vue')
          },
          {
            path:'/service/myInfo',
            name:'myInfo',
            meta:['个人信息'],
            component:()=>import('../views/service/UserModule/myInfo.vue')
          },
          {
            path:'/service/changePassword',
            name:'password',
            meta:['修改密码'],
            component:()=>import('../views/service/UserModule/password.vue')
          }
          

        ]
      },
      {
        path: '/customerService',
        name: 'customerService',
        meta:['售后服务'],
        component: () => import('../views/customerService/home.vue'),
        children:[
          {
            path: '/customerService/call',
            name: 'call',
            meta:['联系客服'],
            component: () => import('../views/customerService/call.vue'),
          }
        ]
      }
  ]  
  },
  {
    path:'/404',
    name:'404',
    component:()=>import('../views/404.vue')
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//需要token登录的路由 存放这里
const tokenRoutes = {
  '/category':'category',
  '/service':'service',
  '/customerService':'customerService'
}


//路由全局守卫
router.beforeEach((to,from,next)=>{
  
  
  if(to.path == '/login'){
    next()
  }

  if(tokenRoutes[to.path] || tokenRoutes[to.path.match(/^\/[^/]+/)[0]]){

    if(store.state.logined){

      next()

    }else{
      
      // router.push('/login')
      next()
  
    }

  }else{

    next()

  }
  
  // const url =  window.location.href
  // const path = new URL(url).pathname;
  
  // if(store.state.router[path]){
  //   next()
  //   return
  // }else{
  //   next('/404')
  // }
  
})


export default router
