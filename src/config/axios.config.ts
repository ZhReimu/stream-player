import { clearData, getToken } from "@/api/filebrowser";
import axios from "axios";
import { XMessage } from '@/utils/x-message'


const baseURL = 'http://127.0.0.1:8099/api/'

const request = axios.create({
    timeout: 5000,
    baseURL
});

const getSessionURL = () => {
    const sessionURL = sessionStorage.getItem('baseURL')
    if (!sessionURL) return
    if (sessionURL?.endsWith('/api/')) return sessionURL
    if (sessionURL.endsWith('/')) return sessionURL + 'api/'
    return sessionURL + '/api/'
}

request.interceptors.request.use((config) => {

    config.baseURL = getSessionURL() || baseURL
    console.log(config.baseURL);
    const token = getToken()
    if (token) config.headers = {
        "X-Auth": token
    }
    return config;
})

request.interceptors.response.use((response) => {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    if (response.status == 200) return response.data
    throw Error(`data: ${response.data}`)
}, (error) => {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    clearData()
    XMessage.error('服务器错误, 请查看控制台')
    console.log(error);
    return Promise.reject(error);
});

export {
    request,
    baseURL
}