<script setup>
import BComponent from './BComponent.vue'
import {ref} from "vue";

const count = ref(1)

// eslint-disable-next-line no-undef
defineExpose({count})

function getParent($parent) {
  console.log($parent.value += "~")
}
</script>

<template>
  <BComponent :count="count"></BComponent>
  <button @click="getParent($parent)">点我获取父亲</button>
</template>

<style scoped>

</style>