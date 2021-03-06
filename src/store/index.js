import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  plugins:[
    new VuexPersistence({
      storage:window.localStorage,
    }).plugin,
  ],
  modules: {
  }
})
