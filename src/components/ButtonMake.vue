<template>
  <button :class="`${bgColor} px-4 py-1.5 shadow-sm rounded-md text-white mx-2.5`">{{msg}}</button>
</template>

<script>
  export default {
    name: 'ButtonMake',
    props: ['msg', 'bgColor'],
  }
</script>