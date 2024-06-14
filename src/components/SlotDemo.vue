<script setup>
import {ref} from "vue";

const count = ref(0)
</script>

<template>
  <div>
    <hr>
    <slot name="slot2">我是插槽2</slot>
    <slot :text="count">我是插槽3</slot>
    <hr>
  </div>
</template>

<style scoped>

</style>