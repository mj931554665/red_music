<template>
  <div class="Page">
    <div class="flexPage">
      <div>
        <el-row class="tac">
          <el-col :span="12">
            <h2 class="title">云音乐特色榜</h2>
            <el-menu
              default-active="1"
              class="el-menu-vertical-demo"
              background-color="#f9f9f9"
              active-text-color="#000000"
            >
              <el-menu-item
                v-for="item in sideList1"
                :key="item.id"
                :index="(item.id).toString()"
                class="menu-item"
                @click="getSongList(item.id)"
              >
                <img :src="item.coverImgUrl" alt="" />
                <div>
                  <span>{{ item.name }}</span>
                  <span>{{ item.updateFrequency }}</span>
                </div>
              </el-menu-item>

              <h2 class="title" style="margin-top: 20px">全球媒体榜</h2>
              <el-menu-item
                v-for="item in sideList2"
                :key="item.id"
                :index="(item.id).toString()"
                class="menu-item"
                @click="getSongList(item.id)"
              >
                <img :src="item.coverImgUrl" alt="" />
                <div>
                  <span>{{ item.name }}</span>
                  <span>{{ item.updateFrequency }}</span>
                </div>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </div>

      <div id="">
        <!-- 排行榜的相关信息介绍 -->
        <div id="RanHead">
          <div>
            <img :src="infoList.coverImgUrl" alt="" slot=""/>
          </div>
          <div class="HeadText">
            <h3>{{infoList.name}}</h3>
            <div class="textInfo">
              <i class="icon"></i>&nbsp;
              <span class="sep s-fc3">最近更新：11月24日</span>
              <span class="s-fc4">（刚刚更新）</span>
            </div>
            <div class="textBtn">
              <a href="javascript:;" class="icon" title="播放">
                <i class="play"></i>
                <span>播放</span>
              </a>
              <a href="javascript:;" class="btni-add"></a>
              <a href="javascript:;" class="btni-fav">
                <i>（{{infoList.subscribedCount}}）</i>
              </a>
              <a href="javascript:;" class="btni-share">
                <i>（{{infoList.shareCount}}）</i>
              </a>
              <a href="javascript:;" class="btni-dl">
                <i>下载</i>
              </a>
              <a href="" class="btni-cmmt">
                <i>（{{infoList.commentCount}}）</i>
              </a>
            </div>
          </div>
        </div>
        
        <!-- 歌曲排行榜 -->
        <div id="RanBody">
          <div class="BodyList">
            <h3>歌曲列表</h3>
            <span>{{total}}首歌</span>
            <div>播放：<strong>{{infoList.playCount}}</strong>&nbsp;次</div>
          </div>

          <div class="BodyInfo">
            <table>
              <thead>
                <tr>
                  <th class="t2-1"></th>
                  <th class="t2-2">标题</th>
                  <th class="t2-3">时长</th>
                  <th class="t2-4">歌手</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="(item, index) in musicList1" :key="item.id">
                  <td>
                    <div class="num">
                      {{index + 1}}
                    </div>
                  </td>
                  <td>
                    <div class="tt">
                      <a href="/song?id=1889702364">
                        <img class="rpic" :src="item.al.picUrl" width="50px" height="50px"/>
                      </a>
                      <span></span>
                      <div class="ttc">
                        <a href="/song?id=1889702364" :title="item.al.name">
                          {{item.al.name}}
                        </a>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span class="t-time">{{(item.dt/1000/60).toFixed(2)}}</span>
                    <div class="hshow">
                      <span class="icn icn-add" title="添加到播放列表" ></span>
                      <span class="icn icn-fav" title="收藏" ></span>
                      <span class="icn icn-share" itle="分享"></span>
                      <span class="icn icn-dl" title="下载"></span>
                    </div>
                  </td>
                  <td>
                    <a href="javascript:;" :title="item.ar[0].name">{{item.ar[0].name}}</a>
                  </td>
                </tr>

                <tr v-for="(item,index) in musicList2" :key="item.id">
                  <td>
                    <div class="num">
                      {{index+4}}
                    </div>
                  </td>
                  <td>
                    <div class="tt">
                      <!-- <a href="/song?id=1889702364">
                        <img class="rpic" :src="item.al.picUrl" width="50px" height="50px"/>
                      </a> -->
                      <span></span>
                      <div class="ttc">
                        <a href="/song?id=1889702364" :title="item.al.name">
                          {{item.al.name}}
                        </a>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span class="t-time">{{(item.dt/1000/60).toFixed(2)}}</span>
                    <div class="hshow">
                      <span class="icn icn-add" title="添加到播放列表" ></span>
                      <span class="icn icn-fav" title="收藏" ></span>
                      <span class="icn icn-share" itle="分享"></span>
                      <span class="icn icn-dl" title="下载"></span>
                    </div>
                  </td>
                  <td>
                    <a href="javascript:;" :title="item.ar[0].name">{{item.ar[0].name}}</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>


        <!-- 评论相关结构 -->
        <div id="comment">
          <div class="commentTitle">
            <h3>评论</h3>
            <span>共{{commentTotal}}条评论</span>
          </div>
          <!-- <div class="commentSubHead">精彩评论</div> -->
          <div class="commentMain" v-for="comment in currentCommentData" :key="comment.commentId">
            <div class="commentMainImg">
              <img :src="comment.user.avatarUrl" alt="" width="50px" height="50px">
            </div>
            <div class="commentMainInfo">
              <div>
                <a href="javascript:;">{{comment.user.nickname}}</a> &nbsp; : &nbsp;{{comment.content}}
              </div>
              <div class="clickEvnet">
                <span>{{(comment.timeStr).toString()}}</span>
                <div>
                  <a href="javascript:;">
                    <i class="c-icon"></i>
                    <span class="borderEvnet">({{comment.likedCount}})</span>
                  </a>
                  <span style="margin-left: 5px;">回复</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 分页效果 -->
        <div class="paging">
          <el-pagination
            layout="prev, pager, next"
            :page-size="CommentSize"
            @current-change="changeList"
            :total="comments.length">
          </el-pagination>
        </div>

        <!-- 回到顶部 -->
        <div>
          <a title="回到顶部" class="backTop" href="#" @click="backTop"></a>
        </div>
      </div>



    </div>
  </div>
