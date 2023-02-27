<script setup lang="ts"></script>

<template>
  <q-layout>
    <div>
      <q-img class="backgroundImage" src="/src/assets/backgrounds/ferrari.png" />
    </div>
    <div class="row zdefault">
      <div class="col-lg-5 col-md-4 col-12" style="position: relative">
        <q-img alt="Ferrari" src="/src/assets/teamsymbols/ferrari.png" style="max-width: 17.5rem" />
      </div>
      <div class="col-lg-3 col-md-4 col-12 zdefault">
        <q-img
          alt="Charles Leclerc"
          class="racerPicture"
          src="/src/assets/teammembers/ferrari_charles_leclerc.png"
        />
        <p class="racerName">Charles Leclerc</p>
      </div>
      <div class="col-lg-4 col-md-4 col-12 zdefault">
        <q-img
          alt="Carlos Sainz"
          class="racerPicture"
          src="/src/assets/teammembers/ferrari_carlos_sainz.png"
        />
        <p class="racerName">Carlos Sainz</p>
      </div>
    </div>

    <div style="position: relative">
      <p class="teamInfo">
        28 nyert futam
        <br />
      </p>
      <p class="teamInfo">
        12 a mostani szezonban
        <br />
      </p>
      <p class="teamInfo">
        3. helyezés a csapatok között
        <br />
      </p>
      <p class="teamInfo">
        placeholder info here
        <br />
      </p>
    </div>
    <div class="teamDescriptionBackground">
      <p class="teamDescription">
        Very Long Description aaaaaaaaaa aaaaaaaa aaaaaaaaaa aaaaaaaaaaaa aaaaaaa aaaaa aaaaaaaaaaaa
        aaaaa aaaaaa aaaaaaaa aaaaaaaaaa aaaaaaaa aaaaaaaaaaa aaaaaaaa aaaaaa aaa aaaaa aaaa
        aaaaaaaa aaaaaaa aaaaaaa aaaaaa aaaaaaaaaaaaaa aaaaaaa a aa aaa aaaaaaaaaaaaaaaaaaaaaaaaaaa
        dvbas dbasfb afd b fda b sdfbndsmfknbksd kjfh kjfdh gkjhskjfhg lkjfsdhglkjsadhfglkja
        hklfhgla kj hd glkjahsdflkg haljkhfdg lkash gkljahslkg
      </p>
    </div>
  </q-layout>
</template>

<style lang="scss" scoped>
  @font-face {
    font-family: Wallpoet;
    src: url(src/assets/fonts/Wallpoet-Regular.otf);
  }
  .teamInfo {
    color: white;
    font-family: "Yrsa";
    font-style: normal;
    font-weight: 600;
    font-size: 1.5em;
    line-height: 1.5em;
    letter-spacing: 0.2em;
  }

  .teamDescription {
    padding: 0.75rem;
    font-family: "Yrsa";
    font-style: normal;
    font-weight: 400;
    font-size: 1.5em;
    line-height: 1em;
    letter-spacing: 0.1em;
    word-wrap: normal;

    color: #ffffff;
  }

  .teamDescriptionBackground {
    box-sizing: border-box;

    margin: auto;
    margin-top: 2rem;
    position: relative;
    width: 90%;
    height: 250px;
    border: 0.5em solid #a11717;
    opacity: 1;
    border-radius: 3em;
    padding: 1rem;
    box-shadow: 0px 4px 10px 10px rgba(0, 0, 0, 0.25);
  }

  .racerName {
    position: relative;
    font-family: "Wallpoet";
    font-style: normal;
    font-weight: 400;
    font-size: 2em;
    line-height: 1em;
    letter-spacing: 0.1em;
    margin-top: 0.5em;

    color: #ffffff;
  }
  .backgroundImage {
    position: absolute;
    top: 12em;
    width: 80em;
    z-index: 0;
    opacity: 0.5;
  }
  .zdefault {
    z-index: 1;
  }
  .racerPicture {
    height: 15em;
    width: 15em;
    box-shadow: 0px 4px 10px 10px rgba(0, 0, 0, 0.25);
  }
</style>
