<template>
    <!-- 修改密码 -->
  <div>
        <div class="header">
            <div class="label-left"></div>
            <span>修改密码</span>
        </div>
        <div class="passwordBox">
            <el-input placeholder="请输入新密码" v-model.trim="password" show-password clearable></el-input>
            <el-input placeholder="请再次输入新密码" v-model.trim="confirmPassword" clearable show-password></el-input>
        </div>
        <el-button type="warning" :disabled="password == '' || confirmPassword == ''" class="btnConfirm" @click="btnConfirmHandler">确定</el-button>
        

        <!-- 输入密码 弹窗 -->
        <el-dialog

            title="操作提示"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose">

            <div class="current">
                <span>请输入当前密码</span>
                <el-input class="currentInput" placeholder="请输入新密码" v-model.trim="currentPassword" show-password clearable></el-input>
                <span>{{ resultText }}</span>
            </div>
            

            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogConfirmHandler">确 定</el-button>
            </span>

        </el-dialog>
  
  </div>
</template>

<script>
export default {
    data(){
        return{
            password:'',
            confirmPassword:'',
            currentPassword:'',
            dialogVisible: false,
            resultText:''
        }
    },
    mounted(){


    },
    methods:{

        handleClose(done) {
            return
        },

        dialogConfirmHandler(){
            this.resultText = "密码不正确"
        },

        btnConfirmHandler(){

            if(this.password.length < 3 || this.password.length > 10){

                this.$message({
                    type: 'warning',
                    message: `密码长度必须要在3~10位`
                });

                return
            }

            if(this.password != this.confirmPassword){
                
                this.$message({
                    type: 'warning',
                    message: `密码与确认密码不一致`
                });

                return
            }


        }
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
.passwordBox{
    display: flex;
    flex-direction: column;
}
.passwordBox>*{
    width: 300px;
    margin-top: 15px;
}
.current{
    display: flex;
    flex-direction: column;
}
.currentInput{
    margin:15px 0 5px 0;
}
.current span:nth-child(3){
    color: red;
    font-size: 12px;
}
.btnConfirm{
    /* background-color:#ff5c00; */
    border: none;
    margin-top: 30px;
    width: 300px;
}
</style>