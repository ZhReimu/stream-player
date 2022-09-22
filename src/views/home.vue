<template>
    <div class="home">
        <el-container>
            <el-header>
                <x-header></x-header>
            </el-header>
            <el-container>
                <el-aside v-if="canCollapse" width="200px">
                    <x-aside :canCollapse="canCollapse" @onSelected="onSelected"></x-aside>
                </el-aside>
                <el-main>
                    <el-empty v-show="!source" description="请点击左侧视频文件来播放" />
                    <x-video v-show="source" :options="options" :source="source"></x-video>
                    <x-aside v-if="!canCollapse" :canCollapse="canCollapse" @onSelected="onSelected"></x-aside>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup lang="ts">
import { Options, baseOptions } from '@/config/base-options';


const options: Options = {
    ...baseOptions
}

const source = ref('')
const canCollapse = ref(!navigator.userAgent.includes('Android'))

const onSelected = (url: string) => {
    source.value = url
}

</script>

<style scoped>
.home>.el-container {
    height: 100vh;
}

.el-header {
    height: 40px;
}

.el-empty {
    padding: 0;
    padding-bottom: 20px;
}
</style>
    