<template>
  <div class="player-details wrapper">
    <div class="content">
      <div class="wrap">
        <div class="cover">
          <img
            :src="details.al.picUrl"
            alt=""
          />
        </div>
        <div class="main">
          <h2>
            <i></i>
            <em>{{ details.name }}</em>
          </h2>
          <p class="des">
            歌手：
            <!-- <a href="#">刘至佳</a> /
            <a href="#">韩瞳</a> -->
            <template v-for="(ar, j) in details.ar">
              <a href="#">{{ ar.name }}</a>
              <span v-if="j !== details.ar.length - 1"> / </span>
            </template>
          </p>
          <p class="des">
            所属专辑：
            <a href="#">{{ details.al ? details.al.name : details }}</a>
          </p>
          <div class="info">
            <a href="#" class="play" @click="playSong">播放</a>
            <a href="#" class="add"></a>
            <a href="#" class="collection button"><i>收藏</i></a>
            <a href="#" class="share button"><i>分享</i></a>
            <a href="#" class="download button"><i>下载</i></a>
            <a href="#" class="comment button"><i>评论</i></a>
          </div>
          <div class="lyric">
            <div
              class="ctn"
              v-html="lyric"
              :class="[isLyricOpen ? 'show' : 'hidden']"
            ></div>
            <div class="open" @click="isLyricOpen = !isLyricOpen">
              {{ isLyricOpen ? "收起" : "展开" }}
              <i :class="[isLyricOpen ? 'up' : '']"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="comment-wrap">
        <div class="title">
          <h3>评论</h3>
          <span>共<span>13064</span>条评论</span>
        </div>
        <div class="comment-cnt">
          <div class="comment" v-for="comment in comments" :key="comment.commentId">
            <div class="head">
              <img
                :src="comment.user.avatarUrl"
                alt=""
              />
            </div>
            <div class="ctn-wrap">
              <p class="main">
                <a href="#">{{ comment.user.nickname }}</a>
                ：{{ comment.content }}
              </p>
              <div class="info">
                <span class="time">{{ comment.time | handelTime }}</span>
                <span class="praise"><i></i> ({{ comment.likedCount }})</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sideBar">
      <h3>包含这首歌的歌单</h3>
      <ul class="simi-playlist">
        <li v-for="play in playlists" :key="play.id">
          <div class="cover">
            <img :src="play.coverImgUrl" alt="" />
          </div>
          <div class="info">
            <p>
              <a href="#">{{ play.name }}</a>
            </p>
            <p>
              by <a href="#">{{ play.creator.nickname }}</a>
            </p>
          </div>
        </li>
      </ul>
      <h3>相似歌曲</h3>
      <ul class="simi-song">
        <li v-for="song in simiSong" :key="song.id">
          <div class="txt">
            <p>
              <a href="#">{{ song.name }}</a>
            </p>
            <p>
              <template v-for="(alia, i) in song.artists">
                <a href="#">{{ alia.name }}</a>
                <span v-if="i !== song.artists.length - 1"> / </span>
              </template>
            </p>
          </div>
          <div class="opr">
            <i class="play"></i>
            <i class="addto"></i>
          </div>
        </li>
      </ul>
      <h3>网易云音乐多端下载</h3>
      <ul class="device">
        <li class="iphone"></li>
        <li class="pc"></li>
        <li class="android"></li>
      </ul>
      <p>同步歌单，随时畅听320k好音乐</p>
    </div>
  </div>
</template>

<script>
import api from "@/api";

export default {
  data() {
    return {
      lyricData: "",
      isLyricOpen: false,
      id: "1875941511",
      playlists: [],
      simiSong: [],
      comments: [],
      songUrl: '',
      details: {},
    };
  },
  computed: {
    lyric() {
      return this.lyricData.replace(/\[\d+:\d+.\d+\]/g, "<br />");
    },
  },
  filters: {
    handelTime(value) {
      const time = new Date(value);
      const month = time.getMonth() + 1;
      const date = time.getDate();
      const hours = time.getHours().toString().padStart(2, 0);
      const minutes = time.getMinutes().toString().padStart(2,0);
      return `${month}月${date}日 ${hours}:${minutes}`;
    },
  },
  methods: {
    async getSimiPlaylist() {
      const result = await api.getSimiPlaylist({ id: this.id });
      this.playlists = result.playlists;
    },
    async getSimiSong() {
      const result = await api.getSimiSong({ id: this.id });
      this.simiSong = result.songs;
    },
    async getCommentMmusic() {
      const result = await api.getCommentMmusic({ id: this.id });
      this.comments = result.hotComments;
    },
    async getPlayerUrl() {
      const result = await api.getPlayerUrl({ id: this.id });
      this.songUrl = result.data[0].url;
      console.log(result);  
    },
    async getLyric() {
      const result =  await api.getLyric({ id: this.id });
      this.lyricData = result.lrc.lyric;
    },
    async getPlayerDetails() {
      const result = await api.getPlayerDetails({ ids: this.id });
      this.details = result.songs[0];
    },
    playSong() {
      this.$store.commit('load', this.songUrl);
    },
    initData() {
      this.getLyric();
      this.getSimiPlaylist();
      this.getSimiSong();
      this.getCommentMmusic();
      this.getPlayerUrl();
      this.getPlayerDetails();
    },
  },
  async mounted() {
    this.initData();
    console.log(await api.getPlayerDetails({ ids: this.id}));
  },
};
</script>

<style lang="less" scoped>
.btn {
  color: #333;
  padding-right: 5px;
  height: 31px;
  line-height: 31px;
  background: url("../assets/images/button2.png") no-repeat 0 9999px;
}

.player-details {
  display: flex;
  background-color: #fff;
}

