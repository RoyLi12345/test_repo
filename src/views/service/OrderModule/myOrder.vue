<template>

  <!-- 我的订单 模块 首页 -->
  <div class="content">
    <div class="box-top">
      <div>
        <h1 class="serviceTitle">我的订单</h1>
      </div>
      <div class="box-topNav">
        <ul>
          <li>
            <router-link  :class="{ active: comName === 'myOrder' }" data-index="myOrder" to="/service/myOrder">全部有效订单</router-link>
          </li>
          <span>|</span>
          <li>
            <router-link :class="{ active: comName === 'unPaid' }" to="/service/unPaid"  data-index="unPaid">待支付</router-link>
          </li>
          <span>|</span>
          <li>
            <router-link :class="{ active: comName === 'unReceived' }" to="/service/unReceived" data-index="unReceived">待收货</router-link>
          </li>
          <span>|</span>
          <li>
            <router-link :class="{ active: comName === 'recovery' }" to="/service/recovery" data-index="recovery">订单回收站</router-link>
          </li>
        </ul>
        <div></div>
      </div>
    </div>

    <!--  -->

    <div class="tabContent">


      <!-- 我的全部订单页面 -->

        <div class="box-orders" v-if="$route.meta == '我的订单'">

          <div class="isEmpty">
              <p>当前没有交易订单。</p>
          </div>

          <div>

          </div>

        </div>

      <!--  -->

      <!-- 待支付 待收货 订单回收站 页面 -->
        <router-view></router-view>
      <!--  -->
    </div>

  </div>
</template>

<script>

import $ from 'jquery'

export default {
  data(){
    return{
      comName:'myOrder'  //当前页面的索引在 全部订单页
    }
    
  },
  mounted(){

  },
  methods:{
   
  },
  watch:{
    $route(to,from){
      this.comName = to.name
    }
  }
  

};
</script>

<style scoped>

.content{
  display: flex;
  flex-direction: column;
}
.box-top{
  height: auto;
}

.active{
  color: rgb(255, 103, 0)!important;
}
.isEmpty {
  margin: 10px 0;
  font-size: 18px;
  height: 300px;
  line-height: 300px;
  text-align: center;
  color: #b0b0b0;
}
.box-topNav ul {
  float: left;
}
.box-topNav ul span {
  float: left;
  color: rgb(224, 224, 224);
  margin: 0 15px;
}
.box-topNav ul li {
  float: left;
  color: #757575;
  cursor: pointer;
}
.box-topNav ul li a{
  color: #757575;
}
.box-topNav ul li:hover a {
  color: rgb(255, 103, 0);
}

.tabContent{
  margin-top: 30px;
}
</style>