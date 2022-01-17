import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import DicePage from './views/DicePage.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
      { path: '/', component: DicePage },
  ],
})

createApp(App)
  .use(router)
  .mount('#app')
