<script setup lang="ts">
import { computed, ref, watch } from 'vue';

const props = defineProps<{
  modelValue: number;
  max: number;
  width?: number;
}>();
const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void;
}>();

const style = computed(() => {
  return props.width ? { width: `${props.width}px` } : null;
});

const currValue = ref<number>(props.modelValue);

watch(currValue, () => {
  emit('update:modelValue', currValue.value);
});
</script>

<template>
  <el-select v-model="currValue" :style="style">
    <el-option v-for="v of Array.from({ length: props.max }, (_, idx) => idx)" :key="v" :value="v" />
  </el-select>
</template>
