<template>
  <div id="app">
    <NavBar />
    <router-view></router-view>
    <Foot />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import Foot from '@/components/Foot'
import api from '@/api'
export default {
  name: "app",
  components: {
    NavBar,
    Foot
  },
  data() {
    return {};
  },
  computed: {},
}
</script>

<style lang="less" scoped>

</style>