<template>

    <!-- 主页/首页 -->

  <div class="home" :class="$route.matched[1].name == 'service'? 'gray':'white'">

    <!--  首页、全部分类...... 导航栏  -->
    <div style="background-color: white;">
    <div class="header-nav" style="background-color: rgb(255, 255,255);">
      <div class="logo">
          <img src="../assets/logo.png" alt="">
      </div>

      <ul class="navUl">

        <li>
          <router-link to="/index" :class="{ selected: currentPage === 'index' }">首页</router-link>
        </li>

        <li>
          <router-link to="/category" :class="{ selected: currentPage === 'category' }">全部分类</router-link>
        </li>

        <li>
          <router-link to="/limited">限时秒杀</router-link>
        </li>

        <div style="float: left;" class="itemBox">

          <li>
              <a href="javascript:;">小米手机</a>
          </li>

          <li>
              <a href="javascript:;">Redmi手机</a>
          </li>

          <li>
              <a href="javascript:;">电视</a>
          </li>

          <li>
              <a href="javascript:;">笔记本</a>
          </li>

          <itemH class="goods-box"></itemH>

        </div>
       

        <!-- <li>
          <router-link to="/help">帮助中心</router-link>
        </li> -->

        <li>
          <router-link to="/service" :class="{ selected: currentPage === 'service' }" >个人中心</router-link>
        </li>

        <li>
          <router-link to="/customerService" :class="{ selected: currentPage === 'customerService' }">售后服务</router-link>
        </li>
      </ul>



      


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
    <div :class="$route.matched[1].name == 'service' || $route.matched[1].name == 'itemCategory' ?'':'content'" class="contentBox">
     
      <keep-alive include="customerService">
        <router-view></router-view>
      </keep-alive>
        
      
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
      showGoodsBox:false, //下拉商品显示状态
      currentLogin:false,
      showLoginNotify:false,
      currentPage:'index',  //当前页面索引
    }
  },
  watch:{

  },
  computed: {

    ...mapState(['token','logined']),
    currentPlaceholder() {
      return this.searchArr[this.currentIndex];
    },

  },
  watch:{
    
    $route(to,from){
      this.currentPage = to.matched[1].name
    }

  },
  methods:{
    startTimer(){
      setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.searchArr.length;
      }, 5000);
    },


  },
  components:{
    navMenu,
    itemH
  },
  async mounted(){

    this.currentLogin = this.logined
    const loginState = new BroadcastChannel('loginState')
    
    this.startTimer() //右上角搜索框 placeholder 值 自动切换

    this.currentPage = this.$route.matched[1].name

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
  height: 0;
  overflow: hidden;
  transition: height .4s ease-in-out;
}

.itemBox:hover .goods-box{
  /* height: auto;  auto是没有动画的 */
  height: 250px; /* 设置正常的高度 */
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
      /* padding: 10px 0 0 0; */
      margin-left: 60px;
      float: left;    
    }

    /* .goods-box:hover,.hoverLink:hover .goods-box,.show{
      transform: scaleY(1);
    }

    .show{
      transform: scaleY(1);
    } */


    .header-nav ul li{
      float:left;
      margin-left: 16px;
      line-height: 80px;
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
