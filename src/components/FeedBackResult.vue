<template>
  <div class="fixed z-1 min-w-full min-h-full top-0 left-0 flex justify-center items-center bg-gray-600 bg-opacity-75" @click="close()">
    <div class="shadow-sm bg-white pt-6 pr-7 pb-7 pl-6 rounded-lg" v-html="this.$store.state.resHtml">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FeedBackResult',
    methods: {
      close() {
        this.$store.state.resHtml = ''
        this.$store.state.stateResult = true
      }
    }
  }
</script>