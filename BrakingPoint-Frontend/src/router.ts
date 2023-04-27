import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import AccountView from "./views/AccountView.vue";
import QTableView from "./views/QTableView.vue";
import FrontPageView from "./views/FrontPageView.vue";
import EditProfileView from "./views/EditProfileView.vue";
import ProfileView from "./views/ProfileView.vue";
import AdminView from "./views/AdminPageView.vue";
import FerrariTeamView from "./views/infoViews/FerrariTeamView.vue";
import DriverView from "./views/infoViews/DriverView.vue";
import DriverTeamListView from "./views/infoViews/DriverTeamListView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "FrontPage",
    component: FrontPageView,
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
