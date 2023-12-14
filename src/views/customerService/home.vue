<template>
  <div class="content">

    <!-- 选择售后服务类型 部分 -->
    <div v-if="$route.meta == '售后服务'">
        <span class="mainTitle">自助售后服务</span>

        <ul class="service">
            <li>
               <router-link to="/customerService/call">
                    <img src="@/assets/kefu.png" width="66" height="66" alt="">
                    <span class="card-title">联系客服</span>
                    <span class="card-text">在线咨询，客服热线</span>
                </router-link>
            </li>
            <li>
                <router-link to="/service/myInfo">
                    <img src="@/assets/weizhen.png" width="66" height="66" alt="">
                    <span class="card-title">修改信息</span>
                    <span class="card-text">进入个人主页，修改您的信息</span>
                </router-link>
            </li>
            <li>
                <router-link to="/deliverySearch">
                    <img src="@/assets/wuliu.png" width="100" height="66" alt="">
                    <span class="card-title">快递查询</span>
                    <span class="card-text">输入您的快递单号，即可查询物流哦</span>
                </router-link>
            </li>
            <li></li>
        </ul>

    </div>
    <!--  -->


    <!-- 选择后对应的模块 -->
    <keep-alive include="call">
        <router-view></router-view>
    </keep-alive>
    

  </div>
</template>

<script>
export default {
    name:'customerService',
    mounted(){
       
    }
}
</script>

<style scoped>
.mainTitle{
    display: block;
    font-size: 26px;
    margin-top: 30px;
    color: #666;
    font-weight: 400;
    text-align: center;
    line-height: 106px;
}

.service{
    display: flex;
    flex-wrap: wrap;
}
.service li{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 277px;
    text-align: center;
    width: 23%;
    flex-wrap: wrap;
    margin: 0 14px 18px 0;
    background-color: #fff;
    background-repeat: no-repeat;
    background-position: -13px -15px;
    cursor: pointer;
    box-shadow: 0 0 10px rgba(0,0,0,.1);
}
.service li{
    transition: all .5s ease-in-out;
}
.service li:hover{
    transform: translateY(-10px);
}
.service li:hover a span{
    color: #ff6700;
}
.service li a{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.service li a>*{
    margin-top: 10px;
}
.service li:nth-child(1){
    background-image: url('@/assets/01.png');
}
.service li:nth-child(2){
    background-image: url('@/assets/02.png');
}
.service li:nth-child(3){
    background-image: url('@/assets/03.png');
}
.service li:nth-child(4){
    background-image: url('@/assets/04.png');
}
.card-title{
    color: #000;
    font-size: 16px;
    font-weight: 700;
    opacity: .87;
}
.card-text{
    display: block;
    color: #757575;
    font-size: 14px;
    line-height: 14px;
}
</style>