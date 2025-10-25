// src/router/routes.ts

import type { RouteRecordRaw } from 'vue-router'


export const homeRoute: RouteRecordRaw = {
  path: '/home',
  name: 'Home',
  component: () => import('../views/homepage/home-page.vue'),
}



