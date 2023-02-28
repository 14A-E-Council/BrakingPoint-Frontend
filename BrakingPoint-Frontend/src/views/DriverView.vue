<script setup lang="ts"></script>

<template>
  <q-layout>
    <div>
      <div>
        <q-img id="backgroundImage" src="/src/assets/backgrounds/ferrari.png" />
      </div>
      <div id="mainInfo" class="row">
        <div class="col-lg-6">
          <q-img id="driverImage" src="/src/assets/teamsymbols/ferrari.png" />
        </div>
        <div class="col-lg-6">
          <p id="driverName">Nico Hulkenberg</p>
          <p class="driverInfo">
            28 nyert futam
            <br />
          </p>
          <p class="driverInfo">
            12 a mostani szezonban
            <br />
          </p>
          <p class="driverInfo">
            3. helyezés a csapatok között
            <br />
          </p>
          <p class="driverInfo">
            placeholder info here
            <br />
          </p>
        </div>
      </div>

      <div style="position: relative"></div>
      <div id="driverDescriptionBackground">
        <p id="driverDescription">
          Very Long Description aaaaaaaaaa aaaaaaaa aaaaaaaaaa aaaaaaaaaaaa aaaaaaa aaaaa
          aaaaaaaaaaaa aaaaa aaaaaa aaaaaaaa aaaaaaaaaa aaaaaaaa aaaaaaaaaaa aaaaaaaa aaaaaa aaa
          aaaaa aaaa aaaaaaaa aaaaaaa aaaaaaa aaaaaa aaaaaaaaaaaaaa aaaaaaa a aa aaa
          aaaaaaaaaaaaaaaaaaaaaaaaaaa dvbas dbasfb afd b fda b sdfbndsmfknbksd kjfh kjfdh gkjhskjfhg
          lkjfsdhglkjsadhfglkja hklfhgla kj hd glkjahsdflkg haljkhfdg lkash gkljahslkg
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

  #driverDescription {
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

  #driverDescriptionBackground {
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

  #driverName {
    position: relative;
    font-family: "Wallpoet";
    font-style: normal;
    font-weight: 400;
    font-size: 4em;
    line-height: 1em;
    letter-spacing: 0.1em;
    margin-top: 0.5em;
    margin-bottom: 1em;
    color: #ffffff;
  }

  #backgroundImage {
    position: absolute;
    top: 12em;
    width: 80em;
    z-index: 0;
    opacity: 0.5;
  }

  #teamSymbolImage {
    height: 15em;
    width: 15em;
    box-shadow: 0px 4px 10px 10px rgba(0, 0, 0, 0.25);
  }

  #driverImage {
    width: 17em;
    margin: 2em;
    box-shadow: 0px 4px 10px 10px rgba(0, 0, 0, 0.25);
  }

  .driverInfo {
    position: relative;
    color: white;
    font-family: "Yrsa";
    font-style: normal;
    font-weight: 600;
    font-size: 1.5em;
    letter-spacing: 0.2em;
    margin-left: 1.5em;
  }

  .zdefault {
    z-index: 1;
  }
</style>
