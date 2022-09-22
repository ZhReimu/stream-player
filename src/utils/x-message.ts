import { ElMessage } from 'element-plus'

class XMessage {

    static success(msg: string, then: Function = () => { }, timeout: number = 2000) {
        ElMessage.success(msg)
        setTimeout(then, timeout)
    }

    static error(msg: string, then: Function = () => { }, timeout: number = 2000) {
        ElMessage.error(msg)
        setTimeout(then, timeout)
    }
}
export {
    XMessage
}