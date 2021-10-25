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
                <el-menu-item v-for="item in List" :key="item.id" :index="item.index" class="menu-item">
                  <img :src="item.img" alt="">
                  <div>
                    <span>{{item.name}}</span>
                    <span>{{item.time}}</span>
                  </div>
                </el-menu-item>

                <h2 class="title" style="margin-top: 20px;">全球媒体榜</h2>
                <!-- <el-menu-item index="5">
                  <i class="el-icon-menu"></i>
                  <span slot="title">飙升榜</span>
                </el-menu-item>
                <el-menu-item index="6">
                  <i class="el-icon-menu"></i>
                  <span slot="title">新歌榜</span>
                </el-menu-item>
                <el-menu-item index="7">
                  <i class="el-icon-document"></i>
                  <span slot="title">原创榜</span>
                </el-menu-item>
                <el-menu-item index="8">
                  <i class="el-icon-setting"></i>
                  <span slot="title">热歌榜</span>
                </el-menu-item> -->
              </el-menu>
              
              
            </el-col>
          </el-row>
        </div>
        <div>222</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RankingList",
    data() {
      return {
        List : [
          // 这里不能使用id命名
          { img: "https://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=40y40", name: "飙升榜", time: "刚刚更新", index: '1'},
          { img: "https://p1.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=40y40", name: "新歌榜", time: "每天更新", index: '2'},
          { img: "https://p1.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg?param=40y40", name: "原创榜", time: "每周四更新", index: '3'},
          { img: "https://p1.music.126.net/GhhuF6Ep5Tq9IEvLsyCN7w==/18708190348409091.jpg?param=40y40", name: "热歌榜", time: "每天更新", index: '4'},
        ]
      }
    }
  }
</script>

<style scoped>
  /* 页面相关的高度自适应，相关基本代码 */
  .Page {
    font-size: 12px;
    color: #333;
    font-family: Arial, Helvetica, sans-serif;
    background-color: #f5f5f5;
    /* height: 500px; */
  }
  .flexPage {
    margin: 0 190px 0 190px;
    display: flex;
  }
  .flexPage>div:first-child {
    width: 240px;
    height: inherit;
    background-color: #f9f9f9;
    border: 1px solid #d3d3d3;

  } 
  .flexPage>div:first-child {
    border-top: none;
  } 
  .flexPage>div:last-child {
    width: 740px;
    height: inherit;
    border: 1px solid #d3d3d3;
    background-color: white;
  } 
  .flexPage>div:last-child {
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
</style>

<style lang="less" scoped>
  //设置了默认左边框为白色
  // .el-menu-item{
  //     border-left:#fff solid 6px;
  // }
  //设置鼠标悬停时 el-menu-item 的样式
  .el-menu-item:hover{
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
</style>