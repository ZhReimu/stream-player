import { request } from "@/config/axios.config";
import { IXUser, IUsage } from "@/config/x-type";

const login = (user: IXUser) => {
    return request.post('/login', user) as Promise<string>
}

const usage = () => {
    return request.get('/usage') as Promise<IUsage>
}

const setToken = (token: string) => {
    sessionStorage.setItem('token', token)
}

const getToken = () => {
    return sessionStorage.getItem('token')
}

const clearData = () => {
    sessionStorage.clear()
}

export {
    login,
    setToken,
    getToken,
    clearData,
    usage
}