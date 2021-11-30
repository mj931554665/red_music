<template>
  <div class="friend">
    <div v-if="!$store.state.isLogin" class="g-bd g-bd-full">
      <div class="n-pglg2">
        <div class="welc s-fc3 f-fs1">
          你可以关注明星和好友品味他们的私房歌单<br />通过他们的动态发现更多精彩音乐
        </div>
        <a
          hidefocus="true"
          href="#"
          @click="login"
          class="btn"
          >立即登录</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "friend",
  data() {
    return {
      
    };
  },
  methods: {
    login(){
      // this.$store.commit("showLogin");
    }
  },
  computed: {
    
  },
  mounted() {
    
  }
};
</script>

<style scoped>
.n-pglg2,
.n-pglg2 .btn {
  background: url("../assets/images/notlogin.jpg") no-repeat center 0;
}
.n-pglg2 {
  width: 902px;
  height: 414px;
  margin: 0 auto 0;
  padding-top: 70px;
  background-position: 0 70px;
}
.n-pglg2 .welc {
  padding: 178px 0 0 535px;
  line-height: 23px;
}
.s-fc3,
a.s-fc3:hover {
  color: #666;
}
.f-fs1 {
  font-size: 14px;
}
.n-pglg2 .btn {
  display: block;
  width: 157px;
  height: 48px;
  margin: 36px 0 0 535px;
  background-position: 0 9999px;
  text-indent: -9999px;
}
.n-pglg2 .btn:hover {
  background-position: 0 -430px;
}
</style>