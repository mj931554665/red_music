<template>
  <div class="login">
    <div class="login_box">
      <div class="zbar" id="auto-id-Tg8kiygrIn1rHnCT">
        <div class="zttl f-thide">手机号登录</div>
      </div>
      <!-- 登陆表单区域 -->
      <el-form
        ref="loginFormRef"
        :model="loginFrom"
        :rules="LoginfromRules"
        label-width="0px"
        class="login_form"
      >
        <!-- 用戶名 -->
        <div class="u-phonewrap">
          <a class="current" href="javascript:;" data-action="toggle">
            <span class="j-code">+86</span>
            <span class="icn u-icn2 u-icn2-17"></span>
          </a>
        </div>
        <el-form-item prop="phone">
          <el-input v-model="loginFrom.phone"> </el-input>
        </el-form-item>
        <!-- 密碼 -->
        <el-form-item prop="password">
          <el-input v-model="loginFrom.password"> </el-input>
        </el-form-item>
        <!-- 按鈕 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <!-- <el-button type="info" @click="resetLoginForm">重置</el-button> -->
        </el-form-item>
      </el-form>
      <span
        @click="closeWind"
        class="zcls"
        title="关闭窗体"
        id="auto-id-4H4DE7zxmXt7KOkh"
        >×</span
      >
      <div
        style="
          position: absolute;
          top: 50px;
          width: 30px;
          height: 20px;
          background: red;
        "
        @click="loginout"
      >
        登出
      </div>
    </div>
    <div class="auto-1638080178313 m-mask">&nbsp;</div>
  </div>
</template>

<script>
import api from "../api/index";
export default {
  data() {
    return {
      loginFrom: {
        phone: "",
        password: "",
      },
      LoginfromRules: {
        // 验证手机号是否合法
        phone: [
          { required: true, message: "请输入手机号码", trigger: "blur" },
          {
            min: 11,
            max: 11,
            message: "长度为 11 个数字",
            trigger: "blur",
          },
        ],
        // 验证密码是否合法
        password: [
          { required: true, message: "请输入登录密码", trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "长度在 6 到 15 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    // 为关闭登录的窗口给NavBar传值(false)
    closeWind() {
      this.$emit("closeWind", false);
    },
    // 获取用户信息的异步函数
    async getUserMessage(phone, password) {
      const result = await api.getUserMessage({
        phone: phone,
        password: password,
      });
      if (result.code === 200) {
        console.log("登录成功");
        this.$emit("closeWind", false);
        // this.$router.go(0);
        // 存入本地缓存的登录状态和全局Vuex状态
        localStorage.setItem("Login", true);
        // 存入用户信息在缓存和全局
        var userinfo = {
          userinfo:result
        }
        localStorage.setItem("UserInfo", JSON.stringify(userinfo));
        console.log(userinfo);
      } else {
        alert(result.msg);
      }
    },
    // 输入完账号密码进行登录
    login() {
      this.getUserMessage(
        parseInt(this.loginFrom.phone),
        this.loginFrom.password
      );
    },
    // 获取登录状态
    async getUserState() {
      const result = await api.getUserState();
      console.log(result);
    },
    // 登出
    loginout() {
      this.getLoginOut();
      // 移除登录状态和用户信息
      localStorage.removeItem("Login");
      localStorage.removeItem("UserInfo");
      this.$store.commit("changeIsLogin", false);
      this.$emit("closeWind", false);
      // this.$router.go(0);
      // console.log("Login登出函数");
    },
    async getLoginOut() {
      const result = await api.getLoginOut();
      // console.log("Login登出异步函数");
      // console.log(+result);
    },

    // resetLoginForm() {
    //   this.$refs.loginFormRef.resetFields();
    // },
  },
  mounted() {
    document.getElementsByClassName("el-input__inner")[0].placeholder =
      "请输入手机号";
    document.getElementsByClassName("el-input__inner")[1].placeholder =
      "请输入密码";
    document.getElementsByClassName("el-input__inner")[1].type="password";
    this.getUserState();
  },
};
</script>

<style scoped>
.login_container {
  background: #2b4b6b;
  height: 100%;
}
.login_box {
  width: 450px;
  height: 240px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 5px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 9998;
}
.login_form {
  /* position: fixed; */
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  /* // 元素指定宽度和高度包括了 padding 和 border */
  box-sizing: border-box;
}
.btns {
  display: flex;
  justify-content: center;
}

.zbar {
  position: relative;
  z-index: 10;
  border-bottom: 1px solid #191919;
  border-radius: 4px 4px 0 0;
  background: #2d2d2d;
}
.zttl {
  padding-right: 45px;
  margin: 0;
  height: 38px;
  line-height: 38px;
  padding-left: 18px;
  border-radius: 3px 3px 0 0;
  font-weight: bold;
  font-size: 14px;
  color: #fff;
  background-position: 50% 0;
}
.current {
  position: relative;
  float: left;
  display: block;
  height: 30px;
  line-height: 30px;
  padding: 0 18px 0 5px;
  border-right: 1px solid #cdcdcd;
}
.u-phonewrap {
  position: relative;
  height: 30px;
  margin: 0;
  border: 1px solid #cdcdcd;
  border-radius: 2px;
  z-index: 10;
}
.login_form {
  padding: 30px 0 43px;
  width: 220px;
  margin: 0 auto;
}
.u-icn2 {
  background: url("../assets/images/icon2.png") no-repeat 0 9999px;
}
.current .icn {
  position: absolute;
  top: 14px;
  right: 7px;
}
.u-icn2-17 {
  width: 7px;
  height: 4px;
  background-position: -260px -450px;
}
.zcls {
  background: url("../assets/images/layer.png") no-repeat 0 9999px;
  position: absolute;
  z-index: 20;
  top: 16px;
  right: 20px;
  width: 10px;
  height: 10px;
  overflow: hidden;
  text-indent: -9999px;
  cursor: pointer;
  background-position: 0 -95px;
}
.auto-1638080178313 {
  position: fixed;
  z-index: 100;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-image: url("../assets/images/1px.gif");
}
</style>