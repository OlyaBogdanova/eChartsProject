<template>
  <div ref="grafic_bar" class="container flex flex-col gap-5">
    <grafic-header
      :btns="['Все', 'План', 'Факт']"
      :active-tab="activeTab"
      @set-active-tab="setActiveTab"
    />

    <i-grafic v-if="activeTab === 'Все'" :options="options" id="all" />
    <i-grafic v-if="activeTab === 'План'" :options="productOneOptions" id="plan" />
    <i-grafic v-if="activeTab === 'Факт'" :options="productTwoOptions" id="fact" />
  </div>
</template>
<script setup>
import { computed, ref, provide } from 'vue'
import iGrafic from './iGrafic.vue'
import GraficHeader from './GraficHader.vue'
const activeTab = ref('Все')
const props = defineProps({
  options: {
    type: Object,
    required: true
  }
})
const productOneOptions = computed(() => {
  const res = { ...props.options }
  res.series = [res.series[0]]
  return res
})

const productTwoOptions = computed(() => {
  const res = { ...props.options }
  res.series = [res.series[1]]
  res.color = [res.color[1]]
  return res
})

function setActiveTab(name) {
  activeTab.value = name
}

provide('activeTab', activeTab)
</script>
<style lang="scss">
.myBtn:before {
  content: '';
  width: 6px;
  height: 6px;
  display: flex;
  border-radius: 50%;

  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
}
.myInput {
  accent-color: #d9f99d;
  height: 4px;
  &:disabled {
    color: #d9f99d !important;
  }
}
</style>
