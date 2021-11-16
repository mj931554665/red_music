import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    audio: new Audio(),
  },
  mutations: {
    load(state, src) {
      state.audio.src = src;
      state.audio.load();
      state.audio.play();
    },
    play(state) {
      state.play();
    },
    pause(state) {
      state.audio.pause();
    },
    playTo(state, time) {
      state.audio.currentTime = time;
    }
  },
  actions: {
  },
  modules: {
  }
})
