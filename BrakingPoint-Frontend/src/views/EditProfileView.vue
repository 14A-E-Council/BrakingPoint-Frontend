<template lang="">
  <q-layout>
    <div class="q-pa-md">
      <div class="row">
        <div class="col-md-4 col-12">
          <div class="column items-center">
            <h3 style="color: white">Profil szerkesztése</h3>
            <q-avatar class="q-mt-xl" style="height: 300px; width: 300px">
              <q-img alt="PictureFrame" src="..//assets/tesztKeret.png">
                <q-avatar class="q-mt-lg q-ml-lg" style="height: 220px; width: 220px">
                  <q-img alt="ProfilePicture" src="..//assets/default.png" />
                </q-avatar>
              </q-img>
            </q-avatar>
            <q-btn class="q-mt-xl" color="black" label="Profilkép cseréje" rounded />
          </div>
        </div>

        <div class="col-md-4 col-12">
          <p style="color: white">Felhasználónév</p>
          <q-input
            v-model="text"
            bg-color="white"
            color="grey-6"
            :dense="dense"
            filled
            label="Felhasználónév"
          />
          <p class="q-mt-lg" style="color: white">Vezetéknév</p>
          <q-input
            v-model="text"
            bg-color="white"
            color="grey-6"
            :dense="dense"
            filled
            label="Vezetéknév"
          />
          <p class="q-mt-lg" style="color: white">Keresztnév</p>
          <q-input
            v-model="text"
            bg-color="white"
            color="grey-6"
            :dense="dense"
            filled
            label="Keresztnév"
          />
          <p class="q-mt-lg" style="color: white">E-mail</p>
          <q-input
            v-model="email"
            bg-color="white"
            color="grey-6"
            :dense="dense"
            filled
            label="E-mail"
            type="email"
          />

          <!--Ezt majd kötelezővé kell csinálni-->
          <p class="q-mt-lg" style="color: white">Jelszó</p>
          <q-input
            v-model="password"
            bg-color="white"
            color="grey-6"
            :dense="dense"
            filled
            label="Jelszó"
            :type="isPwd ? 'password' : 'text'"
          >
            <template #append>
              <q-icon
                class="cursor-pointer"
                :name="isPwd ? 'visibility_off' : 'visibility'"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
          <p class="q-mt-lg" style="color: white">Jelszó megerősitése</p>
          <q-input
            v-model="passwordAgain"
            bg-color="white"
            color="grey-6"
            :dense="dense"
            filled
            label="Jelszó megerősítése"
            :type="isPwdAgain ? 'password' : 'text'"
          >
            <template #append>
              <q-icon
                class="cursor-pointer"
                :name="isPwdAgain ? 'visibility_off' : 'visibility'"
                @click="isPwdAgain = !isPwdAgain"
              />
            </template>
          </q-input>
          <div class="column items-center">
            <q-btn class="vertical-middle q-mt-xl" color="black" label="Mentés" rounded />
          </div>
        </div>
        <div class="col-md-4 col-12 self-end"></div>
      </div>
    </div>
  </q-layout>
</template>

<script lang="ts">
  import { ref } from "vue";

  export default {
    setup() {
      return {
        password: ref(""),
        isPwd: ref(true),

        passwordAgain: ref(""),
        isPwdAgain: ref(true),

        email: ref(""),
      };
    },
  };
</script>
<style lang="scss"></style>
