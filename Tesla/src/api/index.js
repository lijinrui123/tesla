import axios from 'axios';
import {Toast} from 'vant';
import 'vant/es/toast/style';
import router from '../router';

axios.defaults.baseURL='http://localhost/8080'
axios.defaults.withCredentials=true // 开启axios携带凭证的能力
axios.defaults.headers['X-request-Witg']='XMLHttpRequest'
axios.defaults.headers['Authorization']=`${localStorage.getItem('token') || null}`
axios.defaults.headers.post['Content-Type']='application/json'

axios.interceptors.request.use(res=>{
    Toast.loading({message:'加载中...'})
})

axios.interceptors.response.use(res=>{
})

export default axios