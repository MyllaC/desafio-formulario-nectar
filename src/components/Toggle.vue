<template>
  <div :class="modelValue ? 'bg-green-500' : 'bg-gray-300'" @click="Toggle"
       class="w-10 transition-all duration-500 h-5 flex items-center rounded-full p-1">
    <div :class="{'translate-x-4': modelValue}"
         class="w-4 h-4 transition-all duration-500 transform bg-white rounded-full shadow-md"></div>
  </div>
</template>

<script>
export default {
  name: "Toggle",

}
</script>

<script setup>
const props = defineProps({
  modelValue:{
    type: Boolean
  }
})
const emit = defineEmits(['update:modelValue'])
function toggle(){
  emit('update:modelValue', !props.modelValue)
}
</script>

