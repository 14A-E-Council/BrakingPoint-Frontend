import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import QTableView from "./views/QTableView.vue";
import EditProfileView from "./views/EditProfileView.vue";
import ProfileView from "./views/ProfileView.vue";
import AdminPageView from "./views/AdminPageView.vue";
import AdminView from "./views/AdminView.vue";
import LoginView from "./views/LoginPageView.vue";
import LeaderboardView from "./views/LeaderboardView.vue";
import FerrariTeamView from "./views/infoViews/FerrariTeamView.vue";
import DriverView from "./views/infoViews/DriverView.vue";
import FrontPageView from "./views/FrontPageView.vue";
import DriverTeamListView from "./views/infoViews/DriverTeamListView.vue";
import NewBettingView from "./views/NewBettingView.vue";

import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "FrontPage",
    component: FrontPageView,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginView,
  },
  {
    path: "/profile",
    name: "Profile",
    component: ProfileView,
  },
  {
    path: "/editprofile",
    name: "EditProfilePage",
    component: EditProfileView,
  },
  {
    path: "/leaderboard",
    name: "Leaderboard",
    component: LeaderboardView,
  },
  {
    path: "/admin",
    name: "Admin",
    component: AdminPageView,
  },
  {
    path: "/betting",
    name: "Betting",
    component: NewBettingView,
  },
  {
    path: "/qtable",
    name: "qtable",
    component: QTableView,
  },
  {
    path: "/admin2",
    name: "admin2",
    component: AdminView,
  },
  {
    path: "/drivers",
    name: "drivers",
    component: DriverView,
  },
  {
    path: "/driverteamlist",
    name: "driversandteams",
    component: DriverTeamListView,
  },
  {
    path: "/teams/ferrari",
    name: "FerrariTeamPage",
    component: FerrariTeamView,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// const usersStore = await import("./store/usersStore");
// const user = usersStore.useUsersStore().getLoggedUser;
// router.beforeEach(async (to, from, next) => {
//   const user = usersStore.useUsersStore().getLoggedUser;
//   if (user != null) next();
//   else next("/login");
// });
router.beforeEach((to, from, next) => {
  next();
});

export default router;
