<template>

    <!-- 主页/首页 -->

  <div class="home" :class="$route.matched[1].name == 'service'? 'gray':'white'">

    <!--  首页、全部分类...... 导航栏  -->
    <div style="background-color: white;">
    <div class="header-nav" style="background-color: rgb(255, 255,255);">
      <div class="logo">
          <img src="../assets/logo.png" alt="">
      </div>

      <ul class="navUl" v-if="currentLogin">
        <li v-for="(item) in navData" :key="item.path">
          <router-link v-if="item.path!='null'" :class="item.path == currentNav?'selected':''" :to="item.path">{{ item.label }}</router-link>
          <a href="javascript:;" v-else class="hoverLink">{{ item.label }}</a>
        </li>
      </ul>

      <ul class="navUl" v-else>
        <li v-for="(item) in navData" :key="item.path" v-if="!item.requireLogin">
          <router-link v-if="item.path!='null' && !item.requireLogin" :class="item.path == currentNav?'selected':''" :to="item.path">{{ item.label }}</router-link>
          <router-link v-else-if="item.path!='null' && logined" :class="item.path == currentNav?'selected':''" :to="item.path">{{ item.label }}</router-link>
          <a href="javascript:;" v-else-if="item.path=='null'" class="hoverLink">{{ item.label }}</a>
        </li>
      </ul>


      <itemH class="goods-box" :class="{ 'show': showGoodsBox }"></itemH>
      <div class="searchBar">
        <el-input
          :placeholder="currentPlaceholder"
          v-model="searchValue"
          clearable>
        </el-input>
        <el-button slot="" icon="el-icon-search"></el-button>
      </div>
      
    </div>
  </div>
  <!-- -->

  <div class="login-notification" v-if="logined === showLoginNotify">
    <span>为方便您购买，请提前登录</span>
    <router-link to="/login">立即登录</router-link>
    <i class="el-icon-close" @click="showLoginNotify = true"></i>
  </div>

    <!-- 导航条下面的 ui组件面包屑 首页>全部分类>.... -->
    <navMenu></navMenu>
    <!--  -->
    
    <!-- 主体部分  根据上边的导航栏 展示内容 --> 
    <div :class="$route.matched[1].name == 'service'?'':'content'" class="contentBox">
      <router-view></router-view>
    </div>
    <!--  -->



    <!-- 底部 -->
    <div class="footer-nav">
      <ul>
        <li>
          <i class="el-icon-setting"></i>
          维修服务
        </li>
        <span>|</span>
        <li>
          <i class="el-icon-service"></i>
          联系客服
        </li>
        <span>|</span>
        <li>
          <i class="el-icon-phone-outline"></i>
          7天无理由退货
        </li>
        <span>|</span>
        <li>
          <i class="el-icon-receiving"></i>
          满39包邮
        </li>
        <span>|</span>
        <li>
          <i class="el-icon-circle-check"></i>
          正品保证
        </li>
      </ul>
    </div>
     <!--  -->


    <!-- 回到顶部 -->
    <div class="goTop">
          <el-backtop :bottom="100" :visibility-height="50"><i class="el-icon-caret-top"></i></el-backtop>
    </div>

   
    
  </div>
</template>

<script>
import {transition} from 'vue2-transitions'
import itemH from '../components/item.vue'
import navMenu from '../components/navMenu.vue'
import $ from 'jquery'
import store from '../store/index.js'


