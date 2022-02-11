<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { routesInfo } from './route';

const drawer = ref<boolean>(false);

const router = useRouter();
const route = useRoute();
const { t } = useI18n();
const currentRoute = computed<string>(() => route.fullPath);
const title = computed<string>(() => {
  const page = routesInfo.find((info) => info.path === route.path)?.page ?? '';
  return page ? t(`${page}.title`) : '';
});

function handleDrawerItemClick(path: string): void {
  drawer.value = false;
  router.push(path);
}
</script>

<template>
  <el-container class="container">
    <el-header class="header">
      <div class="header-left">
        <el-icon class="icon" size="30px" @click="drawer = !drawer">
          <i-ion-menu-sharp />
        </el-icon>
        <span class="title">{{ title }}</span>
      </div>
      <div>
        <a class="icon-link" href="https://github.com/wyrj/BoardGameHelper" target="_blank">
          <el-icon class="icon" size="30px">
            <i-ion-logo-github />
          </el-icon>
        </a>
      </div>
    </el-header>
    <el-main>
      <router-view />
    </el-main>
    <el-drawer v-model="drawer" direction="ltr" custom-class="drawer" :show-close="false" :with-header="false">
      <div
        v-for="item of routesInfo"
        :key="item.path"
        @click="handleDrawerItemClick(item.path)"
        :class="['drawer-item', item.path === currentRoute ? 'active' : '']"
      >
        {{ t(`${item.page}.title`) }}
      </div>
    </el-drawer>
  </el-container>
</template>

<style scoped lang="scss">
.container {
  height: 100%;

  :deep .drawer {
    min-width: 300px;
  }
}

.header {
  background-color: var(--el-color-primary-light-8);
  padding: 15px;
  display: flex;
  justify-content: space-between;
}

.header-left {
  display: flex;
}

.title {
  padding-left: 8px;
  font-size: 24px;
  line-height: 30px;
}

.icon {
  cursor: pointer;
}

.icon-link {
  color: inherit;
}

.drawer-item {
  height: 30px;
  line-height: 30px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: var(--el-color-primary-light-8);
  }

  &.active {
    background-color: var(--el-color-primary-light-4);
  }
}
</style>
