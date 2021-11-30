import axios from "./axios";
export default {
    getBannerImg() {
        return axios.get('/banner', { params: { type: 0} })
    },
    // 获取歌手列表
    getSingerList(params) {
        console.log(params);
        return axios.get('/artist/list', { params } )
    },
    // 获取热门推荐歌单
    getTopPicks(params) {
        return axios.get('/personalized', { params } )
    },
    // 获取新碟上架
    getNewAlbum(){
        return axios.get('/album/newest')
    },
    // 获取歌曲榜单列表
    getSongList(params){
        return axios.get('/playlist/detail' , { params })
    },
    // 获取搜索结果
    getSearchResult(params) {
        return axios.get('/search',  { params })
    },
    // 获取音乐播放详情
    getPlayerDetails(params) {
        return axios.get('/song/detail', { params })
    },
    // 获取音乐URL
    getPlayerUrl(params) {
        return axios.get('/song/url', { params })
    },
    // 获取相似音乐
    getSimiSong(params) {
        return axios.get('/simi/song', { params })
    },
    // 获取相似歌单
    getSimiPlaylist(params) {
        return axios.get('/simi/playlist', { params })
    },
    // 获取歌词
    getLyric(params) {
        return axios.get('/lyric', { params })
    },
    // 获取音乐评论
    getCommentMmusic(params) {
        return axios.get('/comment/music',  { params })
    },
    // 获取登录的信息
    getUserMessage(params) {
        return axios.get('/login/cellphone',  { params })
    },
    //登出
    getLoginOut() {
        console.log("index登出请求函数");
        return axios.get('/logout')
    },
    // 获取登录状态
    getUserState() {
        return axios.get('/login/status')
    },
}
