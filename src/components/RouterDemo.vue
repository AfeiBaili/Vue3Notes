<script setup>

</script>

<template>
  <div>
    <router-link to="/route1" active-class="active">1</router-link>
    <router-link to="/route2" active-class="active">2</router-link>
    <div>---------------</div>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.active {
  background-color: red;
}
</style>