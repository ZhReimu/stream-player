import axios from "axios";
import { ElMessage } from 'element-plus'

const baseURL = 'https://httpbin.org'

const request = axios.create({
    timeout: 5000,
    baseURL
});

request.interceptors.request.use(config => {
    return config;
})

request.interceptors.response.use(response => {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
}, (error) => {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    ElMessage.error('服务器错误, 请查看控制台')
    console.log(error);
    return Promise.reject(error);
});

export {
    request
}