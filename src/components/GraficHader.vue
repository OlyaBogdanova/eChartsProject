<template>
  <div class="flex gap-2">
    <button v-for="btn in btns" :key="btn" :class="getBtnClasses(btn)" @click="setActiveTab(btn)">
      {{ btn }}
    </button>
  </div>
</template>
<script setup>
const props = defineProps({
  btns: {
    type: Array,
    required: true
  },
  activeTab: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['setActiveTab'])
function setActiveTab(val) {
  emit('setActiveTab', val)
}
function getBtnClasses(btn) {
  const initiaClassList = 'rounded-md cursor-pointer py-2 px-4 relative'
  return [
    initiaClassList,
    props.activeTab === btn ? 'bg-blue-500 text-white' : ' bg-neutral-800 text-gray-500'
  ]
}
</script>
<style lang="scss" scoped>
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
</style>
