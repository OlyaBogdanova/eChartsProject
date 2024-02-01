<template>
  <div class="info__container w-72">
    <div class="text-base mb-4" :style="{ color: '#93969C' }">{{ seria.name }}</div>
    <div>
      <span class="block text-2xl font-semibold text-white">{{ seria.data[0] }}</span>
      <span :style="{ color: '#93969C' }">/ {{ seria.data[1] }}</span>
    </div>
    <div class="flex items-center gap-2 w-52">
      <div class="range_container relative w-full h-1 mr-3" style="background-color: #383941">
        <div
          class="range abcolute top-0 left-0"
          :style="{
            width: Math.floor((seria.data[0] / seria.data[1]) * 100) + '%',
            'background-color': '#C6EC92',
            height: '2px'
          }"
        ></div>
      </div>
      <span class="text-lime-200 text-xs"
        >{{ Math.floor((seria.data[0] / seria.data[1]) * 100) }}%</span
      >
    </div>
  </div>
</template>
<script setup>
defineProps({
  seria: {
    type: Object
  }
})
</script>
<style lang=""></style>
