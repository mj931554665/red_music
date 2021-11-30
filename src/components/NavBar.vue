<template>
  <div class="nav-bar">
    <div class="m-top">
      <div class="wrap">
        <h1 class="logo">
          <a>网易云音乐</a>
        </h1>
        <ul class="m-nav j-tflag">
          <li class="fst">
            <span>
              <router-link
                to="/home"
                :class="active == 1 ? 'z-slt' : ''"
                @click.prevent.native="changeNav(1)"
              >
                <em>发现音乐</em>
                <sub class="cor">&nbsp;</sub>
              </router-link>
            </span>
          </li>
          <li>
            <span>
              <router-link
                to="/myMusic"
                :class="active == 2 ? 'z-slt' : ''"
                @click.prevent.native="changeNav(2)"
              >
                <em>我的音乐</em>
                <sub class="cor">&nbsp;</sub>
              </router-link>
            </span>
          </li>
          <li>
            <span>
              <router-link
                to="/friend"
                :class="active == 3 ? 'z-slt' : ''"
                @click.prevent.native="changeNav(3)"
              >
                <em>朋友</em>
                <sub class="cor">&nbsp;</sub
                >
                <!-- <i class="dot j-t"></i> -->
                </router-link
            ></span>
          </li>
          <li>
            <span>
              <a to="/store/product" target="_blank">
                <em>商城</em>
              </a></span
            >
          </li>
          <li>
            <span>
              <a to="/musician/artist" target="_blank">
                <em>音乐人</em>
              </a></span
            >
          </li>
          <li class="lst">
            <span>
              <router-link
                id="topbar-download-link"
                to="/download"
                :class="active == 4 ? 'z-slt' : ''"
                @click.prevent.native="changeNav(4)"
              >
                <em>下载客户端</em>
                <sub class="cor">&nbsp;</sub>
              </router-link> </span
            ><sup class="hot">&nbsp;</sup>
          </li>
        </ul>
        <login v-if="loginWind"  @closeWind="closeWind"></login>
        <div class="m-tophead f-pr j-tflag">
          <a
            v-if="!$store.state.isLogin"
            hidefocus="true"
            href="#"
            class="link s-fc3"
            data-action="login"
            @click="showWind"
            >登录</a
          >
          <div v-else class="head f-fl f-pr">
            <img src="../assets/images/头像.jpg" alt="" />
            <a to="#" class="mask"></a>
            <i class="m-topmsg f-pa f-hide j-uflag"></i>
          </div>
          <a to="#" class="name f-thide f-fl f-tdn f-hide">俊九岁哟</a>
          <div v-show="$store.state.isLogin" class="m-tlist m-tlist-lged j-uflag">
            <ul class="f-cb lb mg">
              <li>
                <a to="#" class="item-1">
                  <i class="icn icn-hm"></i>
                  <em>我的主页</em>
                </a>
              </li>
              <li>
                <a to="#" class="item-2">
                  <i class="icn icn-msg"></i>
                  <em>我的消息</em>
                  <span class="m-topmsg f-pa f-hide j-uflag"></span>
                </a>
              </li>
              <li>
                <a to="#" class="item-3">
                  <i class="icn icn-lv"></i>
                  <em>我的等级</em>
                </a>
              </li>
              <li>
                <a to="#" class="item-4">
                  <i class="icn icn-mbr"></i>
                  <em>VIP会员</em>
                </a>
              </li>
            </ul>
            <ul class="f-cb ltb mg">
              <li>
                <a to="#" class="item-2">
                  <i class="icn icn-st"></i>
                  <em>个人设置</em>
                </a>
              </li>
              <li>
                <a to="#" class="item-2">
                  <i class="icn icn-verify"></i>
                  <em>实名认证</em>
                </a>
              </li>
            </ul>
            <ul class="f-cb lt">
              <li @click="loginout">
                <a to="#" class="itm-3">
                  <i class="icn icn-ex"></i>
                  <em>退出</em>
                </a>
              </li>
            </ul>
            <i class="arr"></i>
          </div>
        </div>
        <router-link class="m-topvd" to="">创作者中心</router-link>
        <div class="m-srch f-pr j-suggest">
          <div class="srchbg" style="position: relative">
            <span class="parent">
              <input
                type="text"
                name="srch"
                id="srch"
                class="txt j-flag"
                v-model="value"
                style="opacity: 1"
                @blur="blurSearch"
                @focus="focusSearch"
                @keydown.enter="goSearch"
              />
              <label
                for="srch"
                class="ph j-flag"
                id="auto-id-Xoo7XSGWsPCUHdt2"
                v-show="isDisplay"
              >
                音乐/视频/电台/用户
              </label>
            </span>
          </div>
          <!-- <div class="j-showoff u-showoff f-hide"><p>现在支持搜索MV啦~</p></div> -->
          <!-- <span class="j-flag" style="display:none;" id="auto-id-epybdhJPw3JZs4Rb">&nbsp;</span> -->
          <div
            class="u-lstlay"
            :class="{ isDisplayU: isDisplayU }"
            style="display: none !important"
          >
            <div class="m-schlist">
              <p class="note">
                <a to="" class="s-fc3">搜“{{ value }}” 相关用户</a> >
              </p>
              <div class="rap">
                <div class="itm">
                  <h3 class="hd">
                    <i class="icn u-icn u-icn-26"></i>
                    <em class="f-cb">单曲</em>
                  </h3>
                  <ul class="f-cb">
                    <li>
                      <a to="#" class="s-fc0 f-thide xtag">
                        <span class="s-fc7 f-tdn">{{ value }}</span>
                        木头人（纯语）（鱿鱼游戏）-慧慧
                      </a>
                    </li>
                    <li>
                      <a to="#" class="s-fc0 f-thide xtag">
                        <span class="s-fc7 f-tdn">{{ value }}</span>
                        我爱你 (Live)-ANY安伟 王北车 叶子 郭锐 逯通
                      </a>
                    </li>
                    <li>
                      <a to="#" class="s-fc0 f-thide xtag">
                        <span class="s-fc7 f-tdn">{{ value }}</span>
                        木头人（翻自 黑Gril）
                      </a>
                    </li>
                    <li>
                      <a to="#" class="s-fc0 f-thide xtag">
                        <span class="s-fc7 f-tdn">{{ value }}</span>
                        木头人（鱿鱼游戏）（恐怖版）-慧慧
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="itm f-cb">
                  <h3 class="hd">
                    <i class="icn u-icn u-icn-27"></i>
                    <em class="f-fl">歌手</em>
                  </h3>
                  <ul class="odd f-cb">
                    <li>
                      <a class="s-fc0 f-thide xtag" to="#">
                        <span class="s-fc7 f-tdn">{{ value }}</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="itm f-cb">
                  <h3 class="hd">
                    <i class="icn u-icn u-icn-28"></i>
                    <em class="f-fl">专辑</em>
                  </h3>
                  <ul class="f-cb">
                    <li>
                      <a class="s-fc0 f-thide xtag" to="#">
                        <span class="s-fc7 f-tdn">{{ value }}</span>
                        我爱你-新乐尘符
                      </a>
                    </li>
                    <li>
                      <a class="s-fc0 f-thide xtag" to="#">
                        <span class="s-fc7 f-tdn">{{ value }}</span>
                        木头人（再不表白天就要黑了）-AKB250
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="m-subnav m-subnav-up" v-show="active > 1"></div>
  </div>
