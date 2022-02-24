import { createRouter, createWebHashHistory } from 'vue-router';
import DicePage from './views/DicePage.vue';
import AgricolaPage from './views/Agricola.vue';
import SmallWorldPage from './views/SmallWorld.vue';
import TimerPage from './views/TimerPage.vue';
import { AvalonPage } from './views/Avalon';
import { StartingPage } from './views/Starting';
import { SevenWondersPage } from './views/SevenWonders';

import type { ComponentOptions } from 'vue';

type HelperInfo = {
  path: string;
  component: ComponentOptions;
  page: string;
};

export const routesInfo: HelperInfo[] = [
  { path: '/', page: 'home', component: DicePage },
  { path: '/starting', page: 'starting', component: StartingPage },
  { path: '/agricola', page: 'agricola', component: AgricolaPage },
  { path: '/small_world', page: 'smallworld', component: SmallWorldPage },
  { path: '/timer', page: 'timer', component: TimerPage },
  { path: '/avalon', page: 'avalon', component: AvalonPage },
  { path: '/seven_wonders', page: 'sevenwonders', component: SevenWondersPage },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routesInfo.map(({ path, component }) => ({ path, component })),
});

export default router;
