<template>
  <div class="w-full" :id="id" :class="height"></div>
</template>
<script setup>
import { onMounted } from 'vue'
const props = defineProps({
  options: {
    type: Object,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  height: {
    type: String,
    default: 'h-72'
  }
})
let myChart = null

onMounted(() => {
  myChart = echarts.init(document.getElementById(props.id))
  window.addEventListener('resize', function () {
    myChart.resize()
  })
  myChart.setOption(props.options)
})
</script>
<style lang="scss">
.cont {
  width: 40%;
  height: 300px;
}
</style>
