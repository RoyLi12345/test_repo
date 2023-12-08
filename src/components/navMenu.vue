<template>
   <div class="navMenu">
    <ul>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item v-for="(item,index) in lists" :key="item.path">
                <router-link :class="index == 0 ? 'active' : ''" :to="item.path">{{ item.meta[0] }}</router-link>
            </el-breadcrumb-item>
        </el-breadcrumb>

    </ul>
</div>
</template>

<script>
export default {
    data(){
        return{
            lists:[]
        }
    },
    watch:{
        $route(to,from){
            this.matchPath(to.matched)
        }
    },
    methods:{
        matchPath(matched){

            if(matched.length && matched[1].name == 'index'){
                this.lists = [{path:'/index',name:'index',meta:['首页']}]
                return
            }
            this.lists = matched
        }
    },
    mounted(){
       this.matchPath(this.$route.matched) 
    }
}
</script>

<style scoped>
  .navMenu{
      width: 100%!important;
      width: 1226px;
      height: 40px;
      background-color: rgb(245,245,245)!important;
    }
    .navMenu span{
      line-height: 40px;
    }
    .navMenu span a:hover{
        cursor: pointer;
    }

    .navMenu ul{
      width: 1226px;
      margin: 0 auto;
    }

    .active{
        color: #303133!important;
        font-weight: 700!important;
    }
</style>