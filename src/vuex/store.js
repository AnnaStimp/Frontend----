import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      selectCity: '',
      statePopup: true,
      stateResult: true,
      resHtml: ''
    }
  },
  mutations: {
  }
})

export default store