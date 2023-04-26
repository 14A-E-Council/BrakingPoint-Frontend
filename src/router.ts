import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import AboutView from "./views/AboutView.vue";
import AccountView from "./views/AccountView.vue";
import QTableView from "./views/QTableView.vue";
import AdminView from "./views/AdminView.vue";
import NewBettingView from "./views/NewBettingView.vue";
import StartPageView from "./views/StartPageView.vue";
import HelpView from "./views/HelpView.vue";
import BettingView from "./views/BettingView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "StartPage",
    component: StartPageView,
  },

  {
    path: "/betting",
    name: "betting",
    component: BettingView,
  },
  {
    path: "/newbetting",
    name: "newbetting",
    component: NewBettingView,
  },
  {
    path: "/:id",
    component: StartPageView,
  },
  {
    path: "/account",
    name: "account",
    component: AccountView,
  },
  {
    path: "/admin",
    name: "admin",
    component: AdminView,
  },
  {
    path: "/qhelp",
    name: "qhelp",
    component: HelpView,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  next();
});
export default router;
