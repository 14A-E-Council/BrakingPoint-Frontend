<script setup lang="ts"></script>

<template>
  <div>
    <p class="pageTitle text-center">Jelenleg résztvevő csapatok</p>
  </div>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="cardAttributes zdefault">
      <q-img class="cardImage zdefault text-center" src="src\assets\teamsymbols\ferrari_card.png">
        <div class="cardShadow">
          <p class="teamName">Ferrari</p>
          <p class="driverName">Charles Leclerc</p>
          <p class="driverName">Another name</p>
        </div>
      </q-img>
    </q-card>
    <q-card class="cardAttributesMercedes zdefault">
      <q-img class="cardImage zdefault text-center" src="src\assets\teamsymbols\mercedes.png">
        <div class="cardShadow">
          <h4 class="teamName">Mercedes</h4>
          <p class="driverName">Yet another one</p>
          <p class="driverName">Teszt Elek Bá</p>
        </div>
      </q-img>
    </q-card>
  </div>
</template>

<style lang="scss" scoped>
  @font-face {
    font-family: Wallpoet;
    src: url(src/assets/fonts/Wallpoet-Regular.otf);
  }
  .backgroundImage {
    position: absolute;
    top: 12em;
    width: 80em;
    z-index: 0;
    opacity: 0.5;
  }
  .cardAttributes {
    max-width: 20em;
    max-height: 21em;
    height: 21em;
    width: 16em;
    background-color: darkred;
    padding: 0.5em;
  }
  .cardAttributesMercedes {
    max-width: 20em;
    max-height: 21em;
    height: 21em;
    width: 16em;
    background-color: darkgray;
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
    position: relative;
    color: white;
    font-family: "WallPoet";
    font-style: normal;
    font-weight: 450;
    font-size: 150%;
    text-shadow: 0.1em 0.1em 0.1em black;
  }
  .pageTitle {
    text-shadow: 0.1em 0.1em 0.1em black;
    font-size: large;
    color: white;
    letter-spacing: 0.15em;
  }
  .teamName {
    margin-top: 0%;
    margin-bottom: 20%;
    color: white;
    letter-spacing: 0.15em;
    font-weight: 1000;
    text-shadow: 0.1em 0.1em 0.1em black;
    font-size: 200%;
  }
  .zdefault {
    z-index: 1;
  }
</style>
