<template lang="">
  <q-layout>
    <div class="q-pa-md">
      <div class="row">
        <q-linear-progress class="q-mt-sm" color="green" rounded size="20px" :value="progress">
          <div class="absolute-full flex flex-center">
            <q-badge color="green" :label="progressLabel" text-color="white" />
          </div>
        </q-linear-progress>
        <div>
          <q-avatar class="q-mt-xl" style="height: 150px; width: 150px">
            <q-img alt="PictureFrame" src="..//assets/tesztKeret.png">
              <q-avatar class="q-mt-sm q-ml-sm" style="height: 100px; width: 100px">
                <q-img alt="ProfilePicture" src="..//assets/default.png" />
              </q-avatar>
            </q-img>
          </q-avatar>
        </div>
        <h2 class="q-ml-xl q-pt-xl" style="color: white">XY Profilja</h2>
        <!--TODO A ranglistán lévő pozíciója-->
        <h2 class="q-ml-xl q-mr-xl q-pt-xl" style="color: white">500</h2>

        <q-btn
          class="on-right q-ml-xl q-mt-xl"
          color="black"
          label="Profil szerkesztése"
          rounded
          style="height: 80px; width: 150px"
          :to="{ name: 'EditProfilePage' }"
        />
      </div>
      <div class="row">
        <div class="col-md-4 col-12">
          <h4 style="color: white">Statisztikák</h4>
          <q-space />
          <p style="font-size: 140%; color: white">Kedvenc csapat: Mercedes</p>
          <p style="font-size: 140%; color: white">Nyert fogadások: 15</p>
          <p style="font-size: 140%; color: white">Vesztes fogadások: 10</p>
          <p style="font-size: 140%; color: white">GY/V arány: 60%</p>
        </div>

        <div class="col-md-4 col-12">
          <h4 style="color: white">Aktív fogadás(ok)</h4>
          <q-space />
          <p style="font-size: 140%; color: white">
            Abu Dhabi győztese - Max Verstappen
            <br />
            <sub>Szorzó: 1.10x - Tét: 5000 - Nyert</sub>
          </p>
          <p style="font-size: 140%; color: white">
            Abu Dhabi győztese - Max Verstappen
            <br />
            <sub>Szorzó: 1.10x - Tét: 5000 - Nyert</sub>
          </p>
          <p style="font-size: 140%; color: white">
            Abu Dhabi győztese - Max Verstappen
            <br />
            <sub>Szorzó: 1.10x - Tét: 5000 - Nyert</sub>
          </p>
        </div>
        <div class="col-md-4 col-12 self-end">
          <h4 style="color: white">Előző fogadás(ok)</h4>
          <q-space />
          <p style="font-size: 140%; color: white">
            Abu Dhabi győztese - Max Verstappen
            <br />
            <sub>Szorzó: 1.10x - Tét: 5000 - Nyert</sub>
          </p>
          <p style="font-size: 140%; color: white">
            Abu Dhabi győztese - Max Verstappen
            <br />
            <sub>Szorzó: 1.10x - Tét: 5000 - Nyert</sub>
          </p>
          <p style="font-size: 140%; color: white">
            Abu Dhabi győztese - Max Verstappen
            <br />
            <sub>Szorzó: 1.10x - Tét: 5000 - Nyert</sub>
          </p>
        </div>
      </div>
    </div>
  </q-layout>
</template>

<script lang="ts">
  import { ref, computed } from "vue";

  export default {
    setup() {
      //TODO Ezt kell majd összekötni a xp-vel
      const progress = ref(0.6);
      return {
        password: ref(""),
        isPwd: ref(true),

        passwordAgain: ref(""),
        isPwdAgain: ref(true),

        email: ref(""),

        progress,
        progressLabel: computed(() => (progress.value * 100).toFixed(2) + "%"),
      };
    },
  };
</script>
<style lang="scss"></style>
