<template>
  <!-- 猜你想问 -->
  <div class="question-card">
    <div class="card-head">
      <div>
        <img src="@/assets/question.png" width="15" height="15" alt="" />
        <span>猜你想问</span>
      </div>
      <div>
        <img src="@/assets/changeIcon.png" width="16" height="16" alt="" @click="changeQuestion" />
        <span @click="changeQuestion">换一换</span>
      </div>
    </div>

    <!-- 问题 -->
    <ul class="questionList">
      <li
        class="questionRow"
        v-for="item in questionData"
        @click="generateCustomer(item,locoUrl); generateAnswerDialog(item)"
        :key="item.id"
      >
        <span>{{ item.question }}</span>
        <img src="@/assets/arrowRight.png" width="20" height="20" alt="" />
      </li>
    </ul>
    <!--  -->
    <el-button type="warning" class="btnAsk" @click="generateQuestionDialog()">点击猜你想问</el-button>

  </div>
</template>

<script>
import question from '../components/question.vue'
import "@/assets/css/dialog.css";
import Vue from 'vue'
import answer from "./answer.vue";
import $ from "jquery";
export default {
  name:'question',
  props: ["questionList"],
  data() {
    return {
      questionData: [], //问题集
      tabIndex: 0, //当前页数
      tabSize:5, //一页展示几个问题
      locoUrl:require('@/assets/customer.png') //引入logo 用于模板字符渲染到vue
    };
  },
  components:{
    answer,
    question
  },
  mounted() {
    this.questionData = this.questionList.slice(this.tabIndex,this.tabSize);
  },
  methods: {
    //提问 -- 客户对话
    generateCustomer(item,locoUrl) {
      $(".dialogContent").append(` <div class="customer-dialog">
            <div class="chatInfo">
                <span>${item.question}</span>
            </div>
            <img src=${locoUrl} width="40" height="40" alt="">
        </div>
    `);
    },
    //生成答案
    generateAnswerDialog(item){
            const answerDialog = new Vue({
                render: h => h(answer, { props: { answer: item.id }})
                }).$mount()

            $('.dialogContent').append(answerDialog.$el)

            this.scrollToBottom()
    },
    //换一批功能 
    changeQuestion(){

        const totalIndex =  Math.ceil(this.questionList.length/this.tabSize)
        this.tabIndex++

        if( !(this.tabIndex >= totalIndex) ){

            this.questionData = this.questionList.slice(this.tabIndex*this.tabSize, this.tabIndex*this.tabSize+this.tabSize)
           
            
        }else{

            this.tabIndex = 0
            this.questionData = this.questionList.slice(this.tabIndex,this.tabSize);
            
        }

    },
     //生成猜你想问--提问框
     async generateQuestionDialog(){
         
         const questionDialog = new Vue({
             render: h => h(question, { props: { questionList: this.questionList }})
             }).$mount()

         await $('.dialogContent').append(questionDialog.$el)
         this.scrollToBottom()
     },
    //自动滚到底部
    scrollToBottom(){
        var container = document.querySelector('.dialogContent')
        container.scrollTop = container.scrollHeight
        window.scrollTo(0, document.body.scrollHeight); 
    }
  },
};
</script>

<style scoped>
.btnAsk{
    position: absolute;
    bottom: 0;
    left: 0;
}

</style>