.content {
  width: 710px;
  border-right: 1px solid #d3d3d3;
  padding: 47px 30px 40px 39px;
  box-sizing: border-box;

  .wrap {
    display: flex;

    .cover {
      width: 198px;
      height: 198px;
      position: relative;

      img {
        width: 130px;
        height: 130px;
        margin: 34px;
      }

      &::after {
        content: "";
        display: inline-block;
        position: absolute;
        width: 206px;
        height: 205px;
        top: -4px;
        left: -4px;
        background: url("../assets/images/coverall.png") no-repeat 0 9999px;
        background-position: -140px -580px;
      }
    }

    .main {
      flex-grow: 1;
      margin-left: 30px;

      h2 {
        padding-bottom: 4px;

        i {
          display: inline-block;
          width: 54px;
          height: 24px;
          background: url("../assets/images/icon.png") no-repeat 0 9999px;
          background-position: 0 -463px;
          vertical-align: bottom;
        }

        em {
          font-size: 24px;
          margin-left: 7px;
        }
      }

      .des {
        margin: 10px 0;
        color: #999;

        a {
          color: #0c73c2;
        }
      }

      .info {
        margin-bottom: 25px;
        display: flex;

        a {
          text-decoration: none;
        }

        .play {
          width: 66px;
          .btn();
          color: #fff;
          background-position: left -633px;
          text-align: center;
          box-sizing: border-box;
          padding-right: 5px;
          padding-left: 35px;

          &:hover {
            color: #fff;
            background-position: left -719px;
          }
        }
        .add {
          .btn();
          width: 31px;
          background-position: 0 -1588px;
          margin-right: 5px;
          &:hover {
            background-position: -40px -1588px;
          }
        }
        .button {
          .btn();
          width: 59px;
          box-sizing: border-box;
          padding-right: 0px;
          margin-right: 6px;
          background-position: right -1020px;

          i {
            .btn();
            padding-left: 28px;
            display: inline-block;
          }

        }

        .collection > i {
          background-position: 0 -977px;
        }

        .share > i {
          background-position: 0 -1225px;
        }

        .download > i {
          background-position: 0 -2761px;
        }

        .comment > i {
          background-position: 0 -1465px;
        }
      }

      .lyric {
        margin-top: 13px;
        line-height: 23px;
        min-height: 100px;

        .ctn {
          overflow: hidden;

          &.hidden {
            height: 318px;
          }

          &.show {
            height: auto;
          }
        }

        .open {
          color: #0c73c2;
          cursor: pointer;
          display: inline-block;

          i {
            display: inline-block;
            width: 11px;
            height: 8px;
            background: url("../assets/images/icon.png") no-repeat 0 9999px;
            background-position: -65px -520px;

            &.up {
              background-position: -45px -520px;
            }
          }
        }
      }
    }
  }

  .comment-wrap {
    margin-top: 40px;
    .title {
      height: 33px;
      border-bottom: 2px solid #c20c0c;
      display: flex;
      h3 {
        font-size: 20px;
        line-height: 28px;
      }
      & > span {
        margin: 9px 0 0 20px;
      }
    }
    .comment-cnt > .comment {
      padding: 15px 0;
      border-top: 1px dotted #ccc;
      display: flex;
      &:first-child {
        border-top: none;
      }
      .head {
        width: 50px;
        height: 50px;
        img {
          width: 50px;
          height: 50px;
        }
      }
      .ctn-wrap {
        margin-left: 10px;
        line-height: 20px;
        flex-grow: 1;
        .main > a {
          margin-right: 5px;
          color: #0c73c2;

        }
      }
      .info {
        margin-top: 15px;
        display: flex;
        justify-content: space-between;
        .time {
          color: #999;
        }
        .praise > i {
          display: inline-block;
          width: 15px;
          height: 14px;
          background: url("../assets/images/icon2.png") no-repeat 0 9999px;
          background-position: -150px 0;
          margin-right: 5px;
          vertical-align: -2px;
        }
      }
    }
  }
}

.sideBar {
  flex-grow: 1;
  padding: 20px 40px 40px 30px;

  h3 {
    height: 23px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
    color: #333;
    font-weight: bold;
  }

  .simi-playlist > li {
    display: flex;
    height: 50px;
    margin-bottom: 15px;
    line-height: 24px;

    .cover {
      width: 50px;
      height: 50px;
      img {
        width: 100%;
        height: 100%;
      }
    }

    .info {
      margin-left: 10px;
      p {
        width: 140px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
        color: #000;
        font-size: 14px;

        &:last-child {
          font-size: 12px;
          color: #999;
          & > a {
            color: #666;
          }
        }
      }
    }
  }

  .simi-song > li {
    margin-top: 10px;
    display: flex;

    .txt {
      width: 156px;
      line-height: 16px;

      p:first-child {
        color: #333;
      }

      p:last-child {
        color: #999;
        a {
          color: #999;
        }
      }
    }

    .opr {
      line-height: 32px;
      i {
        display: inline-block;
        width: 10px;
        height: 11px;
        background: url("../assets/images/icon2.png") no-repeat 0 9999px;
        opacity: 0.9;

        &.play {
          margin-right: 16px;
          background-position: -69px -455px;
        }

        &.addto {
          background-position: -87px -454px;
        }
      }
    }
  }

  .device {
    height: 65px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;

    li {
      background: url("../assets/images/sprite.png") no-repeat 0 9999px;
    }

    li.iphone {
      width: 42px;
      height: 48px;
      background-position: 0 -392px;
    }

    li.pc {
      width: 60px;
      height: 48px;
      background-position: -72px -392px;
    }

    li.android {
      width: 42px;
      height: 48px;
      background-position: -158px -392px;
    }
  }

  .simi-playlist,
  .simi-song {
    margin-bottom: 25px;
  }
}
</style>