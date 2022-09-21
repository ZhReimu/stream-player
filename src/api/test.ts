import { request } from "../config/axios.config";

const testAPI = () => {
    return request.get('/get')
}

export {
    testAPI
}