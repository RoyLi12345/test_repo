<template>
    <!-- 查看商品 页面 -->
    <div class="content" id="content">

        <div class="com-left" id="main">
          <div class="b-img" id="bImg">
            <img src="@/assets/pfp.jpg" alt="">
            <span class="lens" id="lens"></span>
          </div>
        </div>

        <div class="com-right">
          <div class="s-img" id="sImg">
            <img src="@/assets/pfp.jpg" id="picImg" width="300" height="300" alt=""> 
          </div>
        </div>

    </div>
  </template>
  
  <script>
  
  export default {
    data() {
      return {
      
      };
    },
    mounted(){
  //观察结果 盒子
  var sImg = document.getElementById('sImg')
  //观察结果 图片
  var picImg = document.getElementById('picImg')
  //阴影
  var lens = document.getElementById('lens')
  //观察对象
  var bImg = document.getElementById('bImg')

  var main = document.getElementById('content')

  // var main = this.$root.$el

  console.log(main)

  bImg.onmouseover = function(e){
    lens.style.display = 'block'
    sImg.style.display = 'block'

  }

  bImg.onmousemove = function(e){

    // 当前鼠标的位置 - 盒子距离浏览器左侧的偏移 - 阴影宽度的一半
    var x = e.clientX - main.offsetLeft - lens.offsetWidth/2
    var y = e.clientX - main.offsetTop - lens.offsetHeight/2

    if( x < 0){
      x = 0
    }else if(x>bImg.offsetWidth - lens.offsetWidth){
      x = bImg.offsetWidth - lens.offsetWidth
    }

    if(y < 0){
      y = 0
    }else if(y>bImg.offsetHeight - lens.offsetHeight){
      y = bImg.offsetHeight - lens.offsetHeight
    }

    lens.style.left = x + 'px'
    lens.style.top = y + 'px'

    picImg.style.left = -x * 2  + 'px'
    picImg.style.top = -y * 2 + 'px'
  }

  bImg.onmouseout = function(){
    lens.style.display = 'none'
    sImg.style.display = 'none'
  }
    },
    methods: {

    },
  };
  </script>
  
  <style scoped>
  .content{
    display: flex;
    height: 800px;
  }
  .com-left{
    width: 606px;
    border: 1px solid red;
  }
  .com-right{
    flex: 1;
    border: 1px solid black;
  }

  .b-img{
    width: 500px;
    height: 500px;
    border: 1px solid black;
    position: relative;
  }

  .b-img img{
    width: 100%;
  }

  .b-img span{
    position: absolute;
    left: 0;
    top: 0;
    width: 100px;
    height: 100px;
    background-color: red;
    opacity: .5;
    display: none;
  }
  .s-img{
    position: relative;
    width: 200px;
    height: 200px;
    border: 1px solid cyan;
    overflow: hidden;
    display: none;
  }

  .s-img img{
    position: absolute;
    left: 0;
    top: 0;
  }


  </style>