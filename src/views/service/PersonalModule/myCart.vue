<template>
  <div class="content">

    <div v-if="myCart.length == 0" class="empty">
        <el-empty description="您的购物车还是空的"></el-empty>
    </div>

    <div v-else>
        <div class="my-Cart">
            <div class="my-Cart-row header-row">
                <div class="inputRow">
                    <input type="checkbox" :checked="allCheck" @click="allCheckChangeHandler" name="" id="">
                    <span>全选</span>
                </div>
                <div></div>
                <div>商品名称</div>
                <div>单价</div>
                <div>数量</div>
                <div>小计</div>
                <div>操作</div>
            </div>
        </div>

        <div class="my-Cart">
            <!-- 循环component 将每个商品放进单个组件 -->
            <shopItem v-for="item in myCart" @stateHandler="stateHandler" :key="item.id" :allCheck="allCheckState" :card-item="item"></shopItem>
        </div>

        <div class="cart-bar">

            <div class="cart-bar-box">

                <div class="cart-bar-left">
                    <span>继续购物</span>
                    <span>|</span>
                    <div>已选择<span class="quantityText">{{ checkedCount }}</span>件</div>
                </div>

                <div class="cart-bar-right">
                    <div class="cart-total">
                        <span>合计:</span>
                        <span>2499</span>
                        <span>{{totalPrice}}元</span>
                    </div>
                    <div>
                        <el-button type="primary">去结算</el-button>
                    </div>
                    
                </div>

                

            </div>
            
        </div>
    </div>

  </div>
</template>

<script>
import shopItemCard from '@/components/shopItemCard.vue';

//实例化一个 频道实例
var channel = new BroadcastChannel('cart');

export default {
    components:{
        shopItem:shopItemCard
    },
    data(){
        return{
            allCheck:true, //全选状态
            allCheckState:true,
            myCart:[1,2,777],
            totalPrice:0,
            checkedCount:0
        }
    },
    methods:{
        //全选状态切换
         allCheckChangeHandler(){
            
            if(this.allCheck){

                //发送 频道消息 另一个页面能实时监听
                channel.postMessage(false)

                //本页面选中状态
                this.allCheck = false
                //父向子传值 全部子元素选中状态变为false
                this.allCheckState = false
            }
            else{
                //发送 频道消息 另一个页面能实时监听
                channel.postMessage(true)

                //本页面选中状态
                this.allCheck = true
                //父向子传值 全部子元素选中状态变为true
                this.allCheckState = true
            }

        },

        //子组件向父组件传来的
        stateHandler(price,checkCount){
            this.totalPrice += price
            this.checkedCount += checkCount
        }
    },

    watch:{
        checkedCount(currentCount){
            if(currentCount == this.myCart.length) 
            {
                this.allCheck = true
            }else{
                this.allCheck = false
            }
        }
    }
}
</script>

<style scoped>
.empty{
    width: 100%;
    margin: 30px auto;
}

.header-row{
    border-bottom: 1px solid #E0E0E0;
}

.cart-bar{
    height: 50px;
    line-height: 30px;
    text-align: right;
    -webkit-transition: background .3s ease,top .3s ease;
    transition: background .3s ease,top .3s ease;
    margin-top: 50px;
}

.cart-bar-box{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.cart-bar-left{
   display: flex;
   align-items: center;
   color: #757575;
}
.cart-bar-left span:nth-child(1){
    cursor: pointer;
}
.cart-bar-left span:nth-child(2){
    margin: 0 10px;
}

.quantityText{
    color: #ff6700;
}

.cart-bar-right{
    display: flex;
    align-items: center;
}

.cart-total{
    display: flex;
    align-items: center;
    color: #ff6700;
    margin-right: 30px;
}
.cart-total span:nth-child(2){
    font-size: 23px;
    margin-left: 10px;
    position: relative;
    bottom: 5px;
}
.cart-bar-right button{
    background-color: #ff6700;
    border: none;
    border-radius: 0%;
    width: 150px;
    font-size: 18px;
}
</style>