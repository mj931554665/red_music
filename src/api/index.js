import axios from "./axios";
export default {
    getBannerImg() {
        return axios.get('/banner', { params: { type: 0} })
    },
    getSingerList(params) {
        console.log(params);
        return axios.get('/artist/list', { params } )
    },
    getTopPicks(params) {
        return axios.get('/personalized', { params } )
    },
    getNewAlbum(){
        return axios.get('/album/newest')
    },
    getSongList(params){
        return axios.get('/playlist/detail' , { params })
    },
}
