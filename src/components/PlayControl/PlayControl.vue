<script setup lang="ts">
import { PLAY_STATE } from './enum';

const props = defineProps<{
  state: PLAY_STATE;
}>();
const emit = defineEmits<{
  (e: 'update:state', state: PLAY_STATE): void;
}>();

function handlePlayOrPause(): void {
  if (props.state === PLAY_STATE.RUNNING) {
    emit('update:state', PLAY_STATE.PAUSE);
  } else {
    emit('update:state', PLAY_STATE.RUNNING);
  }
}

function handleStop(): void {
  emit('update:state', PLAY_STATE.STOP);
}
</script>

<template>
  <div>
    <el-button @click="handlePlayOrPause">
      <el-icon>
        <i-ion-pause v-if="props.state === PLAY_STATE.RUNNING" />
        <i-ion-play v-else />
      </el-icon>
    </el-button>
    <el-button :disabled="props.state === PLAY_STATE.STOP" @click="handleStop">
      <el-icon>
        <i-ion-stop />
      </el-icon>
    </el-button>
  </div>
</template>
