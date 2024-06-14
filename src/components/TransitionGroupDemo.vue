<script setup>
import {reactive} from "vue";

const items = reactive(["zs", "ls", "ww"])

function addItem() {
  items.unshift("hh")
}

function removeItem() {
  items.shift()
}

</script>

<template>
  <transition-group class="container">
    <div v-for="i in items" :key="i">{{ i }}</div>
    <button @click="addItem">点我添加一个</button>
    <button @click="removeItem">点我删除一个</button>
  </transition-group>
</template>

<style scoped>
.v-enter-active, .v-leave-active, .v-move {
  transition: all 0.5s;
}

.v-enter-from, .v-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.v-leave-active {
  position: absolute;
}
</style>