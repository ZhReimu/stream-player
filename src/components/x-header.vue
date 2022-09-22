<template>
    <div class="x-header">
        <el-switch v-model="isDark" inactive-text="夜间模式" />
    </div>
</template>

<script setup lang="ts">
import { useDark } from '@vueuse/core'

const isDark = useDark()

</script>

<style scoped>
.x-header {
    display: flex;
    justify-content: flex-end;
}
</style>