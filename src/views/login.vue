<template>
    <div class="login">
        <h1>StreamPlayer</h1>
        <el-form label-position="left" label-width="100px" :model="loginForm" style="max-width: 460px">
            <el-form-item label="用户名">
                <el-input v-model="loginForm.username" />
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="loginForm.password" />
            </el-form-item>
            <el-form-item label="服务器地址">
                <el-input v-model="serverAddress" />
            </el-form-item>
        </el-form>
        <div class="test">
            <el-button type="primary" @click="submitForm">登录</el-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { IXUser } from '@/config/x-type';
import { login, setToken } from '@/api/filebrowser'
import { baseURL } from '@/config/axios.config';
import { XMessage } from '@/utils/x-message'

const router = useRouter()
const loginForm = reactive<IXUser>({
    username: 'admin',
    password: 'admin',
    recaptcha: null
})
const serverAddress = ref(window.location.protocol + '//' + window.location.host)

const submitForm = () => {
    sessionStorage.setItem('baseURL', serverAddress.value)
    login(loginForm).then((data) => {
        setToken(data)
        XMessage.success('登录成功', () => {
            router.push('/home')
        })
    })
}

</script>

<style scoped>
.login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: calc(100vh - 20vh);
    align-items: center;
}
</style>