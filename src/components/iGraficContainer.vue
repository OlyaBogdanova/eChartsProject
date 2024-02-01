<template>
  <div class="p-6 grafic__container flex-1 rounded-lg">
    <div v-if="title" class="uppercase font-medium text-lg text-white mb-8">{{ title }}</div>
    <slot></slot>
  </div>
</template>
<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  }
})
</script>
<style lang="scss" scoped>
.grafic__container {
  background-color: #1b1b1e;
}
</style>
