<template>
  <div id="app">
     <transition name="fade" mode="out-in">
        <RouterView></RouterView>
    </transition>
  </div>
</template>
<script>

</script>
<style lang="scss">
@include FontInclude($inter,"assets/fonts/Inter/static/Inter-Medium.ttf");
@include FontInclude($inter,"assets/fonts/Inter/static/Inter-Bold.ttf");
@include FontInclude($inter,"assets/fonts/Inter/static/Inter-ExtraBold.ttf");
@include FontInclude($inter,"assets/fonts/Inter/static/Inter-Medium.ttf");
#app, body {
  padding: 0 !important;
  margin: 0 !important;
  box-sizing: border-box;
  background-color: $body-bg;
}
// .fade-enter-from, .fade-leave-to{
//   opacity: 0;
//   transform: translateX(2em);
// }
// .fade-enter-active, .fade-leave-active{
//   transition: all .3 ease;
// }
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

</style>
