<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n();
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
enum ROOM_TYPE {
  WOOD = 'wood',
  CLAY = 'clay',
  STONE = 'stone',
}

const roomOptions = Object.values(ROOM_TYPE);
const roomValue = ref<ROOM_TYPE>(roomOptions[0])
watch(roomValue, (value) => {
  let multiplier = 0;
  if (value === ROOM_TYPE.CLAY) {
    multiplier = 1;
  } else if (value === ROOM_TYPE.STONE) {
    multiplier = 2;
  }
  staticCount[0].multiplier = multiplier;
});

const dynamicCount = reactive<DynamicCountInfo[]>([
  { count: 0, base: 1, start: 4, step: 2, title: t('agricola.grain') },
  { count: 0, base: 1, start: 2, step: 1, title: t('agricola.vegetable') },
  { count: 0, base: 1, start: 4, step: 2, title: t('agricola.sheep') },
  { count: 0, base: 1, start: 3, step: 2, title: t('agricola.wild_boar') },
  { count: 0, base: 1, start: 2, step: 2, title: t('agricola.cattle') },
  { count: 0, base: 2, start: 3, step: 1, title: t('agricola.field') },
  { count: 0, base: 1, start: 2, step: 1, title: t('agricola.pasture') },
  { count: 0, base: 1, start: 2, step: 1, title: t('agricola.stable') },
]);

const staticCount = reactive<StaticCountInfo[]>([
  { count: 2, multiplier: 0, title: t('agricola.room') },
  { count: 2, multiplier: 3, title: t('agricola.family') },
  { count: 0, multiplier: -1, title: t('agricola.unused') },
  { count: 0, multiplier: 1, title: t('agricola.card') },
  { count: 0, multiplier: 1, title: t('agricola.bonus') },
  { count: 0, multiplier: -3, title: t('agricola.beg') },
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
      {{ `${t('common.score')}: ${score}` }}
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
      <div class="title">{{ t('agricola.room_type') }}</div>
      <el-select
        v-model="roomValue"
      >
        <el-option
          v-for="item in roomOptions"
          :key="item"
          :label="t(`agricola.${item}`)"
          :value="item"
        >
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
  max-width: 100%;
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