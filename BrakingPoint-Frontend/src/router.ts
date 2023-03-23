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
import { computed } from "vue";

import { createApp } from "vue";
import App from "./App.vue";

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
import { useUsersStore } from "./store/usersStore";

const usersStore = useUsersStore();
const anyLoggedUser = computed(() => (usersStore.getLoggedUser ? true : false));

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "StartPage",
    component: StartPageView,
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
    beforeEnter: async () => {
      if (!anyLoggedUser.value) {
        return "/login";
      }
    },
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
  next();
});

export default router;
