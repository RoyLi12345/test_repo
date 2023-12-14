<template>
  <!-- 收货地址模块 -->
  <div>

    <div class="serviceTitle">收货地址</div>

    <!--  -->

    <div class="address-box" v-for="item in myAddress" :key="item.id">

      <div @click="addressBoxClickHandler(item)">
        <div class="address-owner">
          <span class="address-name">{{item.name}}</span>
          <span class="address-province">{{ item.province }} {{ item.city }}</span>
          <el-tag v-if="item.is_default == 1" type="warning" style="margin-left: 15px; color: rgb(255, 103, 0);">默认</el-tag> 
        </div>
        <div class="address-info">
          <span>{{item.phone}}</span>
          <span>{{item.province}}{{item.city}}{{ item.area }}{{ item.street }}{{ item.detailed_address }}</span>
        </div>
      </div>

      <i class="el-icon-close cancelIcon" @click="delClickHandler(item.id)"></i>
  
   </div>
      

    <!--  -->

    <div class="address-box address" @click="dialogVisible = true; editMode = false ; clearAddressForm()">
      <i class="el-icon-circle-plus"></i>
      <span>添加新地址</span>
    </div>


    <!--  -->

    <el-dialog title="添加收货地址" :visible.sync="dialogVisible" width="575px">
      <el-form :inline="true" class="demo-form-inline">
        <div class="firstRow">
          <div>
            <el-divider>联系人</el-divider>
            <el-input
              maxlength="10"
              v-model="name"
              placeholder="姓名"
              style="width: 250px"
              clearable
            ></el-input>
          </div>

          <div style="margin-left: 30px">
            <el-divider>手机号码</el-divider>
            <el-input
              maxlength="20"
              v-model="phone"
              placeholder="手机号"
              style="width: 250px"
              clearable
            ></el-input>
          </div>
        </div>

        <div>
          <div>
            <el-divider>省/市/区</el-divider>

            <el-cascader v-loading.fullscreen.lock="fullscreenLoading"
            style="width: 50%;"
              placeholder="省 / 市 / 区"
              :options="Cascader"
              filterable
              clearable
              v-model="cascaderVal"
            ></el-cascader>
          </div>
        </div>

        <el-divider>详细地址</el-divider>
        <el-input
          class="form-texarea"
          type="textarea"
          placeholder="详细地址,路名,或街道名称"
          v-model="fullAdress"
          maxlength="50"
          show-word-limit
        >
        </el-input>
      </el-form>

      <div class="switchRow">
        <el-switch v-model="isDefault"></el-switch>
        <span>默认地址</span>
      </div>


      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmHandler()"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Axios from "axios";
import {getMyAddress, addAddress, delAddress, editAddress} from '@/api/getData'
import store from '@/store';

//通过递归  将请求出来的 省市区 弄成cascader联级结构
function fromatToCascader(data) {
  return data.map((item) => {
    const obj = {
      value: item.name,
      label: item.name,
    };

    if (item.districts && item.districts.length > 0) {
      obj.children = fromatToCascader(item.districts);
    }

    return obj;
  });
}

