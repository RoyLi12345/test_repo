<template>
    <!-- 购物车 商品卡片  仅用于我的购物车页面-->
       <div class="my-Cart-row list-row">
                <div class="inputRow">
                    <input type="checkbox" :checked='checkState' @click="stateChange(checkState=!checkState)" name="" id="">
                </div>
                <div>
                    <img width="60" height="60" src="@/assets/phone.png" alt="">
                </div>
                <div>{{cardItem.product.title}}</div>
                <div>{{cardItem.product.price | formatPrice}}元</div>
                <div>
                    <i class="el-icon-minus" @click="minusNumHandler(cardItem.id)"></i>
                    <span>{{cardItem.quantity}}</span>
                    <i class="el-icon-plus" @click="addNumHandler(cardItem.product_id)"></i>
                </div>
                <div>{{itemTotalPrice | formatPrice}}元</div>
                <div><i class="el-icon-close" @click="delHandler(cardItem.id)"></i></div>
    </div>
</template>

<script>
import { addCart,reduceCart,delCart } from '@/api/getData'
import store from '@/store'
var channel = new BroadcastChannel('cart')
export default {
    props:['cardItem','allCheck'],
    data(){
        return{
            checkState:true,
            itemNum:1,
            itemPrice:120
        }
    },
    filters:{

        formatPrice(value) {
            const intValue = Math.floor(value); // 取整数部分
            const decimalPart = value % 1; // 取小数部分

            if (decimalPart === 0) {
                return intValue;
             } else {
                return intValue + decimalPart.toFixed(2).slice(-2);
            }
        }
    },
    mounted(){

        //子向父 传值
        this.$emit('stateHandler',this.itemTotalPrice,+1)

        //接收频道消息 并做处理
        channel.addEventListener('message', e => {

            if(e.data == this.checkState){
                return
            }
            
            this.checkState = e.data
            this.stateChange(e.data)

        })

    },
    computed:{
        itemTotalPrice(){
            return this.cardItem.product.price * this.cardItem.quantity
        }
    },
    methods:{

        //增加一份商品 最多10份
        async addNumHandler(product_id){

            if(this.cardItem.quantity >= 10){
                this.$message({
                    type: 'info',
                    message: `不能再加啦~`
                });   
                return
            }

            await addCart({user_id:store.state.userId,product_id:product_id})
            ++this.cardItem.quantity

        },

        //减少一份商品
        async minusNumHandler(id){

            if(this.cardItem.quantity <= 1){
                this.$message({
                    type: 'info',
                    message: `不能再减啦~`
                });   
                return
            }

            await reduceCart({cartId:id})
            --this.cardItem.quantity

        },

        //删除商品
        delHandler(id){

            this.$confirm('是否删除该商品?', '提示', {

                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'

                }).then(async () => {
                    await delCart({cart_id:id})
                    this.$emit('refresh')
                }).catch(() => {
                    return      
                });
        },

        //当子组件的选中状态发生更改  向父组件传值记录
        stateChange(check){

            if(check){
                this.$emit('stateHandler', +this.itemPrice, +1)
            }else{
                this.$emit('stateHandler', -this.itemPrice, -1)
            }
        }
    }

}
</script>

<style>
.my-Cart-row{
    display: flex;
    align-items: center;
}
.my-Cart-row div{
    width: 110px;
    height: 70px;
    line-height: 70px;
    text-align: center;
}
.my-Cart-row div:nth-child(2){
    display: flex;
    align-items: center;
    justify-content: center;
}
.my-Cart-row div:nth-child(3){
    width: 200px;
    white-space: nowrap; /* 防止换行 */
    overflow: hidden; /* 文字溢出隐藏 */
    text-overflow: ellipsis; /* 显示省略号 */
}
.my-Cart-row .inputRow{
    display: flex;
    align-items: center;
}
.inputRow input{
    width: 30px;
    height: 15px;
}
.list-row div:nth-child(7) i{
    font-size: 14px;
    width: 20px;
    height: 20px;
    cursor: pointer;
    color: #757577;
    line-height: 20px;
}
.list-row div:nth-child(7) i:hover{
    font-size: 14px;
    color: white;
    background-color: #e53935;
    border-radius: 50%;
    /* width:; */
}
.list-row div:nth-child(5){
    display: flex;
    align-items: center;
    justify-content: center;
}
.list-row div:nth-child(5) span{
    margin: 0 5px;
}
.list-row div:nth-child(5) i{
    width: 30px;
    height: 30px;
    line-height: 30px;
    cursor: pointer;
}
.list-row div:nth-child(5) i:nth-child(1){
    color: #e53935;
}
.list-row div:nth-child(5) i:nth-child(3){
    color: aqua;
}
.list-row div:nth-child(5) i:hover{
    background-color: #757575;
    opacity: .5;
}

.list-row .inputRow{
    display: flex;
    justify-content: center;
}
</style>