import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import AboutView from "./views/AboutView.vue";
import AccountView from "./views/AccountView.vue";
import QTableView from "./views/QTableView.vue";
import ExamplesView from "./views/ExamplesView.vue";
import GridView from "./views/GridView.vue";
import HelpView from "./views/HelpView.vue";
import EditProfileView from "./views/EditProfileView.vue";
import ProfileView from "./views/ProfileView.vue";
import AdminView from "./views/AdminPageView.vue";
import LoginView from "./views/LoginPageView.vue";
import LeaderboardView from "./views/LeaderboardView.vue";
import FerrariTeamView from "./views/infoViews/FerrariTeamView.vue";
import DriverView from "./views/infoViews/DriverView.vue";
import FrontPageView from "./views/FrontPageView.vue";
import DriverTeamListView from "./views/infoViews/DriverTeamListView.vue";
import { createPinia } from "pinia";

import { createApp } from "vue";
import App from "./App.vue";

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
import NewBettingView from "./views/NewBettingView.vue";
import StartPageView from "./views/StartPageView.vue";
import BettingView from "./views/BettingView.vue";

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
    component: AdminView,
  },
  {
    path: "/examples",
    name: "examples",
    component: ExamplesView,
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
    path: "/admin",
    name: "admin",
    component: AdminView,
  },
  {
    path: "/qhelp",
    name: "qhelp",
    component: HelpView,
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
