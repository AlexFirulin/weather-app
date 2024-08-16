import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../layouts/defaultLayout.vue'
import HomePage from '../pages/HomePage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'default',
      path: '/',
      component: DefaultLayout,
      children: [
        {
          name: 'home',
          path: '/',
          component: HomePage,
        },
        {
          name:'local-weather',
          path: '/weather/:lat/:lon/:key',
          component: () => import('../pages/CityPage.vue')
        }
      ]
    }
  ]
})

export default router
