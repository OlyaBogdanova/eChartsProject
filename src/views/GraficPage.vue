<template>
  <div class="flex justify-between items-start flex-col gap-2">
    <div class="flex w-full gap-2 flex-wrap">
      <i-new-chart-bar1 :options="ORTIONS_GR_1" />
      <i-new-chart-bar2 :options="ORTIONS_GR_2" />
    </div>

    <div class="w-full" style="height: 452px">
      <i-new-chart-bar3 :options="ORTIONS_GR_3" />
    </div>
  </div>
</template>
<script setup>
import iNewChartBar1 from '@/components/График1/iNewChartBar1.vue'
import iNewChartBar2 from '@/components/График2/iNewChartBar2.vue'
import iNewChartBar3 from '@/components/График3/iNewChartBar3.vue'
import { ORTIONS_GR_1, ORTIONS_GR_2, ORTIONS_GR_3 } from '../constans'
</script>
<style lang="scss" scoped></style>
