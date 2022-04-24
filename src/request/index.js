import axios from 'axios'
import qs from 'qs'
// dev
let BaseUrl = '10.219.208.18:8899/api'; //http://10.219.208.18:8899/api/

axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'; // 设置默认的请求头的Content-Type

// pro
if (process.env.NODE_ENV === "production") {
    BaseUrl = "****/api"  // 请求ip 
}

const getRequest = (url) => axios.get(BaseUrl + url,)
const postRequest = (url, data) => axios.post(BaseUrl + url, data)  //("url",{student:"xxx",})

axios.interceptors.request.use(
    // token相关
);

// 响应拦截器,可以针对后端返回的不同请求同意拦截处理
axios.interceptors.response.use(response => {
   
})
export default {
    postRequest,
    getRequest,
}

