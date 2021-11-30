<template>
  <div id="RanHead">
    <div>
      <img src="https://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=150y150" alt="">
    </div>
    <div class="HeadText">
      <h3>飙升榜</h3>
      <div class="textInfo">
        <i class="icon"></i>&nbsp;
        <span class="sep s-fc3">最近更新：11月24日</span> 
        <span class="s-fc4">（每天更新）</span>
      </div>
      <div class="textBtn">
        <a href="javascript:;" class="icon" title="播放">
          <i class="play"></i>
          <span>播放</span>
        </a>
        <a href="javascript:;" class="btni-add"></a>
        <a href="javascript:;" class="btni-fav">
          <i>（3862723）</i>
        </a>
        <a href="javascript:;" class="btni-share">
          <i>（11361）</i>
        </a>
        <a href="javascript:;" class="btni-dl">
          <i>下载</i>
        </a>
        <a href="" class="btni-cmmt">
          <i>（209328）</i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
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
    background-image: url("../../assets/read/icon.png");
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
    background: url("../../assets/read/button2.png") no-repeat 0 9999px;
    background-position: right -387px;
    color: white;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }
  .textBtn .play {
    display: inline-block;
    background: url("../../assets/read/button2.png") no-repeat 0 9999px;
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
    background: url("../../assets/read/button2.png") no-repeat 0 9999px;
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
    background: url("../../assets/read/button2.png") no-repeat 0 9999px;
    background-position: right -1020px;
    margin-left: 7px;
  }
  .textBtn .btni-fav i {
    display: inline-block;
    height: 31px;
    line-height: 30px;
    min-width: 23px;
    cursor: pointer;
    background: url("../../assets/read/button2.png") no-repeat 0 9999px;
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
    background: url("../../assets/read/button2.png") no-repeat 0 9999px;
    background-position: right -1020px;
    margin-left: 7px;
  }
  .textBtn .btni-share i {
    display: inline-block;
    height: 31px;
    line-height: 30px;
    min-width: 23px;
    cursor: pointer;
    background: url("../../assets/read/button2.png") no-repeat 0 9999px;
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
    background: url("../../assets/read/button2.png") no-repeat 0 9999px;
    background-position: right -1020px;
    margin-left: 7px;
  }
  .textBtn .btni-dl i {
    display: inline-block;
    height: 31px;
    line-height: 30px;
    min-width: 23px;
    cursor: pointer;
    background: url("../../assets/read/button2.png") no-repeat 0 9999px;
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
    background: url("../../assets/read/button2.png") no-repeat 0 9999px;
    background-position: right -1020px;
    margin-left: 7px;
  }
   .textBtn .btni-cmmt i {
    display: inline-block;
    height: 31px;
    line-height: 30px;
    min-width: 23px;
    cursor: pointer;
    background: url("../../assets/read/button2.png") no-repeat 0 9999px;
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
</style>