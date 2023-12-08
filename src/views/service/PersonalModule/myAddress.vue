<template>
  <!-- 收货地址模块 -->
  <div>
    <div class="serviceTitle">收货地址</div>

    <div class="address-box" v-for="item in myAddress" :key="item.id">
      <div class="address-owner">
        <span class="address-name">李灼威</span>
        <span class="address-province">新疆维吾尔自治区 博尔塔拉蒙古自治州 阿拉山口市</span>
      </div>
      <div class="address-info">
        <span>13414125372</span>
        <span>广东省广州市白云区秀水攀桂南街二巷5号</span>
      </div>
    </div>

    <div class="address-box address" @click="dialogVisible = true">
      <i class="el-icon-circle-plus"></i>
      <span>添加新地址</span>
    </div>

    <!-- <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button> -->

    <el-dialog title="添加收货地址" :visible.sync="dialogVisible" width="575px">
      <el-form :inline="true" class="demo-form-inline">
        <div class="firstRow">
          <div>
            <el-divider>姓名</el-divider>
            <el-input
              v-model="name"
              placeholder="姓名"
              style="width: 250px"
              clearable
            ></el-input>
          </div>

          <div style="margin-left: 30px">
            <el-divider>手机号码</el-divider>
            <el-input
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

            <el-cascader
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
  data() {
    return {
      dialogVisible: false,
      name: "",
      phone: "",
      province: "",
      city: "",
      region: "",
      fullAdress: "",

      //Cascader 省市区 联级选择器
      cascaderVal:'',
      Cascader:[],

      myAddress:[]

    };
  },
  async mounted() {

    //获取联级 省市区
    const { data: { districts },} = await Axios.get("https://restapi.amap.com/v3/config/district?subdistrict=3&key=39376097dfe4702691f4ab9f4e33c3f9");
    const province = districts[0].districts;

    //数据处理成cascader格式
    if (province) {
      const cascaderData = fromatToCascader(province);
      this.Cascader = cascaderData;
    }

  },
  methods:{
    confirmHandler(){
      this.dialogVisible = false
      console.log(this.cascaderVal)
    }
  }
};
</script>

<style scoped>
.address-box {
  display: inline-block;
  width: 268px;
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


</style>