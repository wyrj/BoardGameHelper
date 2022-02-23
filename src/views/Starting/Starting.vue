<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import SpinMethodVue from './SpinMethod.vue';
import TouchMethodVue from './TouchMethod.vue';

const { t } = useI18n();

enum PICK_METHOD {
  SPIN = 'spin',
  TOUCH = 'touch',
}

const editable = ref(true);
const playerCount = ref(4);
const method = ref(PICK_METHOD.SPIN);

function handleRunning(running: boolean): void {
  editable.value = !running;
}
</script>

<template>
  <div class="root">
    <div class="setting-wrapper">
      <el-input-number
        v-model="playerCount"
        :min="2"
        :precision="0"
        step-strictly
        :disabled="!editable"
      />
      <el-select
        v-model="method"
        :disabled="!editable"
      >
        <el-option
          v-for="item in Object.values(PICK_METHOD)"
          :key="item"
          :label="t(`starting.${item}`)"
          :value="item"
        />
      </el-select>
    </div>
    <spin-method-vue
      v-if="method === PICK_METHOD.SPIN"
      :player-count="playerCount"
      @running="handleRunning"
    />
    <touch-method-vue
      v-else
      :player-count="playerCount"
    />
  </div>
</template>

<style scoped lang="scss">
@use '~@/styles/utils';

.root {
  @extend %flex-center;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  gap: 8px;
  height: 100%;
}

.setting-wrapper {
  @extend %flex-center;
  gap: 8px;
}

.content-wrapper {
  flex: 1;
}
</style>
