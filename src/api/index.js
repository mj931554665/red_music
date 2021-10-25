import axios from "./axios";
export default {
    getBannerImg() {
        return axios.get('/banner', { params: { type: 0} })
    },
    getSingerList(params) {
        return axios.get('/artist/list', { params } )
    }
}
