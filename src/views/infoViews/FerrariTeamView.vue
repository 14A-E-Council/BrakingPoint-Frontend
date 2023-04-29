<script setup lang="ts"></script>

<template>
  <q-layout>
    <div>
      <div>
        <q-img id="backgroundImage" src="/src/assets/backgrounds/ferrari.png" />
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-4 col-12 teamInfo q-pa-xl">
          <p id="teamName">Ferrari</p>
          <q-img id="teamLogo" alt="Ferrari logo" src="/src/assets/teamsymbols/ferrari.png" />
          <div style="float: inline-start">
            <p id="teamStatistics">
              Nemzetiség: olasz
              <br />
              Jelenlegi helyezés: 4.
            </p>
          </div>
        </div>
        <div class="row col-lg-8">
          <div class="col-lg-6 col-md-6 col-sm-6 col-12 racerInfo q-pt-xl">
            <div class="row text-center" style="display: flex; justify-content: center">
              <q-img alt="Charles Leclerc" class="racerPicture" src="/src/assets/teammembers/leclerc.png" />
              <a class="racerName" href="/drivers">Charles Leclerc</a>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-12 racerInfo q-pt-xl">
            <div class="row text-center" style="display: flex; justify-content: center">
              <q-img alt="Carlos Sainz" class="racerPicture" src="/src/assets/teammembers/sainz.png" />
              <p class="racerName">Carlos Sainz</p>
            </div>
          </div>
        </div>
      </div>

      <div id="teamDescriptionBackground">
        <p id="teamDescription">
          A Scuderia Ferrari olasz Formula–1-es versenycsapat, a sportág eddigi legsikeresebbje, a világbajnokság
          kezdete, 1950 óta jelen van a Formula–1-ben. Enzo Ferrari alapította 1929-ben (a Scuderia olaszul istállót
          jelent, a Ferrari az alapító Enzo Ferrari nevére utal), és 1939-ig az Alfa Romeo autóit versenyeztette. Csak
          később kezdtek saját autókat készíteni. A 2019-es szezonban a versenyzők a négyszeres világbajnok Sebastian
          Vettel, aki 2015 óta van a csapatnál, és a Saubertől érkező Charles Leclerc, aki Kimi Räikkönent váltotta.
          Maurizio Arriavebenét pedig, aki 2015 és 2018 közt volt csapatfőnök, Mattia Binotto váltotta. 2023-tól
          Frédéric Vasseur irányítja a csapatot Binotto helyett.
        </p>
      </div>
    </div>
  </q-layout>
</template>

<style lang="scss" scoped>
  @font-face {
    font-family: Wallpoet;
    src: url(src/assets/fonts/Wallpoet-Regular.otf);
  }

  #backgroundImage {
    position: absolute;
    top: 12em;
    width: 80em;
    z-index: 0;
    opacity: 0.5;
  }

  #teamDescriptionBackground {
    box-sizing: border-box;
    margin: auto;
    margin-top: 2rem;
    position: relative;
    width: 90%;
    border: 0.5em solid #a11717;
    opacity: 1;
    border-radius: 3em;
    padding: 1rem;
    box-shadow: 0px 4px 10px 10px rgba(0, 0, 0, 0.25);
  }

  #teamDescription {
    padding: 0.75rem;
    font-family: "Yrsa";
    font-style: normal;
    font-weight: 400;
    font-size: 1.5em;
    line-height: 1.1em;
    letter-spacing: 0.1em;
    word-wrap: normal;
    color: #ffffff;
  }

  #teamInfo {
    display: inline-block;
  }

  #teamLogo {
    max-width: 12rem;
  }

  #teamName {
    font-family: "Wallpoet";
    font-style: normal;
    font-weight: 400;
    font-size: 3em;
    line-height: 1em;
    letter-spacing: 0.3em;
    color: #ffffff;
  }

  #teamStatistics {
    color: white;
    font-family: "Yrsa";
    font-style: normal;
    font-weight: 600;
    font-size: 1.5em;
    line-height: 1.5em;
    letter-spacing: 0.2em;
  }

  .racerInfo {
    justify-content: center;
  }

  .racerName {
    text-decoration: none;

    position: relative;
    font-family: "Wallpoet";
    font-style: normal;
    font-weight: 400;
    font-size: 2em;
    line-height: 1em;
    letter-spacing: 0.1em;
    margin-top: 0.5em;
    color: #ffffff;

    width: 100%;
  }

  .racerPicture {
    height: 15em;
    width: 15em;
    box-shadow: 0px 4px 10px 10px rgba(0, 0, 0, 0.25);
  }
</style>
