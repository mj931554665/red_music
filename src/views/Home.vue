<template>
  <div class="home">
    <div id="g_nav2" class="m-subnav j-tflag" v-show="active == 1">
      <div class="wrap f-pr">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo nav"
          mode="horizontal"
          @select="handleSelect"
          background-color="#C20C0C"
          text-color="#fff"
          active-text-color="#fff"
        >
          <el-menu-item index="1"
            ><router-link :to="{ name: 'Recommend' }" class="z-slt"
              ><em>推荐</em></router-link
            ></el-menu-item
          >
          <el-menu-item index="2"
            ><router-link :to="{ name: 'RankingList' }"
              ><em>排行榜</em></router-link
            ></el-menu-item
          >
          <el-menu-item index="3"
            ><router-link :to="{ name: 'SongSheet' }"
              ><em class="f-pr" style="padding: 0 15px 0 11px;position:relative">
                歌单
                <span
                  class="f-pa f-r-white-icon"
                  style="
                    display: inline-block;
                    width: 8px;
                    height: 8px;
                    top: 2px;
                    background-size: cover;
                  "
                ></span> </em></router-link
          ></el-menu-item>
          <el-menu-item index="4"
            ><a to="#"><em>主播电台</em></a></el-menu-item
          >
          <el-menu-item index="5"
            ><router-link :to="{ name: 'Singer' }"
              ><em>歌手</em></router-link
            ></el-menu-item
          >
          <el-menu-item index="6"
            ><a to="#"><em>新碟上架</em></a></el-menu-item
          >
          <div id="Shelter"></div>
        </el-menu>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      active: 1,

      activeIndex: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  computed: {},
};
</script>

<style lang="less" scoped>
.m-subnav {
  z-index: 90;
  height: 35px;
  box-sizing: border-box;
  background-color: #c20c0c;
  border-bottom: 1px solid #a40011;
  .wrap {
    width: 1100px;
    height: 34px;
    margin: 0 auto;
  }
  .nav {
    float: left;
    padding-left: 180px;
  }
  .nav li,
  .nav a {
    float: left;
    height: 34px;
    text-align: center;
    padding: 0;
  }
  .nav a:hover em {
    background: #9b0909;
  }
  .nav a em {
    display: inline-block;
    height: 20px;
    padding: 0 13px;
    margin: 7px 17px 0;
    border-radius: 20px;
    line-height: 21px;
    font-size: 12px;
    vertical-align: top;
  }
  .nav li:hover {
    background-color: #c20c0c !important;
  }
}
.is-active a em {
  background: #9b0909;
}
.f-r-white-icon {
  background: url("../assets/images/white-r-icon@3x.png");
}
.f-pa {
  position: absolute;
}
.is-active {
  border: none !important;
}
.m-subnav-up {
  height: 5px;
  _overflow: hidden;
  border-bottom: none;
}
.el-menu{
  border-bottom: 1px solid #C20C0C;
}
#Shelter {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  width: 744px;
  background-color: #C20C0C;
}
</style>