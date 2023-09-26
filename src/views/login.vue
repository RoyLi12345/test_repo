<template>
  <div class="main">
    <div class="main_bg">
      <div class="loginBox">
        <!-- signContent -->
        <div class="signContent">
          <div class="signContainer">
            <form
              action=""
              class="loginForm"
              id="form_key"
              data-module="smsFrom"
              onsubmit="return checkForm()"
            >
              <!-- tab -->
              <div class="tabBox">
                <div class="tabBoxSwitch">
                  <ul class="tabBoxSwitchUl">
                    <li class="tab-active" data-id="0">登录</li>
                    <li data-id="1">注册</li>
                  </ul>
                  <div class="ercode_tab swicth-ercode">
                    <svg
                      width="52"
                      height="52"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      fill="currentColor"
                    >
                      <defs>
                        <path
                          id="id-3938311804-a"
                          d="M0 0h48a4 4 0 0 1 4 4v48L0 0z"
                        ></path>
                      </defs>
                      <g fill="none" fill-rule="evenodd">
                        <mask id="id-3938311804-b" fill="#fff">
                          <use xlink:href="#id-3938311804-a"></use>
                        </mask>
                        <use fill="#0084FF" xlink:href="#id-3938311804-a"></use>
                        <image
                          width="52"
                          height="52"
                          mask="url(#id-3938311804-b)"
                          xlink:href="data:image/png;base64,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"
                        ></image>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <!-- tabContent -->
              <div class="tabContent">
                <!-- tabContentPhone -->
                <transition name="my-transition">
                  <el-form
                    ref="loginForm"
                    :model="loginForm"
                    :rules="loginRules"
                    v-if="tabIndex == 0"
                  >
                    <div class="tabcont tabContentPhone active">
                      <el-form-item label="用户名" prop="username">
                        <el-input
                          v-model="loginForm.username"
                          clearable
                        ></el-input>
                      </el-form-item>
                      <el-form-item label="密码" prop="password">
                        <el-input
                          v-model="loginForm.password"
                          type="password"
                          show-password
                        ></el-input>
                      </el-form-item>
                      <el-form-item>
                        <el-button
                          type="primary"
                          @click="submitForm('loginForm', $event)"
                          class="loginBtn"
                          >登录</el-button
                        >
                      </el-form-item>
                    </div>
                  </el-form>
                </transition>

                <transition>
                  <el-form
                    ref="registerForm"
                    :model="registerForm"
                    :rules="loginRules"
                    v-if="tabIndex == 1"
                  >
                    <div class="tabcont tabContentPhone active">
                      <el-form-item label="用户名" prop="username">
                        <el-input
                          v-model="registerForm.username"
                          clearable
                        ></el-input>
                      </el-form-item>
                      <el-form-item label="密码" prop="password">
                        <el-input
                          v-model="registerForm.password"
                          type="password"
                          show-password
                        ></el-input>
                      </el-form-item>
                      <el-form-item label="确认密码" prop="confirmPassword">
                        <el-input
                          v-model="registerForm.confirmPassword"
                          type="password"
                          show-password
                        ></el-input>
                      </el-form-item>
                      <el-form-item label="邮箱号码" prop="email">
                        <el-input
                          v-model="registerForm.email"
                          clearable
                        ></el-input>
                      </el-form-item>
                      <el-form-item>
                        <el-button
                          type="primary"
                          @click="submitForm('registerForm', $event)"
                          class="loginBtn"
                          >注册</el-button
                        >
                      </el-form-item>
                    </div>
                  </el-form>
                </transition>
                <!-- tabContentAccount -->
              </div>
              <!-- loginbox -->

              <!-- tips -->
              <div class="SignContainer-tip">
                <div>
                  <div>
                    未注册手机验证后自动登录，注册即代表同意<a href="#"
                      >《好物协议》</a
                    ><a href="#">《隐私保护指引》</a>
                  </div>
                </div>
              </div>
            </form>
            <!-- ercodeSgin -->
            <div class="ercodeSignBox">
              <div class="ercode_tab switch-input">
                <svg
                  width="52"
                  height="52"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  fill="currentColor"
                >
                  <defs>
                    <path
                      id="id-14580708-a"
                      d="M0 0h48a4 4 0 0 1 4 4v48L0 0z"
                    ></path>
                  </defs>
                  <g fill="none" fill-rule="evenodd">
                    <mask id="id-14580708-b" fill="#fff">
                      <use xlink:href="#id-14580708-a"></use>
                    </mask>
                    <use fill="#0084FF" xlink:href="#id-14580708-a"></use>
                    <path
                      fill="#FFF"
                      d="M22.125 4h13.75A4.125 4.125 0 0 1 40 8.125v27.75A4.125 4.125 0 0 1 35.875 40h-13.75A4.125 4.125 0 0 1 18 35.875V8.125A4.125 4.125 0 0 1 22.125 4zm6.938 34.222c1.139 0 2.062-.945 2.062-2.11 0-1.167-.923-2.112-2.063-2.112-1.139 0-2.062.945-2.062 2.111 0 1.166.923 2.111 2.063 2.111zM21 8.333v24h16v-24H21z"
                      mask="url(#id-14580708-b)"
                    ></path>
                    <g mask="url(#id-14580708-b)">
                      <path
                        fill="#FFF"
                        d="M46.996 15.482L39 19.064l-7.996-3.582A1.6 1.6 0 0 1 32.6 14h12.8a1.6 1.6 0 0 1 1.596 1.482zM47 16.646V24.4a1.6 1.6 0 0 1-1.6 1.6H32.6a1.6 1.6 0 0 1-1.6-1.6v-7.754l8 3.584 8-3.584z"
                      ></path>
                      <path
                        fill="#0084FF"
                        d="M31 15.483v1.17l8 3.577 8-3.577v-1.17l-8 3.581z"
                        fill-rule="nonzero"
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <!--  -->
        <!-- signSocial -->

        <!-- signDownload -->
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import '../plugins/element.js'
import "../assets/css/animate.css";
import { login,register } from "../api/getData.js";
import store from "../store/index.js";
export default {
  data() {
    return {
      tabIndex: 0, // 显示状态  0 -> 登录框 || 1 -> 注册框
      loginForm: {
        username: "",
        password: "",
      },
      registerForm: {
        username: "",
        password: "",
        confirmPassword: "",
        email: "",
      },
      loginRules: {
        //验证
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        confirmPassword: [
          { required: true, message: "请再次输入密码", trigger: "blur" },
          { validator: this.validateConfirmPassword, trigger: "blur" },
        ],
        email: [
          { required: true, message: "邮箱号码不能为空", trigger: "blur" },
          { validator: this.validateEmail, trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    validateConfirmPassword(rule, value, callback) {
      if (value !== this.registerForm.password) {
        return callback(new Error("两次密码输入不一致"));
      }
      callback();
    },
    validateEmail(rule, value, callback) {
      if (!value) {
        return callback(new Error("邮箱号码不能为空"));
      } else if (
        !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value)
      ) {
        return callback(new Error("邮箱号码格式不正确"));
      } else {
        callback();
      }
    },
    submitForm(formName, e) {
      e.preventDefault();
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          // 登录提交
          if (formName == "loginForm") {
            const res = await login({
              username: this.loginForm.username,
              password: this.loginForm.password,
            });
           

            if (res.code == 200) {
              this.$notify({
                title: "成功",
                message: "登录成功!",
                type: "success",
              });
              store.commit('updateToken',res.data.access_token)
              this.$router.push("/index");
            } else {
              this.$notify({
                title: "失败",
                message: "账号或密码有误!",
                type: "error",
              });
            }

          } else {
            // 注册提交
            const res = await register({
              username: this.registerForm.username,
              password: this.registerForm.password,
              password_confirmation:  this.registerForm.confirmPassword,
              email:  this.registerForm.email
            })

            if (res.code == 200) {
              this.$notify({
                title: "成功",
                message: "注册成功!",
                type: "success",
              });

              store.commit('updateToken',res.data.access_token)
              this.$router.push("/index");
            } else {
              this.$notify({
                title: "失败",
                message: "账号或密码有误!",
                type: "error",
              });
            }

          }
        } else {
          return;
        }

        return;
      });
    },
  },
  mounted() {
    var that = this;
    $(".tabBoxSwitchUl").on("click", "li", function () {
      $("ul li").removeClass("tab-active");

      $(this).addClass("tab-active");
      that.tabIndex = $(this).index();
    });
  },
};
</script>

