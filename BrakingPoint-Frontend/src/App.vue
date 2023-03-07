<script setup lang="ts">
  import { ref } from "vue";
  import router from "src/router";
  import { useUsersStore } from "./store/usersStore";

  const leftDrawer = ref<boolean>(true);
  const usersStore = useUsersStore();

  const menuItems = ref([
    {
      icon: "mdi-home",
      text: "Start",
      name: "startPage",
      route: "/",
      disabled: false,
      separator: false,
    },
    {
      icon: "mdi-soccer",
      text: "Profile",
      name: "profile",
      route: "/profile",
      disabled: false,
      separator: false,
    },
    {
      icon: "mdi-grid",
      text: "Edit Profile",
      name: "editProfile",
      route: "/editprofile",
      disabled: false,
      separator: false,
    },
    {
      icon: "mdi-account",
      text: "account",
      name: "account",
      route: "/account",
      disabled: false,
      separator: false,
    },
    {
      icon: "mdi-information",
      text: "Admin",
      name: "admin",
      route: "/admin",
      disabled: false,
      separator: false,
    },
    {
      icon: "😁",
      text: "Teams",
      name: "teams",
      route: "/teams/ferrari",
      disabled: false,
      separator: false,
    },
    {
      icon: "👩‍🦱",
      text: "Drivers",
      name: "drivers",
      route: "/drivers",
    },
    {
      icon: "😒",
      text: "Drivers and Teams List",
      name: "driversandteamslist",
      route: "/driverteamlist",
    },
  ]);
</script>
<!-- https://reactgo.com/vue-background-image/   kép változtatása változóból-->
<template>
  <div id="bg-color" class="q-pa-md">
    <div id="bg" class="q-pa-md">
      <q-layout view="hHh Lpr fFf">
        <q-header class="text-white text-center" elevated style="background: #1b1b1b">
          <q-toolbar>
            <q-btn dense flat icon="mdi-menu" round size="15px" @click="leftDrawer = !leftDrawer" />

            <!--Hibák kijavítása-->
            <!--Kis menü-->
            <q-input
              v-model="text"
              class="q-ml-md"
              dark
              dense
              input-class="text-right"
              rounded
              standout
            >
              <template #prepend>
                <q-icon name="search" />
              </template>
              <template #append>
                <q-icon class="cursor-pointer" name="close" @click="text = ''" />
              </template>
            </q-input>
            <q-toolbar-title
              id="title"
              style="cursor: pointer; align-items: center"
              @click="router.push({ path: '/' })"
            >
              <q-img
                class="position: relative; text-align: center; q-mr-xl"
                style="height: 80px; max-width: 350px"
              >
                <img alt="BrakingPointLogo" src="./assets/BrakingPointLogo.png" />
              </q-img>
            </q-toolbar-title>

            <!-- Keret megoldása -->
            <q-btn no-caps size="15px">
              <q-avatar>
                <q-img alt="PictureFrame" src="./assets/default.png">
                  <q-img
                    alt="ProfilePicture"
                    src="./assets/tesztKeret.png"
                    style="height: 38px; width: 37px; position: relative; text-align: center"
                  />
                </q-img>
              </q-avatar>
              {{ usersStore.loggedUser ? usersStore.loggedUser?.name : "Bejelentkezés." }}
            </q-btn>
            <!--Dark mode megoldása-->
            <q-btn flat icon="mdi-theme-light-dark" size="15px" @click="$q.dark.toggle" />
          </q-toolbar>
        </q-header>

        <q-drawer
          v-model="leftDrawer"
          bordered
          :breakpoint="500"
          :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
          show-if-above
          :width="200"
        >
          <q-scroll-area class="fit">
            <!-- routes: -->
            <q-list>
              <template v-for="(menuItem, index) in menuItems" :key="index">
                <q-item clickable :disable="menuItem.disabled" :to="menuItem.route">
                  <q-item-section avatar>
                    <q-icon :name="menuItem.icon" />
                  </q-item-section>
                  <q-item-section>
                    {{ menuItem.text }}
                  </q-item-section>
                </q-item>
                <q-separator v-if="menuItem.separator" :key="'sep' + index" />
              </template>
              <q-separator />
            </q-list>
          </q-scroll-area>
        </q-drawer>

        <q-page-container id="container">
          <router-view v-slot="{ Component }">
            <transition name="fade">
              <component :is="Component" />
            </transition>
          </router-view>
        </q-page-container>
      </q-layout>
    </div>
  </div>
  <footer
    style="
      background: #1b1b1b;
      min-height: 12vh;
      text-align: center;
      width: 100%;
      margin-bottom: -10%;
    "
  >
    <q-img style="height: 80px; max-width: 350px">
      <img alt="BrakingPointLogo" src="./assets/BrakingPointLogoSmall.png" />
    </q-img>
    <p style="color: white">© 2023 BrakingPoint Minden jog fenntartva.</p>
  </footer>
</template>

<style lang="scss">
  div#bg-color {
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-image: linear-gradient(to bottom, #a71616, #6d0f0f);
    background-size: cover;
    background-attachment: scroll;
    height: 100%;
  }

  div#bg {
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  #title {
    font-size: 10px;
    @media (min-width: 400px) {
      font-size: calc(10px + 0.5vw);
    }
    @media (min-width: 800px) {
      font-size: calc(14px + 0.5vw);
    }
    @media (min-width: 1200px) {
      font-size: calc(18px + 0.5vw);
    }
  }
</style>
