import { Options } from "plyr";

const baseOptions: Options = {
    i18n: {
        restart: '重播',
        rewind: '快退 {seektime}s',
        play: '播放(空格键)',
        pause: '暂停(空格键)',
        fastForward: '快进 {seektime}s',
        seek: 'Seek',
        seekLabel: '{currentTime} / {duration}',
        played: '已播放',
        buffered: '已缓冲',
        currentTime: '当前时间',
        duration: '片长',
        volume: '音量',
        mute: '静音(M)',
        unmute: '取消静音(M)',
        enableCaptions: '显示字幕',
        disableCaptions: '隐藏字幕',
        download: '下载',
        enterFullscreen: '进入全屏(F)',
        exitFullscreen: '退出全屏(F)',
        frameTitle: '标题名称： {title}',
        captions: '字幕',
        settings: '设置',
        menuBack: '返回上级',
        speed: '倍速',
        normal: '1.0x',
        quality: '分辨率',
        loop: '循环',
        start: '开始',
        end: '结束',
        all: '全部',
        reset: '重置',
        disabled: '禁用',
        enabled: '启用',
        advertisement: '广告',
        qualityBadge: {
            '480': 'SD',
            '576': 'SD',
            '720': 'HD',
            '1080': 'HD',
            '1440': 'HD',
            '2160': '4K'
        }
    }
}


export {
    baseOptions
}

export type {
    Options
}