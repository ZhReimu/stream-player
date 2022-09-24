import { XStore } from '@/config/x-type';
import { createStore } from 'vuex';

// 创建一个新的 store 实例
const store = createStore<XStore>({
    state() {
        return {
            userName: 'unknown'
        }
    },
    mutations: {
        setUserName(state, userName) {
            state.userName = userName
        }
    }
})


export {
    store
}