import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import AccountView from "./views/AccountView.vue";
import QTableView from "./views/QTableView.vue";
import StartPageView from "./views/StartPageView.vue";
import EditProfileView from "./views/EditProfileView.vue";
import ProfileView from "./views/ProfileView.vue";
import AdminView from "./views/AdminPageView.vue";
import FerrariTeamView from "./views/FerrariTeamView.vue";
import DriverView from "./views/DriverView.vue";
import DriverTeamListView from "./views/DriverTeamListView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "StartPage",
    component: StartPageView,
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
    path: "/teams/ferrari",
    name: "FerrariTeamPage",
    component: FerrariTeamView,
  },
  {
    path: "/admin",
    name: "Admin",
    component: AdminView,
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
    path: "/drivers",
    name: "drivers",
    component: DriverView,
  },
  {
    path: "/driverteamlist",
    name: "driversandteams",
    component: DriverTeamListView,
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