<style scoped>
/* commen:start */

.my-transition-enter-active {
  transition: all 0.5s ease;
}

.my-transition-enter,
.my-transition-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-leave-active {
  display: none;
}

@keyframes animatedBackground {
  0% {
    background-position: 30% 30%;
  }
  100% {
    background-position: 100% 100%;
  }
}

* {
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, PingFang SC,
    Microsoft YaHei, Source Han Sans SC, Noto Sans CJK SC, WenQuanYi Micro Hei,
    sans-serif;
  font-size: 15px;
  color: #1a1a1a;
  background: #f6f6f6;
}

a {
  text-decoration: none;
}

input {
  color: #1a1a1a;
}

.loginBtn {
  width: 100%;
  height: 35px;
  margin-top: 20px;
}

.el-form-item{
  margin-top: 20px;
}

.lf {
  float: left;
}

.rt {
  float: right;
}

.button {
  display: inline-block;
  padding: 0 16px;
  font-size: 14px;
  line-height: 32px;
  color: #8590a6;
  text-align: center;
  cursor: pointer;
  background: none;
  border: none;
  border-radius: 3px;
}

button {
  outline: none;
}

button:focus {
  outline: none;
}

.unView {
  display: none;
}

/* commen:start */
/* main */
.main {
  width: 100%;
  height: 100vh;
  overflow: auto;
  display: flex;
}

