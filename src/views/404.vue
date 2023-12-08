<template>
    <!-- 404 -->
  <div class="content">
    <div class="image">
        <img src="@/assets/404_bg.jpg" alt="">
    </div>
    <p class="sorry">该页面找不到了~</p>
    <div class="links">

        <p>
            <router-link to="/index">返回首页</router-link>
        </p>
        <p>
            <router-link to="/login">前往登录</router-link>
        </p>
        
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.content{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: auto;
}
.image img{
    width: 400px;
    height: 400px;
}
.sorry{
    font-size: 45px;
}
.links{
    margin-top: 15px;
}
.links a{
    font-size: 30px;
    color: #0b72a4;
}
.links a:hover{
    text-decoration: underline;
}

.links p{
    margin-top: 15px;
}
</style>