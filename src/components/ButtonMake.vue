<template>
  <div>
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
    <button class="bg-sky-600 hover:bg-sky-700 ...">Заказать в Москву</button>
  </div>
</template>

<script>
  export default {
    name: 'ButtonMake',
    mounted () {
      console.log(this.$store.state.count)
    }
  }
</script>