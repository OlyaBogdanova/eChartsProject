<template>
  <i-grafic-container title="Общая выручка"
    ><div class="flex gap-x-2">
      <i-cards
        v-for="(card, index) in cardsList"
        :key="card.title"
        :style="computedCardStyle(index)"
        :card="card"
        :element-color="options.color[index - 1]"
      />
    </div>
    <i-grafic id="graf1" :options="options" />
  </i-grafic-container>
</template>
<script setup>
import iGraficContainer from '../iGraficContainer.vue'
import iCards from './iCards.vue'
import iGrafic from '../iGrafic.vue'
defineProps({
  options: {
    type: Object,
    required: true
  }
})
const cardsList = [
  { title: 'общее оплачено', quantity: '1 123 500 ₽', before: false },
  { title: 'деньги за мясо', quantity: '145 200 ₽', before: true },
  { title: 'расходы на зп', quantity: '1 123 500 ₽', before: true },
  { title: 'прочее', quantity: '23 500 ₽', before: true }
]
function computedCardStyle(index) {
  if (index !== cardsList.length - 1) {
    return 'flex: 0 1 179px; border-right: 1px solid gray'
  }
}
</script>
<style lang=""></style>
