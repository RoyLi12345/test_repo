<template>
  <div class="home">

    <!-- 导航栏 -->
    <div class="header-nav">
      <div class="logo">
          <img src="../assets/mallLogo.png" alt="">
      </div>
      <ul>
        <li v-for="item in navData" :key="item.path">
          <router-link :class="item.path == currentNav?'selected':''" :to="item.path">{{ item.label }}</router-link>
        </li>
      </ul>
      <div class="searchBar">
        <el-input
          placeholder="请输入内容"
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
    <div class="content">
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

import navMenu from '../components/navMenu.vue'
export default {
  data(){
    return{
      searchValue:'红米',  //搜索关键字
      currentNav:'',  //当前导航索引 
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
          label:'限时秒杀',
          path:'/limited'
        },
        {
          label:'帮助中心',
          path:'/help'
        }
      ] 
    }
  },
  watch:{

  },
  methods:{
    
  },
  components:{
    navMenu
  },
  mounted(){
    this.currentNav = this.$route.matched[1].path

    this.$router.beforeEach(async(to,from,next)=>{

      this.currentNav = to.matched[1].path
      next()

    })
  }
}
</script>

<style scoped>

    .content{
      width: 1226px;
      margin: 0 auto;
      margin-top: 20px;
      padding-bottom: 3%;
    }
    li{
      list-style-type: none;
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
    }
    .header-nav{
      margin: 0 auto;
      height: 80px;
      background-color: 255,255,255;
      /* border: 1px solid red; */
      width: 1226px;
    }
   
    .header-nav ul li a:hover{
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
      padding: 10px 0;
      margin-left: 60px;
      float: left;    
    }

    .header-nav ul li{
      float:left;
      margin-left: 16px;
      line-height: 40px;
    }

    .searchBar{
      float: right;
      display: flex;
      margin-top: 20px;
    }

    .footer-nav{
      padding-bottom: 20px;
      font-size: 20px;
    }
    .footer-nav ul{
      width: 1226px;
      margin: 0 auto;
      display: flex;
      justify-content: space-around;
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
