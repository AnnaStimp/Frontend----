import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      selectCity: '',
      statePopup: true
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

export default store