import { mapMutations, mapState } from 'vuex'
export default {
  data(){
    return{
      searchArr:['全部商品','红米','冰箱','手机','空调','洗衣机','电视','笔记本'],
      currentIndex:0,
      searchValue:'',  //搜索关键字
      currentNav:'',  //当前导航索引 
      showGoodsBox:false, //下拉商品显示状态
      currentLogin:false,
      showLoginNotify:false,
      //首页导航条数组
      navData:[           
        {
          label:'首页',
          path:'/index',
          requireLogin:false
        },
        {
          label:'全部分类',
          path:'/category',
          requireLogin:true
        },
        {
          label:'限时秒杀',
          path:'/limited',
          requireLogin:false
        },
        {
          label:'新品上线',
          path:'null',
          requireLogin:false
        },
        {
          label:'帮助中心',
          path:'/help',
          requireLogin:false
        },
        {
          label:'个人中心',
          path:'/service',
          requireLogin:true
        },
        {
          label:'售后服务',
          path:'/customerService',
          requireLogin:true
        }
      ] 
    }
  },
  watch:{

  },
  computed: {
    ...mapState(['token','logined']),
    currentPlaceholder() {
      return this.searchArr[this.currentIndex];
    },
    
    // ...mapState(['token'])
  },
  methods:{
    ...mapMutations(['updateServiceIndex']),
    startTimer(){
      setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.searchArr.length;
      }, 5000);
    },

    init(){
      this.$router.beforeEach(async(to,from,next)=>{

          if(to.path == '/login'){
              next()
              return
          }else{
              this.currentNav = to.matched[1].path

              if(to.matched[1].name == 'service'){
                this.updateServiceIndex(to.matched[2].name)
              }

              next()
          }

      })



      $('.navUl li').eq(2).on({
          mouseover: ()=> {
          // mouseover 事件处理逻辑
          this.showGoodsBox = true;
        },
          mouseleave: ()=> {
          // mouseleave 事件处理逻辑
          this.showGoodsBox = false;
        }
      });

     
    
    }
  },
  components:{
    navMenu,
    itemH
  },
  async mounted(){

    this.currentLogin = this.logined
    const loginState = new BroadcastChannel('loginState')
    
    this.init()
    this.startTimer() //右上角搜索框 placeholder 值 自动切换
    this.currentNav = this.$route.matched[1].path

    loginState.addEventListener('message',e=>{
      this.currentLogin = e.data

    })

   
  },
}
</script>

<style scoped>

.login-notification{
  background-color: rgba(247, 247, 247, .5);
    width: 100%;
    text-align: center;
    height: 48px;
    line-height: 48px;
    color: #333;
    font-size: 15px;
}
.login-notification:hover{
  background: #f7f7f7;
}
.login-notification span:nth-child(1){
  margin-right: 20px;
}
.login-notification a{
  font-size: 15px;
  color: #FF6700;
}
.login-notification i{
  margin-left: 10px;
  cursor: pointer;
}
.login-notification i:hover{
  color: #FF6700;
}
.goods-box{
  
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 0.3s ease-in-out;
}

    .content{
      width: 1226px;
      margin: 0 auto;
      margin-top: 20px;
      padding-bottom: 3%;
      background-color: rgb(255, 255, 255);
    }
    li{
      list-style-type: none;
    }

    .gray{
      background:rgb(245,245,245)!important;
    }

    .white
    {
      background: rgb(255, 255, 255)!important;
    }
    
    .header-nav a{
      text-decoration: none;
      color: black;
      line-height: 60px;
      font-size: 17px;
    }
    .home{
      min-width: 1226px; 
      background: #F5F5F5;
    }
    .header-nav{
      margin: 0 auto;
      height: 80px;
      background-color: 255,255,255;
      /* border: 1px solid red; */
      width: 1226px;
    }
   
    .header-nav ul li a:hover
    {
      color: rgb(255,180,82);
    }
    .selected{
      color: rgb(255,180,82)!important;
    }

    .header-nav .logo{
      width: 65px;
      height: 65px;
      /* border: 1px solid blue; */
      float: left;
      border-radius: 50%;
      position: relative;
      top: 5px;
      right: 10px;
    }

    .header-nav .logo img{
      width: 100%;
    }

    .header-nav ul{
      padding: 10px 0 0 0;
      margin-left: 60px;
      float: left;    
    }

    .goods-box:hover,.hoverLink:hover .goods-box,.show{
      transform: scaleY(1);
    }

    .show{
      transform: scaleY(1);
    }


    .header-nav ul li{
      float:left;
      margin-left: 16px;
      line-height: 40px;
      height: 70px;
    }

    .searchBar{
      float: right;
      display: flex;
      margin-top: 20px;
    }

    .footer-nav{
      padding-bottom: 20px;
      font-size: 20px;
      background-color: rgb(255, 255, 255);
    }
    .footer-nav ul{
      width: 1226px;
      margin: 20px auto;
      display: flex;
      justify-content: space-around;
      line-height: 90px;
    }

    .footer-nav li{
      height: 50px;
      cursor: pointer;
      color: #616161;
    }


    .footer-nav ul li:hover{
      color: rgb(255,103,0);
    }

    .footer-nav span{
      margin: 0 20px;
      color: rgb(224,224,224);
    }

</style>
