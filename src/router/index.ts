// src/router/index.ts

import { createRouter, createWebHistory, type Router, type RouteRecordRaw } from 'vue-router'
import { homeRoute} from './routes'

export enum RoutePath {
  Home = '/home',
  Forbidden = '/403'
}

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  } as RouteRecordRaw,
  homeRoute as RouteRecordRaw,

  {
    path: '/403',
    name: 'Forbidden',
    component: () => import('../views/wrongpage/Forbidden-page.vue'),
    meta: {
      permissionKey: null,
    },
  } as RouteRecordRaw,
  // 新增404路由，匹配所有未定义的路径
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
