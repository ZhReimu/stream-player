<template>
    <div class="x-player">
        <h1>我是 player 嗷</h1>
        <div id="player"></div>
    </div>
</template>

<script setup lang="ts">
import Plyr from 'plyr';

const player = new Plyr('#player');
</script>

<style scoped>

</style>