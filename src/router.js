import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import Account from "./components/account/Account.vue";
import Main from "./components/chat/Main.vue";
export default new Router({
  routes: [
    {
      path: "/",
      name: "root",
      component: Account
    },
    {
      path: "/login",
      name: "login",
      component: Account
    },
    {
      path: "/main",
      component: Main,
      name: "login"
    }
  ]
});
