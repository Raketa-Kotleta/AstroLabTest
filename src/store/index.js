import Vue from 'vue'
import Vuex from 'vuex'
import autorization from '@/store/autorization';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    PopupMessage:{
      visible: false,
      text: "",
    }
  },
  getters: {
  },
  mutations: {
    setVisible(state, visible){
      state.PopupMessage.visible = visible;
    },
    setText(state, text){
      state.PopupMessage.text = text;
    }
  },
  actions: {
    ShowPopupMessage(context, text){
      context.commit('setText',text);
      context.commit('setVisible', true);
    }
  },
  modules: {
    autorization,
  }
})
