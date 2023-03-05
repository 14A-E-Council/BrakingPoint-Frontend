<template lang="">
  <q-layout>
    <div class="q-pa-md">
      <div class="row">
        <div class="col-md-4 col-12">
          <div class="column items-center">
            <h3 style="color: white">Profil szerkesztése</h3>
            <q-avatar class="q-mt-xl" style="height: 6em; width: 6em">
              <q-img alt="PictureFrame" src="..//assets/bronze.png">
                <q-avatar class="q-mt-lg q-ml-lg" style="height: 4.5em; width: 4.5em">
                  <q-img alt="ProfilePicture" src="..//assets/default.png" />
                </q-avatar>
              </q-img>
            </q-avatar>

            <!-- https://quasar.dev/vue-components/file-picker -->
            <q-file
              v-model="filesImages"
              accept=".jpg, image/*"
              bg-color="dark"
              bottom-slots
              class="q-pa-md"
              color="dark"
              counter
              dark
              label="Profilkép cseréje"
              label-color="white"
              outlined
              rounded
              style="width: 20em; max-width: 20em"
              @rejected="onRejected"
            >
              <template #prepend>
                <q-icon name="cloud_upload" @click.stop.prevent />
              </template>
              <template #append>
                <q-icon
                  class="cursor-pointer"
                  name="close"
                  @click.stop.prevent="filesImages = null"
                />
              </template>
              <template #hint>Csak kép formátum elfogadott!</template>
            </q-file>
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

          <!--TODO Ezt majd kötelezővé kell csinálni-->
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
        <!-- TODO összekötni a csapatokkal és aszerint az oldal színét változtatni -->
        <div class="col-md-4 col-12 q-pl-xl">
          <p style="color: white">Kedvenc csapat kiválasztása</p>
          <div class="row">
            <div class="col-md-8">
              <q-select
                v-model="model"
                bg-color="white"
                color="dark"
                filled
                label="Csapatok"
                :options="options"
                outlined
                style="max-width: 22em"
              />
            </div>
            <div class="col-md-4">
              <q-icon class="q-ml-md" color="blue" name="info" size="4em">
                <q-tooltip>
                  Kedvenc csapat kiválasztásával az oldal színe is megváltozik a választott csapat
                  színeire
                </q-tooltip>
              </q-icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-layout>
</template>

<script lang="ts">
  import { ref } from "vue";
  import { useQuasar } from "quasar";

  export default {
    setup() {
      const $q = useQuasar();
      return {
        filesImages: ref(null),

        onRejected(rejectedEntries: any) {
          $q.notify({
            type: "negative",
            message: `${rejectedEntries.length} fájl formátuma nem megfelelő!`,
          });
        },

        password: ref(""),
        isPwd: ref(true),

        passwordAgain: ref(""),
        isPwdAgain: ref(true),

        email: ref(""),

        model: ref(null),
        options: [
          "RED BULL RACING RBPT",
          "FERRARI",
          "MERCEDES",
          "ALPINE RENAULT",
          "MCLAREN MERCEDES",
          "ALFA ROMEO FERRARI",
          "ASTON MARTIN ARAMCO MERCEDES",
          "HAAS FERRARI",
          "ALPHATAURI RBPT",
          "WILLIAMS MERCEDES",
        ],
      };
    },
  };
</script>
<style lang="scss"></style>
