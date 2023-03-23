<template lang="">
  <q-layout>
    <div class="q-pa-md">
      <div class="row">
        <div class="col-md-12 col-12">
          <div class="column">
            <div class="row justify-center">
              <h4 class style="color: white">Ranglista</h4>
            </div>
            <div class="row flex-center">
              <!-- TODO Ne menjenek egymásba az elemek -->
              <!-- Rank 1 -->
              <div class="gt-md col-md-3 col-12">
                <div
                  style="background-color: #d4af37; border-radius: 10%; height: 40em; width: 30em"
                >
                  <div class="column items-center">
                    <h3 style="color: white">Top 1</h3>
                    <q-avatar style="height: 3.6em; width: 3.6em; text-align: left">
                      <q-img alt="PictureFrame" src="..//assets/bronze.png">
                        <q-avatar style="height: 2.8em; width: 2.8em; position: relative">
                          <q-img alt="ProfilePicture" src="..//assets/default.png" />
                        </q-avatar>
                      </q-img>
                    </q-avatar>
                    <h4 style="color: white">Teszt Elek</h4>
                    <p style="color: white; font-size: 2em">1200</p>
                  </div>
                </div>
              </div>

              <div class="col-md-3 col-12">
                <div class="column">
                  <!-- If user's resolution lower than 1440x1920px  -->
                  <div class="lt-lg col-md-3 col-12 q-pb-sm">
                    <div
                      style="
                        background-color: #d4af37;
                        border-radius: 2.5em;
                        height: 15em;
                        width: 40em;
                      "
                    >
                      <div class="row q-pl-sm q-pt-md items-center">
                        <h3 style="color: white">1</h3>
                        <div class="q-pr-xl q-pl-xl">
                          <q-avatar style="height: 3.6em; width: 3.6em; text-align: left">
                            <q-img alt="PictureFrame" src="..//assets/bronze.png">
                              <q-avatar style="height: 2.8em; width: 2.8em; position: relative">
                                <q-img alt="ProfilePicture" src="..//assets/default.png" />
                              </q-avatar>
                            </q-img>
                          </q-avatar>
                        </div>
                        <h4 style="color: white; font-size: 2em">Teszt Elek</h4>
                        <p class="q-pl-xl q-pt-sm" style="color: white; font-size: 1.7em">1200</p>
                      </div>
                    </div>
                  </div>
                  <!-- Rank 2 -->
                  <div class="col-md-4 col-12">
                    <div
                      style="
                        background-color: #c0c0c0;
                        border-radius: 2.5em;
                        height: 12.5em;
                        width: 40em;
                      "
                    >
                      <div class="row q-pl-sm q-pt-md items-center">
                        <h4 style="color: white">2</h4>
                        <div class="q-pr-xl q-pl-xl">
                          <q-avatar style="height: 2.6em; width: 2.6em; text-align: left">
                            <q-img alt="PictureFrame" src="..//assets/bronze.png">
                              <q-avatar style="height: 1.95em; width: 1.95em; position: relative">
                                <q-img alt="ProfilePicture" src="..//assets/default.png" />
                              </q-avatar>
                            </q-img>
                          </q-avatar>
                        </div>
                        <h5 style="color: white">Teszt Elek</h5>
                        <h5 class="q-pl-xl" style="color: white; font-size: 1.5em">1200</h5>
                      </div>
                    </div>
                  </div>

                  <!-- Rank 3 -->
                  <div class="col-md-4 col-12 q-pt-sm">
                    <div
                      style="
                        background-color: #967444;
                        border-radius: 2.5em;
                        height: 12.5em;
                        width: 40em;
                      "
                    >
                      <div class="row q-pl-sm q-pt-md items-center">
                        <h4 style="color: white">3</h4>
                        <div class="q-pr-xl q-pl-xl">
                          <q-avatar style="height: 2.6em; width: 2.6em; text-align: left">
                            <q-img alt="PictureFrame" src="..//assets/bronze.png">
                              <q-avatar style="height: 1.95em; width: 1.95em; position: relative">
                                <q-img alt="ProfilePicture" src="..//assets/default.png" />
                              </q-avatar>
                            </q-img>
                          </q-avatar>
                        </div>
                        <h5 style="color: white">Teszt Elek</h5>
                        <h5 class="q-pl-xl" style="color: white; font-size: 1.5em">1200</h5>
                      </div>
                    </div>
                  </div>

                  <!-- User's rank -->
                  <div class="col-md-4 col-12 q-pt-sm">
                    <div
                      style="
                        background-color: #1b1b1b;
                        border-radius: 2.5em;
                        height: 12.5em;
                        width: 40em;
                      "
                    >
                      <div class="row q-pl-sm q-pt-md items-center">
                        <!-- TODO A felhasználó ranglistán elfoglalt helye -->
                        <h5 style="color: white">4</h5>
                        <div class="q-pr-xl q-pl-xl">
                          <q-avatar style="height: 1.6em; width: 1.6em; text-align: left">
                            <q-img alt="PictureFrame" src="..//assets/bronze.png">
                              <q-avatar style="height: 0.95em; width: 0.95em; position: relative">
                                <q-img alt="ProfilePicture" src="..//assets/default.png" />
                              </q-avatar>
                            </q-img>
                          </q-avatar>
                        </div>
                        <h6 style="color: white">Teszt Elek</h6>
                        <h6 class="q-pl-xl" style="color: white; font-size: 1.5em">1200</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-layout>