.main_bg {
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  /* background-position: center center no-repeat; */
  /* background-color: #2E3E9C; */
  background-image: url("https://cdn.web-global.fds.api.mi-img.com/mcfe--mi-account/static/static/media/banner.92c693b4..jpg");
  background-position: 50%;
  background-size: contain;
  animation: animatedBackground 70s infinite alternate linear;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background-size: cover;
  width: 100%;
  height: 100vh;
  overflow: auto;
}

/* loginBox */
.loginBox {
  box-sizing: border-box;
  margin: auto;
  min-width: 0;
  padding: 0;
  background-color: #ffffff;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
  border-radius: 2px;
  background-color: #ffffff;
  width: 400px;
  /* overflow: hidden; */
}

.signContent {
  text-align: center;
  margin: 0 auto;
}

.signContainer {
  position: relative;
  border-radius: 4px 4px 0 0;
  /* overflow: hidden; */
}

.loginForm {
  padding: 0 24px 84px;
}

.loginForm .tabBoxSwitch {
}

.loginForm .tabBoxSwitch .tabBoxSwitchUl {
  list-style: none;
}

.loginForm .tabBoxSwitch .tabBoxSwitchUl li {
  display: inline-block;
  height: 60px;
  font-size: 16px;
  line-height: 60px;
  margin-right: 24px;
  cursor: pointer;
}

.tab-active {
  position: relative;
  color: #1a1a1a;
  font-weight: 600;
  font-synthesis: style;
}

.tab-active::before {
  display: block;
  position: absolute;
  bottom: 0;
  content: "";
  width: 100%;
  height: 3px;
  background-color: #0084ff;
}

.tabBox {
  text-align: left;
}

.ercode_tab {
  position: absolute;
  width: 52px;
  height: 52px;
  top: 0;
  right: 0;
}

.ercode_tab svg {
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.tabContent {
}

.tabcont {
  display: none;
}

.active {
  display: block;
}

.tabContentPhone {
}

.tabContentAccount {
  /* display: none; */
}

.tabcontent {
  margin-top: 24px;
  border-bottom: 1px solid #ebebeb;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 48px;
  position: relative;
}

.phoneBox {
  position: relative;
  display: inline-block;
}

.phoneGroup {
  display: inline-block;
  min-width: 72px;
  text-align: left;
}

.phone-btn {
  border: none;
  height: auto;
  padding: 0;
  line-height: inherit;
  background-color: transparent;
  border: none;
  border-radius: 0;
  display: inline-block;
  font-size: 14px;
  line-height: 32px;
  cursor: pointer;
}

.phone-btn:focus {
  outline: none;
}

.selectBtn {
  text-align: left;

  /* padding: 0 16px; */

  color: #8590a6;
  text-align: center;

  background: none;
  /* border: 1px solid; */
  border-radius: 3px;
  height: calc(100% - 42px);
}

.selectConentent {
  display: none;
  position: absolute;
  top: 0;
  z-index: 233;
  background-color: #ffffff;
  left: -24px;
  border: 1px solid #ebebeb;
  width: 210px;
  border-radius: 4px;
  -webkit-box-shadow: 0 5px 20px rgba(26, 26, 26, 0.1);
  box-shadow: 0 5px 20px rgba(26, 26, 26, 0.1);
}

.selectOptions {
  overflow: auto;
  position: relative;
  max-height: 500px;
  padding: 8px 0;
  border-radius: 4px;
  text-align: left;
}

.selectOptions::-webkit-scrollbar {
  width: 10px;
  height: 1px;
  background-color: #f6f6f6;
}

/*定义滚动条轨道 内阴影+圆角*/
.selectOptions::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f6f6f6;
}

.selectOptions::-webkit-scrollbar-thumb {
  background-color: #afadad;
  width: 5px;
  max-height: 10px;
  border-radius: 10px;
}

.select-option {
  display: block;
  width: 100%;
  height: 40px;
  padding: 0 20px;
  line-height: 40px;
  color: #8590a6;
  text-align: left;
  background: none;
  border: none;
}

