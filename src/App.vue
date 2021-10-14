<template>
  <div id="app">
    <div class="line"></div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo my-top"
      mode="horizontal"
      @select="handleSelect"
      background-color="#242424"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">
        <a href="https://www.ele.me" target="_blank">
          <h1 class="loge">网易云音乐</h1>
        </a>
      </el-menu-item>
      <el-menu-item index="1">
        <a href="https://www.ele.me" target="_blank">
          发现音乐
        </a>
      </el-menu-item>
      <el-menu-item index="1">
        <a href="https://www.ele.me" target="_blank">
          我的音乐
        </a>
      </el-menu-item>
      <el-menu-item index="1">
        <a href="https://www.ele.me" target="_blank">
          服友
        </a>
      </el-menu-item>
      <el-menu-item index="1">
        <a href="https://www.ele.me" target="_blank">
          商城
        </a>
      </el-menu-item>
      <el-menu-item index="1">
        <a href="https://www.ele.me" target="_blank">
          音乐人
        </a>
      </el-menu-item>
      <el-menu-item index="1">
        <a href="https://www.ele.me" target="_blank">
          下载客户端
        </a>
      </el-menu-item>
      <el-menu-item index="1">
        div>a
      </el-menu-item>
      <el-menu-item index="1">
        <a href="https://www.ele.me" target="_blank">
          下载客户端
        </a>
      </el-menu-item>
      <el-menu-item index="1">
        <a href="https://www.ele.me" target="_blank">
          下载客户端
        </a>
      </el-menu-item>
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
  height: 70px;
}
.loge {
  font-size: 0;
  width: 176px;
  height: 69px;
  background-position: 0 0;
  background: url("../src/assets/images/topbar.png") no-repeat;
}
</style>