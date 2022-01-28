<script setup lang="ts">
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { default as en } from '../locale/en';

const abilityList = Object.keys(en.smallworld.ability);
const raceList = Object.keys(en.smallworld.race);

const { t } = useI18n();

const searchingString = ref<string>('');
function filterFn(category: string, s: string): boolean {
  return (
    s.indexOf(searchingString.value) >= 0 ||
    t(`smallworld.${category}.${s}.name`).indexOf(searchingString.value) >= 0
  );
}
const filteredRace = computed<string[]>(() => {
  return raceList.filter((race) => filterFn('race', race));
});
const filteredAbility = computed<string[]>(() => {
  return abilityList.filter((ability) => filterFn('ability', ability));
})
</script>

<template>
  <div class="root">
    <el-input v-model="searchingString" size="large">
      <template #prefix>
        <el-icon class="search-icon" size="14px">
          <i-ion-search />
        </el-icon>
      </template>
    </el-input>
    <div class="wrapper">
      <div>
        <el-card
          v-for="race in filteredRace"
          :key="race"
          :body-style="{ padding: '0 8px' }"
          shadow="never"
          class="card"
        >
          <el-collapse class="collapse">
            <el-collapse-item
              :title="t(`smallworld.race.${race}.name`)"
            >
              {{ t(`smallworld.race.${race}.description`) }}
            </el-collapse-item>
          </el-collapse>
        </el-card>
      </div>
      <div>
        <el-card
          v-for="ability in filteredAbility"
          :key="ability"
          :body-style="{ padding: '0 8px' }"
          shadow="never"
          class="card"
        >
          <el-collapse class="collapse">
            <el-collapse-item
              :title="t(`smallworld.ability.${ability}.name`)"
            >
              {{ t(`smallworld.ability.${ability}.description`) }}
            </el-collapse-item>
          </el-collapse>
        </el-card>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.root {
  width: 100%;
  max-width: 768px;
  margin: auto;
}
.search-icon {
  align-self: center;
}

.wrapper {
  display: flex;
  gap: 8px;
  margin-top: 8px;

  & > div {
    flex: 1;
  }

  .card {
    margin-top: 8px;
  }

  .collapse {
    --el-collapse-border-color: transparent;
    text-align: start;
  }
}
</style>