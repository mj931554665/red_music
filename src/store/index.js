import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    audio: new Audio(),
    currentSong: {
      al: {
        picUrl: 'https://s4.music.126.net/style/web2/img/default/default_album.jpg',
        name:'',
      },
      ar:[{
        name:''
      }],
      dt:'0',
    },
    // sop是进度条百分比
    sop:0,
    // sic是进度条已播放的秒数
    sic:0,
    playState:false,
    timeId: null,
    // 歌曲播放列表
    songList:[],
    // 判断是否登录
    isLogin:localStorage.getItem("Login"),
    // 控制登录窗口的显示
    loginWind:false,
    // 登录用户的信息
    userInfo:console.log(localStorage.getItem("UserInfo"))
    // userInfo:JSON.parse((.getItem("UserInfo").userinfo)localStorage
  },
  mutations: {
    load(state, src) {
      state.audio.src = src;
      state.audio.load();
      this.commit('play');
      state.playState=true;
    },
    play(state) {
      state.audio.play();
      state.playState=true;
      
      state.timeId = setInterval(() => {
        state.sic += 1;
        state.sop = state.sic / (state.currentSong.dt/1000) * 100;
      },1000)
    },
    // ? : 100 = ? : 4.17
    pause(state) {
      state.playState=false;
      state.audio.pause();
      clearInterval(state.timeId)
    },
    playTo(state, time, sop) {
      state.audio.currentTime = time;
      state.audio.sop = sop;
      state.sic = time;
    },
    setCurrentSong(state, songData) {
      state.currentSong = songData;
    },
    resetSop(state) {
      state.sic = 0;
      state.sop = 0;
    },
    setVolume(state,volume){
      state.audio.volume = volume;
    },
    // 显示登录窗口
    // showLogin(state){
    //   state.loginWind = true
    // }
  },
  actions: {},
  modules: {}
})