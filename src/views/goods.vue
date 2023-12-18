<template>
  <!-- 查看商品 页面 -->
  <div class="content">

    <div class="com-left">

      <div class="imgbox">
        <img src="@/assets/phone.png" alt="" />
        <span></span>
      </div>

    </div>

    <div class="com-right">

      <h2 class="itemName">Redmi K70</h2>
      <p class="introText">{{ product.description }}</p>

      <!-- hover的时候出现自营简介 -->
      <p class="brand" title="企业名称：小米通讯技术有限公司
  企业执照注册号：91110108558521630L
  企业地址：北京市海淀区西二旗中路33号院6 号楼9层019号
  企业电话：400-100-5678
  营业期限：2010年08月25日 至 2040年08月24日
  经营范围：开发手机技术、计算机软件及信息技术；技术检测、技术咨询、技术服务、技术转让；计算机技术培训；系统集成；货物进出口、技术进出口、代理进出口；家用电器、通信设备、广播电视设备（不含卫星电视广播、地面接收装置）、机械设备、电子产品、文化用品的批发零售；维修仪器仪表；销售医疗器械I类、II、III类、针纺织品（含家纺家饰）、服装鞋帽、日用杂货、工艺品、文化用品、体育用品、照相器材、卫生用品（含个人护理用品）、钟表眼镜、箱包、家具（不从事实体店铺经营）、小饰品、日用品、乐器、自行车、智能卡；计算机、通讯设备、家用电器、电子产品、机械设备的技术开发、技术服务；销售金银饰品（不含金银质地纪念币）；家用空调的委托生产；委托生产翻译机；销售翻译机、五金交电（不含电动自行车）、厨房用品、陶瓷制品、玻璃制品、玩具、汽车零配件、食用农产品、花卉、苗木、宠物用品、建筑材料、装饰材料、化妆品、珠宝首饰、通讯设备、卫生间用品、农药；生产手机（仅限在海淀区永捷北路2号三层生产及外埠生产）；出版物批发；出版物零售；销售食品。（销售第三类医疗器械以及销售食品以及依法须经批准的项目，经相关部门批准后依批准的内容开展经营活动。）">
        小米自营
     </p>
     <!--  -->

     <p class="itemPrice"><span>{{ parseFloat(product.price)}}</span>元</p>
     <div class="line"></div>


     <div class="address-box">

      
        <div v-if="!myAddress.length > 0">
          <span>暂无地址去</span>
          <router-link to="/service/myAddress">添加</router-link>
        </div>

        <div v-else>

          <div v-for="item in filteredAddress" :key="item.id">
          <i class="el-icon-location-outline"></i>
          <span>{{item.province}}</span>
          <span>{{item.city}}</span>
          <span>{{item.area}}</span>
          <span>{{item.street}}</span>
          <span @click="changeDefaultHandler()">修改</span>
        </div>

        </div>
        

        
     </div>



     <!-- 价格框 -->
     <div class="price-select">

          <div>
            <span>Redmi K70</span>
            <span>{{parseFloat(product.price)}}元</span>
          </div>
          <div>
            <span>总计: {{parseFloat(product.price)}}元</span>
          </div>

     </div>
     <!--  -->

     <!--  -->
     <div class="optionBox">
      <div class="title">选择版本</div>
      <ul>
        <li class="active">12GB+256GB</li>
        <li>16GB+256GB</li>
        <li>16GB+512GB</li>
        <li>16GB+1TB</li>
      </ul>
     </div>

     <div class="optionBox">
      <div class="title">选择颜色</div>
      <ul>
        <li class="active">墨羽</li>
        <li>晴雪</li>
        <li>竹月蓝</li>
        <li>浅茄紫</li>
      </ul>
     </div>
     <!--  -->


     <!-- 加入购物车 和 喜欢 按钮 -->

     <div class="btn-box">
      <div class="btn-Add" @click="addCartHandler">加入购物车</div>
      <div class="btn-Like">喜欢</div>
     </div>


     <!-- 底部  小米自营保证信息 -->
     <div class="after-sale-info">
      <span>
        <i class="el-icon-circle-check"></i>
        <em>{{product.shop}}</em>
      </span>
      <span>
        <i class="el-icon-circle-check"></i>
        <em>小米发货</em>
      </span>
      <span>
        <i class="el-icon-circle-check"></i>
        <em>7天无理由退货（到店自取拆封后不支持）</em>
      </span>
      <span>
        <i class="el-icon-circle-check"></i>
        <em>运费说明</em>
      </span>
      <span>
        <i class="el-icon-circle-check"></i>
        <em>企业信息</em>
      </span>
      <span>
        <i class="el-icon-circle-check"></i>
        <em>7天价格保护</em>
      </span>
     </div>

    </div>


    <el-dialog
      title="更换地址"
      :visible.sync="addressDialog"
      width="30%"
      :before-close="handleClose">

      <ul class="address-list">

        <li v-for="item in myAddress" :key="item.id" @click="addressClick(item.id)">
          <span>{{item.name}}</span>
          <el-tag class="tag" v-if="item.id==selectedId">当前</el-tag>
          <span>{{ item.province }} {{ item.city }} {{ item.area }} {{ item.street }}</span>
          <span class="phone">{{item.phone | phoneFilter}}</span>
          
        </li>

      </ul>

      <span slot="footer" class="dialog-footer">
        <el-button @click="addressDialog = false">取 消</el-button>
      </span>
  </el-dialog>

  </div>
