<template>
  <div id="app">
     <transition name="fade" mode="out-in">
        <RouterView></RouterView>
    </transition>
    <PopupMessage 
    :message-text="$store.state.PopupMessage.text" 
    :visible="visible" @onupdate="UpdatePopupVisible"
    :class="PopupMessageBgClass"></PopupMessage>
  </div>
</template>
<script>
import store from './store';
import PopupMessage from './components/PopupMessage.vue';
export default{
  name: 'App',
  components:{
    PopupMessage,
  },
  data(){
    return{
      PopupMessageBgClass: 'popup-bg',
    }
  },
  methods:{
    UpdatePopupVisible(visible){
      this.visible = visible;
    }
  },
  computed:{
    visible:{
      get:()=>{
        return store.state.PopupMessage.visible;
      },
      set(value){
        store.commit('setVisible', value);
      }
    }
  }
}
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
.popup-bg{
  background-color: rgba($reason,1) !important;
}
</style>
