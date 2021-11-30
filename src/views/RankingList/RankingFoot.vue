<template>
  <!-- 平路相关结构 -->
  <div id="comment">
    <div class="commentTitle">
      <h3>评论</h3>
      <span>共209283条评论</span>
    </div>
    <!-- <div class="commentSubHead">精彩评论</div> -->
    <div class="commentMain">
      <div class="commentMainImg">
        <img src="https://p1.music.126.net/HmatjK3o7hQN1P6JExarMw==/109951166667177431.jpg?param=50y50" alt="" width="50px" height="50px">
      </div>
      <div class="commentMainInfo">
        <div>
          <a href="javascript:;">Ethereal一一</a> &nbsp; : &nbsp;我的我
          <div>111</div>
          <div>111</div>
          <div>111</div>
        </div>
        <div class="clickEvnet">
          <span>19:24</span>
          <div>
            <a href="javascript:;">
              <i class="c-icon"></i>
              <span class="borderEvnet">(2)</span>
            </a>
            <span style="margin-left: 5px;">回复</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
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
  margin-top: 5px;
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
  background: url("../../assets/read/icon2.png") no-repeat 0 9999px;
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
</style>