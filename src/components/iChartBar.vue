<template>
  <div ref="grafic_bar" class="container flex flex-col gap-5">
    <grafic-header
      :btns="['Все', 'Продукт 1', 'Продукт 2']"
      :active-tab="activeTab"
      @set-active-tab="setActiveTab"
    />
    <div class="flex justify-between items-center">
      <div class="info__container w-72" v-for="seria in computedOptions.series" :key="seria.name">
        <div class="text-base text-gray-400">{{ seria.name }}</div>
        <div>
          <span class="block text-2xl font-semibold text-white">{{ seria.data[0] }}</span>
          <span class="text-gray-400">/ {{ seria.data[1] }}</span>
        </div>
        <div class="flex items-center gap-2 w-52">
          <div class="range_container relative w-full h-1 bg-gray-100">
            <div
              class="range abcolute top-0 left-0 bg-lime-200 h-1"
              :style="{ width: Math.floor((seria.data[0] / seria.data[1]) * 100) + '%' }"
            ></div>
          </div>
          <span class="text-lime-200"
            >{{ Math.floor((seria.data[0] / seria.data[1]) * 100) }}%</span
          >
        </div>
      </div>
    </div>

    <i-grafic v-if="activeTab === 'Все'" :options="options" id="all_prod" />
    <i-grafic v-if="activeTab === 'Продукт 1'" :options="productOneOptions" id="prod1" />
    <i-grafic v-if="activeTab === 'Продукт 2'" :options="productTwoOptions" id="prod2" />
  </div>
</template>
<script setup>
import { computed, ref } from 'vue'
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
const computedOptions = computed(() => {
  if (activeTab.value === 'Все') return props.options
  if (activeTab.value === 'Продукт 1') return productOneOptions.value
  return productTwoOptions.value
})

function setActiveTab(tab) {
  activeTab.value = tab
}
</script>
<style lang="scss">
.myInput {
  accent-color: #d9f99d;
  height: 4px;
  &:disabled {
    color: #d9f99d !important;
  }
}
</style>
