import axios from "axios";
import config from './config.js'


function $axios(options){
    const instance =axios.create({
        baseURL:config.baseUrl
    })
}

export default $axios