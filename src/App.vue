
import { RouterView } from 'vue-router';

<template>
  <div id="app">
    <RouterView></RouterView>
  </div>
</template>

<style lang="scss">
#app, body {
  padding: 0 !important;
  margin: 0 !important;
  box-sizing: border-box;
  background-color: $body-bg;
}
@include FontInclude($inter,"assets/fonts/Inter/static/Inter-Medium.ttf");
@include FontInclude($inter,"assets/fonts/Inter/static/Inter-Bold.ttf");
@include FontInclude($inter,"assets/fonts/Inter/static/Inter-ExtraBold.ttf");
@include FontInclude($inter,"assets/fonts/Inter/static/Inter-Medium.ttf");

</style>
