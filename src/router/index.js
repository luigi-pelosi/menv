/*
 * ============================
 * File: index.js
 * Project: egret-vue
 * File Created: Thursday, 9th April 2020 2:11:05 am
 * Author:UILIB
 * AuthorUrl:https://themeforest.net/user/ui-lib
 * -----
 * Last Modified: Saturday, 18th April 2020 9:32:52 pm
 * Modified By: naime hossain (naime.hossain93@gmail.com)
 * -----
 * Copyright 2020 - 2020 UILIB, UILIB
 * ============================
 */

// Imports
import Vue from "vue"
import Router from "vue-router"
import store from "@/store"
import ls from 'local-storage'

Vue.use(Router)

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) return { selector: to.hash }
    if (savedPosition) return savedPosition

    return { x: 0, y: 0 }
  },
  routes: [
    {
      name: 'index',
      path: "/",
      component: () => import("@/views/Index"),
      children: [
        {
          name: 'users',
          path: '/users',
          component: () => import('@/views/users/Index')
        }
      ]
    },
    {
      name: 'auth',
      path: '/auth',
      component: () => import('@/views/auth/Index'),
      children: [
        {
          name: 'login',
          path: 'login',
          component: () => import('@/views/auth/Login')
        },
        {
          name: 'register',
          path: 'register',
          component: () => import('@/views/auth/Register')
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  const user = ls('user')
  const token = ls('token')

  if (
      (!user || !token)
      &&
      (to.path !== '/auth/login' && to.path !== '/auth/register')
  ) {
    next('/auth/login')
  }
  if (to.path) {
    store.dispatch("changeThemeLoadingState", true)
  }
  next();
});

router.afterEach(() => {
  // Remove initial loading
  // const gullPreLoading = document.getElementById("loading_wrap");
  // if (gullPreLoading) {
  //   gullPreLoading.style.display = "none";
  // }
  // Complete the animation of the route progress bar.
  setTimeout(() => store.dispatch("changeThemeLoadingState", false), 500)
  // NProgress.done();
  // if (isMobile) {
  // if (window.innerWidth <= 1200) {
  //   // console.log("mobile");
  //   store.dispatch("changeSidebarProperties");
  //   if (store.getters.getSideBarToggleProperties.isSecondarySideNavOpen) {
  //     store.dispatch("changeSecondarySidebarProperties");
  //   }
  //   if (store.getters.getCompactSideBarToggleProperties.isSideNavOpen) {
  //     store.dispatch("changeCompactSidebarProperties");
  //   }
  // } else {
  //   if (store.getters.getSideBarToggleProperties.isSecondarySideNavOpen) {
  //     store.dispatch("changeSecondarySidebarProperties");
  //   }
  //   // store.state.sidebarToggleProperties.isSecondarySideNavOpen = false;
  // }
});

export default router;