</template>
  
  <script>
import { addCart, getProDetail, getMyAddress } from '@/api/getData';
import store from '@/store';
import $ from 'jquery'
import {swiper} from 'vue-awesome-swiper'

export default {
  data() {
    return {
      addressDialog:false,
      product:[],
      myAddress:[],
      selectedId:0   //当前选择的地址
    };
  },
  filters:{
    phoneFilter(value){

      if (value.length === 11) {
        return value.substring(0, 3) + "****" + value.substring(7);
      } else {
        return value;
      }

    }
  },
  computed:{
    filteredAddress: function() {
    
        return this.myAddress.filter(item => item.id === this.selectedId);
      
    }
  },
  async created(){

    const product = await getProDetail({id:this.$route.params.id})
    this.product = product.data
    console.log(product)

    //获取我的地址
    const address = await getMyAddress(store.state.userId)
    this.myAddress = address.data

    if(address.data.length > 0){
      this.selectedId = this.myAddress[0].id
    }

  },
  mounted() {

    $('.optionBox li').click(function(){

      $(this).siblings().removeClass('active')
      $(this).addClass('active')

    })

  },
  methods: {

    handleClose(){
      this.addressDialog = false
    },

    async addCartHandler(){
      const res = await addCart({user_id:store.state.userId,product_id: this.product.id})
console.log(res)
      this.$message({
        message:'成功加入到购物车!',
        type:'success'
      })

    },

    async changeDefaultHandler(){
      this.addressDialog = true
    },

    addressClick(id){

       this.$confirm('是否使用该地址?', '提示', {

          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'

           }).then(async () => {
              this.selectedId = id
           }).catch(() => {
                    return      
          });
    }
  },
};
</script>
  
<style scoped lang="scss">

.address-box{
  font-size: 14px;
  line-height: 50px;
  height: 50px;
  margin: 20px 0;
  padding: 20px;
  background: #fafafa;
  border: 1px solid #e0e0e0;
  position: relative;
  div:nth-child(1){
    position: relative;
  }
  i{
    position: absolute;
    font-size: 20px;
    bottom: 30%;
  }
  div span{
    margin-left: 12px;
  }
  div span:nth-child(2){
    margin-left: 30px;
  }
  div span:nth-last-child(1){
    cursor: pointer;
    color: #ff6700;
  }
  a{
    color: #ff6700;
    text-decoration: underline;
    font-size: 18px;
    margin-left: 2px;
  }
}

