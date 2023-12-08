<template>
    <!-- 个人中心模块 -->
  <div class="service-content">

    <div class="service-box">

        <!-- 左侧菜单 -->
        <div class="service-left">
            <ul>
                <div v-for="(item) in navData" :key="item.title">
                    <li class="titleLi">{{ item.title }}</li>
                    <li v-for="i in item.routes" :key="i.path">
                        <router-link v-if="i.path" :to="i.path" :class="serviceIndex == i.path.split('/')[2] ?'active':''" >{{i.label}}</router-link>
                        
                        <!-- 退出登录按钮 -->
                            <a href="javascript:;" @click="logOut" v-else>{{i.label}}</a>
                        <!--  -->
                    </li>
                </div>
            </ul>
        </div>
        <!--  -->

        <!-- 右侧内容 -->
        <div class="service-right">
            <router-view></router-view>
        </div>
        <!--  -->
        

    </div>   
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import { logOutHandler } from '@/utils/commonFunc'
import router from '@/router'
export default {
    mixins:[logOutHandler],
    data(){
        return{
            //定义个人中心左侧  路由结构
            navData:[
                {
                    title:'订单中心',
                    routes:[
                        {
                            label:'我的订单',
                            path:'/service/myOrder'
                        },
                        {
                            label:'我的购物车',
                            path:'/service/myCart'
                        }
                    ]
                },
                {
                    title:'个人中心',
                    routes:[
                        {
                            label:'我的个人中心',
                            path:'/service/myProfile'
                        },
                        {
                            label:'喜欢的商品',
                            path:'/service/myItem'
                        },
                        {
                            label:'收货地址',
                            path:'/service/myAddress'
                        }
                    ]
                },
                {
                    title:'账户管理',
                    routes:[
                        {
                            label:'个人信息',
                            path:'/service/myInfo'
                        },
                        {
                            label:'修改密码',
                            path:'/service/changePassword'
                        },
                        {
                            label:'注销账号',
                            // path:'/service/delInfo'
                        }
                    ]
                }
            ]
        }
    },
    computed:{
        ...mapState(['serviceIndex']),
    },
    methods:{
        ...mapMutations(['updateServiceIndex']),
    },
    mounted(){

        //初始加载页面  左侧路由索引 指定到这个页面
        this.updateServiceIndex(this.$route.path.split('/')[2])
        
    }
}
</script>

<style scoped>
li{
    margin-bottom: 15px;
}


.service-left ul div li a.active{
    color: rgb(255, 103, 0);
}

.titleLi:nth-child(1){
    font-size: 18px;
    margin: 30px 0 20px 0;
}
.titleLi:not(.titleLi:nth-child(1)){
    font-size: 18px;
    margin: 50px 0px 20px 0;
}


.service-content{
    background-color: #F5F5F5;
}
.service-box{
    margin: 0 auto;
    width: 1226px;
    display: flex;
}

.service-left{
    width: 200px;
    padding: 10px 30px;
    background-color: #FFFFFF;
    min-height: 500px;
    max-height: 500px;
}

.service-right{
    margin-left: 30px;
    background-color: #FFFFFF;
    width: 1200px;
    padding: 20px 48px;
}

.service-left li a{
    cursor: pointer;
    color: #757575;
}

.service-left li a:hover{
    color: rgb(255, 103, 0);
}
</style>