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
              <a href="/#" class="z-slt">
                <em>发现音乐</em>
                <sub class="cor">&nbsp;</sub>
              </a>
            </span>
          </li>
          <li>
            <span>
              <a href="/my/">
                <em>我的音乐</em>
                <sub class="cor">&nbsp;</sub>
              </a>
            </span>
          </li>
          <li>
            <span>
              <a href="/friend">
                <em>朋友</em>
                <sub class="cor">&nbsp;</sub><i class="dot j-t"></i></a
            ></span>
          </li>
          <li>
            <span>
              <a href="/store/product" target="_blank">
                <em>商城</em>
              </a></span
            >
          </li>
          <li>
            <span>
              <a href="/musician/artist" target="_blank">
                <em>音乐人</em>
              </a></span
            >
          </li>
          <li class="lst">
            <span>
              <a id="topbar-download-link" href="/download">
                <em>下载客户端</em>
                <sub class="cor">&nbsp;</sub>
              </a> </span
            ><sup class="hot">&nbsp;</sup>
          </li>
        </ul>
        <div class="m-tophead"></div>
        <router-link class="m-topvd" to="">创作者中心</router-link>
        <div class="m-srch">
          <div
            class="srchbg"
            style="position: relative; left: -132px; top: -12px"
          >
            <span class="parent">
              <input
                type="text"
                name="srch"
                id="srch"
                class="txt j-flag"
                value=""
                style="opacity: 1"
              />
              <label class="ph j-flag" id="auto-id-Xoo7XSGWsPCUHdt2">
                音乐/视频/电台/用户
              </label>
            </span>
          </div>
          <!-- <div class="j-showoff u-showoff f-hide"><p>现在支持搜索MV啦~</p></div> -->
          <!-- <span class="j-flag" style="display:none;" id="auto-id-epybdhJPw3JZs4Rb">&nbsp;</span> -->
          <div class="u-lstlay" style="display: none">
            <div class="m-schlist">
              <p class="note">
                <a href="" class="s-fc3">搜“123” 相关用户</a> >
              </p>
              <div class="rap">
                <div class="itm">
                  <h3 class="hd">
                    <i class="icn u-icn u-icn-26"></i>
                    <em class="f-cb">单曲</em>
                  </h3>
                  <ul class="f-cb">
                    <li>
                      <a href="#" class="s-fc0 f-thide xtag">
                        <span class="s-fc7 f-tdn">123</span>
                        木头人（纯语）（鱿鱼游戏）-慧慧
                      </a>
                    </li>
                    <li>
                      <a href="#" class="s-fc0 f-thide xtag">
                        <span class="s-fc7 f-tdn">123</span>
                        我爱你 (Live)-ANY安伟 王北车 叶子 郭锐 逯通
                      </a>
                    </li>
                    <li>
                      <a href="#" class="s-fc0 f-thide xtag">
                        <span class="s-fc7 f-tdn">123</span>
                        木头人（翻自 黑Gril）
                      </a>
                    </li>
                    <li>
                      <a href="#" class="s-fc0 f-thide xtag">
                        <span class="s-fc7 f-tdn">123</span>
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
                      <a class="s-fc0 f-thide xtag" href="#">
                        <span class="s-fc7 f-tdn">123</span>
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
                      <a class="s-fc0 f-thide xtag" href="#">
                        <span class="s-fc7 f-tdn">123</span>
                        我爱你-新乐尘符
                      </a>
                    </li>
                    <li>
                      <a class="s-fc0 f-thide xtag" href="#">
                        <span class="s-fc7 f-tdn">123</span>
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
    <div class="m-subnav"></div>
  </div>
</template>

<script>
export default {};
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
      width: 90 px;
      height: 32 px;
      margin: 19 px 0 0 12 px;
      box-sizing: border-box;
      padding-left: 16 px;
      border: 1 px solid #4f4f4f;
      background-position: 0 -140 px;
      line-height: 33px;
      color: #ccc;
      border-radius: 20 px;
      background: none !important;
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
    a.z-slt {
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
    a.z-slt .cor {
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
  }
  .m-srch {
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
    }
    .parent {
      display: block;
      position: relative;
      margin: 8px 0 0 30px;

      input {
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
    .u-lstlay {
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
</style>