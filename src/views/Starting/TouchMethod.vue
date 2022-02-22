<script setup lang="ts">
import { CSSProperties, reactive, ref } from 'vue';
import { useI18n } from 'vue-i18n';

const props = defineProps<{
  playerCount: number;
}>();

const { t } = useI18n();

enum PICK_STATE {
  WAITING,
  PICKING,
  DONE,
}

const points = reactive<Array<{ id: number; style: CSSProperties }>>([]);
const timer = ref<number | null>(null);
const state = ref(PICK_STATE.WAITING);
const picked = ref(-1);

function triggerTimer(): void {
  if (timer.value !== null) {
    return;
  }
  state.value = PICK_STATE.PICKING;
  timer.value = setTimeout(() => {
    picked.value = points[Math.floor(Math.random() * props.playerCount)].id;
    navigator.vibrate?.(500);
    timer.value = null;
    state.value = PICK_STATE.DONE;
  }, 1500);
}

function stopTimer(): void {
  if (timer.value) {
    clearTimeout(timer.value);
  }
  timer.value = null;
  state.value = PICK_STATE.WAITING;
  picked.value = -1;
}

function getPointStyle(touch: Touch): CSSProperties {
  return {
    left: `${touch.clientX - 75}px`,
    top: `${touch.clientY - 75}px`,
  };
}

function handleTouch(e: TouchEvent): void {
  const newPoints = [];
  for (const touch of e.touches) {
    if (state.value !== PICK_STATE.DONE || points.findIndex(({ id }) => id === touch.identifier) >= 0) {
      newPoints.push({
        id: touch.identifier,
        style: getPointStyle(touch),
      });
    }
    if (newPoints.length >= props.playerCount) {
      break;
    }
  }
  points.length = 0;
  points.push(...newPoints);
  if (points.length === props.playerCount) {
    if (state.value === PICK_STATE.WAITING) {
      triggerTimer();
    }
  } else if (points.length === 0) {
    stopTimer();
  } else {
    if (state.value === PICK_STATE.PICKING) {
      stopTimer();
    }
  }
}
</script>

<template>
  <div
    class="touch-container"
    @touchstart.prevent="handleTouch"
    @touchmove.prevent="handleTouch"
    @touchend.prevent="handleTouch"
    @contextmenu.prevent=""
  >
    <div>
      {{ t('starting.touch_here') }}
    </div>
    <div
      v-for="item in points"
      :key="item.id"
      :class="['point', state === PICK_STATE.PICKING ? 'picking' : '', item.id === picked ? 'picked' : '']"
      :style="item.style"
    />
  </div>
</template>

<style scoped lang="scss">
@use '~@/styles/utils';

.touch-container {
  @extend %flex-center;
  height: 100%;
  width: 100%;
  font-size: 48px;
  color: var(--el-text-color-placeholder);
  border: var(--el-border-base);
  border-radius: 4px;
  user-select: none;
}

.point {
  position: fixed;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  background-color: var(--el-color-primary-light-6);

  &.picking {
    background-color: var(--el-color-primary-light-3);
  }

  &.picked {
    background-color: var(--el-color-primary);
  }
}
</style>
