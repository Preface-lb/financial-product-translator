// src/router/routes.ts

import type { RouteRecordRaw } from 'vue-router'


export const homeRoute: RouteRecordRaw = {
  path: '/home',
  name: 'Home',
  component: () => import('../views/homepage/home-page.vue'),
}

export const loginRoute: RouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('../views/loginpage/login-page.vue'),
}



