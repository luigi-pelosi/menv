/*
 * ============================
 * File: main.js
 * Project: egret-vue
 * File Created: Thursday, 9th April 2020 2:11:05 am
 * Author:UILIB
 * AuthorUrl:https://themeforest.net/user/ui-lib
 * -----
 * Last Modified: Tuesday, 14th April 2020 7:17:10 pm
 * Modified By: naime hossain (naime.hossain93@gmail.com)
 * -----
 * Copyright 2020 - 2020 UILIB, UILIB
 * ============================
 */

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import vuetify from "./plugins/vuetify";
import "./plugins";

import "animate.css";

import egretKit from "@/plugins/egret.kit";

Vue.config.productionTip = false;
// if (process.env.NODE_ENV === "development") {
//   makeServer();
// }

Vue.use(egretKit);
new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
