<script setup>
import {ref} from "vue";

const isShow = ref(true)
</script>

<template>
  <transition>
    <div v-show="isShow">Text</div>
  </transition>
  <button @click="isShow = !isShow">点我显示或隐藏Text</button>
</template>

<style scoped>
.v-enter-active {
  animation: text-animation 1s;
}

.v-leave-active {
  animation: text-animation 1s reverse;
}

@keyframes text-animation {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>