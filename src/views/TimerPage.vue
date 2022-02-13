<script setup lang="ts">
import { computed, onBeforeUpdate, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import Timer from '../components/Timer.vue';
import NumberSelect from '../components/NumberSelect.vue';
import { PLAY_STATE, PlayControl } from '../components/PlayControl';

const { t } = useI18n();

enum TIMER_CATEGORY {
  NORMAL = 'normal',
  REPEAT = 'repeat',
  DUEL = 'duel',
}

const running = ref<PLAY_STATE>(PLAY_STATE.STOP);
const timerCategory = ref<TIMER_CATEGORY>(TIMER_CATEGORY.DUEL);
const timerOptions = Object.values(TIMER_CATEGORY);
const activeTimerIndex = ref<number>(0);
const minuteValue = ref<number>(1);
const secondValue = ref<number>(30);
let timers: Array<typeof Timer> = [];
const runningStateMachine = [
  [null, handlePause, handleStop],
  [handleContinue, null, handleStop],
  [handleStart, null, null],
];

const timerCount = computed<number>(() => {
  return timerCategory.value === TIMER_CATEGORY.DUEL ? 2 : 1;
});
const totalTime = computed<number>(() => {
  return (minuteValue.value * 60 + secondValue.value) * 1000;
});

watch(running, (newValue, oldValue) => runningStateMachine[oldValue][newValue]?.());

onBeforeUpdate(() => {
  timers = [];
});

function setTimerRef(el: unknown): void {
  if (el) {
    timers.push(el as typeof Timer);
  }
}

function handleStart(): void {
  timers[0]?.startTimer();
  timers[1]?.resetTimer();
  activeTimerIndex.value = 0;
}

function handlePause(): void {
  timers[activeTimerIndex.value]?.stopTimer();
}

function handleContinue(): void {
  timers[activeTimerIndex.value]?.continueTimer();
}

function handleStop(): void {
  timers[activeTimerIndex.value]?.stopTimer();
}

function handleTimerClick(idx: number): void {
  if (
    running.value !== PLAY_STATE.RUNNING ||
    idx !== activeTimerIndex.value ||
    timerCategory.value === TIMER_CATEGORY.NORMAL
  ) {
    return;
  }
  if (timerCategory.value === TIMER_CATEGORY.REPEAT) {
    handleStop();
    handleStart();
  } else if (timerCategory.value === TIMER_CATEGORY.DUEL) {
    timers[activeTimerIndex.value]?.stopTimer();
    activeTimerIndex.value = 1 - activeTimerIndex.value;
    timers[activeTimerIndex.value]?.continueTimer();
  }
}

function handleTimeEnd(): void {
  handleStop();
}
</script>

<template>
  <div class="root">
    <el-select v-model="timerCategory" :disabled="running !== PLAY_STATE.STOP">
      <el-option v-for="item in timerOptions" :key="item" :label="t(`timer.category.${item}`)" :value="item" />
    </el-select>
    <div class="time-select-wrapper">
      <div>{{ `${t('common.minutes')}:` }}</div>
      <number-select v-model="minuteValue" :max="180" :width="100" :disabled="running !== PLAY_STATE.STOP" />
      <div>{{ `${t('common.seconds')}:` }}</div>
      <number-select v-model="secondValue" :max="60" :width="100" :disabled="running !== PLAY_STATE.STOP" />
    </div>
    <div class="timer-container">
      <timer
        v-for="idx in timerCount"
        :key="idx"
        :ref="setTimerRef"
        :disabled="activeTimerIndex !== idx - 1"
        :editable="running === PLAY_STATE.STOP"
        :total-time="totalTime"
        :show-name="timerCount > 1"
        @click="handleTimerClick(idx - 1)"
        @time_end="handleTimeEnd"
      />
    </div>
    <play-control v-model:state="running" />
  </div>
</template>

<style scoped lang="scss">
@use '../styles/utils.scss';

.root {
  @extend %flex-center;
  flex-direction: column;
  gap: 8px;
}

.time-select-wrapper {
  @extend %flex-center;
  gap: 8px;
}
.timer-container {
  @extend %flex-center;
  gap: 8px;
}
</style>
