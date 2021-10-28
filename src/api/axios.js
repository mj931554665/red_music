import axios from 'axios'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
// import { getCookie } from '../utils/cookie'

const instance = axios.create({
    baseURL: 'http://localhost:3000/',
    withCredentials: true,  // 允许请求携带 cookie
})

instance.interceptors.request.use(request => {
    // 请求前显示加载动画
    // Vue.prototype.$loading.service({
    //     lock: true,
    //     text: 'loading',
    //     spinner: 'el-icon-loading',
    //     background: 'rgba(0, 0, 0, 0.7)'
    // })
    Nprogress.start()
    return request
})

instance.interceptors.response.use(response => {
    // 响应后关闭加载动画
    // Vue.prototype.$loading.service().close()
    Nprogress.done()
    return response.data
})

export default instance;