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

onMounted(() => {
    const player = new Plyr('#player', props.options);
    console.log(props.options);
})

</script>

<style scoped>
.x-video {
    width: 90%;
    height: 90%;
}
</style>