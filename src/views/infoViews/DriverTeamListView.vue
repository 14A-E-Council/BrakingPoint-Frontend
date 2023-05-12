<script setup lang="ts">
  import { useUsersStore } from "..//..//store/usersStore";

  const usersStore = useUsersStore();

  var bgColor1 = usersStore.getLoggedUser?.colour_palette?.slice(0, 7);
  var bgColor2 = usersStore.getLoggedUser?.colour_palette?.slice(7, 14);
  var logo = usersStore.getLoggedUser?.preferred_category;

  var bgColor = "linear-gradient(to bottom, " + bgColor1 + ", " + bgColor2 + ")";
  console.log(bgColor);
</script>

<template>
  <q-layout id="bg-color" :style="{ backgroundImage: bgColor }">
    <div id="bg-img" class="q-pa-md" :style="{ backgroundImage: logo }">
      <div>
        <p id="pageTitle" class="text-center q-pa-md">Jelenleg résztvevő csapatok</p>
      </div>
      <div>
        <div id="cardContainer" class="row q-gutter-lg">
          <q-card id="cardAttributesFerrari">
            <q-img class="cardImage text-center" src="src\assets\teamsymbols\ferrari.png">
              <div class="cardShadow row">
                <a class="teamName" href="/teams/ferrari">Ferrari</a>
                <a class="driverName" href="/drivers">Charles Leclerc</a>
                <p class="driverName">Carlos Sainz</p>
              </div>
            </q-img>
          </q-card>

          <q-card id="cardAttributesMercedes" class="col-3">
            <q-img class="cardImage text-center" src="src\assets\teamsymbols\mercedes.png">
              <div class="cardShadow">
                <h4 class="teamName">Mercedes</h4>
                <p class="driverName">Lewis Hamilton</p>
                <p class="driverName">George Russell</p>
              </div>
            </q-img>
          </q-card>

          <q-card id="cardAttributesRedBull" class="col-3">
            <q-img class="cardImage text-center" src="src\assets\teamsymbols\redbull.png">
              <div class="cardShadow">
                <p class="teamName">Red Bull</p>
                <p class="driverName">Max Verstappen</p>
                <p class="driverName">Sergio Perez</p>
              </div>
            </q-img>
          </q-card>

          <q-card id="cardAttributesAstonMartin" class="col-3">
            <q-img class="cardImage text-center" src="src\assets\teamsymbols\astonmartin.png">
              <div class="cardShadow">
                <p class="teamName">Aston Martin</p>
                <p class="driverName">Fernando Alonso</p>
                <p class="driverName">Lance Stroll</p>
              </div>
            </q-img>
          </q-card>

          <q-card id="cardAttributesMcLaren" class="col-3">
            <q-img class="cardImage text-center" src="src\assets\teamsymbols\mclaren.png">
              <div class="cardShadow">
                <p class="teamName">McLaren</p>
                <p class="driverName">Lando Norris</p>
                <p class="driverName">Oscar Piastri</p>
              </div>
            </q-img>
          </q-card>

          <q-card id="cardAttributesAlpine" class="col-3">
            <q-img class="cardImage text-center" src="src\assets\teamsymbols\alpine.png">
              <div class="cardShadow">
                <p class="teamName">Alpine</p>
                <p class="driverName">Esteban Ocon</p>
                <p class="driverName">Pierre Gasly</p>
              </div>
            </q-img>
          </q-card>

          <q-card id="cardAttributesHaas" class="col-3">
            <q-img class="cardImage text-center" src="src\assets\teamsymbols\haas.png">
              <div class="cardShadow">
                <p class="teamName">Haas</p>
                <p class="driverName">Nico Hulkenberg</p>
                <p class="driverName">Kevin Magnussen</p>
              </div>
            </q-img>
          </q-card>

          <q-card id="cardAttributesAlfaRomeo" class="col-3">
            <q-img class="cardImage text-center" src="src\assets\teamsymbols\alfaromeo.png">
              <div class="cardShadow">
                <p class="teamName">Alfa Romeo</p>
                <p class="driverName">Valtteri Bottas</p>
                <p class="driverName">Zhou Guanyu</p>
              </div>
            </q-img>
          </q-card>

          <q-card id="cardAttributesAlphaTauri" class="col-3">
            <q-img class="cardImage text-center" src="src\assets\teamsymbols\alphatauri.png">
              <div class="cardShadow">
                <p class="teamName">Alpha Tauri</p>
                <p class="driverName">Yuki Tsunoda</p>
                <p class="driverName">Nyck De Vries</p>
              </div>
            </q-img>
          </q-card>

          <q-card id="cardAttributesWilliams" class="col-3">
            <q-img class="cardImage text-center" src="src\assets\teamsymbols\williams.png">
              <div class="cardShadow">
                <p class="teamName">Williams</p>
                <p class="driverName">Alexander Albon</p>
                <p class="driverName">Logan Sargeant</p>
              </div>
            </q-img>
          </q-card>
        </div>
      </div>
    </div>
  </q-layout>
