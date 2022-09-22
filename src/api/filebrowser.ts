import { request, baseURL } from "@/config/axios.config";
import { IXUser, IUsage, IResource } from "@/config/x-type";

const login = (user: IXUser) => {
    return request.post('/login', user) as Promise<string>
}

const usage = () => {
    return request.get('/usage') as Promise<IUsage>
}

const resources = () => {
    return request.get('/resources') as Promise<IResource>
}

const downloadURL = (path: string) => {
    return `${baseURL}raw/${path}?auth=${getToken()}`
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
    usage,
    resources,
    downloadURL
}