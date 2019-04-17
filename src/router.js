import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/signUp",
      name: "signUp",
      component: () => import("./views/SignUp.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./views/Login.vue")
    },
    {
      path: "/users",
      name: "users",
      component: () => import("./views/Users.vue")
    },
    {
      path: "/convos",
      name: "convos",
      component: () => import("./views/Convos.vue")
    }
  ]
});
