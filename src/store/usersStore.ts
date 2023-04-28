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
  colour_palette?: string;
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
      server.get("api/user").then((res) => {
        this.loggedUser = res.data;
        localStorage.setItem("id", this.loggedUser.userID);
      });
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
        await server
          .post("login", {
            email: params.email,
            password: params.password,
          })
          .then((res) => {
            this.loggedUser = res.data;
            router.push({ name: "FrontPage" });
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
          this.loggedUser = res.data;
          router.push({ name: "FrontPage" });
        })
        .catch((error) => {
          console.log(error.response);
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
      await server
        .put("api/editprofile/" + this.loggedUser?.userID, {
          // TODO JELSZÓ
          username: params.username,
          email: params.email,
          last_name: params.last_name,
          first_name: params.first_name,
          preferred_category: params.preferred_category,
          profile_picture: params.profile_picture,
          colour_palette: params.colour_palette,
        })
        .then((res) => {
          console.log(res);
          router.push({ name: "Profile" });
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
  },
});
