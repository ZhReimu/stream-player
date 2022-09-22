<template>
    <div class="x-header">
        我是 header 嗷
        <div class="toggle" @click="collapseHandler">
            <el-icon v-if="toggle">
                <Expand />
            </el-icon>
            <el-icon v-else>
                <Fold />
            </el-icon>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    toggle: boolean,
    collapseHandler: ((event: MouseEvent) => void)
}>()
</script>

<style scoped>
.x-header {
    text-align: center;
}
</style>