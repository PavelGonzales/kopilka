import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment';

Vue.use(Vuex)

const state = {
  accumulated: 4320,
  finalPoint: 200000,
  postoned: false,
  date_start: '2017-08-28',
  date_end: '2018-06-01',
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
