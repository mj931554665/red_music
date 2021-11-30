<template>
  <div class="mymusic">
    <div v-if="!$store.state.isLogin" class="g-bd g-bd-full">
      <div class="n-pglg">
        <div class="pic">
          <h2>登录网易云音乐</h2>
          <a
            hidefocus="true"
            href="#"
            onclick="top.login();return false;"
            class="btn"
            >立即登录</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mymusic",
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style scoped>
.n-pglg,
.n-pglg .btn {
  background: url("../assets/images/mymusic.png") no-repeat 0 9999px;
}
.n-pglg {
  width: 807px;
  height: 268px;
  margin: 0 auto 0;
  padding-top: 104px;
  background-position: 0 104px;
}
.n-pglg h2 {
  height: 100px;
  text-indent: -9999px;
}
.n-pglg .btn {
  display: block;
  width: 167px;
  height: 45px;
  margin: 102px 0 0 482px;
  background-position: 0 9999px;
  text-indent: -9999px;
}
.n-pglg .btn:hover {
  background-position: 0 -278px;
}
</style>