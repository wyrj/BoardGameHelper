import { createRouter, createWebHashHistory } from 'vue-router'
import DicePage from './views/DicePage.vue'
import AgricolaPage from './views/Agricola.vue'

import type { ComponentOptions } from 'vue'

type HelperInfo = {
  path: string,
  component: ComponentOptions,
  page: string,
}

export const routesInfo: HelperInfo[] = [
  { path: '/', page: 'home', component: DicePage },
  { path: '/agricola', page: 'agricola', component: AgricolaPage },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routesInfo.map(({ path, component }) => ({ path, component })),
})

export default router