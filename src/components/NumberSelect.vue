<script setup lang="ts">
import { computed, ref, watch } from 'vue';

const { modelValue, max, width } = defineProps<{
  modelValue: number;
  max: number;
  width?: number;
}>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
}>();

const style = computed(() => {
  return width ? { width: `${width}px` } : null;
})

const currValue = ref<number>(modelValue);

watch(currValue, () => {
  emit('update:modelValue', currValue.value);
})
</script>

<template>
  <el-select
    v-model="currValue"
    :style="style"
  >
    <el-option
      v-for="v of Array.from({ length: max }, (_, idx) => idx)"
      :key="v"
      :value="v"
    />
  </el-select>
</template>