import Vue from 'vue';
import VueRouter from 'vue-router';

import AuthRoutes from '@/auth/routes';
import AppRoutes from '@/app/routes';

Vue.use(VueRouter);

const routes = [AuthRoutes, AppRoutes];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
