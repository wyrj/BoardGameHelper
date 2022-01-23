<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue'

type CountInfo = {
  title: string,
  count: number,
};
type DynamicCountInfo = CountInfo & {
  base: number,
  start: number,
  step: number,
};
type StaticCountInfo = CountInfo & {
  multiplier: number,
};
enum HOUSE_TYPE {
  WOOD = 'wood',
  CLAY = 'clay',
  STONE = 'stone',
}

const houseOptions = Object.values(HOUSE_TYPE);
const houseValue = ref<HOUSE_TYPE>(houseOptions[0])
watch(houseValue, (value) => {
  let multiplier = 0;
  if (value === HOUSE_TYPE.CLAY) {
    multiplier = 1;
  } else if (value === HOUSE_TYPE.STONE) {
    multiplier = 2;
  }
  staticCount[0].multiplier = multiplier;
});

const dynamicCount = reactive<DynamicCountInfo[]>([
  { count: 0, base: 1, start: 4, step: 2, title: 'Grain' },
  { count: 0, base: 1, start: 2, step: 1, title: 'Vegetable' },
  { count: 0, base: 1, start: 4, step: 2, title: 'Sheet' },
  { count: 0, base: 1, start: 3, step: 2, title: 'Wild Boar' },
  { count: 0, base: 1, start: 2, step: 2, title: 'Cattle' },
  { count: 0, base: 2, start: 3, step: 1, title: 'Farm' },
  { count: 0, base: 1, start: 2, step: 1, title: 'Fence' },
  { count: 0, base: 1, start: 2, step: 1, title: 'castle' },
]);

const staticCount = reactive<StaticCountInfo[]>([
  { count: 2, multiplier: 0, title: 'house' },
  { count: 2, multiplier: 3, title: 'family' },
  { count: 0, multiplier: -1, title: 'Unocuupied' },
  { count: 0, multiplier: 1, title: 'other' },
  { count: 0, multiplier: -3, title: 'Beg' },
]);

const score = computed<number>(() => {
  let total = 0
  for (const { count, start, step } of dynamicCount) {
    if (count === 0) {
      total -= 1;
    } else if (count < start) {
      total += 1;
    } else {
      total += Math.min(4, Math.floor((count - start) / step) + 2);
    }
  }
  for (const { count, multiplier } of staticCount) {
    total += count * multiplier;
  }

  return total
});

</script>

<template>
  <div>
    <div class="score">
      {{ `Score: ${score}` }}
    </div>
    <div class="counter-wrapper">
      <template
        v-for="item in [...dynamicCount, ...staticCount]"
        :key="item.title"
      >
        <div class="title">{{ item.title }}</div>
        <el-input-number
          v-model="item.count"
          :min="0"
          :step="1"
          step-strictly
          class="input-number"
        />
      </template>
      <div class="title">House Type</div>
      <el-select
        v-model="houseValue"
      >
        <el-option
          v-for="item in houseOptions"
          :key="item"
          :lable="item"
          :value="item"
        >
          {{ item }}
        </el-option>
      </el-select>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '../styles/utils.scss';
.score {
  font-size: 36px;
}

.counter-wrapper {
  display: grid;
  align-items: center;
  width: 400px;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  margin: 8px auto 0;

  .title {
    justify-self: end;
  }

  .input-number {
    width: 100%;
  }
}
</style>