</template>

<script>
import Login from '../components/Login.vue';
import api from "../api/index";

export default {
  name: "NavBar",
  components:{
    Login,
  },
  data() {
    return {
      active: 1,
      isDisplay: true,
      isDisplayU: false,
      labelvalue: "",
      value: "",
      // 导航栏默认显示的导航
      activeIndex: "1",
      activeIndex2: "1",
      // 是否登录
      islogin: false,
      // 登录的窗口
      loginWind:false,
    };
  },
  methods: {
    // 显示登录的窗口
    showWind(){
      this.loginWind = true
    },
    // 关闭登录的窗口
    closeWind(data){
      this.loginWind = data
    },
    changeNav(n) {
      this.active = n;
    },
    cliLabel() {
      this.isDisplay = !this.isDisplay;
    },
    blurSearch(e) {
      var value = e.target.value;
      if (value == "") {
        this.isDisplay = true;
      } else {
      }
    },
    focusSearch(e) {
      this.isDisplay = false;
    },
    // handleSelect(key, keyPath) {
    //   console.log(key, keyPath);
    // },
    // 跳转到搜索页面
    goSearch() {
      this.$router.push({ path: "/search", query: { s: this.value } });
      // this.search();
    },
    sb(){
      console.log("mfsdnj");
    },
    // 登出函数
    loginout() {
      // 移除登录状态和用户信息
      localStorage.removeItem("Login");
      localStorage.removeItem("UserInfo");
      this.$store.commit("changeIsLogin", false);
      this.loginWind =false
      this.$router.go(0);
      this.getLoginOut();
      this.sb()
      // console.log("Navbar登出函数");
    },
    async getLoginOut() {
      const result = await api.getLoginOut();
      // console.log("Navbar登出异步函数");
    },
  },
  watch: {
    value(val, oldVal) {
      // 普通的watch监听
      // console.log("value: " + val, oldVal);
      // console.log(val.length);
      if (val !== "") {
        this.isDisplayU = true;
      } else {
        this.isDisplayU = false;
      }
    },
  },
  computed: {},
  mounted(){
    console.log(localStorage.getItem("UserInfo"));
  }
};
</script>

