<script setup>
// eslint-disable-next-line no-undef
const emits = defineEmits(["print"]);
</script>

<template>
  <button @click="emits('print','我是值aa')">点我调用事件</button>
</template>

<style scoped>
</style>