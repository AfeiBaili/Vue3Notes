<script setup>
import countStore from '@/store/count'
import {storeToRefs} from "pinia";

const counts = countStore()

const {count} = storeToRefs(counts)

</script>

<template>
  <div>{{ count }}</div>
</template>

<style scoped>

</style>