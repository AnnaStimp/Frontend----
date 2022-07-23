<template>
  <div class="">
    <div class="mx-20 my-5">
      <ButtonMake msg='Заказать в Москву' bgColor='bg-indigo-500' @click="clickButton(1)"/>
      <ButtonMake msg='Заказать в Санкт-Петербург' bgColor='bg-black' @click="clickButton(2)"/>
    </div>
    <FeedBack :class="{hidden: this.$store.state.statePopup}"/>
  </div>
</template>

<script>
import ButtonMake from './components/ButtonMake.vue'
import FeedBack from './components/Feedback.vue'

export default {
  name: 'App',
  components: {
    ButtonMake,
    FeedBack
  },
  methods: {
    clickButton(cityId) {
      this.$store.state.statePopup = false
      this.$store.state.selectCity = cityId
    }
  }
}
</script>
