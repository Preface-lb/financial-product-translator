// src/router/index.ts

import { createRouter, createWebHistory, type Router, type RouteRecordRaw } from 'vue-router'
import { homeRoute ,loginRoute} from './routes'

export enum RoutePath {
  Home = '/home',
  Login = '/login',
  Forbidden = '/403'
}

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  } as RouteRecordRaw,
  homeRoute as RouteRecordRaw,
  loginRoute as RouteRecordRaw,

  {
    path: '/403',
    name: 'Forbidden',
    component: () => import('../views/wrongpage/Forbidden-page.vue'),
    meta: {
      permissionKey: null,
    },
  } as RouteRecordRaw,

  {
    path: '/:pathMatch(.*)*',
    redirect: '/403' // 或者指向专门的404页面
  }
]

const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
