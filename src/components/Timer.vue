<script setup lang="ts">
import { computed, ref, onBeforeUnmount } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const props = defineProps<{
  totalTime: number;
  showName: boolean;
  disabled: boolean;
  editable: boolean;
}>();
const emit = defineEmits<{
  (e: 'time_end'): void;
}>();

const running = ref<number | null>(null);
const name = ref<string>('');
const cls = computed<string[]>(() => {
  const c = ['timer'];
  if (props.disabled) {
    c.push('disabled');
  }
  if (running.value) {
    c.push('active');
  } else if (remainDuration.value <= 0) {
    c.push('end');
  }
  return c;
});
let lastTime = new Date();

const remainDuration = ref<number>(props.totalTime);
const displayTimer = computed(() => {
  const ms = remainDuration.value % 1000;
  const sec = Math.floor(remainDuration.value / 1000) % 60;
  const min = Math.floor(remainDuration.value / 60000);
  return `${min}:${sec}.${ms.toString().padStart(3, '0')}`;
});

function stopTimer(): void {
  if (!running.value) {
    return;
  }
  clearInterval(running.value);
  running.value = null;
}

function continueTimer(): void {
  lastTime = new Date();
  running.value = setInterval(() => {
    const time = new Date();
    const delta = time.getTime() - lastTime.getTime();
    remainDuration.value = Math.max(0, remainDuration.value - delta);
    lastTime = time;
    if (remainDuration.value === 0) {
      stopTimer();
      emit('time_end');
    }
  }, 1);
}

function resetTimer(): void {
  remainDuration.value = props.totalTime;
}

function startTimer(): void {
  resetTimer();
  continueTimer();
}

onBeforeUnmount(() => stopTimer());

defineExpose({
  startTimer,
  stopTimer,
  resetTimer,
  continueTimer,
});
</script>

<template>
  <div class="root">
    <el-input
      v-if="props.showName"
      v-model="name"
      class="timer-input"
      :placeholder="t('common.name')"
      :disabled="!props.editable"
    />
    <div :class="cls">
      {{ displayTimer }}
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../styles/utils.scss";

.root {
  @extend %flex-center;

  flex-direction: column;
  gap: 8px;
}

.timer-input {
  :deep(input) {
    text-align: center;
  }
}

.timer {
  height: 150px;
  width: 150px;
  line-height: 150px;
  margin: auto;
  padding: 0;
  border: 1px solid var(--el-border-color-base);
  border-radius: 50%;
  box-sizing: border-box;
  font-size: 24px;
  font-family: Consolas, monospace;
  background-color: var(--el-color-primary-light-3);
}

.active {
  background-color: var(--el-color-primary);
}

.end {
  background-color: var(--el-color-danger);
}

.disabled {
  opacity: 0.7;
}
</style>
