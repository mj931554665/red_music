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
              :style="
                'background-position:0 -' + (playState ? 165 : 204) + 'px'
              "
              @click="play"
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
            <img :src="$store.state.currentSong.al.picUrl" /><a
              href="/song?id=1501722588"
              hidefocus="true"
              class="mask"
            ></a>
          </div>
          <div class="play">
            <div class="j-flag words">
              <!-- $store.state.currentSong.al.name -->
              <a
                hidefocus="true"
                href="/song?id=1501722588"
                class="f-thide name fc1 f-fl"
                :title="$store.state.currentSong.al.name"
                >{{ $store.state.currentSong.al.name }}</a
              ><span class="by f-thide f-fl"
                ><span :title="$store.state.currentSong.ar[0].name"
                  ><a class="" href="/artist?id=29500370" hidefocus="true">{{
                    $store.state.currentSong.ar[0].name
                  }}</a></span
                ></span
              ><a
                href="/artist?id=29500370&amp;_hash=songlist-1501722588"
                class="src"
                title="来自歌手"
              ></a>
            </div>
            <div class="m-pbar" data-action="noop">
              <!-- <div class="barbg j-flag" id="auto-id-TXsWVpr70peiKHs7">
                <div class="rdy" style="width: 100%"></div>
                <div class="cur" style="width: 23.3538%">
                  <span class="btn f-tdn f-alpha" id="auto-id-ZkKTTfRQmhqdW14n"
                    ><i></i
                  ></span>
                </div>
              </div> -->
              <div class="slider" @click="sliderClick">
                <el-slider
                  v-model="progressBar"
                  :show-tooltip="true"
                  @change="sliderChange"
                ></el-slider>
              </div>
              <span class="j-flag time"
                ><em>{{ sopTime }}</em> / {{ curTime }}</span
              >
            </div>
          </div>
          <div class="oper f-fl">
            <a class="icn icn-pip" title="画中画歌词">画中画歌词</a>
            <a data-action="like" class="icn icn-add j-flag" title="收藏"
              >收藏</a
            >
            <a data-action="share" class="icn icn-share" title="分享">分享</a>
          </div>
          <div class="ctrl f-fl f-pr j-flag">
            <div
              class="m-vol"
              :style="'visibility:' + (isshowVolume ? 'visible' : 'hidden')"
              id="auto-id-GKe7Kq7EgDLz8Ub6"
            >
              <div class="barbg"></div>
              <el-slider
                v-model="volumeValue"
                vertical
                height="93px"
              ></el-slider>
              <!-- <div class="vbg j-t" id="auto-id-yhbUNZCgMGVvXhBd">
                <div class="curr j-t" style="height: 5.74074px"></div>
                <span class="btn f-alpha j-t" style="top: 76px"></span>
              </div> -->
            </div>

            <a
              data-action="volume"
              class="icn icn-vol"
              :class="!volumeValue ? 'icn-volno' : ''"
              @click="showVolume"
            ></a>
            <a href="javascript:;" class="icn icn-loop" title="循环"></a>
            <span class="add f-pr">
              <span class="tip" style="display: none">已开始播放</span>
              <a href="javascript:;" title="播放列表" class="icn icn-list s-fc3"
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
    return {
      playState: false,
      progressBar: this.$store.state.sop,
      isshowVolume: false,
      volumeValue: 0,
    };
  },
  mounted() {
    console.log(this.$store.state.currentSong);
  },
  watch: {
    "$store.state.sop"() {
      this.progressBar = this.$store.state.sop;
    },
    "$store.state.playState"() {
      this.playState = this.$store.state.playState;
    },
    volumeValue() {
      this.$store.commit("setVolume", this.volumeValue / 100);
    },
  },
  methods: {
    async getPlayerDetails() {
      const result = await api.getPlayerDetails({ ids: this.id });
    },
    // 播放暂停功能
    play() {
      if (this.playState == true) {
        this.$store.commit("pause");
        this.playState = !this.playState;
      } else if (this.playState == false) {
        this.$store.commit("play");
        this.playState = !this.playState;
      }
    },
    // 改变进度条
    sliderChange() {
      var sop =
        (this.progressBar / 100) * (this.$store.state.currentSong.dt / 1000);
      this.$store.commit("playTo", sop, this.progressBar);
    },
    // 设置进度条总时长
    handleTime(mss) {
      var minutes = Math.floor(Math.round(mss / 1000) / 60)
        .toString()
        .padStart(2, 0);
      var seconds = (Math.round(mss / 1000) % 60).toString().padStart(2, 0);
      return minutes + ":" + seconds;
    },
    // 点击进度条暂停进度条
    sliderClick() {
      const timeId = this.$store.state.timeId;
      clearInterval(timeId);
    },
    showVolume() {
      this.isshowVolume = !this.isshowVolume;
    },
  },
  computed: {
    // 进度条总时长
    curTime: function () {
      return this.handleTime(this.$store.state.currentSong.dt);
    },
    // 进度条当前播放的时间
    sopTime: function () {
      return this.handleTime(this.$store.state.sic * 1000);
    },
  },
  mounted() {},
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
a,
a *,
.f-hand,
.f-hand * {
  cursor: pointer;
}
a:hover {
  text-decoration: underline;
  color: #333;
}
em,
i {
  font-style: normal;
  text-align: left;
  font-size: inherit;
}

