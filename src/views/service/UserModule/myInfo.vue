<template>
  <div>
    <div class="header">
        <div class="label-left"></div>
        <span>个人信息</span>
    </div>

    <ul class="profile-info">
        <li>
            <span>头像</span>
            <img src="@/assets/pfp.jpg" alt="">

            <input
                      type="file"
                      accept=".png, .jpg, .jpeg"
                      class="form-control"
                      name="file"
                      ref="file"
                      @change="filesChange"
                    />
        </li>
        <li>
            <span>昵称</span>
            <span v-if="!editMode">666</span>
            <input type="text" class="nickname-input" v-model="edit.nickname" v-else>
        </li>
        <li>
            <span>性别</span>
            <div>

                <span class="nosetSex" v-if="!editMode && !myProfile.sex">
                    未设置
                </span>

                <span v-else-if="!editMode && myProfile.sex">
                    男
                </span>
                
                <div v-else>
                    <el-radio v-model="radio" label="m">男</el-radio>
                    <el-radio v-model="radio" label="w">女</el-radio>
                </div>
                
            </div>
        </li>
        <li>
            <span>小米ID</span>
            <span>545646549884</span>
        </li>
        <li>
            <span>国家/地区</span>
            <span>中国</span>
        </li>
    </ul>

    <el-button type="warning" class="btnEdit" v-if="!editMode" @click="editMode=true">编辑</el-button>
    <el-button type="warning" class="btnEdit" v-else>确定</el-button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            radio:'1',
            editMode:false,
            edit:{
                nickname:''
            },
            myProfile:{

            },
            file:[]
        }
    },
    methods:{

        filesChange(e) {
            this.file = e.target.files[0]
        },
    }
}
</script>

<style scoped>
.header{
    display: flex;
    align-items: center;
}
.header .label-left{
    margin-top: 2px;
    border-left: 3px solid #333;
    width: 4px;
    height: 20px;
}
.header span{
    color: #333;
    font-size: 19px;
    vertical-align: middle;
}

.profile-info{
    padding: 20px;
}
.profile-info li{
    display: flex;
    align-items: center;
    color: #333333;
    font-size: 17px;
    margin: 60px 0;
}
.profile-info li:nth-child(1){
    margin-top: 0;
}
.profile-info li span:nth-child(1){
    width: 100px;
    text-align: right;
    margin-right: 50px;
}
.profile-info img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
}

.btnEdit{
    width: 300px;
    margin: 0 0 50px 60px;
    background-color: #ff5c00;
}

.nickname-input{
    width: 358px;
    height: 40px;
    background-color:#F9F9F9;
    border-radius: 5px;
    padding: 10px;
    box-sizing: border-box;
    border: none;
    outline: none;
}
.nosetSex{
    color: #ff5c00;
}
</style>