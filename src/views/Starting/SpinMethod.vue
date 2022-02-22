<script setup lang="ts">
import { onBeforeUnmount, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const props = defineProps<{
  playerCount: number;
}>();
const emit = defineEmits<{
  (e: 'running', running: boolean): void;
}>();

const timer = ref<number | null>(null);
const pickIndex = ref(-1);
const running = ref(false);

watch(running, (val) => {
  emit('running', val);
});

onBeforeUnmount(() => stopTimer());

function stopTimer(): void {
  if (timer.value) {
    clearInterval(timer.value);
  }
}

async function handlePick(): Promise<void> {
  running.value = true;
  let target = Math.floor(Math.random() * props.playerCount) + props.playerCount * 3;
  await new Promise<void>((resolve) => {
    pickIndex.value = 0;
    timer.value = setInterval(() => {
      target -= 1;
      pickIndex.value = (pickIndex.value + 1) % props.playerCount;
      if (target === 0) {
        stopTimer();
        resolve();
      }
    }, 500 / props.playerCount);
  });
  running.value = false;
}
</script>

<template>
  <div class="table-wrapper">
    <div
      v-for="idx in playerCount"
      :key="idx"
      :class="['player', idx === pickIndex + 1 ? 'active' : '', idx === 1 ? 'host' : '']"
      :style="`transform: rotate(${((idx - 1) * 360) / playerCount}deg) translateY(-130px);`"
    >
      {{ idx }}
    </div>
  </div>
  <el-button :disabled="running" @click="handlePick">
    {{ t('starting.spin') }}
  </el-button>
</template>

<style scoped lang="scss">
.table-wrapper {
  height: 300px;
  width: 300px;
  position: relative;
}

.player {
  height: 24px;
  width: 24px;
  background-color: var(--el-color-primary-light-6);
  border-radius: 50%;
  position: absolute;
  left: calc(50% - 12px);
  top: calc(50% - 12px);
  transition: transform;
  line-height: 24px;

  &.host {
    background-color: var(--el-color-success);
    z-index: 1;
  }

  &.active {
    background-color: var(--el-color-primary);
    z-index: 2;
  }
}
</style>
