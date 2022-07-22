<template>
  <div class="">
    <div class="mx-20 my-5">
      <ButtonMake msg='Заказать в Москву' bgColor='bg-indigo-500'/>
      <ButtonMake msg='Заказать в Санкт-Петербург' bgColor='bg-black'/>
    </div>
    <FeedBack />
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
  }
}
</script>
