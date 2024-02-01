<template>
  <button :class="computedBtnClasses" class="rounded relative myBtn" :style="computedBtnStyles">
    <slot></slot>
  </button>
</template>
<script setup>
import { computed } from 'vue'
const props = defineProps({
  beforeElem: {
    type: Boolean,
    default: true
  },
  elementColor: {
    type: String,
    default: 'red'
  },
  bgColor: {
    type: String,
    default: '#212226'
  },
  color: {
    type: String,
    default: '#71717A'
  },
  active: {
    type: Boolean,
    default: false
  }
})

const beforeClasses =
  ' before:content-[""] before:w-1.5 before:h-1.5 before:flex before:rounded-full before:absolute before:left-4 before:top-1/2 before:-translate-y-1/2'
const computedBtnClasses = computed(() => {
  return [
    props.beforeElem ? 'pl-7 pr-4' + beforeClasses : 'px-4 py-2',
    props.active ? 'active' : null
  ]
})
const computedBtnStyles = computed(() => {
  return [
    {
      'background-color': props.bgColor,
      color: props.color
    },
    props.beforeElem ? `--my-bg: ${props.elementColor}` : ''
  ]
})
</script>
<style lang="scss" scoped>
.myBtn::before {
  background-color: var(--my-bg);
}
.myBtn.active {
  background-color: #0077f7 !important;
  color: #fff !important;
}
</style>
