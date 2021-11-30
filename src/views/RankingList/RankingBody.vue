<template>
  <!-- 歌曲排行榜 -->
  <div id="RanBody">
    <div class="BodyList">
      <h3>歌曲列表</h3>
      <span>100首歌</span>
      <div>播放：<strong>4663165440</strong>&nbsp;次</div>
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
          <tr>
            <td>
              <div class="num">
                1
              </div>
            </td>
            <td>
              <div class="tt">
                <a href="/song?id=1889702364">
                  <img class="rpic" src="https://p4.music.126.net/a_ZFlznM1rbSuvqzx9N8XQ==/109951166554719468.jpg?param=50y50&quality=100" />
                </a>
                <span></span>
                <div class="ttc">
                  <a href="/song?id=1889702364" title="小雨天气">
                    小雨天气
                  </a>
                </div>
              </div>
            </td>
            <td>
              <span class="t-time">02:39</span>
              <div class="hshow">
                <span class="icn icn-add" title="添加到播放列表" ></span>
                <span class="icn icn-fav" title="收藏" ></span>
                <span class="icn icn-share" itle="分享"></span>
                <span class="icn icn-dl" title="下载"></span>
              </div>
            </td>
            <td>
              <a href="javascript:;" title="yihuik苡慧/嘿人李逵Noisemakers/十七草">yihuik苡慧/嘿人李逵Noisemakers/十七草</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
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
  background: url("../../assets/read/table.png")  0 10730px;
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
}
.BodyInfo table tbody tr td .tt span {
  display: block;
  width: 17px;
  height: 17px;
  cursor: pointer;
  background: url("../../assets/read/table.png") 0px 9999px no-repeat;
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
  background: url("../../assets/read/icon.png") no-repeat 0 9999px;
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
  background: url("../../assets/read/table.png") no-repeat 0 9999px;
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
  background: url("../../assets/read/table.png") no-repeat 0 9999px;
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
  background: url("../../assets/read/table.png") no-repeat 0 9999px;
  background-position: -81px -174px;
  /* float: left; */
}
.BodyInfo table tbody .icn-dl:hover {
  background-position: -104px -174px;
}
</style>