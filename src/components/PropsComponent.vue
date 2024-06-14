<script setup>

// eslint-disable-next-line no-undef
const props = defineProps(["value"])

</script>

<template>
  <div>我是propsComponent组件</div>
  <div>props:{{ props.value }}</div>
</template>

<style scoped>

</style>