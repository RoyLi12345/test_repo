<template>
  <div class="service-content">
    <div class="service-box">
        <div class="service-left">
            <ul>
                <div v-for="(item) in navData" :key="item.title">
                    <li class="titleLi">{{ item.title }}</li>
                    <li v-for="i in item.routes" :key="i.path">
                        <router-link :to="i.path">{{i.label}}</router-link>
                    </li>
                </div>
            </ul>
        </div>

        <div class="service-right">
            <router-view></router-view>
        </div>
        
        <div>

        </div>
    </div>   
  </div>
</template>

<script>
export default {
    data(){
        return{
            navData:[
                {
                    title:'订单中心',
                    routes:[
                        {
                            label:'我的订单',
                            path:'/service/myOrder'
                        },
                        {
                            label:'评价晒单',
                            path:'/service/comment'
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
                            path:'/service/changeInfo'
                        },
                        {
                            label:'注销账号',
                            path:'/service/delInfo'
                        }
                    ]
                }
            ]
        }
    }
}
</script>

<style scoped>
li{
    list-style-type: none;
    margin-bottom: 15px;
}
a{
    text-decoration: none;
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
}

.service-right{
    margin-left: 30px;
    width: 900px;
    background-color: #FFFFFF;
    width: 960px;
}

.service-left li a{
    color: #757575;
}

.service-left li a:hover{
    color: rgb(255,180,82);
}
</style>