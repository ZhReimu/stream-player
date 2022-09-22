<template>
    <div class="home">
        <el-container>
            <el-header>
                <x-header :toggle="toggle" :collapseHandler="collapseHandler"></x-header>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <x-aside :toggle="toggle" @onSelected="onSelected"></x-aside>
                </el-aside>
                <el-main>
                    <el-empty v-show="!source" description="请点击左侧视频文件来播放" />
                    <x-video v-show="source" :options="options" :source="source"></x-video>
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
const toggle = ref(true);

const onSelected = (url: string) => {
    source.value = url
}

const collapseHandler = () => {
    toggle.value = !toggle.value;
};

</script>

<style scoped>
.home>.el-container {
    height: 100%;
}

.el-header {
    height: 40px;
}
</style>
    