import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/home',
  },
  {
    path:'/login',
    name:'login',
    component:()=>import('../views/login.vue')
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
        path:'/service',
        name:'service',
        meta:['服务中心'],
        component:()=>import('../views/service.vue'),
        children:[
          {
            path:'/service/myOrder',
            name:'myOrder',
            meta:['我的订单'],
            component:()=>import('../views/myOrder.vue')
          }
        ]
      }
  ]  
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
