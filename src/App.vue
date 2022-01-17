<script setup lang="ts">
import { ref } from 'vue';

const drawer = ref<boolean>(false);
</script>

<template>
  <el-container class="container">
    <el-header class="header">
      <div>
        <el-icon class="icon" size="30px" @click="drawer = !drawer">
          <i-ion-menu-sharp />
        </el-icon>
      </div>
      <div>
        <a
          class="icon-link"
          href="https://github.com/wyrj/BoardGameHelper"
          target="_blank"
        >
          <el-icon class="icon" size="30px">
            <i-ion-logo-github />
          </el-icon>
        </a>
      </div>
    </el-header>
    <el-main>
      <router-view />
    </el-main>
    <el-drawer
      v-model="drawer"
      direction="ltr"
      :show-close="false"
      :with-header="false"
    >
    </el-drawer>
  </el-container>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0b0b0c;
  height: 100vh;
}

.container {
  height: 100%;
}

.header {
  background-color: var(--el-color-primary-light-8);
  padding: 15px;
  display: flex;
  justify-content: space-between;
}

.icon {
  cursor: pointer;
}

.icon-link {
  color: inherit;
}

body {
  margin: 0;
}
</style>
