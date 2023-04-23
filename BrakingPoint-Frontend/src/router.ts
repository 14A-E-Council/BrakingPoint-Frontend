import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import AboutView from "./views/AboutView.vue";
import AccountView from "./views/AccountView.vue";
import QTableView from "./views/QTableView.vue";
import ExamplesView from "./views/ExamplesView.vue";
import GridView from "./views/GridView.vue";
import StartPageView from "./views/StartPageView.vue";
import HelpView from "./views/HelpView.vue";
import EditProfileView from "./views/EditProfileView.vue";
import ProfileView from "./views/ProfileView.vue";
import AdminView from "./views/AdminPageView.vue";
import LoginView from "./views/LoginPageView.vue";
import LeaderboardView from "./views/LeaderboardView.vue";
import { createPinia } from "pinia";

import { createApp } from "vue";
import App from "./App.vue";

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "StartPage",
    component: StartPageView,
    meta: { mustBeLoggedIn: true },
  },
  {
    path: "/login",
    name: "Login",
    component: LoginView,
    meta: { mustNotBeLoggedIn: true },
  },
  {
    path: "/profile",
    name: "Profile",
    component: ProfileView,
    meta: { mustNotBeLoggedIn: false },
  },
  {
    path: "/editprofile",
    name: "EditProfilePage",
    component: EditProfileView,
    meta: { mustNotBeLoggedIn: false },
  },
  {
    path: "/leaderboard",
    name: "Leaderboard",
    component: LeaderboardView,
    meta: { mustNotBeLoggedIn: false },
  },
  {
    path: "/admin",
    name: "Admin",
    component: AdminView,
    meta: { mustNotBeLoggedIn: false },
  },
  {
    path: "/examples",
    name: "examples",
    component: ExamplesView,
    meta: { mustNotBeLoggedIn: true },
  },
  {
    path: "/account",
    name: "account",
    component: AccountView,
    meta: { mustNotBeLoggedIn: true },
  },
  {
    path: "/qtable",
    name: "qtable",
    component: QTableView,
  },
  {
    path: "/grid",
    name: "grid",
    component: GridView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
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

router.beforeEach(async (to, from, next) => {
  const usersStore = await import("./store/usersStore");
  const user = usersStore.useUsersStore().getLoggedUser;
  if (user?.username != null) next();
  else {
    if (to.meta.mustNotBeLoggedIn) next();
    else next("/login");
  }
});

export default router;
