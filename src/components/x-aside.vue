<template>
    <div>
        <el-tree :props="props" :load="loadNode" lazy />
    </div>
</template>

<script setup lang="ts">
import type Node from 'element-plus/es/components/tree/src/model/node'

interface Tree {
    name: string
    leaf?: boolean
}

const props = {
    label: 'name',
    children: 'zones',
    isLeaf: 'leaf',
}

const loadNode = (node: Node, resolve: (data: Tree[]) => void) => {
    if (node.level === 0) {
        return resolve([{ name: 'region' }])
    }
    if (node.level > 1) return resolve([])

    setTimeout(() => {
        const data: Tree[] = [
            {
                name: 'leaf',
                leaf: true,
            },
            {
                name: 'zone',
            },
        ]

        resolve(data)
    }, 500)
}
</script>

<style scoped>

</style>