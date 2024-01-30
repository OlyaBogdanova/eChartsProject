<template>
  <div class="w-full min-h-56" :id="id"></div>
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
  }
})
let myChart = null

onMounted(() => {
  myChart = echarts.init(document.getElementById(props.id))

  myChart.setOption(props.options)
})
</script>
<style lang="scss">
.cont {
  width: 40%;
  height: 300px;
}
</style>
