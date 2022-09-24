<template>
    <div>
        <el-tree :props="props" :load="loadNode" @node-click="handleNodeClick" lazy highlight-current>
            <template #default="{ node, data }">
                <span :title="node.label">{{ node.label }}</span>
            </template>
        </el-tree>
    </div>
</template>

<script setup lang="ts">
import { Tree } from '@/config/x-type';


defineProps<{
    loadNode: ((data: Tree) => void),
    handleNodeClick: ((node: Node, resolve: (data: Tree[]) => void) => void)
}>()

const props = {
    label: 'name',
    children: 'zones',
    isLeaf: 'leaf',
}

</script>

<style scoped>

</style>