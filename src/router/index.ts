import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/portal',
      children: [
        { name: 'test', path: '/test/ test', component: import('@/views/test.vue') },
        { name: 'test1', path: '/test1', component: import('@/views/test1.vue') },
      ],
    },

  ],
})

export default router
