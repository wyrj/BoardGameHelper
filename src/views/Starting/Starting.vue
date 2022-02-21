<script setup lang="ts">
import { ref } from 'vue';
import SpinMethodVue from './SpinMethod.vue';

const editable = ref(true);
const playerCount = ref(4);

function handleRunning(running: boolean): void {
  editable.value = !running;
}
</script>

<template>
  <div class="root">
    <div class="setting-wrapper">
      <el-input-number v-model="playerCount" :min="2" :precision="0" step-strictly :disabled="!editable" />
    </div>
    <spin-method-vue :player-count="playerCount" @running="handleRunning" />
  </div>
</template>

<style scoped lang="scss">
@use '~@/styles/utils';

.root {
  @extend %flex-center;
  flex-direction: column;
  gap: 8px;
}

.setting-wrapper {
  @extend %flex-center;
  gap: 8px;
}
</style>
