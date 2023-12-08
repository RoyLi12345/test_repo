import { mapMutations } from "vuex";
import store from "@/store";
import router from "@/router";
import { jwtDecode } from "jwt-decode";

//通用函数  任意vue组件都可以调用

// 退出登录处理
export const logOutHandler = {

    methods:{

        //从vuex获取用户信息
        ...mapMutations(['updateServiceIndex', 'updateUserInfo','updateLogined']),

        logOut(){
             this.$confirm('是否退出登录?', '温馨提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
            }).then(() => {

                //删除用户信息
              
                this.updateLogined(false)
                this.updateUserInfo({username:'', nickName: '', token:''})

                if(this.$route.path == '/index'){
                    return
                }else{
                    router.push('/index')
                }
            }).catch(() => {
                   return        
            });
        }

    }

}


//检查token过期情况
export const check_tokenHandler = {

    methods:{

        check_token(){

            //store中获取token
            const token = store.state.token;

            if (token) {
                const decodedToken = jwtDecode(token); // 解析 JWT 判断是否过期
                const currentTime = Date.now() / 1000; // 获取当前时间戳（单位：秒）

                if (decodedToken.exp < currentTime) {
                        // token 登录已过期
                    store.commit("updateLogined", false);
                    store.commit("updateUserInfo", { username: "", nickName: "", token: "",});

                this.$notify({
                    title: "温馨提示",
                    message: "您的登录状态已过期,请重新登录",
                    duration: 0, // 设置 duration 为 0，表示通知不会自动关闭
                    type: "info",
                });

                } else {
                    // token 未过期
                    store.commit("updateLogined", true);

                    if(store.state.isFirst){

                        this.$notify({
                            title: "温馨提示",
                            message: `欢迎小米用户${store.state.nickName}回归`,
                            duration: 2000, // 设置 duration 为 0，表示通知不会自动关闭
                            type: "success",
                        });

                        store.commit('updateIsFirst',false)
                    }

                   

                }
            }

        }

    }

}


