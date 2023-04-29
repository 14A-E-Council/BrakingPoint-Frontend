<!-- eslint-disable @typescript-eslint/no-non-null-assertion -->
<script setup lang="ts">
  import "animate.css";
  import { useUsersStore } from "..//store/usersStore";
  import { useAllUserStore } from "..//store/allUserStore";

  const usersStore = useUsersStore();
  const allUserStore = useAllUserStore();

  var picture_frame = usersStore.getLoggedUser
    ? "../src/assets/" + usersStore.getLoggedUser.picture_frame
    : "../src/assets/bronze.png";

  var bgColor1 = usersStore.getLoggedUser?.colour_palette?.slice(0, 7);
  var bgColor2 = usersStore.getLoggedUser?.colour_palette?.slice(7, 14);
  var logo = usersStore.getLoggedUser?.preferred_category;

  var bgColor = "linear-gradient(to bottom, " + bgColor1 + ", " + bgColor2 + ")";
  console.log(bgColor);
  // var picture_frameFirst = "../src/assets/bronze.png";

  // var picture_frameSecond = "../src/assets/bronze.png";

  // var picture_frameThird = "../src/assets/bronze.png";

  // var nameFirst = "Teszt";
  // var nameSecond = "Teszt";
  // var nameThird = "Teszt";

  // var levelFirst = 12;
  // var levelSecond = 12;
  // var levelThird = 12;
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  if (allUserStore.getAllUser != null) {
    var users = allUserStore.getAllUser;

    console.log(users);

    // picture_frameFirst = users
    //   ? "../src/assets/" + users.picture_frame
    //   : "../src/assets/bronze.png";

    // picture_frameSecond = users[1]
    //   ? "../src/assets/" + users[1].picture_frame
    //   : "../src/assets/bronze.png";

    // picture_frameThird = users[2]
    //   ? "../src/assets/" + users[2].picture_frame
    //   : "../src/assets/bronze.png";

    // nameFirst = users ? users[0].username! : "Teszt";
    // nameSecond = users ? users[1].username! : "Teszt";
    // nameThird = users ? users[2].username! : "Teszt";

    // levelFirst = users ? users[0].level! : 12;
    // levelSecond = users ? users[1].level! : 12;
    // levelThird = users ? users[2].level! : 12;
  } else {
    console.log("Még nem!");
  }

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  // var sortedUsers = users.sort((a, b) => a.level! - b.level!);
</script>

<template>
  <q-layout id="bg-color" :style="{ backgroundImage: bgColor }">
    <div id="bg-img" class="q-pa-md" :style="{ backgroundImage: logo }">
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
                <div style="background-color: #d4af37; border-radius: 10%; height: 40em; width: 30em">
                  <div class="column items-center">
                    <h3 style="color: white">Top 1</h3>
                    <q-avatar style="height: 3.6em; width: 3.6em; text-align: left">
                      <q-img alt="PictureFrame" src="..//assets/amethyst.png">
                        <q-avatar style="height: 2.8em; width: 2.8em; position: relative">
                          <q-img alt="ProfilePicture" src="..//assets/2560px-Mercedes_AMG_Petronas_F1_Logo.svg.png" />
                        </q-avatar>
                      </q-img>
                    </q-avatar>
                    <h4 style="color: white">Levente</h4>
                    <p style="color: white; font-size: 2em">3512</p>
                  </div>
                </div>
              </div>

              <div class="col-md-3 col-12">
                <div class="column">
                  <!-- If user's resolution lower than 1440x1920px  -->
                  <div class="lt-lg col-md-3 col-12 q-pb-sm">
                    <div style="background-color: #d4af37; border-radius: 2.5em; height: 15em; width: 40em">
                      <div class="row q-pl-sm q-pt-md items-center">
                        <h3 style="color: white">1</h3>
                        <div class="q-pr-xl q-pl-xl">
                          <q-avatar style="height: 3.6em; width: 3.6em; text-align: left">
                            <q-img alt="PictureFrame" src="..//assets/amethyst.png">
                              <q-avatar style="height: 2.8em; width: 2.8em; position: relative">
                                <q-img alt="ProfilePicture" src="..//assets/default.png" />
                              </q-avatar>
                            </q-img>
                          </q-avatar>
                        </div>
                        <h4 style="color: white; font-size: 2em">Levente</h4>
                        <p class="q-pl-xl q-pt-sm" style="color: white; font-size: 1.7em">3512</p>
                      </div>
                    </div>
                  </div>
                  <!-- Rank 2 -->
                  <div class="col-md-4 col-12">
                    <div style="background-color: #c0c0c0; border-radius: 2.5em; height: 12.5em; width: 40em">
                      <div class="row q-pl-sm q-pt-md items-center">
                        <h4 style="color: white">2</h4>
                        <div class="q-pr-xl q-pl-xl">
                          <q-avatar style="height: 2.6em; width: 2.6em; text-align: left">
                            <q-img alt="PictureFrame" src="..//assets/amethyst.png">
                              <q-avatar style="height: 1.95em; width: 1.95em; position: relative">
                                <q-img alt="ProfilePicture" src="..//assets/Jedlik_small.png" />
                              </q-avatar>
                            </q-img>
                          </q-avatar>
                        </div>
                        <h5 style="color: white">Larisza</h5>
                        <h5 class="q-pl-xl" style="color: white; font-size: 1.5em">2000</h5>
                      </div>
                    </div>
                  </div>

                  <!-- Rank 3 -->
                  <div class="col-md-4 col-12 q-pt-sm">
                    <div style="background-color: #967444; border-radius: 2.5em; height: 12.5em; width: 40em">
                      <div class="row q-pl-sm q-pt-md items-center">
                        <h4 style="color: white">3</h4>
                        <div class="q-pr-xl q-pl-xl">
                          <q-avatar style="height: 2.6em; width: 2.6em; text-align: left">
                            <q-img alt="PictureFrame" src="..//assets/amethyst.png">
                              <q-avatar style="height: 1.95em; width: 1.95em; position: relative">
                                <q-img alt="ProfilePicture" src="..//assets/tesztkep2.png" />
                              </q-avatar>
                            </q-img>
                          </q-avatar>
                        </div>
                        <h5 style="color: white">István</h5>
                        <h5 class="q-pl-xl" style="color: white; font-size: 1.5em">743</h5>
                      </div>
                    </div>
                  </div>

                  <!-- User's rank -->
                  <div class="col-md-4 col-12 q-pt-sm">
                    <div style="background-color: #1b1b1b; border-radius: 2.5em; height: 12.5em; width: 40em">
                      <div class="row q-pl-sm q-pt-md items-center">
                        <!-- TODO A felhasználó ranglistán elfoglalt helye -->
                        <h5 style="color: white">4</h5>
                        <div class="q-pr-xl q-pl-xl">
                          <q-avatar style="height: 1.6em; width: 1.6em; text-align: left">
                            <q-img alt="PictureFrame" :src="picture_frame">
                              <q-avatar style="height: 0.95em; width: 0.95em; position: relative">
                                <q-img alt="ProfilePicture" src="..//assets/default.png" />
                              </q-avatar>
                            </q-img>
                          </q-avatar>
                        </div>
                        <h6 style="color: white">{{ usersStore.loggedUser?.username }}</h6>
                        <h6 class="q-pl-xl" style="color: white; font-size: 1.5em">
                          {{ usersStore.loggedUser?.level }}
                        </h6>
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

<style lang="scss">
  #bg-color {
    background-image: v-bind(bgColor);
    background-size: cover;
    background-attachment: fixed;
  }

  #bg-img {
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: center;
  }

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