</template>

<!-- TODO megirni ha a képernyő kicsi  -->
<!-- https://quasar.dev/style/visibility#window-width-related -->

<script lang="ts">
  import { ref } from "vue";
  import "animate.css";
  //https://quasar.dev/vue-components/table
  // TODO Változók cseréje
  //Users
  const columns = [
    {
      name: "picture",
      label: "",
      field: "picture",
    },
    {
      name: "index",
      label: "#",
      field: "index",
    },
    {
      name: "username",
      required: true,
      label: "Felhasználónév",
      align: "center",
    },
    { name: "firstName", align: "center", label: "Keresztnév", field: "firstName" },
    { name: "lastName", align: "center", label: "Vezetéknév", field: "lastName" },
    { name: "level", align: "center", label: "Szint", field: "level" },
  ];

  // Teszt adatok
  const seed = [
    {
      username: "tesztelek12",
      firstName: "Elek",
      lastName: "Teszt",
      level: 52,
    },
    {
      username: "tesztelek13",
      firstName: "Pista",
      lastName: "Nagy",
      level: 120,
    },
    {
      username: "tesztelek14",
      firstName: "Pista",
      lastName: "Kis",
      level: 5,
    },
  ];

  // Később törölni, csak teszt idejére generál sorokat
  let rows: any = [];
  for (let i = 0; i < 100; i++) {
    rows = rows.concat(seed.slice(0).map((r) => ({ ...r })));
  }
  rows.forEach((row: any, index: any) => {
    row.index = index;
  });

  export default {
    setup() {
      return {
        columns,
        rows,

        card: ref(false),

        filter: ref(""),
        loading: ref(false),
        initialPagination: {
          sortBy: "level",
          descending: true,
          page: 1,
          rowsPerPage: 25,
          // rowsNumber: xx if getting data from a server
        },
      };
    },
  };
</script>
<style lang="scss">
  .cards {
    background-color: #1b1b1b;
    color: white;
  }
  .my-sticky-virtscroll-table {
    height: 26em;
  }
  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th {
    /* bg color is important for th; just specify one */
    background-color: #1b1b1b;
    color: white;
  }

  thead tr th {
    position: sticky;
    z-index: 1;
  }

  /* this will be the loading indicator */
  thead tr:last-child th {
    top: 3em;
  }
  /* height of all previous header rows */

  thead tr:first-child th {
    top: 0;
  }
</style>
