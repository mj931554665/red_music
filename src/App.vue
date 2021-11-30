<template>
  <div id="app">
    <NavBar />
    <router-view></router-view>
    
      <Top></Top>
    <Foot />
    <Play />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import Foot from '@/components/Foot'
import Play from '@/components/Play'
import Top from '@/components/Top.vue';
import api from '@/api'
export default {
  name: "app",
  components: {
    NavBar,
    Foot,
    Play,
    Top
  },
  data() {
    return {};
  },
  computed: {},
}
</script>

<style lang="less" scoped>

</style>