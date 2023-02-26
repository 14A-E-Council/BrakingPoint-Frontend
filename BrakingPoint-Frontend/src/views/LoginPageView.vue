<template>
  <q-layout>
    <div class="q-pa-md">
      <div class="row">
        <div class="col-md-8 col-12">
          <div v-if="login" class="column items-center animate__animated animate__fadeInDown">
            <!-- Login -->
            <h3 style="color: white">Belépés</h3>
            <div class="q-gutter-sm">
              <q-btn class="q-mb-md" color="red" label="Belépés Google fiókkal" />
              <q-btn class="q-mb-md" color="blue" label="Belépés Facebookkal" />
            </div>
            <p style="color: white"><sub>vagy</sub></p>
            <p style="color: white">Felhasználónév</p>
            <q-input
              v-model="text"
              bg-color="white"
              color="grey-6"
              label="Felhasználónév"
              outlined
              rounded
              style="width: 500px; max-width: 500px"
            />
            <p class="q-mt-md" style="color: white">Jelszó</p>
            <q-input
              v-model="password"
              bg-color="white"
              color="grey-6"
              label="Jelszó"
              outlined
              rounded
              style="width: 500px; max-width: 500px"
              text-dark
              :type="isPwd ? 'password' : 'text'"
            >
              <template #append>
                <q-icon
                  class="cursor-pointer"
                  :name="isPwdLogin ? 'visibility_off' : 'visibility'"
                  @click="isPwdLogin = !isPwdLogin"
                />
              </template>
            </q-input>
            <q-btn class="q-mt-md" flat label="Elfelejtette jelszavát?" style="color: white" />
            <div>
              <q-checkbox
                v-model="left"
                color="dark"
                keep-color
                label="Maradjak belépve"
                left-label
                style="color: white"
              />
            </div>
            <div class="column items-center">
              <q-btn class="vertical-middle q-mt-xl" color="black" label="Belépés" rounded />
            </div>
          </div>

          <!-- Registration -->
          <div
            v-if="registration"
            class="column items-center animate__animated animate__fadeInDown"
          >
            <h3 style="color: white">Regisztráció</h3>
            <p style="color: white">Felhasználónév</p>
            <q-input
              v-model="text"
              bg-color="white"
              color="grey-6"
              label="Felhasználónév"
              outlined
              rounded
              style="width: 500px; max-width: 500px"
            />
            <p class="q-mt-md" style="color: white">E-mail</p>
            <q-input
              v-model="email"
              bg-color="white"
              color="grey-6"
              label="E-mail"
              outlined
              rounded
              style="width: 500px; max-width: 500px"
              type="email"
            />

            <!--TODO Ezt majd kötelezővé kell csinálni-->
            <p class="q-mt-md" style="color: white">Jelszó</p>
            <q-input
              v-model="password"
              bg-color="white"
              color="grey-6"
              label="Jelszó"
              outlined
              rounded
              style="width: 500px; max-width: 500px"
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
            <p class="q-mt-md" style="color: white">Jelszó megerősitése</p>
            <q-input
              v-model="passwordAgain"
              bg-color="white"
              color="grey-6"
              label="Jelszó megerősítése"
              outlined
              rounded
              style="width: 500px; max-width: 500px"
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
            <div>
              <q-checkbox
                v-model="left"
                color="dark"
                keep-color
                label="Elfogadom a felhasználási feltételeket"
                left-label
                style="color: white"
              />
            </div>
            <div class="column items-center">
              <q-btn class="vertical-middle q-mt-xl" color="black" label="Regisztálás" rounded />
            </div>
          </div>
        </div>

        <!-- Login -->
        <div
          v-if="login"
          class="col-md-4 col-12 column items-center q-pa-md animate__animated animate__fadeInDown"
          rounded
          style="background-color: #1b1b1b; border-radius: 15%; height: 50em"
        >
          <q-parallax :height="1500">
            <video
              autoplay
              height="1500"
              loop
              muted
              no-controls
              poster="http://thumb.multicastmedia.com/thumbs/aid/w/h/t1351705158/1571585.jpg"
              src="..//assets/f1opening.mp4"
              style="opacity: 0.5"
              width="1200"
            />
            <div class="column items-center absolute-center">
              <h4 style="color: white; width: 330px">Még nem regisztrált?</h4>
              <p style="color: white">Hozzon létre fiókot, hogy Ön is csatlakozzon!</p>
              <q-btn
                class="vertical-middle q-mt-xl"
                color="black"
                label="Regisztráció"
                rounded
                @click="(registration = true), (login = false)"
              />
            </div>
          </q-parallax>
        </div>
        <!-- Registration -->
        <div
          v-if="registration"
          class="col-md-4 col-12 column items-center q-pa-md animate__animated animate__fadeInDown"
          rounded
          style="background-color: #1b1b1b; border-radius: 15%; height: 50em"
        >
          <q-parallax :height="1500">
            <video
              autoplay
              height="1500"
              loop
              muted
              no-controls
              poster="http://thumb.multicastmedia.com/thumbs/aid/w/h/t1351705158/1571585.jpg"
              src="..//assets/f1opening.mp4"
              style="opacity: 0.5"
              width="1200"
            />
            <div class="column items-center absolute-center">
              <h4 style="color: white">Már van fiókja?</h4>
              <p style="color: white">Kérjük jelentkezzen be a folytatáshoz!</p>
              <q-btn
                class="vertical-middle q-mt-xl"
                color="black"
                label="Belépés"
                rounded
                @click="(login = true), (registration = false)"
              />
            </div>
          </q-parallax>
        </div>
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
        left: ref(true),

        passwordAgain: ref(""),
        isPwdAgain: ref(true),

        passwordLogin: ref(""),
        isPwdLogin: ref(true),

        email: ref(""),
      };
    },
    data() {
      return {
        login: true,
        registration: false,

        usersButton: true,
        betsButton: false,
      };
    },
  };
</script>
<style lang="scss"></style>