</template>

<script>
import api from '@/api/index.js';
// import RankingBody from "./RankingList/RankingBody";
// import RankingFoot from "./RankingList/RankingFoot";

// http://localhost:3000/toplist/detail
// http://localhost:3000/toplist/detail

export default {
  name: "RankingList",
  data() {
    return {
      // 更新时间
      updateFrequency: "",
      // 侧边导航数据 sideList1：四条数据
      sideList1: [],
      sideList2: [],
      // 相关介绍信息
      infoList: [],
      // 音乐排行列表
      musicList1: [],
      musicList2: [],
      // 评论相关数据
      commentTotal: "",
      comments: [],   // 所有数据
      totalComment: 1,  // 总页数
      currentComment: 1,  // 当前页数，默认为1
      CommentSize: 20,    // 每页显示数据
      currentCommentData: []    // 当前页显示内容
    };
  },
  methods:{
     async getRankingSider() {
      const result = await api.getRankingSider();
      this.sideList1 = result.list.slice(0, 4);
      this.sideList2 = result.list.slice(4);
      // console.log(this.sideList1);
     },
     // 榜单
    async getSongList(ListId) {
      const result = await api.getSongList({
        id: ListId,
      });
      this.infoList = result.playlist
      this.musicList1 = result.playlist.tracks.splice(0, 3);
      this.musicList2 = result.playlist.tracks.splice(0, 97);
      // console.log(this.musicList1)

      const commentList = await api.getCommentPlayList({
        id: ListId,
        limit: 100
      })
      this.commentTotal = commentList.total;
      this.comments = commentList.comments;
      this.changeList(1)
    },
    // 设置当前页面数据，对数组操作的截取规则为[0~10],[10~20]...,
    changeList(val) {
      let begin = (val - 1) * this.CommentSize;
      let end = val * this.CommentSize;
      this.currentCommentData = this.comments.slice(
        begin,
        end
      );
    },
    backTop() {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  },
  computed: {
    total() {
      return this.musicList1.length + this.musicList2.length
    }
  },
  mounted(){
    this.getRankingSider();
    this.getSongList(19723756);
  }
};
</script>
<style scoped>
/* 页面相关的高度自适应，相关基本代码 */
.Page {
  font-size: 12px;
  color: #333;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #f5f5f5;
  /* height: 500px; */
  display:flex;
  justify-content:center;
  align-items:center;
  width: 100%;
}
.flexPage {
  margin: 0 160px 0 160px;
  display: flex;
}
.flexPage > div:first-child {
  box-sizing: border-box;
  width: 240px;
  height: inherit;
  background-color: #f9f9f9;
  border: 1px solid #d3d3d3; 
}
.flexPage > div:first-child {
  border-top: none;
}
.flexPage > div:last-child {
  width: 740px;
  height: inherit;
  border: 1px solid #d3d3d3;
  background-color: white;
  padding: 0 30px 0 40px;
}
.flexPage > div:last-child {
  border-left: none;
  border-top: none;
}

/* 侧边导航的相关属性 */
.tac {
  background-color: #f9f9f9;
}
.el-menu-vertical-demo {
  border-right: none;
  width: 240px;
}
.tac .title {
  margin: 40px 0 10px 15px;
  font-size: 15px;
  font-weight: bold;
}

.menu-item {
  display: flex;
  align-items: center;
}
.menu-item img {
  width: 40px;
  height: 40px;
}
.menu-item div {
  width: inherit;
  height: inherit;
  position: relative;
  margin-left: 10px;
  font-size: 12px;
}
.menu-item div span:first-child {
  position: absolute;
  top: -12px;
  color: #000;
}
.menu-item div span:last-child {
  position: absolute;
  top: 15px;
  color: #999999;
}



/* 排行榜的相关信息介绍 */
  #RanHead {
    margin-top: 40px;
    display: flex;
  }
  #RanHead div > img{
    width: 150px;
    height: 150px;
    padding: 3px;
    border: 1px solid #ccc;
  }
  .HeadText {
    margin-left: 30px;
    margin-top: 15px;
  }
  .HeadText h3 {
    line-height: 24px;
    font-size: 20px;
    font-weight: normal;
    margin-bottom: 15px;
  }
  .HeadText .textInfo {
    margin-bottom: 30px;
    display: flex;
  }
  .textInfo .icon {
    display: inline-block;
    width: 13px;
    height: 13px;
    background-image: url("../assets/read/icon.png");
    background-position: -18px -682px;
    position: relative;
    top: -2px;
  }
  .textInfo span:last-child {
    color: #999999;
  }

  /* 按钮播放、收藏、转载... */
  .textBtn a {
    display: inline-block;
    height: 31px;
    line-height: 31px;
    overflow: hidden;
    cursor: pointer;
    vertical-align: top;
  }

  /* 播放按钮 */
  .textBtn .icon {
    width: 64px;
    /* display: block; */
    background: url("../assets/read/button2.png") no-repeat 0 9999px;
    background-position: right -387px;
    color: white;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }
  .textBtn .play {
    display: inline-block;
    background: url("../assets/read/button2.png") no-repeat 0 9999px;
    width: 20px;
    height: 18px;
    margin: 6px 2px 2px 0;
    background-position: 0 -1622px;
    text-align: center;
    margin-left: 7px;
    
  }
  .textBtn .icon:hover {
    background-position: right -469px;
  }
  .textBtn .icon:hover .play {
    background-position: -28px -1622px;
  }
  .textBtn .icon span {
    position: relative;
    top: -6px;
  }
  .textBtn .btni-add {
    box-sizing: border-box;
    height: 31px;
    line-height: 30px;
    min-width: 23px;
    cursor: pointer;
    background: aqua;
    background: url("../assets/read/button2.png") no-repeat 0 9999px;
    width: 31px;
    margin-left: -3px;
    padding-right: 0;
    background-position: 0 -1588px;
  }
  .textBtn .btni-add:hover {
    background-position: -40px -1588px;
  }

  /* 收藏按钮 */
  .textBtn .btni-fav {
    height: 31px;
    line-height: 30px;
    min-width: 23px;
    cursor: pointer;
    padding: 0 5px 0 0;
    color: #333;
    text-decoration: none;
    background: url("../assets/read/button2.png") no-repeat 0 9999px;
    background-position: right -1020px;
    margin-left: 7px;
  }
  .textBtn .btni-fav i {
    display: inline-block;
    height: 31px;
    line-height: 30px;
    min-width: 23px;
    cursor: pointer;
    background: url("../assets/read/button2.png") no-repeat 0 9999px;
    padding-left: 20px;
    background-position: 0 -977px;
  }

  .textBtn .btni-fav:hover {
    background-position: right -1106px;
  }
  .textBtn .btni-fav:hover i {
    background-position: 0 -1063px;
  }

  /* 转发按钮 */
  .textBtn .btni-share {
    height: 31px;
    line-height: 30px;
    min-width: 23px;
    cursor: pointer;
    background: url("../assets/read/button2.png") no-repeat 0 9999px;
    background-position: right -1020px;
    margin-left: 7px;
  }
  .textBtn .btni-share i {
    display: inline-block;
    height: 31px;
    line-height: 30px;
    min-width: 23px;
    cursor: pointer;
    background: url("../assets/read/button2.png") no-repeat 0 9999px;
    padding-left: 20px;
    margin-right: 4px;
    background-position: 0 -1225px;
  }
  .textBtn .btni-share:hover {
    background-position: right -1106px;
  }
  .textBtn .btni-share:hover i {
    background-position: 0 -1268px;
  }


  /* 下载按钮 */
  .textBtn .btni-dl {
    display: inline-block;
    height: 31px;
    line-height: 30px;
    min-width: 23px;
    cursor: pointer;
    background: url("../assets/read/button2.png") no-repeat 0 9999px;
    background-position: right -1020px;
    margin-left: 7px;
  }
  .textBtn .btni-dl i {
    display: inline-block;
    height: 31px;
    line-height: 30px;
    min-width: 23px;
    cursor: pointer;
    background: url("../assets/read/button2.png") no-repeat 0 9999px;
    padding-left: 28px;
    padding-right: 8px;
    margin-right: 4px;
    background-position: 0 -2761px;
  }
  .textBtn .btni-dl:hover {
    background-position: right -1106px;
  }
  .textBtn .btni-dl:hover i {
    background-position: 0 -2805px;
  }

  /* 信息按钮 */
  .textBtn .btni-cmmt {
    display: inline-block;
    height: 31px;
    line-height: 30px;
    min-width: 23px;
    cursor: pointer;
    background: url("../assets/read/button2.png") no-repeat 0 9999px;
    background-position: right -1020px;
    margin-left: 7px;
  }
   .textBtn .btni-cmmt i {
    display: inline-block;
    height: 31px;
    line-height: 30px;
    min-width: 23px;
    cursor: pointer;
    background: url("../assets/read/button2.png") no-repeat 0 9999px;
    padding-left: 20px;
    margin-right: 4px;
    background-position: 0 -1465px;
  }
  .textBtn .btni-cmmt:hover {
    background-position: right -1106px;
  }
  .textBtn .btni-cmmt:hover i {
    background-position: 0 -1508px;
  }

