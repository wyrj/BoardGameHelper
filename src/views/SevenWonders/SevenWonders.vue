<script setup lang="ts">
import { computed, reactive } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

type COUNT = [string, number];

const scoreType = reactive<COUNT[]>(
  [
    [t('sevenwonders.military_conflict'), 0],
    [t('sevenwonders.money'), 0],
    [t('sevenwonders.wonders'), 0],
    [t('sevenwonders.leaders'), 0],
    [t('sevenwonders.civilian'), 0],
    [t('sevenwonders.commercial'), 0],
    [t('sevenwonders.guild'), 0],
  ]
);
const scientific = reactive<COUNT[]>(
  [
    [t('sevenwonders.scientific.text'), 0],
    [t('sevenwonders.scientific.compass'), 0],
    [t('sevenwonders.scientific.gear'), 0],
  ]
);

const total = computed<COUNT[]>(() => {
  return [...scoreType, ...scientific];
});
const score = computed(() => {
  let sum = 0;
  for (const [, value] of scoreType) {
    sum += value;
  }
  for (const [, value] of scientific) {
    sum += value * value;
  }
  sum += Math.min(...scientific.map(a => a[1])) * 7;
  return sum;
});
</script>

<template>
  <div>
    <div class="score">
      {{ `${t('common.score')}: ${score}` }}
    </div>
    <div class="counter-wrapper">
      <template
        v-for="(item, idx) in total"
        :key="idx"
      >
        <div class="title">
          {{ item[0] }}
        </div>
        <el-input-number
          v-model="item[1]"
          :min="0"
          :step="1"
          step-strictly
        />
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "~@/styles/utils.scss";

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
}
</style>