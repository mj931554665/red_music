import axios from "./axios";
export default {
    getBannerImg() {
        return axios.get('/banner', { params: { type: 0} })
    },
    getSingerList(params) {
        return axios.get('/artist/list', { params } )
    },
    getSearchAssociation(params) {
        return axios.get('/search/suggest?keywords= 海阔天空', { params } )
    }
}
