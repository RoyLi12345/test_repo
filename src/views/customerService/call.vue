<template>
    
    <!-- 联系客服 页面 -->
    <!-- key能让这个div里面的东西强制重新渲染 key += 1 只要做个更新操作 -->
  <div class="content" :key="componentKey">
        <el-button type="danger"  @click="destroyHandler" plain>结束对话</el-button>
 <div>

    </div>
    <div class="check">
        <el-button type="danger" v-if="dialogContent!=''" @click="previousDialog" plain>上一次对话👉</el-button>
    </div>


    <!-- 对话内容 -->
    <div class="dialogContent" ref="dialogContent">
        

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
            componentKey:0,
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
    activated(){

    },
    mounted(){
      
    },
    computed:{
        ...mapState(['dialogContent'])
    },
    methods:{

        previousDialog(){
            router.push('/customerService/_call')
        },

        destroyHandler(){

            store.commit('updateDialogContent',this.$refs.dialogContent.innerHTML) 
            this.componentKey += 1
            router.back()

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