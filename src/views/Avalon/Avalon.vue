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
let currentAudio: HTMLAudioElement | null = null;
let currentReject: (() => void) | null = null;
const allAudio = createAudio(audioAllUrl);
const exceptAudio = createAudio(audioExceptUrl);
const andAudio = createAudio(audioAndUrl);
const redAudio = createAudio(audioRedUrl);
const openAudio = createAudio(audioOpenUrl);
const closeAudio = createAudio(audioCloseUrl);
const raiseAudio = createAudio(audioRaiseUrl);
const putdownAudio = createAudio(audioPutdownUrl);
const mordredAudio = createAudio(audioMordredUrl);
const merlinAudio = createAudio(audioMerlinUrl);
const morganaAudio = createAudio(audioMorganaUrl);
const oberonAudio = createAudio(audioOberonUrl);
const percivalAudio = createAudio(audioPercivalUrl);

watch(running, () => {
  if (running.value === PLAY_STATE.RUNNING) {
    handleStart();
  } else {
    handleStop();
  }
});

onBeforeUnmount(() => handleStop());

function createAudio(url: string): HTMLAudioElement {
  const audio = new Audio(url);
  audio.preload = 'auto';
  return audio;
}

async function play(): Promise<void> {
  for (const audio of playList) {
    currentAudio = audio;
    if (!audio) {
      await new Promise((resolve, reject) => {
        currentReject = reject;
        setTimeout(resolve, delay.value * 1000);
      });
    } else {
      await new Promise((resolve, reject) => {
        audio.addEventListener('ended', resolve, { once: true });
        currentReject = () => {
          audio.removeEventListener('ended', resolve);
          reject();
        };
        audio.currentTime = 0;
        audio.play();
      });
    }
  }
  running.value = PLAY_STATE.STOP;
}

function handleStart(): void {
  playList.push(allAudio, closeAudio, redAudio);
  if (enableOberon.value) {
    playList.push(exceptAudio, oberonAudio);
  }
  playList.push(openAudio, null, redAudio, closeAudio, redAudio);
  if (enableMordred.value) {
    playList.push(exceptAudio, mordredAudio);
  }
  playList.push(raiseAudio, merlinAudio, openAudio, null, merlinAudio, closeAudio, redAudio, putdownAudio);
  if (enablePercivalAndMorgana.value) {
    playList.push(
      merlinAudio,
      andAudio,
      morganaAudio,
      raiseAudio,
      percivalAudio,
      openAudio,
      null,
      percivalAudio,
      closeAudio,
      merlinAudio,
      andAudio,
      morganaAudio,
      closeAudio,
    );
  }
  playList.push(allAudio, openAudio);
  play();
}

function handleStop(): void {
  playList.length = 0;
  currentAudio?.pause();
  currentReject?.();
}
</script>

<template>
  <div>
    <el-checkbox
      v-model="enablePercivalAndMorgana"
      :label="`${t('avalon.percival')} & ${t('avalon.morgana')}`"
    />
    <el-checkbox
      v-model="enableMordred"
      :label="t('avalon.mordred')"
    />
    <el-checkbox
      v-model="enableOberon"
      :label="t('avalon.oberon')"
    />
  </div>
  <div class="flex">
    <div>{{ t('avalon.open_eye_time', [`${delay}${t('common.seconds')}`]) }}</div>
    <el-slider
      v-model="delay"
      :min="1"
      :max="10"
    />
  </div>
  <play-control
    v-model:state="running"
    :can-pause="false"
  />
</template>

<style scoped lang="scss">
@use "../../styles/utils.scss";

.flex {
  @extend %flex-center;

  gap: 16px;

  .el-slider {
    width: 150px;
  }
}
</style>
