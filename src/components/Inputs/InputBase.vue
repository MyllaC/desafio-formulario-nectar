<template>
  <div class="input">
    <label class="input-label" :for="`${inputName}`">
      <span><slot name="label"></slot></span>
      <span v-if="isRequired" ><sup>*</sup></span>
    </label>

    <input class="input-container" :id="`${inputName}`" :type="`${inputType}`"
           :placeholder="`${placeHolder}`" required
           :value="modelValue"
           v-on:input="onInput">


  </div>
</template>

<script>
import './styles.sass'

export default {
  name: "InputBase",
  props: {
    modelValue: '',
    isRequired: false,
    inputName: {
      type: String
    },
    placeHolder: {
      type: String
    },
    inputType: {
      type: String,
      default: 'text',
      validator(value) {
        return ['text', 'email', 'password', 'tel', 'number'].includes(value)
      }
    }
  },
  data() {
    return {
    }
  },
  methods: {
    onInput(event) {
      this.$emit("update:modelValue", event.target.value)
      this.$emit("update");
    }
  }

}
</script>

