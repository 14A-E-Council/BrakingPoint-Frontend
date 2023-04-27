/* eslint-disable @typescript-eslint/no-non-null-assertion */
import server from "./axios.instance";
import { defineStore } from "pinia";
import { Loading } from "quasar";
import router from "src/router";

interface IUser {
  userID?: string;
  email?: string;
  username?: string;
  password?: string;
  confirmPassword?: string;
  last_name?: string;
  first_name?: string;
  balance?: number;
  preferred_category?: string;
  level?: number;
  picture_frame?: string;
  rank?: number;
  profile_picture?: string;
  xp?: number;
  admin?: number;
  email_verified_at?: Date;
}

interface IState {
  loggedUser: null | IUser;
}

export const useUsersStore = defineStore("user", {
  state: (): IState => ({
    loggedUser: null,
  }),
  getters: {
    getLoggedUser(): null | IUser {
      console.log(this.loggedUser);
      return this.loggedUser;
    },
  },
  actions: {
    async getSanctumCookie() {
      try {
        await server.get("sanctum/csrf-cookie");
      } catch (error) {
        if (error) throw error;
      }
    },

    async login(params: IUser): Promise<void> {
      {
        Loading.show();

        await server.post("login", {
          email: params.email,
          password: params.password,
        });
        await server.get("api/user").then((res) => {
          this.loggedUser = res.data;
          router.push({ name: "StartPage" });
          Loading.hide();
        });
      }
    },

    async logOut(): Promise<void> {
      Loading.show();
      await server
        .post("logout")
        .then(() => {
          this.loggedUser = null;
          Loading.hide();
        })
        .catch(() => {
          this.loggedUser = null;
          Loading.hide();
        });
    },

    async register(params: IUser) {
      await server
        .post("register", {
          username: params.username,
          email: params.email,
          password: params.password,
          password_confirmation: params.confirmPassword,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error.response);
        });
      await server
        .get("api/user")
        .then((res) => {
          this.loggedUser = res.data;
          Loading.hide();
          router.push({ name: "StartPage" });
        })
        .catch(() => {
          this.loggedUser = null;
          Loading.hide();
        });
    },

    // async checkIfVerifiedEmail(params: emailVerified) {
    //   await server.get("api/user").then(() => {
    //     if (this.loggedUser?.email_verified_at != null) {
    //       params = true;
    //     } else {
    //       params = false;
    //     }
    //   });
    // },
    async editProfile(params: IUser) {
      await server.put("api/editprofile/" + this.loggedUser?.userID, {
        // TODO JELSZÓ
        username: params.username,
        email: params.email,
        last_name: params.last_name,
        first_name: params.first_name,
        profile_picture: params.profile_picture,
      });
    },
  },
});
