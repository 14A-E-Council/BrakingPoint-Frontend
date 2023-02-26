<script setup lang="ts"></script>

<template>
  <img class="backgroundImage" src="/src/assets/backgrounds/ferrari.png" />
  <div class="row zdefault">
    <div class="col-lg-5 col-md-2 col-12" style="position: relative">
      <img
        alt="Ferrari"
        src="/src/assets/teamsymbols/ferrari.png"
        style="max-width: 500px; margin-left: -100px"
      />
    </div>
    <div class="col-lg-3 col-md-5 col-12 mx-auto zdefault">
      <img
        alt="Forest"
        src="/src/assets/teammembers/ferrari_charles_leclerc.png"
        style="height: 25rem"
      />
      <p class="racerName">Charles Leclerc</p>
    </div>
    <div class="col-lg-4 col-md-4 col-12">
      <img
        alt="Mountains"
        src="/src/assets/teammembers/ferrari_carlos_sainz.png"
        style="height: 25rem"
      />
      <p class="racerName">Carlos Sainz</p>
    </div>
  </div>

  <div style="position: relative">
    <label class="teamInfo">
      28 nyert futam
      <br />
    </label>
    <label class="teamInfo">
      12 a mostani szezonban
      <br />
    </label>
    <label class="teamInfo">
      3. helyezés a csapatok között
      <br />
    </label>
    <label class="teamInfo">
      placeholder info here
      <br />
    </label>
  </div>
  <div class="teamDescriptionBackground">
    <p class="teamDescription">
      Very Long Description aaaaaaaaaa aaaaaaaa aaaaaaaaaa aaaaaaaaaaaa aaaaaaa aaaaa aaaaaaaaaaaa
      aaaaa aaaaaa aaaaaaaa aaaaaaaaaa aaaaaaaa aaaaaaaaaaa aaaaaaaa aaaaaa aaa aaaaa aaaa aaaaaaaa
      aaaaaaa aaaaaaa aaaaaa aaaaaaaaaaaaaa aaaaaaa a aa aaa aaaaaaaaaaaaaaaaaaaaaaaaaaa dvbas
      dbasfb afd b fda b sdfbndsmfknbksd kjfh kjfdh gkjhskjfhg lkjfsdhglkjsadhfglkja hklfhgla kj hd
      glkjahsdflkg haljkhfdg lkash gkljahslkg
    </p>
  </div>
</template>

<style lang="scss" scoped>
  .teamInfo {
    color: white;
    font-family: "Yrsa";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 44px;
    letter-spacing: 0.1em;
  }

  .teamDescription {
    padding: 10px, 10px, 10px, 10px;
    font-family: "Yrsa";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 44px;
    letter-spacing: 0.1em;
    word-wrap: normal;

    color: #ffffff;
  }

  .teamDescriptionBackground {
    box-sizing: border-box;

    margin: auto;
    margin-top: 75px;
    position: relative;
    width: 90%;
    height: 250px;
    opacity: 1;
    background: #e6002b;
    border-radius: 20px;
    padding: 1rem;
  }

  .racerName {
    position: relative;

    font-family: "Wallpoet";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 40px;
    letter-spacing: 0.1em;
    text-align: center;
    margin-top: 10px;

    color: #ffffff;
  }
  .backgroundImage {
    position: absolute;
    z-index: 0;
    height: 900px;
    opacity: 0.5;
    margin: auto;
    background-position: center;
  }
  .zdefault {
    z-index: 1;
  }
</style>
