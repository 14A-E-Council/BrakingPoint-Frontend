<!-- eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain -->
<!-- eslint-disable @typescript-eslint/no-non-null-assertion -->
<script setup lang="ts">
  import { ref, reactive, computed } from "vue";
  import { useQuasar } from "quasar";
  import { useUsersStore } from "..//store/usersStore";
  import router from "src/router";

  const usersStore = useUsersStore();
  const anyLoggedUser = computed(() => (usersStore.getLoggedUser ? true : false));

  const loggedUserHasVerifiedEmail = computed(() =>
    usersStore.getLoggedUser?.email_verified_at ? true : false
  );

  const $q = useQuasar();

  var filesImages = ref(null);

  function onRejected(rejectedEntries: any) {
    $q.notify({
      type: "negative",
      message: `${rejectedEntries.length} fájl formátuma nem megfelelő!`,
    });
  }

  var password = ref("");
  var isPwd = ref(true);

  var confirmPassword = ref("");
  var isPwdAgain = ref(true);

  var model = ref(null);

  const options = [
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
  ];

  interface IReactiveData {
    username: string;
    email: string;
    last_name: string;
    first_name: string;
    // password: string;
    // confirmPassword: string;
  }

  const informations = reactive<IReactiveData>({
    username: usersStore.loggedUser?.username!,
    email: usersStore.loggedUser?.email!,
    last_name: usersStore.loggedUser?.last_name!,
    first_name: usersStore.loggedUser?.first_name!,
    // password: "",
    // confirmPassword: "",
  });

  async function save() {
    await usersStore.getSanctumCookie();
    await usersStore.editProfile({
      username: informations.username,
      email: informations.email,
      // password: informations.password,
      last_name: informations.last_name,
      first_name: informations.first_name,
    });
    //router.push({ name: "Profile" });
    console.log(usersStore.loggedUser);
  }

  var emailNotVerified = ref(false);
  if (loggedUserHasVerifiedEmail.value == false && anyLoggedUser.value != false) {
    emailNotVerified.value = true;
  } else {
    emailNotVerified.value = false;
  }

  var picture_frame = usersStore.getLoggedUser
    ? "../src/assets/" + usersStore.getLoggedUser.picture_frame
    : "../src/assets/bronze.png";
</script>

<template>
  <q-layout>
    <div v-if="emailNotVerified" class="q-pa-md q-gutter-sm q-pt-xl row justify-center">
      <q-banner class="bg-red text-white" style="max-width: 50em">
        Kérjük erősítse meg email címét! ({{ usersStore.loggedUser?.email }})
        <template #action>
          <q-btn color="white" flat label="Megerősítő email újraküldése" />
        </template>
      </q-banner>
    </div>
    <div class="q-pa-md">
      <div class="row">
        <div class="col-md-4 col-12">
          <div class="column items-center">
            <h3 style="color: white">Profil szerkesztése</h3>
            <q-avatar class="q-mt-xl" style="height: 6em; width: 6em">
              <q-img alt="PictureFrame" :src="picture_frame">
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
            v-model="informations.username"
            bg-color="white"
            color="grey-6"
            filled
            :label="usersStore.loggedUser?.username"
          />
          <p class="q-mt-lg" style="color: white">Vezetéknév</p>
          <q-input
            v-model="informations.last_name"
            bg-color="white"
            color="grey-6"
            filled
            :label="usersStore.loggedUser?.last_name"
          />
          <p class="q-mt-lg" style="color: white">Keresztnév</p>
          <q-input
            v-model="informations.first_name"
            bg-color="white"
            color="grey-6"
            filled
            :label="usersStore.loggedUser?.first_name"
          />
          <p class="q-mt-lg" style="color: white">E-mail</p>
          <q-input
            v-model="informations.email"
            bg-color="white"
            color="grey-6"
            filled
            :label="usersStore.loggedUser?.email"
            type="email"
          />

          <!--TODO Ezt majd kötelezővé kell csinálni-->
          <p class="q-mt-lg" style="color: white">Jelszó</p>
          <q-input
            v-model="password"
            bg-color="white"
            color="grey-6"
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
            v-model="confirmPassword"
            bg-color="white"
            color="grey-6"
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
            <q-btn
              class="vertical-middle q-mt-xl"
              color="black"
              label="Mentés"
              rounded
              @click="save"
            />
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

<style lang="scss"></style>
