<template>
    
    <!-- 联系客服 页面 -->
  <div class="content">

    <div class="check">
        <el-button type="danger" @click="goBack" plain>返回</el-button>
    </div>

    <span><strong>*注: 当前对话已结束，只允许查看 不做任何功能 如需聊天请返回</strong></span>

    <!-- 对话内容 -->
    <div class="dialogContent" ref="dialogContent" v-html="dialogContent">
    
    </div>
    <!--  -->
    
    

  </div>
  

</template>

<script>

import '@/assets/css/dialog.css'
import question from '@/components/question.vue'
import answer from '@/components/answer.vue'
import store from '@/store'
import { mapState } from 'vuex'
import router from '@/router'
export default {
    name:'call',
    data(){
        return{
            currentState:'', 
            questionList:[
                {
                    id:1,
                    question:'我的订单多久发货'
                },
                {
                    id:2,
                    question:'人工客服'
                },
                {
                    id:3,
                    question:'我想取消订单'
                },
                {
                    id:4,
                    question:'我想加入你们'
                },
                {
                    id:5,
                    question:'如何申请售后'
                },
                {
                    id:6,
                    question:'你们的产品质量是怎样的'
                },
                {
                    id:7,
                    question:'什么时候能收到货'
                },
                {
                    id:8,
                    question:'小米售后服务政策'
                },
                {
                    id:9,
                    question:'小米一般都用什么快递'
                },
                {
                    id:10,
                    question:'小米一般在哪里发货'
                },
                {
                    id:11,
                    question:'小米产品支持送货上门吗'
                },
                {
                    id:12,
                    question:'小米产品可以闪送吗'
                },
                {
                    id:13,
                    question:'怎么查看物流'
                },
                
                
            ]
        } 
    },
    components:{
        question,
        answer
    },
    mounted(){

        
    },
    computed:{
        ...mapState(['dialogContent'])
    },
    methods:{

        goBack(){
            router.push('/customerService/call')   
        }

    }

}
    
</script>

<style scoped>

.check{
    display: flex;
    justify-content: right;
    font-size: 12px;
    line-height: 30px;
}
.check button{
    height: 30px;
    font-size: 13px;
    line-height: 5px;
}
.content{
    position: relative;
}

</style>