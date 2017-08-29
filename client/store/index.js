import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  accumulated: 2160,
  finalPoint: 200000,
  postoned: false,
}

const mutations = {
  INCREMENT (state) {
    state.accumulated += 720,
    state.postoned = true
  },
  DECREMENT (state) {
    state.count--
  }
}

const actions = {
  incrementAsync ({ commit }) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 200)
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
