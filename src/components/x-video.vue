<template>
    <div class="x-video">
        <video id="player">
            <template v-for="item in sources">
                <source :src="item.src" :type="item.type">
            </template>
        </video>
    </div>
</template>

<script setup lang="ts">
import Plyr from 'plyr';
import { Options } from 'plyr'
import { IXSource } from '@/config/x-type';


const props = defineProps<{
    options: Options,
    sources: IXSource[]
}>()
const player = ref<Plyr>()

onMounted(() => {
    player.value = new Plyr('#player', props.options);
})

// 禁止浏览器空格下滑滚动条
document.onkeydown = (event) => {
    if (event.code === 'Space') {
        const { value: pv } = player
        if (pv!.playing) pv!.pause()
        else pv!.play()
        return false;
    }
};

</script>

<style scoped>
.x-video {
    width: 90%;
    height: 90%;
}
</style>