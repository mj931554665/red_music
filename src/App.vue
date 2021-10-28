<template>
  <div id="app">
    <NavBar />
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
export default {
  name: "app",
  components: {
    NavBar,
  },
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>
<style scoped>

</style>