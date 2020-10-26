import Vue from "vue";
import Router from "vue-router";
import Exchangerate from "@/components/ExchangeRate/Exchangerate.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Exchangerate",
      component: Exchangerate
    }
  ]
});