.address-list{

  min-height: auto;
  max-height: 500px;
  overflow-y: auto;
  padding: 10px;
  ul{
    padding: 20px;
  }
  li{
    cursor: pointer;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    padding: 20px;
    background: #fafafa;
    border: 1px solid #e0e0e0;
    position: relative;
  }
  li span{
    opacity: .6;
  }
  li:hover{
    border: 1px solid  #ff6700;
  }
  li:hover span{
    opacity: 1;
  }
  
  li span:nth-child(1){
    color: black;
    font-weight: 600;
  }
  li span:nth-child(2){
    font-size: 12px;
  }
  li:nth-child(1){
    margin-top: 0;
  }
  .phone{
    position: absolute;
    right: 0;
    margin-right: 10px;
  }

  .tag{
    width: 70px;
    height: 30px;
    font-size: 12px;
    text-align: center;
    position: absolute;
    bottom: 0;
    right: 0;
    opacity: 1;
  }
  
}

.optionBox{
  margin-top: 20px;
  font-size: 18px;
  ul{
    display: flex;
    flex-wrap: wrap;
  }
  ul li{
    font-size: 16px;
    width: 48%;
    border: 1px solid #ccc;
    text-align: center;
    height: 50px;
    margin-top: 15px;
    line-height: 50px;
    cursor: pointer;
  }

  ul li:nth-child(odd){
    margin-right: 12px;
  }

  ul li:nth-child(even){
    flex: 1;
  }

  ul li.active{
    color: #ff6700;
    border: 1px solid #ff6700;
  }

  ul li:hover{
    color: #ff6700;
    border: 1px solid #ff6700;
  }
}

.content{
  display: flex;
}
.com-left{
  width: 540px;
  height: 540px;
}

.imgbox{
  padding: 45px;
}
.imgbox img{
  width: 100%;
}

.com-right{
  margin-left: 20px;
  padding: 20px;
  box-sizing: border-box;
  flex: 1;
}

.com-right>p{
  margin-top: 15px;
  color: #ff6700;
}

.itemName{
  font-size: 24px;
  font-weight: 400;
  color: #212121;
}

.introText{
  color: #b0b0b0!important;
}

.brand{
  font-size: 15px;
}


.itemPrice{
  font-size: 18px;
}

.itemPrice span{
  font-size: 17px;
  margin-right: 5px;
}

.line{
  margin-top: 12px;
  border-bottom: 1px solid #e0e0e0;
}


.price-select{
  background: #f9f9fa;
  padding: 30px;
  margin-top: 30px;
}

.price-select div:nth-child(1){
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
    color: #616161;
}

.price-select div:nth-child(2){
  color: #ff6700;
    font-size: 24px;
    padding-top: 20px
}

.btn-box{
  margin-top: 25px;
  display: flex;
  align-items: center;
}
.btn-Add{
  width: 298px;
  height: 52px;
  line-height: 52px;
  font-size: 16px;
  background: #ff6700;
  border-color: #ff6700;
  color: #fff;
  margin-right: 10px;
  text-align: center;
  cursor: pointer;
}
.btn-Like{
    width: 140px;
    height: 52px;
    background: #b0b0b0;
    line-height: 52px;
    border: 1px solid #b0b0b0;
    text-align: center;
    cursor: pointer;
    -webkit-transition: all .4s;
    transition: all .4s;
    font-size: 16px;
    position: relative;
    color: white;
}

.btn-Like:hover{
  background-color: #757575;
}

.after-sale-info{
  margin-top: 10px;
  font-size: 15px;
}
.after-sale-info em{
  font-style: normal;
}
.after-sale-info i{
  font-size: 17px;
}

.after-sale-info span{
  display: inline-block;
  color: #b0b0b0;
  margin-right: 15px;
  margin-top: 10px;
}
.after-sale-info span>*{
  vertical-align: center;
}
</style>