/* 歌曲排行榜 */
#RanBody {
  margin-top: 40px;
}
.BodyList {
  display: flex;
  align-items: center;
  position: relative;
}
.BodyList h3 {
  font-size: 20px;
  line-height: 28px;
}
.BodyList span {
  margin-top: 5px;
  margin-left: 24px;
  color: #666;
}
.BodyList div {
  color: #666;
  position: absolute;
  right: 0px;
  top: 14px;
}
.BodyList div strong {
  color: #c20c0c;
  font-weight: bolder;
}

.BodyInfo {
  margin-top: 4px;
  border-top: 2px solid #c20c0c;
}
.BodyInfo table {
  width: 100%;
  border: 1px solid #d9d9d9;
  border-collapse: collapse;
  border-spacing: 0;
  table-layout: fixed;
  text-align: left;
}

/* thead 样式表 */
.BodyInfo table thead th {
  box-sizing: border-box;
  /* display: block; */
  height: 38px;
  line-height: 38px;
  background-position: 0px 0px;
  background-repeat: repeat-x;
  background: url("../assets/read/table.png")  0 10730px;
  padding-left: 9px;
}
.BodyInfo table thead .t2-1 {
  width: 77px;
  border-right: 1px solid #dedede;
}
.BodyInfo table thead .t2-3 {
  width: 91px;
  border-left: 1px solid #dedede;
}
.BodyInfo table thead .t2-4 {
  width: 26%;
  border-left: 1px solid #dedede;
}
  
