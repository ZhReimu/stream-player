<template>
    <div class="home">
        <el-container>
            <el-aside width="200px">Aside</el-aside>
            <el-container>
                <el-header>Header</el-header>
                <el-main>
                    <x-video :options="options" :sources="sources"></x-video>
                </el-main>
                <el-footer>Footer</el-footer>
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
    height: 100vh;
}
</style>
    