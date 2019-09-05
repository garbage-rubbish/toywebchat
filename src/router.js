import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import Account from "./components/account/Account.vue";

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
    }
  ]
});
