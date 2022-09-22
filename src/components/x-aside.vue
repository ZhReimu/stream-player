<template>
    <div class="tree">
        <el-tree :props="props" :load="loadNode" @node-click="handleNodeClick" lazy highlight-current />
    </div>
</template>

<script lang="ts" setup>
import type Node from 'element-plus/es/components/tree/src/model/node'
import { resources, downloadURL } from '@/api/filebrowser'
import { IItem } from '@/config/x-type'

interface Tree {
    name: string,
    item?: IItem
    leaf?: boolean
}

const props = {
    label: 'name',
    children: 'zones',
    isLeaf: 'leaf',
}

const handleNodeClick = (data: Tree) => {
    if (data.leaf) {
        console.log(downloadURL(data.item!.path));
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
        })
        resolve(data)
    })
}
</script>