/* .select-option:hover{
    background: #f6f6f6;
} */
.line-show {
  width: 1px;
  height: 22px;
  margin: 0 12px;
  background: #ebebeb;
}

.phoneInputGroup {
  display: inline-block;
  position: relative;
  width: 213px;
}

.Select-arrow {
  margin-left: 8px;
  fill: currentcolor;
  width: 24px;
  height: 24px;
  display: inline-block;
  vertical-align: middle;
}

.inputLabel {
  width: 100%;
  height: 48px;
  padding: 0;
  color: #8590a6;
  border: none;
  /* border-bottom: 1px solid #ebebeb; */
  border-radius: 0;
  display: flex;
}

.isShow::after {
  content: attr(data-content);
  color: red;
  position: absolute;
  top: 0;
  bottom: 0;
  height: 48px;
  line-height: 48px;
  display: flex;
  z-index: 90;
}

.inputStyle {
  display: inline-block;
  outline: none;
  flex: 1 1;
  padding: 0;
  overflow: hidden;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  background: transparent;
  border: none;
  resize: none;
  z-index: 100;
}

input.msgInput {
  appearance: none;
  -webkit-appearance: none;
}

input::-webkit-inner-spin-button,
input::-webkit-outer-spin-button {
  -ms-progress-appearance: none;
}

input[type="number"] {
  -moz-appearance: textfield;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;

  appearance: none;

  margin: 0;
}

.msgBtn {
  position: absolute;
  top: 24px;
  right: 0;
  padding: 4px 0;
  color: #175199;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

.msgBtn:hover,
.voice-btn:hover {
  color: #76839b;
}

.login_box {
  height: 20px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  background: #fff;
  position: relative;
}

.voice-btn {
  display: inline-block;
  font-size: 14px;
  line-height: 32px;
  color: #8590a6;
  text-align: center;
  cursor: pointer;
  background: none;
  border-radius: 3px;
  position: absolute;
  right: 0;
}

.fromSubmit {
  color: #fff;
  background-color: #0084ff;
  width: 100%;
  margin-top: 30px;
  height: 36px;
  border-color: #0084ff;
}

.SignFlow-switchPassword {
  position: absolute;
  right: 0;
}
.SignFlow-switchLogin {
  position: absolute;
  left: 0;
}
.out-login-btn-shw {
  display: inline-block;
  font-size: 14px;
  line-height: 32px;
  color: #175199;
  text-align: center;
  cursor: pointer;
  background: none;
  border-radius: 3px;
  display: none;
}

.out-login-btn-shw:hover {
  color: #76839b;
}

.out-login-btn {
}

.login-out-phoneBox {
  display: none;
}

.SignContainer-tip {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 12px 24px;
  color: grey;
  font-size: 13px;
  text-align: left;
}

.SignContainer-tip a {
  color: grey;
  text-decoration: none;
}

.Qrcode-title {
}

.ercodeContent {
  /* display: none; */
}

.ercodeSignBox {
  position: relative;
  text-align: center;
  padding: 40px 0;
  display: none;
}

.Qrcode-title {
  font-size: 24px;
  color: #1a1a1a;
  line-height: 33px;
  margin-bottom: 50px;
  margin-top: 3px;
}

.ercodeBox {
  height: 210px;
}

.ercodeBox .Qrcode-img {
  margin: 0 auto 15px;
  line-height: 0;
  height: 150px;
  width: 150px;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.ercodeBox p {
  font-size: 14px;
  line-height: 22px;
}

.ercodeBox p a {
  color: #175199;
}

.css-1hmxk26 {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  border-top: 1px solid;
  border-color: #ebebeb;
  margin-left: 24px;
  margin-right: 24px;
}

.footSign {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  color: #8590a6;
  height: 60px;
  line-height: 60px;
  padding: 0 24px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.signSocial {
}

.Login-socialButtonGroup {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-left: 2px;
  -webkit-transition: opacity 0.3s ease;
  transition: opacity 0.3s ease;
}

.Login-socialButton {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  cursor: pointer;
  height: auto;
  padding: 0 6px;
  line-height: inherit;
  background-color: transparent;
  border: none;
  border-radius: 0;
}

.Login-socialIcon {
  margin-right: 6px;
}

.signDownload {
  background-color: #f6f6f6;
  color: #0084ff;
}

.css-eow14e {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  text-align: right;
}

.css-c01qo8 {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: inline-block;
  text-align: center;
  line-height: inherit;
  -webkit-text-decoration: none;
  text-decoration: none;
  font-size: inherit;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  color: white;
  background-color: #0084ff;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  background-color: #0084ff;
  border-radius: 4px;
  background-color: unset;
  color: inherit;
  font-size: inherit;
  font-weight: inherit;
  padding: 0;
}
</style>