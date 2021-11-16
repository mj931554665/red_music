import axios from "./axios";
export default {
    getBannerImg() {
        return axios.get('/banner', { params: { type: 0} })
    },
    // 获取歌手列表
    getSingerList(params) {
        return axios.get('/artist/list', { params } )
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
    }
}
