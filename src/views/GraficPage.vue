<template>
  <div class="flex justify-between items-start">
    <div class="w-2/5"><i-chart-bar :options="ORTIONS_GR_1" /></div>
    <div class="w-2/5"><i-linear-grafic :options="ORTIONS_GR_2" /></div>
  </div>
</template>
<script setup>
import iChartBar from '../components/iChartBar.vue'
import iLinearGrafic from '../components/iLinearGrafic.vue'
import { ORTIONS_GR_1, ORTIONS_GR_2 } from '../constans'
</script>
<style lang="scss" scoped></style>
