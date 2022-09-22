<template>
    <div class="tree">
        <template v-if="canCollapse">
            <div class="toggle" @click="collapseHandler">
                <el-icon v-if="toggle">
                    <Expand />
                </el-icon>
                <el-icon v-else>
                    <Fold />
                </el-icon>
            </div>
            <el-menu :collapse="toggle">
                <x-play-list :loadNode="loadNode" :handleNodeClick="handleNodeClick" />
            </el-menu>
        </template>
        <template v-else>
            <x-play-list :loadNode="loadNode" :handleNodeClick="handleNodeClick" />
        </template>
    </div>
</template>

<script lang="ts" setup>
import type Node from 'element-plus/es/components/tree/src/model/node'
import { resources, downloadURL, renew, setToken } from '@/api/filebrowser'
import { Tree } from '@/config/x-type'

defineProps<{
    canCollapse: boolean
}>()

const instance = getCurrentInstance()
const toggle = ref(true);
const collapseHandler = () => {
    toggle.value = !toggle.value;
};

const handleNodeClick = (data: Tree) => {
    if (data.leaf) {
        const url = downloadURL(data.item!.path)
        renew().then((data) => {
            setToken(data)
            instance!.emit('onSelected', url)
        })
    }
}

const loadNode = (node: Node, resolve: (data: Tree[]) => void) => {
    if (node.level === 0) {
        return resolve([{ name: '/' }])
    }
    resources(node.data.name).then(({ items }) => {
        const data = items.map(it => {
            return {
                name: it.name,
                item: it,
                leaf: !it.isDir
            }
        }).filter(it => it.name.endsWith('.mp4') || it.item.isDir)
        resolve(data)
    })
}
</script>

<style scoped>
.toggle {
    margin-left: 20px;
    margin-bottom: 20px;
}
</style>