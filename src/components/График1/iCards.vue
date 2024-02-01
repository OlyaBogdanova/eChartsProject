<template>
  <div class="flex-col">
    <div :style="computedTitleStyles" :class="computedTitleClasses">
      {{ card.title }}
    </div>
    <div class="text-2xl text-white">{{ card.quantity }}</div>
  </div>
</template>
<script setup>
import { computed } from 'vue'
const props = defineProps({
  card: {
    type: Object,
    required: true
  },
  elementColor: {
    type: String,
    default: 'red'
  }
})
const beforeClasses =
  ' before:content-[""] before:w-1.5 before:h-1.5 before:flex before:rounded-full before:absolute before:left-1 before:top-1/2 before:-translate-y-1/2'
const computedTitleStyles = computed(() => {
  return [props.card.before ? `--my-bg: ${props.elementColor}` : '']
})
const computedTitleClasses = computed(() => {
  return [
    props.card.before ? 'pl-5' + beforeClasses : null,
    'uppercase card__title mb-4 text-sm relative'
  ]
})
</script>
<style lang="scss" scoped>
.card__title {
  color: #93969c;
  &:before {
    background-color: var(--my-bg);
  }
}
</style>
