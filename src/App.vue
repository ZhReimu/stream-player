<template>
  <div class="app-App">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { useDark } from '@vueuse/core'

useDark()

</script>

<style lang="scss" scoped>

</style>