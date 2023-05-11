<script setup lang="ts">
  import { useUsersStore } from "..//store/usersStore";

  const usersStore = useUsersStore();

  var bgColor1 = usersStore.getLoggedUser?.colour_palette?.slice(0, 7);
  var bgColor2 = usersStore.getLoggedUser?.colour_palette?.slice(7, 14);

  var bgColor = "linear-gradient(to bottom, " + bgColor1 + ", " + bgColor2 + ")";
</script>

<template>
  <q-layout :style="{ backgroundImage: bgColor }">
    <div class="q-pb-xl">
      <div id="circuitImage" class="row">
        <div class="q-pl-md col-xs-12 col-sm-12 col-md-12 col-lg-5">
          <div id="circuitCountry">Azerbaijan</div>
          <div id="circuitName">Baku City Circuit</div>
          <div id="raceDate">2023.04.30.</div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-7">
          <q-img id="circuitPlanImage" src="/src/assets/circuitimages/baku.png" />
        </div>
      </div>
      <div class="row">
        <div id="lastRaceResults" class="col-xs-12 col-sm-12 col-md-6">
          <p id="lastRaceResultsTitle">Előző verseny helyezettjei</p>
          <p class="placements">1. Max Verstappen</p>
          <p class="placements">2. Lewis Hamilton</p>
          <p class="placements">3. Fernando Alonso</p>
          <p class="placements">4. Lance Stroll</p>
          <p class="placements">5. Sergio Perez</p>
        </div>
        <div id="seasonsResults" class="col-xs-12 col-sm-12 col-md-6">
          <p id="seasonsResultsTitle">A szezon legjobbjai</p>
          <p class="placements">1. Max Verstappen - 69 pt</p>
          <p class="placements">2. Sergio Perez - 54 pt</p>
          <p class="placements">3. Fernando Alonso - 45 pt</p>
          <p class="placements">4. Lewis Hamilton - 38 pt</p>
          <p class="placements">5. Carlos Sainz - 20 pt</p>
        </div>
      </div>
      <div class="row">
        <div id="seasonsResults" class="col-lg-6"></div>
      </div>
    </div>
  </q-layout>
</template>

<style lang="scss" scoped>
  @font-face {
    font-family: Wallpoet;
    src: url(src/assets/fonts/Wallpoet-Regular.otf);
  }
  @font-face {
    font-family: Formula1;
    src: url(src/assets/fonts/Formula1-Regular.otf);
  }
  @font-face {
    font-family: Formula1_Bold;
    src: url(src/assets/fonts/Formula1-Bold.otf);
  }

  #backgroundImage {
    position: absolute;
    top: 12em;
    width: 80em;
  }

  #bgColor {
    padding: 0px;
  }

  #circuitCountry {
    font-family: Formula1;
    font-size: 7em;
    color: white;
  }

  #circuitImage {
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/src/assets/backgrounds/baku.png");

    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
  }

  #circuitPlanImage {
    margin-left: 4em;
    margin-bottom: 3em;
    margin-top: 2em;
    width: 75%;
  }

  #circuitName {
    font-family: Formula1_Bold;
    font-size: 3em;
    color: white;

    margin-top: -0.5em;
  }

  #lastRaceResults {
    text-align: right;
    border-right: 0.05em solid white;
    width: 50%;

    padding-right: 1em;
  }

  #lastRaceResultsTitle {
    font-family: Formula1;
    font-size: 2em;
    color: white;

    text-align: center;
    padding-top: 1em;
    padding-bottom: 1em;
  }

  #raceDate {
    font-family: Formula1;
    font-size: 2em;
    color: white;
  }

  #seasonsResults {
    text-align: left;
    border-left: 0.05em solid white;
    width: 50%;
    padding-left: 1em;
  }

  #seasonsResultsTitle {
    font-family: Formula1;
    font-size: 2em;
    color: white;

    text-align: center;
    padding-top: 1em;
    padding-bottom: 1em;
  }

  .placements {
    font-family: Formula1;
    font-size: 2em;
    color: white;
  }
</style>
