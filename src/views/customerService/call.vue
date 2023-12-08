<template>
    <!-- 联系客服 页面 -->
  <div class="content">

    <!-- 对话内容 -->
    <div class="dialogContent">
        

    <!-- 客服对话框 -->
    <div class="kefu-dialog">
        <img src="@/assets/kefupfp.png" width="40" height="40" alt="">
        <div class="chatInfo">
            <span>您好，智能助理为您服务。</span>
        </div>
    </div>
    <!--  -->

    <!-- 猜你想问 -->
    <question :questionList="questionList"></question>
    <!--  -->

    </div>
    <!--  -->
    

  </div>
</template>

<script>
import Vue from 'vue'
import $ from 'jquery'
import '@/assets/css/dialog.css'
import question from '@/components/question.vue'
import answer from '@/components/answer.vue'
export default {
    data(){
        return{
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
                }
                
                
            ]
        } 
    },
    components:{
        question,
        answer
    },
    mounted(){

    },
    methods:{


    }

}
    
</script>

<style scoped>
.content{
    position: relative;
}
</style>