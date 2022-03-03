<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { ROOM_TYPE } from './type';
import { useAgricola } from './useAgricola';

const { t } = useI18n();

const roomOptions = Object.values(ROOM_TYPE);
const { roomValue, countObject, score } = useAgricola();
</script>

<template>
  <div>
    <div class="score">
      {{ `${t('common.score')}: ${score}` }}
    </div>
    <div class="counter-wrapper">
      <template
        v-for="(value, name) in countObject"
        :key="name"
      >
        <div class="title">
          {{ t(`agricola.${name}`) }}
        </div>
        <el-input-number
          v-model="countObject[name]"
          :min="0"
          :step="1"
          step-strictly
          class="input-number"
        />
      </template>
      <div class="title">
        {{ t('agricola.room_type') }}
      </div>
      <el-select v-model="roomValue">
        <el-option
          v-for="item in roomOptions"
          :key="item"
          :label="t(`agricola.${item}`)"
          :value="item"
        />
      </el-select>
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

  .input-number {
    width: 100%;
  }
}
</style>
