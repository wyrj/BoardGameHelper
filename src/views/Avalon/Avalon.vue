<script setup lang="ts">
import { onBeforeUnmount, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { PLAY_STATE, PlayControl } from '~@/components/PlayControl';
import audioAllUrl from './assets/all.mp3';
import audioExceptUrl from './assets/except.mp3';
import audioAndUrl from './assets/and.mp3';
import audioRedUrl from './assets/red.mp3';
import audioOpenUrl from './assets/open.mp3';
import audioCloseUrl from './assets/close.mp3';
import audioRaiseUrl from './assets/raise.mp3';
import audioPutdownUrl from './assets/putdown.mp3';
import audioMordredUrl from './assets/mordred.mp3';
import audioMerlinUrl from './assets/merlin.mp3';
import audioMorganaUrl from './assets/morgana.mp3';
import audioOberonUrl from './assets/oberon.mp3';
import audioPercivalUrl from './assets/percival.mp3';

const { t } = useI18n();

const running = ref(PLAY_STATE.STOP);
const enablePercivalAndMorgana = ref(true);
const enableMordred = ref(true);
const enableOberon = ref(true);
const delay = ref(5);
const playList: Array<HTMLAudioElement | null> = [];
let currentTag: HTMLAudioElement | null = null;
const audioRecords: Record<string, { tag: HTMLAudioElement | null; url: string }> = {
  all: { tag: null, url: audioAllUrl },
  except: { tag: null, url: audioExceptUrl },
  and: { tag: null, url: audioAndUrl },
  red: { tag: null, url: audioRedUrl },
  open: { tag: null, url: audioOpenUrl },
  close: { tag: null, url: audioCloseUrl },
  raise: { tag: null, url: audioRaiseUrl },
  putdown: { tag: null, url: audioPutdownUrl },
  mordred: { tag: null, url: audioMordredUrl },
  merlin: { tag: null, url: audioMerlinUrl },
  morgana: { tag: null, url: audioMorganaUrl },
  oberon: { tag: null, url: audioOberonUrl },
  percival: { tag: null, url: audioPercivalUrl },
};

watch(running, () => {
  if (running.value === PLAY_STATE.RUNNING) {
    handleStart();
  } else {
    handleStop();
  }
});

onBeforeUnmount(() => handleStop());

async function play(): Promise<void> {
  for (const el of playList) {
    currentTag = el;
    if (!el) {
      await new Promise((resolve) => setTimeout(resolve, delay.value * 1000));
    } else {
      await new Promise((resolve) => {
        el.addEventListener('pause', resolve);
        el.play();
      });
      el.currentTime = 0;
    }
  }
  running.value = PLAY_STATE.STOP;
}

function handleStart(): void {
  const all = audioRecords.all.tag;
  const except = audioRecords.except.tag;
  const and = audioRecords.and.tag;
  const red = audioRecords.red.tag;
  const open = audioRecords.open.tag;
  const close = audioRecords.close.tag;
  const raise = audioRecords.raise.tag;
  const putdown = audioRecords.putdown.tag;
  const mordred = audioRecords.mordred.tag;
  const merlin = audioRecords.merlin.tag;
  const morgana = audioRecords.morgana.tag;
  const oberon = audioRecords.oberon.tag;
  const percival = audioRecords.percival.tag;
  playList.push(all, close, red);
  if (enableOberon.value) {
    playList.push(except, oberon);
  }
  playList.push(open, null, red, close, red);
  if (enableMordred.value) {
    playList.push(except, mordred);
  }
  playList.push(raise, merlin, open, null, merlin, close, red, putdown);
  if (enablePercivalAndMorgana.value) {
    playList.push(merlin, and, morgana, raise, percival, open, null, percival, close, merlin, and, morgana, close);
  }
  playList.push(all, open);
  play();
}

function handleStop(): void {
  playList.length = 0;
  if (currentTag) {
    currentTag.pause();
  }
}
</script>

<template>
  <audio
    v-for="[key, item] of Object.entries(audioRecords)"
    :key="key"
    :ref="(el) => (audioRecords[key].tag = el as HTMLAudioElement)"
    :src="item.url"
  />
  <div>
    <el-checkbox v-model="enablePercivalAndMorgana" :label="`${t('avalon.percival')} & ${t('avalon.morgana')}`" />
    <el-checkbox v-model="enableMordred" :label="t('avalon.mordred')" />
    <el-checkbox v-model="enableOberon" :label="t('avalon.oberon')" />
  </div>
  <div class="flex">
    <div>{{ t('avalon.open_eye_time', [`${delay}${t('common.seconds')}`]) }}</div>
    <el-slider v-model="delay" :min="1" :max="10" />
  </div>
  <play-control v-model:state="running" :can-pause="false" />
</template>

<style scoped lang="scss">
@use '../../styles/utils.scss';
.flex {
  @extend %flex-center;
  gap: 16px;

  .el-slider {
    width: 150px;
  }
}
</style>