<style lang="less" scoped>
a,
a *,
.f-hand,
.f-hand * {
  cursor: pointer;
}
.s-fc3,
a.s-fc3:hover {
  color: #666;
}
.u-icn-26,
.u-icn-27,
.u-icn-28,
.u-icn-29 {
  width: 14px;
  height: 15px;
  background-position: -35px -300px;
}
.s-fc7,
a.s-fc7:hover {
  color: #0c73c2;
}
.f-thide {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}
a:hover {
  text-decoration: none;
}
.f-cb:after {
  clear: both;
  content: ".";
  display: block;
  height: 0;
  visibility: hidden;
}
.f-thide {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}
.f-hide,
.js-hide {
  display: none !important;
}
.m-tlist .m-topmsg {
  top: 7px;
  left: 110px;
}
.m-topmsg {
  display: inline-block;
  min-width: 17px;
  height: 17px;
  padding: 0 4px;
  box-sizing: border-box;
  background: #c20c0c;
  border-radius: 18px;
  border: 1px solid #242424;
  line-height: 16px;
  font-size: 12px;
  white-space: nowrap;
  color: #fff;
  text-align: center;
}
.f-cb:after {
  clear: both;
  content: ".";
  display: block;
  height: 0;
  visibility: hidden;
}
.f-pr {
  position: relative;
  zoom: 1;
}
.nav-bar {
  .m-top {
    position: relative;
    z-index: 1000;
    height: 70px;
    box-sizing: border-box;
    background: #242424;
    border-bottom: 1px solid #000;
    .m-topvd {
      float: right;
      width: 90px;
      height: 32px;
      margin: 19px 0 0 12px;
      box-sizing: border-box;
      padding-left: 16px;
      border: 1px solid #4f4f4f;
      background-position: 0 -140px;
      line-height: 33px;
      color: #ccc;
      border-radius: 20px;
      background: none !important;
    }
    .f-cb:after {
      clear: both;
      content: ".";
      display: block;
      height: 0;
      visibility: hidden;
    }
  }
  .m-top .wrap {
    width: 1100px;
    margin: 0 auto;
  }
  .m-top .logo,
  .m-nav .cor,
  .m-nav .hot,
  .m-srch .srchbg,
  .m-mail,
  .m-tophead,
  .m-topvd {
    background: url("../assets/images/topbar.png") no-repeat 0 9999px;
  }
  .u-icn,
  .u-title-1 .out .icon {
    background: url("../assets/images/icon.png") no-repeat 0 9999px;
  }
  .u-icn-26,
  .u-icn-27,
  .u-icn-28,
  .u-icn-29 {
    width: 14px;
    height: 15px;
    background-position: -35px -300px;
  }
  .u-icn-27 {
    background-position: -50px -300px;
  }
  .m-top .logo {
    float: left;
    width: 176px;
    height: 69px;
    background-position: 0 0;
  }
  .m-top .logo a {
    float: left;
    width: 157px;
    height: 100%;
    padding-right: 20px;
    text-indent: -9999px;
  }
  .m-nav {
    float: left;
    a {
      padding: 0 19px;
      text-align: center;
      line-height: 70px;
      color: #ccc;
    }
    .dot {
      display: block;
      position: absolute;
      top: 24px;
      left: 54px;
      width: 6px;
      height: 6px;
      border-radius: 6px;
      background: #c20c0c;
    }
    li,
    li span,
    a,
    a em {
      float: left;
      height: 70px;
      font-size: 14px;
    }
    li {
      position: relative;
      background-position: right -300px;
    }
    li.lst,
    li.fst span {
      background: none;
    }
    a:hover,
    a.router-link-active {
      background: #000;
      text-decoration: none;
      color: #fff;
    }
    li,
    li span,
    a,
    a em {
      float: left;
      height: 70px;
      font-size: 14px;
    }
    a.router-link-active .cor {
      display: block;
      position: absolute;
      left: 50%;
      top: 64px;
      width: 12px;
      height: 7px;
      margin-left: -6px;
      overflow: hidden;
      background-position: -226px 0;
    }
    .cor {
      display: none;
    }
    .hot {
      display: block;
      position: absolute;
      top: 21px;
      left: 100px;
      width: 28px;
      height: 19px;
      background-position: -190px 0;
    }
  }
  .m-tophead {
    float: right;
    height: 45px;
    margin: 19px 0 0 20px;
    padding: 0 22px 0 0;
    background-position: right -47px;
    background-image: none;
    .head {
      margin-top: 1px;
    }
    .head,
    .head img {
      width: 30px;
      height: 30px;
    }
    .head img {
      border-radius: 30px;
    }
    .name {
      display: inline-block;
      max-width: 100px;
      margin: 8px 0 0 8px;
      line-height: 17px;
      color: #adadad;
    }
    .m-topmsg {
      top: -5px;
      left: 20px;
    }
    .link,
    .link:hover {
      display: block;
      width: 28px;
      margin-top: 10px;
      color: #787878;
    }
    .m-tlist {
      display: none;
      position: absolute;
      top: 38px;
      right: -43px;
      width: 158px;
      background: #2b2b2b;
      border: 1px solid #202020;
      box-shadow: 0 8px 24px 0 rgb(0 0 0 / 50%);
      border-radius: 4px;
      a {
        position: relative;
        height: 38px;
        box-sizing: border-box;
        overflow: hidden;
        padding-left: 24px;
        color: #ccc;
        line-height: 39px;
      }
      a:hover {
        background: #353535;
        text-decoration: none;
        color: #fff;
      }
      li,
      li a {
        float: left;
        box-sizing: border-box;
        width: 100%;
      }
      .m-tlist .arr {
        position: absolute;
        top: -8px;
        left: 50%;
        width: 14px;
        height: 8px;
        margin-left: -7px;
        background-position: -20px 0;
      }
      .icn,
      .arr {
        background: url("../assets/images/toplist.png") no-repeat 0 9999px;
      }
      .icn-hm {
        background-position: 0 -80px;
      }
      .icn-msg {
        background-position: -20px -120px;
      }
      .icn-lv {
        background-position: 0 -100px;
      }
      .icn-mbr {
        background-position: 0 -221px;
        margin-top: 9px;
      }
      .icn-ex {
        background-position: 0 -200px;
      }
      .icn-st {
        background-position: 0 -140px;
      }
      .icn-verify {
        background-position: -20px -142px;
      }
      .icn {
        float: left;
        width: 18px;
        height: 18px;
        margin: 10px 10px 0 -7px;
      }
      em {
        float: left;
        width: 100px;
      }
      .ltb {
        border: 1px solid #232323;
        border-width: 1px 0;
      }
    }
    .m-tlist-lged a {
      height: 34px;
      line-height: 34px;
    }
    .m-tlist-lged .icn {
      margin: 7px 10px 0 0;
    }
    .m-tlist-lged .arr {
      margin-left: -8px;
    }
    a:hover {
      text-decoration: underline;
    }
  }
  .m-srch {
    float: right;
    width: 158px;
    height: 32px;
    .srchbg {
      float: right;
      width: 158px;
      height: 32px;
    }
    .srchbg {
      margin-top: 19px;
      background-position: 0 -99px;
      background-color: #fff;
      border-radius: 32px;
      .parent {
        display: block;
        position: relative;
        margin: 8px 0 0 30px;
        input {
          width: 95%;
          margin: 0;
          padding: 0;
          background: transparent;
          color: #fff;
          color: #333;
          line-height: 16px;
        }
        label {
          display: block;
          position: absolute;
          top: 2px;
          left: 0;
          width: 90%;
          color: #9b9b9b;
          cursor: text;
        }
      }
    }

    .u-lstlay {
      display: none;
      clear: both;
      top: 59px;
      width: 240px;
      position: absolute;
      z-index: 120;
      left: 0;
      box-sizing: border-box;
      border: 1px solid #bebebe;
      border-radius: 4px;
      background: #fff;
      box-shadow: 0 4px 7px #555;
      text-shadow: 0 1px 0 rgb(255 255 255 / 90%);
      .m-schlist {
        .note {
          height: 42px;
          height: 17px;
          padding: 11px 10px;
          border-bottom: 1px solid #e2e2e2;
        }
        .hd {
          float: left;
          width: 52px;
          margin-right: -100px;
          padding: 10px 0 0 10px;
          *padding-top: 9px;
          border-right: 1px solid #e2e2e2;
          line-height: 17px;
          *line-height: 19px;
          font-weight: normal;
          .icn {
            float: left;
            margin: 2px 4px 0 0;
          }
        }
        ul {
          margin-left: 62px;
          margin-top: -1px;
          padding: 6px 0 5px;
          border-top: 1px solid #e2e2e2;
          border-left: 1px solid #e2e2e2;
        }
        li {
          width: 100%;
          float: left;
          a {
            display: block;
            width: 100%;
            text-indent: 12px;
            line-height: 24px;
          }
        }
      }
    }
  }
}
.m-tophead:hover .m-tlist {
  display: block;
}
.isDisplay {
  display: none !important;
}
.isDisplayU {
  display: block !important;
}

.m-subnav {
  z-index: 90;
  height: 35px;
  box-sizing: border-box;
  background-color: #c20c0c;
  border-bottom: 1px solid #a40011;
}
.m-subnav-up {
  height: 5px;
  // _overflow: hidden;
  border-bottom: none;
}
</style>