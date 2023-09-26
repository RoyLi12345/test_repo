<template>
    <div class="topNav">
        <div class="topNav-box">
            <ul class="topNav-left">
                <li> <router-link to="/index">好物街商城</router-link> </li>
                <span>|</span>
                <li>查看新品</li>
                <span>|</span>
                <li>切换地区</li>
                <span>|</span>
                <li>服务中心</li>
                <span>|</span>
                <li>社区</li>
                <span>|</span>
                <li>在线客服</li>
            </ul>

            <div class="topNav-cart">

                <span class="el-icon-shopping-cart-2" style="position: relative;"></span>
                <span>购物车 (0)</span>

                 <!-- 购物车 hover框 -->
                <div class="cartHover" @mouseenter="animate()">
                    <li class="null" v-if="!cartNum">
                        <i class="el-icon-loading iconNull" v-if="!animated"></i>
                         <span class="nullText" v-else>购物车中还没有商品,赶紧选购吧</span>
                    </li> 
                </div>
                <!--  -->

            </div>

           

            <ul class="topNav-right">
                
                    <li @click="push('/login')">登录</li>
                    <span>|</span>
                    <li @click="push('/login')">注册</li>
                    <span>|</span>
                    <li>消息通知</li>
            </ul>        
                
                
                
            
            
        </div>
    </div>
</template>

<script>
import router  from '@/router';
import { nextTick } from 'vue';
export default {
    data(){
        return{
            cartNum:0,
            animated:false
        }
    },
    methods:{
        //购物车暂无数据动画
        animate(){
            let count = 0
            if(!this.cartNum){
               const interval = setInterval(() => {
                    count++
                    if(count == 1){
                        this.animated = true
                        clearInterval(interval)
                    }

                }, 1000);
            }
        },

        push(path){

            nextTick(()=>{
                router.push(path)
            })
        }
    },
    mounted(){
        const cartContainer = document.querySelector('.topNav-cart');
        const cartHover = cartContainer.querySelector('.cartHover');

        cartContainer.addEventListener('mouseleave', () => {

            cartHover.style.visibility = 'visible';
            this.animated = false

        });
    }

}



</script>

<style scoped>
    li{
        list-style: none;
        cursor: pointer;
        display: inline;
    }

    .iconNull{
        position: absolute;
        left: 50%;
        top: 35%;
        font-size: 28px;
        color: rgb(255,111,32);
    }
    .nullText{
        font-size: 16px!important;
    }
    .topNav{
        width: 100%;
        background-color: rgb(51,51,51);
        height: 40px;
        /* position: relative; */
    }
    .topNav a{
        color: #b0b0b0;
        text-decoration: none;
    }

    .topNav-box{
        width: 1226px;
        margin: 0 auto;
        line-height: 40px;
        font-size: 12px;
        color: rgb(176,176,176);
    }

    .topNav-left{
        float: left;
    }

    .topNav-right{
        float: right;
        margin-right: 30px;
    }

    .topNav-box span{
        margin: 0px 10px;
    }
    
    .topNav .topNav-box li:hover,.topNav-box a:hover{
        color: #fff;
    }

    .topNav-cart{
        float: right;
        width: 120px;
        background-color: #424242;
        cursor: pointer;
        text-align: center;
        position: relative;
    }

    .topNav-cart span{
        text-align: left;
    }

    .topNav-cart span:nth-child(1){
        font-size: 18px;
        font-weight: 700;
    }

    .topNav-cart span:nth-child(2){
        position: relative;
        right: 10px;
    }

    .topNav-cart:hover{
        background-color: #fff;
        color: rgb(255,111,32);
    }

    .cartHover{
        position: absolute;
        width: 300px;
        height: 85px;
        right: 0;
        z-index:-2000;
        background-color: #fff;
        box-shadow: 0 2px 10px rgba(0,0,0,.15);
        color: rgb(122,122,122);
        text-align: center;
        visibility: hidden;
        line-height: 80px;
        transform: translateY(-100%);
        transition: transform 0.3s ease;
    }

    .topNav-cart:hover .cartHover {
        visibility: visible;
        z-index: 999;
        transform: translateY(0%);
    }

    

</style>