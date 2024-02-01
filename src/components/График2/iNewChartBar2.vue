<template>
  <i-grafic-container title="Прибыль">
    <div class="flex gap-x-2 mb-8">
      <i-button
        v-for="btn in buttonsList"
        :key="btn.title"
        :before-elem="btn.before"
        :element-color="btn.beforeColor"
        :active="btn.title === activeBtn"
        @click="changeActiveBtn(btn.title)"
        >{{ btn.title }}</i-button
      >
    </div>
    <div class="flex items-center gap-x-6 mb-10">
      <i-tab
        v-for="(seria, index) in computedTabs.series"
        :key="seria.name"
        :seria="seria"
        :style="!index ? 'border-right: 1px solid #272b33' : ''"
      />
    </div>
    <i-grafic v-if="activeBtn === 'Все'" :options="options" id="graf2_all" height="h-40" />
    <i-grafic
      v-if="activeBtn === 'Продукт 1'"
      :options="productOneOptions"
      id="graf2_one"
      height="h-40"
    />
    <i-grafic
      v-if="activeBtn === 'Продукт 2'"
      :options="productTwoOptions"
      id="graf2_two"
      height="h-40"
    />
  </i-grafic-container>
</template>
<script setup>
import iGraficContainer from '../iGraficContainer.vue'
import iButton from '@/components/ui/iButton.vue'
import iTab from '@/components/График2/iTab.vue'
import iGrafic from '../iGrafic.vue'
import { computed, ref } from 'vue'
const props = defineProps({
  options: {
    type: Object,
    required: true
  }
})
const buttonsList = computed(() => {
  const res = [{ title: 'Все', before: false }]
  props.options.series.forEach((s, index) => {
    res.push({ title: s.name, before: true, beforeColor: props.options.color[index] })
  })
  return res
})
const activeBtn = ref('Все')

function changeActiveBtn(title) {
  activeBtn.value = title
}
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
const computedTabs = computed(() => {
  if (activeBtn.value === 'Продукт 1') {
    return productOneOptions.value
  }
  if (activeBtn.value === 'Продукт 2') {
    return productTwoOptions.value
  }
  return props.options
})
</script>
<style lang=""></style>
