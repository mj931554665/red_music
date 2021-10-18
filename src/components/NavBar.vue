<template>
  <div class="nav-bar">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo my-top"
      mode="horizontal"
      @select="handleSelect"
      background-color="#242424"
      text-color="#ccc"
      active-text-color=""
    >
      <el-menu-item> </el-menu-item>
      <el-menu-item>
        <router-link to="">
          <h1 class="loge">网易云音乐</h1>
        </router-link>
      </el-menu-item>
      <el-menu-item index="1">
        <router-link to=""> 发现音乐 </router-link>
        <sub class="cor">&nbsp;</sub>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link to=""> 我的音乐 </router-link>
        <sub class="cor">&nbsp;</sub>
      </el-menu-item>
      <el-menu-item index="3">
        <router-link to=""> 服友 </router-link>
        <sub class="cor">&nbsp;</sub>
      </el-menu-item>
      <el-menu-item>
        <router-link to=""> 商城 </router-link>
      </el-menu-item>
      <el-menu-item>
        <router-link to=""> 音乐人 </router-link>
      </el-menu-item>
      <el-menu-item index="4">
        <router-link to=""> 下载客户端 </router-link>
        <sub class="cor">&nbsp;</sub>
      </el-menu-item>
      <el-menu-item>
        <div class="m-srch">
          <!-- <el-input
            
            prefix-icon="el-icon-search"
            v-model="input"
            onfocus="if(placeholder=='音乐/视频/电台/用户')placeholder=''"
            onblur="if(!placeholder)placeholder='音乐/视频/电台/用户'"
          > -->
          <input type="text" placeholder="音乐/视频/电台/用户" />
        </div>
      </el-menu-item>
      <el-menu-item>
        <router-link to=""> 创作者中心 </router-link>
      </el-menu-item>
      <el-menu-item>
        <div><img src="../assets/images/头像.jpg" alt="" /></div>
      </el-menu-item>
      <el-menu-item> </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="less" scoped>
.my-top {
  position: relative;
  height: 70px;
  font-size: 14px;
  box-sizing: border-box;

  & > li {
    height: 100%;

    & > a {
      color: #ccc;
      text-decoration: none;
    }

    & > .m-srch {
      width: 158px;
      height: 32px;
    }

    & > .cor {
      display: none;
      position: absolute;
      left: 50%;
      top: 64px;
      width: 12px;
      height: 7px;
      margin-left: -6px;
      overflow: hidden;
      background: url("../assets/images/topbar.png") no-repeat;
      background-position: -226px 0;
    }
    input {
      line-height: 16px;
    }
  }
  & > .is-active > .cor {
    display: block;
  }
}
#app > .my-top > .is-active {
  border: none !important;
  background-color: #000 !important;

  & > a {
    color: #fff;
  }
}
.loge {
  font-size: 0;
  width: 176px;
  height: 69px;
  background-position: 0 0;
  background: url("../assets/images/topbar.png") no-repeat;
}
</style>