<template>
    <div :class="clazz">
        <video id="player"></video>
    </div>
</template>

<script setup lang="ts">
import Plyr from 'plyr';
import { Options } from 'plyr'

const props = defineProps<{
    options: Options,
    source: string
}>()

var player: Plyr

const clazz = navigator.userAgent.includes('Android') ? 'mobile-video' : 'pc-video'

watch(() => props.source, (newValue, oldValue) => {
    if (player) {
        player.source = {
            type: 'video',
            sources: [
                {
                    src: newValue,
                    type: 'video/mp4',
                }
            ]
        }
    }
}, { deep: true, immediate: true })

onMounted(() => {
    player = new Plyr('#player', props.options);
})


// 禁止浏览器空格下滑滚动条
document.onkeydown = (event) => {
    if (event.code === 'Space') {
        const pv = player
        if (pv!.playing) pv!.pause()
        else pv!.play()
        return false;
    }
};

</script>

<style scoped>
.pc-video {
    width: 90%;
    height: 90%;
}

.mobile-video {
    width: 100%;
    height: auto;
    margin-bottom: 34px;
}
</style>