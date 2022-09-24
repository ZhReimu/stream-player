import { request, getBaseURL } from "@/config/axios.config";
import { IXUser, IUsage, IResource, XStore } from "@/config/x-type";
import { Store } from "vuex";

const login = (user: IXUser) => {
    return request.post('/login', user) as Promise<string>
}

const usage = () => {
    return request.get('/usage') as Promise<IUsage>
}

const resources = (path: string = '/') => {
    return request.get(`/resources/${path == "/" ? "" : path}`) as Promise<IResource>
}

const downloadURL = (path: string) => {
    return `${getBaseURL()}raw${path.startsWith('/') ? '' : '/'}${path}?auth=${getToken()}`
}

const renew = () => {
    return request.post('/renew') as Promise<string>
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

const setUserName = (store: Store<XStore>, userName: string) => {
    store.commit('setUserName', userName)
}

const getUserName = (store: Store<XStore>) => {
    return store == null ? 'unknown' : store.state.userName
}

export {
    login,
    usage,
    renew,
    setToken,
    getToken,
    clearData,
    resources,
    downloadURL,
    getUserName,
    setUserName
}