/* tbody 样式表 */
.BodyInfo table tbody tr {
  height: 40px;
}
.BodyInfo table tbody tr:nth-of-type(odd) {
  background-color: #f7f7f7;
}
.BodyInfo table tbody tr:nth-of-type(even) {
  background-color: #ffffff;
}
.BodyInfo table tbody tr td{
  /* display:table-cell;  */
  vertical-align:middle;
  padding-left: 9px;
  padding-top: 10px;
  padding-bottom: 10px;
}
.BodyInfo table tbody tr td .tt {
  display: flex;
  align-items: center;
}
.BodyInfo table tbody tr td .num {
  color: #999;
  margin-left: 10px;
}
.BodyInfo table tbody tr td .tt span {
  display: block;
  width: 17px;
  height: 17px;
  cursor: pointer;
  background: url("../assets/read/table.png") 0px 9999px no-repeat;
  background-position: 0 -103px;
  margin-left: 10px;
  margin-right: 10px;
}
.BodyInfo table tbody tr td .tt span:hover {
  background-position: 0 -128px;
}
.BodyInfo table tbody tr td a:hover {
  text-decoration: underline;
}
.BodyInfo table tbody tr:hover td .t-time {
  display: none;
}
.BodyInfo table tbody tr td .hshow {
  display: none;
  overflow: hidden;
}
.BodyInfo table tbody tr:hover td .hshow {
  display: block;
}