#g_player .play .m-pbar,
#g_player .play .m-pbar .barbg {
  width: 466px;
}
.m-playbar .updn .left,
.m-playbar .updn .right,
.m-playbar .updn .btn,
.m-playbar .bg,
.m-playbar .btns a,
.m-playbar .head .mask,
.m-playbar .icn,
.m-playbar .ctrl,
.m-playbar .tip,
.m-vol .curr,
.m-playbar .words .mv,
.m-vol .barbg,
.m-playbar .words .src {
  background: url("../assets/images/playbar.png") no-repeat;
}
.m-pbar .btn,
.m-vol .btn {
  background: url("../assets/images/iconall.png") no-repeat;
}
.rdy {
  background-position: right -30px;
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
  margin-left: 25px;
}
img,
.txt {
  border: 0;
}
.f-thide {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}
.f-fl {
  float: left;
}
.m-playbar-lock .updn .btn:hover {
  background-position: -100px -400px;
}
.m-playbar {
  position: absolute;
  zoom: 1;
  top: -53px;
  left: 0;
  width: 100%;
  height: 53px;
  margin: 0 auto;
  .icn-pip:hover,
  .icn-pip.active {
    background-position-y: -25px;
  }
  .icn-add:hover {
    background-position: -88px -189px;
  }
  .icn-share:hover {
    background-position: -114px -189px;
  }
  .icn-vol:hover {
    background-position: -31px -248px;
  }
  .icn-loop:hover {
    background-position: -33px -344px;
  }
  .icn-list:hover {
    background-position: -42px -98px;
    text-decoration: none;
  }
  .updn {
    position: relative;
    z-index: 11;
    .left {
      position: absolute;
      top: -14px;
      right: 15px;
      width: 52px;
      height: 67px;
      background-position: 0 -380px;
    }
    .btn {
      display: block;
      width: 18px;
      height: 18px;
      margin: 6px 0 0 17px;
    }
    .btn {
      background-position: -100px -380px;
    }
    .right {
      position: absolute;
      top: -1px;
      right: 0;
      width: 15px;
      height: 54px;
      background-position: -52px -393px;
      pointer-events: none;
    }
  }
  .bg {
    height: 53px;
    zoom: 1;
    margin-right: 67px;
    background-position: 0 0;
    background-repeat: repeat-x;
  }
  .m-playbar .hand {
    position: absolute;
    top: -10px;
    width: 100%;
    height: 20px;
    cursor: pointer;
  }
  .wrap {
    position: absolute;
    left: 50%;
    top: 6px;
    z-index: 15;
    width: 980px;
    height: 47px;
    margin: 0 auto;
  }
  .btns {
    width: 137px;
    padding: 6px 0 0 0;
    a {
      display: block;
      float: left;
      width: 28px;
      height: 28px;
      margin-right: 8px;
      margin-top: 5px;
      text-indent: -9999px;
    }
    .prv {
      background-position: 0 -130px;
    }
    .ply {
      width: 36px;
      height: 36px;
      margin-top: 0;
      background-position: 0 -204px;
    }
    .pas {
      background-position: 0 -165px;
    }
    .nxt {
      background-position: -80px -130px;
    }
    .prv:hover {
      background-position: -30px -130px;
    }
    .nxt:hover {
      background-position: -110px -130px;
    }
  }
  .head {
    position: relative;
    margin: 6px 15px 0 0;
    width: 34px;
    height: 34px;
    img {
      width: 34px;
      height: 34px;
    }
    .mask {
      position: absolute;
      top: 0px;
      left: 0px;
      display: block;
      width: 34px;
      height: 35px;
      background-position: 0 -80px;
    }
  }
  .m-playbar .play {
    position: relative;
    *zoom: 1;
    width: 608px;
  }
  .words {
    height: 28px;
    overflow: hidden;
    color: #e8e8e8;
    text-shadow: 0 1px 0 #171717;
    line-height: 28px;
    .name {
      max-width: 300px;
    }
    .fc1 {
      color: #e8e8e8;
    }
    .by {
      max-width: 220px;
      margin-left: 15px;
      color: #9b9b9b;
      a {
        color: #9b9b9b;
      }
    }
  }
  .icn {
    float: left;
    width: 25px;
    height: 25px;
    margin: 11px 2px 0 0;
    text-indent: -9999px;
  }
  .icn-pip {
    position: relative;
    background: url("../assets/images/DLVi.png") no-repeat 0 0;
  }
  .icn-add {
    background-position: -88px -163px;
  }
  .icn-share {
    background-position: -114px -163px;
  }
  .ctrl {
    position: relative;
    z-index: 10;
    width: 113px;
    padding-left: 13px;
    background-position: -147px -238px;
  }
  .icn-vol {
    background-position: -2px -248px;
  }
  .icn-loop {
    background-position: -3px -344px;
  }
  .m-playbar .add {
    float: left;
    width: 59px;
    height: 36px;
  }
  .tip {
    position: absolute;
    top: -51px;
    left: -65px;
    clear: both;
    width: 152px;
    height: 49px;
    background-position: 0 -287px;
    text-align: center;
    color: #fff;
    line-height: 37px;
  }
  .icn-list {
    display: block;
    float: none;
    width: 38px;
    padding-left: 21px;
    background-position: -42px -68px;
    line-height: 27px;
    text-align: center;
    color: #666;
    text-shadow: 0 1px 0 #080707;
    text-indent: 0;
    text-decoration: none;
  }
  .tip-1 {
    top: -35px;
    left: 12px;
    width: 81px;
    height: 39px;
    line-height: 34px;
    background-position: 0 -457px;
  }
  .add {
    float: left;
    width: 59px;
    height: 36px;
  }
  .icn-volno {
    background-position: -104px -69px;
  }
  .icn-volno:hover {
    background-position: -126px -69px;
  }
}
.m-pbar {
  position: relative;
  *zoom: 1;
  width: 493px;
  .barbg {
    width: 493px;
  }
  .barbg,
  .cur,
  .rdy {
    height: 9px;
    background-position: right 0;
  }
  .barbg,
  .cur,
  .rdy,
  .left {
    background: url("../assets/images/statbar.png") no-repeat;
  }
  .barbg,
  .cur,
  .rdy {
    height: 9px;
    background-position: right 0;
  }
  .cur {
    position: absolute;
    top: 0;
    left: 0;
    width: 1%;
    background-position: left -66px;
  }
  .btn {
    position: absolute;
    top: -7px;
    right: -13px;
    width: 22px;
    height: 24px;
    margin-left: -11px;
    background-position: 0 -250px;
    _background-position: 0 0;
    i {
      visibility: hidden;
      position: absolute;
      left: 5px;
      top: 5px;
      width: 12px;
      height: 12px;
      background: url("../assets/images/loading.gif");
    }
  }
  .time {
    position: absolute;
    top: -3px;
    right: -84px;
    color: #797979;
    text-shadow: 0 1px 0 #121212;
    em {
      color: #a1a1a1;
    }
  }
  .btn:hover {
    background-position: 0 -280px;
  }
}
#g_player .play {
  width: 581px;
}
.m-playbar .oper {
  width: 60px;
}
#g_player .oper {
  width: 87px;
}
.m-vol .vbg {
  padding: 4px 0;
  top: 7px;
}
.m-vol {
  position: absolute;
  top: -113px;
  left: 9px;
  clear: both;
  width: 32px;
  height: 113px;
  .btn {
    position: absolute;
    top: 0;
    left: -7px;
    display: block;
    width: 18px;
    height: 20px;
    background-position: -40px -250px;
    _background-position: 0 0;
    cursor: pointer;
  }
  .barbg {
    position: absolute;
    top: 0;
    left: 0;
    width: 32px;
    height: 113px;
    background-position: 0 -503px;
  }
  .vbg,
  .curr {
    position: absolute;
    top: 11px;
    left: 14px;
    width: 4px;
    height: 93px;
  }
  .curr {
    top: auto;
    bottom: 4px;
    left: 0;
    background-position: -40px bottom;
    overflow: hidden;
  }
  .btn:hover {
    background-position: -40px -280px;
  }
}
</style>