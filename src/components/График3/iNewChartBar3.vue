<template>
  <i-grafic-container>
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

    <i-grafic v-if="activeBtn === 'Все'" :options="options" id="graf3_all" style="height: 334px" />
    <i-grafic
      v-if="activeBtn === 'План'"
      :options="productOneOptions"
      id="graf3_plan"
      style="height: 334px"
    />
    <i-grafic
      v-if="activeBtn === 'Факт'"
      :options="productTwoOptions"
      id="graf3_fact"
      style="height: 334px"
    />
  </i-grafic-container>
</template>
<script setup>
import iGraficContainer from '../iGraficContainer.vue'
import iButton from '@/components/ui/iButton.vue'
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
</script>
<style lang=""></style>
