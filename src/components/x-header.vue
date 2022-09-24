<template>
    <div class="x-header">
        <el-dropdown>
            <span class="user"> 欢迎回来 {{getUserName()}} !
                <el-icon class="el-icon--right">
                    <arrow-down />
                </el-icon>
            </span>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item>
                        <el-switch v-model="isDark" inactive-text="夜间模式" />
                    </el-dropdown-item>
                    <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>

<script setup lang="ts">
import { useDark } from '@vueuse/core'
import { getUserName } from '@/api/filebrowser';

const isDark = useDark()
const router = useRouter()

const logout = () => {
    router.push('/')
}

</script>

<style scoped>
.x-header {
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.user {
    font-size: 14px;
    margin-right: 10px;
}
</style>