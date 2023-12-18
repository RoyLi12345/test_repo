<template>
  <div class="content">

    <div class="searchBox">
        
        <div class="inputRow">
            <i class="el-icon-s-promotion iconPlane"></i>
            <input type="text" placeholder="请输入您的订单号" v-model="number">
        </div>

        <div class="buttonRow">
            <i class="el-icon-search iconSearch"></i>
            <el-button type="warning">查询</el-button>
        </div>

        <span class="exampleText">例如: 710017057955</span>
    </div>

    <div class="searchResult">

        <ul>
            <li>
                <i class="el-icon-aim iconActive"></i>
                <span class="active">【杭州市】富阳西部派件员:何渭中13516829024正在为您派件</span>
            </li>
            <li>
                <i class="el-icon-aim"></i>
                <span>【杭州市】富阳西部派件员:何渭中13516829024正在为您派件</span>
            </li>
            <li>
                <i class="el-icon-aim"></i>
                <span>【杭州市】快件已到达富阳西部，电话【057163260653】</span>
            </li>
            <li>
                <i class="el-icon-aim"></i>
                <span>【杭州市】萧山分拨中心已发出,下一站富阳西部电话【057163260653】</span>
            </li>
            <li>
                <i class="el-icon-aim"></i>
                <span>【杭州市】萧山分拨中心快件已到达</span>
            </li>
            <li>
                <i class="el-icon-aim"></i>
                <span>【郑州市】郑州分拨中心已发出,下一站萧山分拨中心</span>
            </li>
            <li>
                <i class="el-icon-aim"></i>
                <span>【郑州市】郑州分拨中心快件已到达</span>
            </li>
        </ul>
        
    </div>

  </div>
</template>

<script>
export default {
    name:'deliverySearch',
    data(){
        return{
            number:''
        }
    },
    activated(){
        console.log(888)
    }
}
</script>

<style scoped>

.searchBox{
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 120px;
    padding: 15px;
    box-sizing: border-box;
    background: #FFF;
    border-radius: 8px;
    box-shadow: 0px 3px 19px 0px rgba(0, 0, 0, 0.21);
}
.exampleText{
    position: absolute;
    bottom: 0;
    color: #ccc;
    margin-bottom: 5px;
    margin-left: 5px;
    font-size: 13px;
}

.iconPlane{
    font-size: 40px;
    color: #0082FA;
    opacity: .7;
}
.inputRow{
    display: flex;
    align-items: center;
}
.inputRow input{
    margin: 0 15px;
    width: 810px;
    height: 64px;
    line-height: 64px;
    padding: 0 0 0 33px;
    border: none;
    outline: none;
    background-color: #F8F8F8;
    font-size: 18px;
}

.buttonRow{
    position: relative;
}
.iconSearch{
    font-size: 26px;
    color: white;
    position: absolute;
    margin-left: 20px;
    top: 30%;
}
.buttonRow button{
    text-indent: 1em;
    width: 130px;
    height: 64px;
    font-size: 20px;
    line-height: 64px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFF;
    cursor: pointer;
    box-sizing: border-box;
}

.searchResult{
    margin-top: 30px;
    padding: 30px;
}

.searchResult ul li{
    position: relative;
    display: flex;
    align-items: center;
    padding-bottom: 35px;
    margin-top: 5px;
}
.searchResult ul li::after{
    position: absolute;
    top: 20px;
    height: 35px;
    left: 8px;
    width: 2px;
    background: #e8e8e8;
    content: '';
}
.searchResult ul li i{
    color: #DDDDDD;
    font-size: 17px;
}
.searchResult ul li span{
    color: #666666;
    margin-left: 30px;
}
.searchResult ul li .active{
    color: #0082FA;
}

.iconActive{
    color: #6ED101!important;
}

.searchResult ul li:nth-last-child(1)::after{
    display: none;
}
</style>