.BodyInfo table tbody .icn {
  width: 13px;
  height: 13px;
  display: inline-block;
  overflow: hidden;
  vertical-align: middle;
  cursor: pointer;
}
.BodyInfo table tbody .icn-add {
  /* float: left; */
  background: url("../assets/read/icon.png") no-repeat 0 9999px;
  background-position: 0 -700px;
  
}
.BodyInfo table tbody .icn-add:hover {
  background-position: -22px -700px;
}
.BodyInfo table tbody .icn-fav {
  width: 18px;
  height: 16px;
  margin-top: 3px;
  margin-left: 5px;
  background: url("../assets/read/table.png") no-repeat 0 9999px;
  background-position: 0 -174px;
  /* float: left; */
}
.BodyInfo table tbody .icn-fav:hover {
  background-position: -20px -174px;
}
.BodyInfo table tbody .icn-share {
  width: 18px;
  height: 16px;
  margin-top: 3px;
  margin-left: 4px;
  background: url("../assets/read/table.png") no-repeat 0 9999px;
  background-position: 0 -195px;
  /* float: left; */
}
.BodyInfo table tbody .icn-share:hover {
  background-position: -20px -195px;
}
.BodyInfo table tbody .icn-dl {
  width: 18px;
  height: 16px;
  margin-top: 3px;
  margin-left: 4px;
  background: url("../assets/read/table.png") no-repeat 0 9999px;
  background-position: -81px -174px;
  /* float: left; */
}
.BodyInfo table tbody .icn-dl:hover {
  background-position: -104px -174px;
}
</style>

<style lang="less" scoped>
//设置了默认左边框为白色
// .el-menu-item{
//     border-left:#fff solid 6px;
// }
//设置鼠标悬停时 el-menu-item 的样式
.el-menu-item:hover {
  // border-left:#33A2EF solid 6px !important;
  background-color: #e6e6e6 !important;
  color: black !important;
  //less语法，实现鼠标悬停时icon变色
  // i {
  //     color: #38B2FF;
  // }
}
//设置选中el-menu-item时的样式
.el-menu-item.is-active {
  // border-left:#33A2EF solid 6px !important;
  background-color: #e6e6e6 !important;
  color: black !important;
}


/* 评论相关样式 */
#comment {
  margin-top: 45px;
}
.commentTitle {
  display: flex;
  align-items: center;
  padding-bottom: 3px;
  border-bottom: 2px solid #c20c0c;
}
.commentTitle h3 {
  font-size: 20px;
  line-height: 30px;
  font-weight: normal;
}
.commentTitle span {
  margin-left: 20px;
  margin-top: 3px;
}
.commentMain {
  height: 100%;
  padding: 15px 0;
  border-bottom: 1px dotted #ccc;
  overflow: hidden;
  margin-top: 1px;
}
.commentMain div a {
  color: #0c73c2;
  width: 100%;
}
.commentMain div a:hover {
  text-decoration: underline;
}
.commentMainImg {
  float: left;
}
.commentMainInfo {
  width: 675px;
  margin-left: 15px;
  float: left;
}
.commentMainInfo div:first-of-type {
  font-size: 12px;
  line-height: 16px;
}
.commentMainInfo .clickEvnet {
  display: block;
  margin-top: 20px;
  color: #716474;
  clear: both;
  cursor: pointer;
}
.commentMainInfo .clickEvnet > span {
  float: left;
}
.commentMainInfo .clickEvnet > div {
  float: right;
  /* margin-left: 560px; */
  /* margin-top: -2px; */
}
.clickEvnet .c-icon {
  width: 15px;
  height: 14px;
  display: inline-block;
  overflow: hidden;
  background: url("../assets/read/icon2.png") no-repeat 0 9999px;
  background-position: -150px 0;
  /* margin-right: 5px; */
  position: relative;
  top: 1px;
}
.clickEvnet div a {
  color: #333333;
}
.clickEvnet div a:hover .c-icon {
  background-position: -150px -20px;
}
.clickEvnet .borderEvnet {
  border-right: 1px solid #cfdbed;
  padding: 0 10px;
}


// 分页样式表
.paging {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 110px;
}

// 回到顶部
.backTop {
  display: block;
  position: fixed;
  // _position: absolute;
  // text-indent: -9999px;
  left: 50%;
  margin-left: 534px;
  bottom: 160px;
  width: 49px;
  height: 44px;
  background: url("../assets/read/sprite.png") no-repeat 0 9999px;;
  background-position: -265px -47px;
}

.backTop:hover {
  background-position: -325px -47px;
}
</style>