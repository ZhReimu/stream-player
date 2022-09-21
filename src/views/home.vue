<template>
    <div class="home">
        <el-container>
            <el-header>
                <x-header></x-header>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <x-aside></x-aside>
                </el-aside>
                <el-main>
                    <x-video :options="options" :sources="sources"></x-video>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup lang="ts">
import { Options, baseOptions } from '@/config/base-options';
import { IXSource } from '@/config/x-type';

const options: Options = {
    ...baseOptions
}
const url = '/1.mp4'
const type = 'video/mp4'

const sources: IXSource[] = [
    {
        src: url,
        type
    },
    {
        src: url,
        type
    }
]
</script>

<style scoped>
.home>.el-container {
    height: 100%;
}

.el-header {
    height: 40px;
}
</style>
    