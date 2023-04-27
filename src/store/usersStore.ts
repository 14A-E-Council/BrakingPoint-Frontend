import $axios from "./axios.instance";
import { defineStore } from "pinia";
import { Notify, Loading } from "quasar";

Notify.setDefaults({
  position: "bottom",
  textColor: "white",
  timeout: 3000,
  actions: [{ icon: "close", color: "white" }],
});

interface IAddress {
  _id: string;
  city: string;
  country: string;
  street: string;
}

interface IUser {
  _id?: string;
  email?: string;
  email_verified?: string;
  auto_login?: boolean;
  username?: string;
  password?: string;
  picture?: string;
  address?: null | IAddress;
}

interface IState {
  loggedUser: null | IUser;
}

export const useUsersStore = defineStore({
  id: "usersStore",
  state: (): IState => ({
    loggedUser: null,
  }),
  getters: {
    getLoggedUser(): null | IUser {
      return this.loggedUser;
    },
  },
  actions: {
    async loginRegisterWithGoogle(accessToken: string) {
      Loading.show();
      $axios
        .post("auth/google", { atoken: accessToken })
        .then((res) => {
          this.loggedUser = res.data;
          Loading.hide();
          Notify.create({
            message: `${res.data.username} with ${res.data.email} e-mail is logged in`,
            color: "positive",
          });
        })
        .catch(() => {
          this.loggedUser = null;
          Loading.hide();
          Notify.create({ message: "Error on Authentication", color: "negative" });
        });
    },
    async loginUser(params: IUser): Promise<void> {
      Loading.show();
      $axios
        .post("http://localhost:8000/api/auth/login", {
          email: params.email,
          password: params.password,
        })
        .then((res) => {
          this.loggedUser = res.data.data.user;
          localStorage.setItem("token", res.data.data.token);
          Loading.hide();
          Notify.create({
            message: `${res.data.data.user.username} with ${res.data.data.user.email} e-mail is logged in`,
            color: "positive",
          });
        })
        .catch(() => {
          this.loggedUser = null;
          Loading.hide();
          Notify.create({ message: "Error on Authentication", color: "negative" });
        });
    },
    async autoLogin(): Promise<void> {
      Loading.show();
      $axios
        .post("http://localhost:8000/api/auth/autologin")
        .then((res) => {
          if (res.status == 404) {
            this.loggedUser = null;
          } else {
            this.loggedUser = res.data;
          }
          Loading.hide();
        })
        .catch((error) => {
          this.loggedUser = null;
          Loading.hide();
          console.log(error.response.data.message);
          // Notify.create({
          //   message: `Auto login not aviable! ${error.response.data.message}`,
          //   color: "negative",
          // });
        });
    },
    async logOut(withNotify = true): Promise<void> {
      const headers = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      };
      Loading.show();
      $axios
        .post("http://localhost:8000/api/auth/logout", null, { headers })
        .then(() => {
          this.loggedUser = null;
          Loading.hide();
          if (withNotify) {
            Notify.create({
              message: "Successful logout",
              color: "positive",
            });
          }
        })
        .catch(() => {
          this.loggedUser = null;
          Loading.hide();
          Notify.create({ message: "Error on log out", color: "negative" });
        });
    },
    async closeApp(): Promise<void> {
      $axios.post("auth/closeapp").then(() => {
        this.loggedUser = null;
      });
    },
  },
  persist: {
    enabled: true,
  },
});