export default {
  name:'myAddress',
  data() {
    return {
      isFirst:false, //是否第一次进入该页面
      dialogVisible: false,
      name: "",
      phone: "",
      province: "",
      city: "",
      region: "",
      fullAdress: "",
      isDefault:false,
      fullscreenLoading:false,
      editMode:false,
      tempId:'',

      //Cascader 省市区 联级选择器
      cascaderVal:[],
      Cascader:[ {
          id: 1,
          name: 'Option 1',
          children: []
        }],

      //我目前的地址
      myAddress:[]

    };
  },
  
  //跟keep-alive挂钩的钩子函数
  activated(){

    //是否第一次进入
    if(!this.isFirst){

      //请求地图
      this.requestMap()
      this.isFirst = true
      
    }

  },
  async mounted() {

    this.queryMyAddress()

  },
  methods:{ 

    //高德地图--请求省市区
    requestMap(){

      //由于省市区街道 返回数量过大 需要自定义加载动画
      this.fullscreenLoading = true;
      setTimeout(async () => {

        //获取联级 省市区 接口
        const { data: { districts },} = await Axios.get("https://restapi.amap.com/v3/config/district?subdistrict=4&key=39376097dfe4702691f4ab9f4e33c3f9");
        const province = districts[0].districts;

        //数据处理成cascader格式
        if (province) {
          const cascaderData = fromatToCascader(province);
          this.Cascader = cascaderData;
        }
        this.fullscreenLoading = false;
        
      }, 500);
    },

    async queryMyAddress(){
      //获取自己的地址
      const myAddress = await getMyAddress(store.state.userId)
      this.myAddress = myAddress.data
    },

    addressBoxClickHandler(item){

      this.tempId = item.id
      this.editMode = true
      this.dialogVisible = true
      this.name = item.name
      this.phone = item.phone
      this.fullAdress = item.detailed_address
      this.isDefault = item.is_default == 1 ? true:false

      this.cascaderVal = [
            item.province,
            item.city ? item.city : undefined, // 如果 item.city 存在，就放入它的值；否则忽略
            item.area ? item.area : undefined, // 如果 item.region 存在，就放入它的值；否则忽略
            item.street ? item.street : undefined // 如果 item.street 存在，就放入它的值；否则忽略
      ].filter(val => val !== undefined);

    },

    async confirmHandler(){

      //开始进行校验
      if(this.name.trim() == ''){

        this.$message({
            type: 'warning',
            message: `联系人不能为空`
        });

        return
      }


      if(this.phone.trim() == ''){

        this.$message({
            type: 'warning',
            message: `联系人不能为空`
        });

        return
      }

      if(!/^1[3456789]\d{9}$/.test(this.phone.trim())){
        this.$message({
            type: 'warning',
            message: `手机号码格式不正确`
        });

        return
      }


      if(this.cascaderVal == ''){
        this.$message({
            type: 'warning',
            message: `请选择省市区`
        });

        return
      }

      if(this.fullAdress.trim() == ''){
        this.$message({
            type: 'warning',
            message: `请填写详细地址`
        });

        return
      }

      var obj =  {
          "user_id":store.state.userId,
          "name":this.name,
          "phone":this.phone,
          "province":this.cascaderVal[0],
          "city": this.cascaderVal[1] ? this.cascaderVal[1] : '',
          "area": this.cascaderVal[2] ? this.cascaderVal[2] : '',
          "street": this.cascaderVal[3] ? this.cascaderVal[3] : '',
          "detailed_address": this.fullAdress,
          "is_default": this.isDefault? 1 : 0
      }

      // 最后判断是 对该地址 进行 修改 还是 增加
      if(this.editMode){

        obj.id = this.tempId; 
        await editAddress(obj)

        this.$message({
            type: 'success',
            message: '修改成功!'
          });
        

      }else{
        await addAddress(obj)
      }

      //清空表单
      this.clearAddressForm()
     

      //获取自己的地址
      this.queryMyAddress()

      this.dialogVisible = false

    },
    delClickHandler(id){

      this.$confirm('是否删除该地址?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {

          await delAddress({id:id})
        
          this.$message({
            type: 'success',
            message: '删除成功!'
          });

          this.queryMyAddress()
          
        }).catch(() => {
          return      
        });

    },
    clearAddressForm(){
      this.name = ''
      this.phone = ''
      this.cascaderVal = ''
      this.fullAdress = ''
      this.isDefault = false
    }
  }
};
</script>

<style scoped>
.address-box {
  display: inline-block;
  width: 248px;
  height: 178px;
  border: 1px solid #e0e0e0;
  cursor: pointer;
  position: relative;
  margin-right: 17px;
  margin-bottom: 20px;
  vertical-align: top;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
  padding: 15px;
}

.address-box:hover {
  border: 1px solid rgb(176, 176, 176);
}

.address:hover i,
.address:hover span {
  color: rgb(176, 176, 176);
}

.address-box:hover i{
  opacity: 1;
}

.address-box i {
  display: block;
  width: 30px;
  height: 30px;
  margin: 0 auto 8px;
  font-size: 34px;
  line-height: 30px;
  border-radius: 17px;
  margin-top: 50px;
  text-align: center;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
  color: rgb(224, 224, 224);
}

.address-box span {
  display: block;
  color: #b0b0b0;
  text-align: center;
}

.firstRow {
  display: flex;
}

.form-textarea textarea {
  height: 500px !important;
}

.address-owner{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.address-name{
  width: 130px;
  color: #333!important;
  font-size: 18px;
  text-align: left!important;;
}
.address-province{
  width: 200px; 
  white-space: nowrap; 
  overflow: hidden; 
  text-overflow: ellipsis; 
  font-size: 15px;
  color: #757575!important;
  text-align: right!important;
}

.address-info{
  margin-top: 30px;
}

.address-info span{
  text-align: left;
  font-size: 15px;
  margin-top: 10px;
  width: 80%;
}

.switchRow{
  margin-top: 15px;
}

.switchRow span{
  margin-left: 10px;
}

.cancelIcon{
  opacity: 0;
  position: absolute;
  right: 0;
  bottom: 0;
  cursor: pointer;
  color: #757577;
  width: 20px!important;
  height: 20px!important;
  font-size: 12px!important;
  line-height: 20px!important;
  margin:10px!important;
  display: flex;
  justify-content: center;
  background-color: #E53935;
}


</style>