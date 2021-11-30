<template>
  <div class="play">
    <div class="g-btmbar">
      <div
        class="m-playbar m-playbar-lock"
        style="top: -53px; visibility: visible"
        id="auto-id-rR6NCAP0dhv9FO4B"
      >
        <div class="updn">
          <div class="left f-fl">
            <a
              href="javascript:;"
              class="btn"
              hidefocus="true"
              data-action="lock"
            ></a>
          </div>
          <div class="right f-fl"></div>
        </div>
        <div class="bg"></div>
        <div class="hand" title="展开播放条"></div>
        <div class="wrap" id="g_player" style="margin-left: -498.5px">
          <div class="btns">
            <a
              href="javascript:;"
              hidefocus="true"
              data-action="prev"
              class="prv"
              title="上一首(ctrl+←)"
              >上一首</a
            >
            <a
              href="javascript:;"
              hidefocus="true"
              data-action="pause"
              class="ply j-flag pas"
              title="播放/暂停(p)"
              >播放/暂停</a
            >
            <a
              href="javascript:;"
              hidefocus="true"
              data-action="next"
              class="nxt"
              title="下一首(ctrl+→)"
              >下一首</a
            >
          </div>
          <div class="head j-flag">
            <img
              src="http://p2.music.126.net/jJ_1P2CF3bprDrdUCJyiFw==/109951165529656441.jpg?param=34y34"
            /><a href="/song?id=1501722588" hidefocus="true" class="mask"></a>
          </div>
          <div class="play">
            <div class="j-flag words">
              <a
                hidefocus="true"
                href="/song?id=1501722588"
                class="f-thide name fc1 f-fl"
                title="toge"
                >toge</a
              ><span class="by f-thide f-fl"
                ><span title="あよ"
                  ><a class="" href="/artist?id=29500370" hidefocus="true"
                    >あよ</a
                  ></span
                ></span
              ><a
                href="/artist?id=29500370&amp;_hash=songlist-1501722588"
                class="src"
                title="来自歌手"
              ></a>
            </div>
            <div class="m-pbar" data-action="noop">
              <div class="barbg j-flag" id="auto-id-TXsWVpr70peiKHs7">
                <div class="rdy" style="width: 100%"></div>
                <div class="cur" style="width: 23.3538%">
                  <span class="btn f-tdn f-alpha" id="auto-id-ZkKTTfRQmhqdW14n"
                    ><i></i
                  ></span>
                </div>
              </div>
              <span class="j-flag time"><em>00:56</em> / 04:03</span>
            </div>
          </div>
          <div class="oper f-fl">
            <a
              href="javascript:;"
              hidefocus="true"
              class="icn icn-pip"
              title="画中画歌词"
              >画中画歌词</a
            >
            <a
              href="javascript:;"
              hidefocus="true"
              data-action="like"
              class="icn icn-add j-flag"
              title="收藏"
              >收藏</a
            >
            <a
              href="javascript:;"
              hidefocus="true"
              data-action="share"
              class="icn icn-share"
              title="分享"
              >分享</a
            >
          </div>
          <div class="ctrl f-fl f-pr j-flag">
            <div
              class="m-vol"
              style="visibility: hidden"
              id="auto-id-GKe7Kq7EgDLz8Ub6"
            >
              <div class="barbg"></div>
              <div class="vbg j-t" id="auto-id-yhbUNZCgMGVvXhBd">
                <div class="curr j-t" style="height: 5.74074px"></div>
                <span class="btn f-alpha j-t" style="top: 76px"></span>
              </div>
            </div>
            <a
              href="javascript:;"
              hidefocus="true"
              data-action="volume"
              class="icn icn-vol"
            ></a>
            <a
              href="javascript:;"
              hidefocus="true"
              data-action="mode"
              class="icn icn-loop"
              title="循环"
            ></a>
            <span class="add f-pr">
              <span class="tip" style="display: none">已开始播放</span>
              <a
                href="javascript:;"
                title="播放列表"
                hidefocus="true"
                data-action="panel"
                class="icn icn-list s-fc3"
                >50</a
              >
            </span>
            <div class="tip tip-1" style="display: none">循环</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "play",
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style lang="less" scoped>
.g-btmbar {
  position: fixed;
  zoom: 1;
  bottom: 0;
  left: 0;
  right: 0;
  height: 0;
  width: 100%;
  z-index: 1002;
}
.m-playbar .updn .left,
.m-playbar .updn .btn,
.m-playbar .updn .right,
.m-playbar .bg,
.m-playbar .btns a {
  background: url("../assets/images/playbar.png") no-repeat;
}
.m-playbar .btns,
.m-playbar .head,
.m-playbar .play,
.m-playbar .volum,
.m-playbar .oper {
  float: left;
}
.n-login-scan .right {
  float: left;
  margin-left: 25 px;
}
.m-playbar {
  position: absolute;
  zoom: 1;
  top: -53 px;
  left: 0;
  width: 100%;
  height: 53 px;
  margin: 0 auto;
  .updn {
    position: relative;
    z-index: 11;
    .left {
      position: absolute;
      top: -14 px;
      right: 15 px;
      width: 52 px;
      height: 67 px;
      background-position: 0 -380 px;
    }
    .btn {
      display: block;
      width: 18 px;
      height: 18 px;
      margin: 6 px 0 0 17 px;
    }
    .btn {
      background-position: -100 px -380 px;
    }
    .right {
      position: absolute;
      top: -1 px;
      right: 0;
      width: 15 px;
      height: 54 px;
      background-position: -52 px -393 px;
      pointer-events: none;
    }
  }
  .bg {
    height: 53 px;
    zoom: 1;
    margin-right: 67 px;
    background-position: 0 0;
    background-repeat: repeat-x;
  }
  .m-playbar .hand {
    position: absolute;
    top: -10 px;
    width: 100%;
    height: 20 px;
    cursor: pointer;
  }
  .wrap {
    position: absolute;
    left: 50%;
    top: 6 px;
    z-index: 15;
    width: 980px;
    height: 47 px;
    margin: 0 auto;
  }
  .btns {
    width: 137 px;
    padding: 6 px 0 0 0;
    a {
      display: block;
      float: left;
      width: 28 px;
      height: 28 px;
      margin-right: 8 px;
      margin-top: 5 px;
      text-indent: -9999 px;
    }
    .prv {
      background-position: 0 -130 px;
    }
    .ply {
      width: 36 px;
      height: 36 px;
      margin-top: 0;
      background-position: 0 -204 px;
    }
    .pas {
      background-position: 0 -165 px;
    }
    .nxt {
      background-position: -80 px -130 px;
    }
  }
  .head {
    position: relative;
    margin: 6 px 15 px 0 0;
  }
}
</style>