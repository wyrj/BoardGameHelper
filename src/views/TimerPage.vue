<script setup lang="ts">
import { computed, onBeforeUpdate, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import Timer from '../components/Timer.vue';
import NumberSelect from '../components/NumberSelect.vue';

const { t } = useI18n();

enum TIMER_CATEGORY {
  NORMAL = 'normal',
  REPEAT = 'repeat',
  DUEL = 'duel',
}
enum TIMER_STATE {
  RUNNING,
  PAUSE,
  STOP,
}

const running = ref<TIMER_STATE>(TIMER_STATE.STOP);
const timerCategory = ref<TIMER_CATEGORY>(TIMER_CATEGORY.DUEL);
const timerOptions = Object.values(TIMER_CATEGORY);
const activeTimerIndex = ref<number>(0);
const minuteValue = ref<number>(1);
const secondValue = ref<number>(30);
let timers: Array<typeof Timer> = [];

const timerCount = computed<number>(() => {
  return timerCategory.value === TIMER_CATEGORY.DUEL ? 2 : 1;
});
const totalTime = computed<number>(() => {
  return (minuteValue.value * 60 + secondValue.value) * 1000;
});

onBeforeUpdate(() => {
  timers = [];
});

function setTimerRef(el: unknown): void {
  if (el) {
    timers.push(el as typeof Timer);
  }
}

function handleStart(): void {
  if (running.value !== TIMER_STATE.STOP) {
    handlePause();
    return;
  }
  running.value = TIMER_STATE.RUNNING;
  timers[0]?.startTimer();
  timers[1]?.resetTimer();
  activeTimerIndex.value = 0;
}

function handlePause(): void {
  if (running.value === TIMER_STATE.PAUSE) {
    running.value = TIMER_STATE.RUNNING;
    timers[activeTimerIndex.value]?.continueTimer();
  } else if (running.value === TIMER_STATE.RUNNING) {
    running.value = TIMER_STATE.PAUSE;
    timers[activeTimerIndex.value]?.stopTimer();
  }
}

function handleStop(): void {
  running.value = TIMER_STATE.STOP;
  timers[activeTimerIndex.value]?.stopTimer();
}

function handleTimerClick(idx: number): void {
  if (
    running.value !== TIMER_STATE.RUNNING ||
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
    <el-select v-model="timerCategory" :disabled="running !== TIMER_STATE.STOP">
      <el-option v-for="item in timerOptions" :key="item" :label="t(`timer.category.${item}`)" :value="item" />
    </el-select>
    <div class="time-select-wrapper">
      <number-select v-model="minuteValue" :max="180" :width="100" :disabled="running !== TIMER_STATE.STOP" />
      <number-select v-model="secondValue" :max="60" :width="100" :disabled="running !== TIMER_STATE.STOP" />
    </div>
    <div class="timer-container">
      <timer
        v-for="idx in timerCount"
        :key="idx"
        :ref="setTimerRef"
        :disabled="activeTimerIndex !== idx - 1"
        :editable="running === TIMER_STATE.STOP"
        :total-time="totalTime"
        :show-name="timerCount > 1"
        @click="handleTimerClick(idx - 1)"
        @time_end="handleTimeEnd"
      />
    </div>
    <div>
      <el-button @click="handleStart">
        <el-icon>
          <i-ion-pause v-if="running === TIMER_STATE.RUNNING" />
          <i-ion-play v-else />
        </el-icon>
      </el-button>
      <el-button :disabled="running === TIMER_STATE.STOP" @click="handleStop">
        <el-icon>
          <i-ion-stop />
        </el-icon>
      </el-button>
    </div>
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
  display: flex;
  gap: 8px;
}
.timer-container {
  @extend %flex-center;
  gap: 8px;
}
</style>