</template>

<style lang="scss" scoped>
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

  @font-face {
    font-family: Wallpoet;
    src: url(src/assets/fonts/Wallpoet-Regular.otf);
  }
  #cardAttributesFerrari {
    max-width: 20em;
    max-height: 21em;
    height: 21em;
    width: 16em;
    background-color: darkred;
    padding: 0.5em;
  }
  #cardAttributesMercedes {
    max-width: 20em;
    max-height: 21em;
    height: 21em;
    width: 16em;
    background-color: rgb(75, 228, 255);
    padding: 0.5em;
  }
  #cardAttributesRedBull {
    max-width: 20em;
    max-height: 21em;
    height: 21em;
    width: 16em;
    background-color: rgb(0, 0, 102);
    padding: 0.5em;
  }
  #cardAttributesAstonMartin {
    max-width: 20em;
    max-height: 21em;
    height: 21em;
    width: 16em;
    background-color: rgb(0, 151, 76);
    padding: 0.5em;
  }
  #cardAttributesMcLaren {
    max-width: 20em;
    max-height: 21em;
    height: 21em;
    width: 16em;
    background-color: orangered;
    padding: 0.5em;
  }
  #cardAttributesAlpine {
    max-width: 20em;
    max-height: 21em;
    height: 21em;
    width: 16em;
    background-color: rgb(64, 180, 219);
    padding: 0.5em;
  }
  #cardAttributesHaas {
    max-width: 20em;
    max-height: 21em;
    height: 21em;
    width: 16em;
    background-color: darkgray;
    padding: 0.5em;
  }
  #cardAttributesAlfaRomeo {
    max-width: 20em;
    max-height: 21em;
    height: 21em;
    width: 16em;
    background-color: rgb(226, 14, 32);
    padding: 0.5em;
  }
  #cardAttributesAlphaTauri {
    max-width: 20em;
    max-height: 21em;
    height: 21em;
    width: 16em;
    background-color: rgb(64, 59, 122);
    padding: 0.5em;
  }
  #cardAttributesWilliams {
    max-width: 20em;
    max-height: 21em;
    height: 21em;
    width: 16em;
    background-color: lightskyblue;
    padding: 0.5em;
  }
  .cardImage {
    max-width: 15em;
    max-height: fit-content;
    height: 20em;
  }
  .cardShadow {
    width: 100%;
    height: 100%;
  }
  .driverName {
    text-decoration: none;

    color: white;
    font-family: "WallPoet";
    font-style: normal;
    font-weight: 450;
    font-size: 150%;
    text-shadow: 0.1em 0.1em 0.1em black;
    width: 100%;
  }
  #pageTitle {
    text-shadow: 0.1em 0.1em 0.1em black;
    font-size: large;
    color: white;
    letter-spacing: 0.15em;
  }
  .teamName {
    text-decoration: none;
    width: 100%;

    margin-top: 0%;
    margin-bottom: 20%;
    color: white;
    letter-spacing: 0.15em;
    font-weight: 1000;
    text-shadow: 0.1em 0.1em 0.1em black;
    font-size: 200%;
  }

  #cardContainer {
    width: 100%;
    justify-content: center;
  }
</style>
