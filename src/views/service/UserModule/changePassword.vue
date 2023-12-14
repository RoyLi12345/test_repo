<template>
    <!-- 修改密码 -->
  <div>

    <div :style="{ 'filter': dialogVisible ? 'blur(3px)' : 'none', 'opacity': dialogVisible ? '0.3' : '1' }">
        <div class="header">
            <div class="label-left"></div>
            <span>修改密码</span>
        </div>
        <div class="passwordBox">
            <el-input placeholder="请输入新密码" v-model.trim="password" show-password clearable></el-input>
            <el-input placeholder="请再次输入新密码" v-model.trim="confirmPassword" clearable show-password></el-input>
        </div>
        <el-button type="warning" :disabled="password == '' || confirmPassword == ''" class="btnConfirm" @click="btnConfirmHandler">确定</el-button>
    </div>

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
import router from '@/router';
import store from '@/store'
import { login,updatePassword } from '@/api/getData'
export default {
    data(){
        return{
            password:'',
            confirmPassword:'',
            currentPassword:'',
            dialogVisible: true,
            resultText:''
        }
    },
    methods:{

        //离开弹窗时 触发
        handleClose(done) {

            this.$confirm('离开后将取消修改密码操作,是否离开?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                
                //返回上一级
                router.back()
                    
            }).catch(() => {

                return

            });

        },

        //登录
        async dialogConfirmHandler(){

            const res = await login({ username: store.state.userName, password: this.currentPassword});


            if(res.code == 200){

                this.dialogVisible = false
                this.resultText = ''

            }else{
                this.resultText = "密码不正确"
            }

            

        },


        //修改密码
        async btnConfirmHandler(){

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

            const res = await updatePassword({id:store.state.userId,password:this.password})
            if(res.code == 200){
                
                this.$message({
                    type: 'success',
                    message: '操作成功!'
                });
                
            }else{

                this.$message({
                    type: 'error',
                    message: '操作失败,请重试'
                });

            }

            router.back()
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