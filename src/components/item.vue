<template>

<div class="goods-box">
   
    <ul>
        <li>
           
            <el-image src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c86a7877e4ed76f50e204875e7372428.png?thumb=1&w=200&h=138&f=webp&q=90" 
            style="width: 100px; height: 100px" fit="cover"></el-image>
            
            <span class="name">小米手机</span>
            <div><span class="price">2199元</span>

            </div>
            
        </li>


        <li>
           
           <el-image src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c86a7877e4ed76f50e204875e7372428.png?thumb=1&w=200&h=138&f=webp&q=90" 
           style="width: 100px; height: 100px" fit="cover"></el-image>
           
           <span class="name">XiaomiIpad 6 Pro</span>
           <div><span class="price">2199元</span>

           </div>
           
       </li>

       <li>
           
           <el-image src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c86a7877e4ed76f50e204875e7372428.png?thumb=1&w=200&h=138&f=webp&q=90" 
           style="width: 100px; height: 100px" fit="cover"></el-image>
           
           <span class="name">XiaomiIpad 6 Pro</span>
           <div><span class="price">2199元</span>

           </div>
           
       </li>

       <li>
           
           <el-image src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/80416c1c7040aabbafa527a6ea652948.png?thumb=1&w=200&h=138&f=webp&q=90" 
           style="width: 100px; height: 100px" fit="cover"></el-image>
           
           <span class="name">XiaomiIpad 6 Pro</span>
           <div><span class="price">2199元</span>

           </div>
           
       </li>

       <li>
           
           <el-image src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/153321edb6fdddd89e77a560869ab521.png?thumb=1&w=200&h=138&f=webp&q=90" 
           style="width: 100px; height: 100px" fit="cover"></el-image>
           
           <span class="name">XiaomiIpad 6 Pro</span>
           <div><span class="price">2199元</span>

           </div>
           
       </li>

       <li>
           
           <el-image src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c86a7877e4ed76f50e204875e7372428.png?thumb=1&w=200&h=138&f=webp&q=90" 
           style="width: 100px; height: 100px" fit="cover"></el-image>
           
           <span class="name">XiaomiIpad 6 Pro</span>
           <div><span class="price">2199元</span>

           </div>
           
       </li>

       
    
    </ul>
</div>

</template>

<script>
import { mapState } from 'vuex'
import store from '../store/index.js'
export default {
    data(){
        return{
       
        }
    },
    computed:{

        ...mapState(['goodsItem'])
    },
    methods:{
        
    }
}
</script>

<style scoped>

li{
    list-style-type: none;
}
.goods-box{
    /* transition: height 0.4s ease-in-out; */
    /* height: 250px; */
    border-top: 1px solid #e0e0e0;
    /* border-bottom:1px solid red; */
    background: #fff;
    position: absolute;
    top: 121px;
    left: 0;
    width: 100%;
    z-index: 999;
    box-shadow: 0px 3px 10px 0px rgba(0,0,0,.15);
/* 
    transform: scaleY(1);
    transform-origin: top;
    transition: transform 0.3s ease-in-out; */
}
.goods-box ul{
    padding: 20px;
    margin: 0 auto;
    width: 1226px;
    display: flex;
}

.goods-box ul li{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    padding: 15px;
    cursor: pointer;
}

.goods-box ul li:not(:first-child)::before{
    position: absolute;left: 0;width: 1px;
    height: 100px;
    content: "";
    background-color:#eBeBeB;
    /* background-color: red; */
}
.goods-box-image{
    width: 160px;
    height: 110px;
}

.name{
   margin: 20px 0 10px 0;
}
.price{
    color: #ff6700;
}
</style>