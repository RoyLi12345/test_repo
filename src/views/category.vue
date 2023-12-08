<template>
    <!-- 全部分类 品牌分类 -->
    <div class="category">
        <div v-for="item in categoryData" :key="item.id" class="goods-box">
            <span class="cat-title">{{ item.typeName }}</span>
            <!-- <div class="line"></div> -->
            <el-divider>共计{{item.list.length}}类品牌</el-divider>
            <ul class="goods">
                <li class="goods-item" v-for="i in item.list" :key="i.id">
                    <el-image style="width: 120px; height: 100px" :src="i.logoMedia[0].fileName" fit="contain" lazy></el-image>
                    <span>{{i.brandName}}</span>
                </li>

            </ul>
        </div>
        
    </div>
</template>

<script>
import { brandList } from '@/api/getData';
import store from '@/store';
export default {
    data(){
        return{
            categoryData:[]
        }
    },
    async mounted(){
        const response = await brandList(store.state.token)
        this.categoryData = response.data

    }
}
</script>

<style scoped>

    li{
        list-style-type: none;
    }

    .cat-title{
        font-size: 22px;
    }

    .goods-box{
        margin-top: 20px;
    }

    .goods{
        display: flex;
        flex-wrap: wrap;
    }

    .goods li{
        width: 150px;
        margin: 10px;
        height: 145px;
        border: 1px solid #ccc;
    }

    .goods-item{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }

    .goods-item img{
        width: 80%;
    }
</style>