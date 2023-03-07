<template lang="">
  <q-layout>
    <div class="q-pa-md">
      <div class="row">
        <q-linear-progress class="q-mt-sm" color="green" rounded size="1.5em" :value="progress">
          <div class="absolute-full flex flex-center">
            <q-badge color="green" :label="progressLabel" text-color="white" />
          </div>
        </q-linear-progress>
      </div>
      <div class="row">
        <div class="col-md-3 col-12">
          <div class="column items-center">
            <div>
              <q-avatar class="q-mt-xl" style="height: 5em; width: 5em">
                <q-img alt="PictureFrame" src="..//assets/bronze.png">
                  <q-avatar class="q-mt-sm q-ml-sm" style="height: 3.9em; width: 3.9em">
                    <q-img alt="ProfilePicture" src="..//assets/default.png" />
                  </q-avatar>
                </q-img>
              </q-avatar>
            </div>
            <h2 class="q-pl-lg" style="color: white">XY Profilja</h2>
            <!--TODO A ranglistán lévő pozíciója-->
            <h3 style="color: white">500</h3>
          </div>
        </div>

        <div class="col-md-6 col-12 q-pt-xl">
          <div class="column items-center">
            <div class="wrapper q-pt-xl">
              <q-btn
                class="menuButton"
                icon="trending_up"
                label="Statisztikák"
                push
                @click="
                  (statistics = true), (leagues = false), (selfExclusion = false), (bets = false)
                "
              />
              <q-btn
                class="menuButton"
                icon="leaderboard"
                label="Ligák"
                push
                @click="
                  (statistics = false), (leagues = true), (selfExclusion = false), (bets = false)
                "
              />
              <q-btn
                class="menuButton"
                icon="block"
                label="Önkizárás"
                push
                @click="
                  (statistics = false), (leagues = false), (selfExclusion = true), (bets = false)
                "
              />
              <q-btn
                class="menuButton"
                icon="paid"
                label="Fogadások"
                push
                @click="
                  (statistics = false), (leagues = false), (selfExclusion = false), (bets = true)
                "
              />

              <!-- Statistics -->
              <!-- TODO kiegésziteni -->
              <div v-if="statistics" class="column items-center">
                <h4 style="color: white">Profil statisztikák</h4>
                <q-space />
                <p style="font-size: 140%; color: white">Kedvenc csapat: Mercedes</p>
                <p style="font-size: 140%; color: white">Nyert fogadások: 15</p>
                <p style="font-size: 140%; color: white">Vesztes fogadások: 10</p>
                <p style="font-size: 140%; color: white">GY/V arány: 60%</p>
              </div>

              <!-- Leagues -->
              <div v-if="leagues" class="column items-center">
                <h4 style="color: white">Ligák leírása</h4>
                <table>
                  <tr>
                    <td>
                      <q-img alt="PictureFrame" class="leaguePicture" src="..//assets/bronze.png" />
                    </td>
                    <td>Bronz liga</td>
                    <td>0-ás szinttől egészen XX szintig tart</td>
                  </tr>
                  <tr>
                    <td>
                      <q-img alt="PictureFrame" class="leaguePicture" src="..//assets/silver.png" />
                    </td>
                    <td>Ezüst liga</td>
                    <td>XX szinttől egészen XX szintig tart</td>
                  </tr>
                  <tr>
                    <td>
                      <q-img alt="PictureFrame" class="leaguePicture" src="..//assets/gold.png" />
                    </td>
                    <td>Arany liga</td>
                    <td>XX szinttől egészen XX szintig tart</td>
                  </tr>
                  <tr>
                    <td>
                      <q-img
                        alt="PictureFrame"
                        class="leaguePicture"
                        src="..//assets/diamond.png"
                      />
                    </td>
                    <td>Gyémánt liga</td>
                    <td>XX szinttől egészen XX szintig tart</td>
                  </tr>
                  <tr>
                    <td>
                      <q-img
                        alt="PictureFrame"
                        class="leaguePicture"
                        src="..//assets/amethyst.png"
                      />
                    </td>
                    <td>Ametiszt liga</td>
                    <td>XX szinttől egészen XX szintig tart</td>
                  </tr>
                </table>
              </div>

              <!-- Self exclusion -->
              <div v-if="selfExclusion" class="column items-center">
                <h4 style="color: white">Önkizárás</h4>
                <div class="q-pt-md">
                  <div class="row">
                    <div class="col-md-8">
                      <q-select
                        v-model="model"
                        bg-color="white"
                        color="dark"
                        filled
                        label="Válasszon időtartamot"
                        :options="options"
                        outlined
                        style="width: 17em"
                        @update:model-value="onValueChange()"
                      />
                    </div>
                    <div class="col-md-4">
                      <q-icon class="q-ml-xl" color="blue" name="info" size="4em">
                        <q-tooltip>
                          Ha bekapcsolja nem fog tudni fogadni. A többi funkció továbbra is elérhető
                          marad.
                          <br />
                          <b>
                            Ezidő alatt nem áll módunkban visszavonni a tiltást, akkor sem ha
                            meggondolja magát!
                          </b>
                        </q-tooltip>
                      </q-icon>
                    </div>
                  </div>
                </div>
                <q-btn
                  v-if="selfExclusionSelected"
                  class="on-right q-mt-xl"
                  color="black"
                  label="Önkizárás indítása"
                  style="height: 5em; width: 10em"
                  @click="alert = true"
                />

                <q-dialog v-model="alert">
                  <q-card>
                    <q-card-section>
                      <div class="text-h6">Figyelmeztetés</div>
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                      A választott ideig nem fog tudni fogadni, ezt nem áll módunkban visszavonni.
                      Biztosan szeretné?
                    </q-card-section>

                    <q-card-actions align="right">
                      <q-btn v-close-popup color="red" flat label="Mégsem" />
                      <q-btn v-close-popup color="green" flat label="OK" />
                    </q-card-actions>
                  </q-card>
                </q-dialog>
              </div>

              <!-- Bets -->
              <!--TODO Foreach-el megoldani -->
              <div v-if="bets" class="column items-center">
                <h4 style="color: white">Fogadások</h4>
                <div class="row">
                  <div class="col-md-6 q-pr-lg">
                    <h4 style="color: white">Aktív fogadás(ok)</h4>
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
                  <div class="col-md-6 q-pl-lg">
                    <h4 style="color: white">Előző fogadás(ok)</h4>
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
            </div>
          </div>
        </div>
        <div class="col-md-3 col-12">
          <div class="column items-center">
            <q-btn
              class="q-mt-xl"
              color="black"
              label="Profil szerkesztése"
              rounded
              style="height: 5em; width: 20em"
              :to="{ name: 'EditProfilePage' }"
            />
          </div>
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

        model: ref(null),
        options: ["1 nap", "1 hét", "1 hónap"],
        alert: ref(false),
      };
    },
    data() {
      return {
        statistics: true,
        leagues: false,
        selfExclusion: false,
        bets: false,

        selfExclusionSelected: false,
      };
    },
    methods: {
      onValueChange() {
        this.selfExclusionSelected = true;
      },
    },
  };
</script>
<style lang="scss">
  .menuButton {
    margin-left: 1em;
    background-color: black;
    color: white;
  }

  .leaguePicture {
    height: 7em;
    width: 7em;
  }

  table,
  td {
    border-collapse: collapse;
    color: white;
    width: 40em;
  }
</style>
