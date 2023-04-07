import axios from 'axios';

import router from '../router';

axios.defaults.baseURL='http://localhost/8080'
axios.defaults.withCredentials=true // 开启axios携带凭证的能力
axios.defaults.headers['X-request-Witg']='XMLHttpRequest'
axios.defaults.headers['Authorization']=`${localStorage.getItem('token') || null}`
axios.defaults.headers.post['Content-Type']='application/json'

axios.interceptors.request.use(res=>{
})

axios.interceptors.response.use(res=>{
})

export default axios