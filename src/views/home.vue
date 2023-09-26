<template>
  <div class="home" :class="$route.matched[1] == 'service'? 'gray':'white'">

    <!-- 导航栏 -->
    <div class="header-nav">
      <div class="logo">
          <img src="../assets/logo.png" alt="">
      </div>
      <ul class="navUl">
        <li v-for="(item) in navData" :key="item.path">
          <router-link v-if="item.path!='null'" :class="item.path == currentNav?'selected':''" :to="item.path">{{ item.label }}</router-link>
          <a href="javascript:;" v-else class="hoverLink">{{ item.label }}</a>
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

    <!-- 跟进当前导航组件  ui组件面包屑 -->
    <navMenu></navMenu>
    <!--  -->
    
    <!-- 主体部分 --> 
    <div :class="$route.matched[1].name == 'service'?'':'content'" class="contentBox">
      <router-view></router-view>
    </div>



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
import { brandList } from '@/api/getData'
import $ from 'jquery'

import store from '../store/index.js'
export default {
  data(){
    return{
      searchArr:['全部商品','红米','冰箱','手机','空调','洗衣机','电视','笔记本'],
      currentIndex:0,
      searchValue:'',  //搜索关键字
      currentNav:'',  //当前导航索引 
      showGoodsBox:false, //下拉商品显示状态
      //首页导航条数组
      navData:[           
        {
          label:'首页',
          path:'/index'
        },
        {
          label:'全部分类',
          path:'/category'
        },
        {
          label:'新品上线',
          path:'null'
        },
        {
          label:'限时秒杀',
          path:'/limited'
        },
        {
          label:'帮助中心',
          path:'/help'
        },
        {
          label:'服务中心',
          path:'/service'
        }
      ] 
    }
  },
  watch:{

  },
  computed: {
    currentPlaceholder() {
      return this.searchArr[this.currentIndex];
    },
  },
  methods:{
    
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

    this.init()
    this.currentNav = this.$route.matched[1].path
    this.startTimer()

    console.log(store.state.token)

    

  },
}
</script>

<style scoped>

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

    /* .header-nav{
      background-color: rgb(255,255,255);
    } */

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
      /* margin: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center; */
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
