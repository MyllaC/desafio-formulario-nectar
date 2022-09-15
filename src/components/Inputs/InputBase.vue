<template>
  <div class="input">
    <label class="form-label" :for="`${inputName}`">
      <span><slot name="label"></slot></span>
      <span v-if="isRequired"><sup>*</sup></span>
    </label>

    <input class="form-input" :id="`${inputName}`" :type="`${inputType}`"
           :placeholder="`${placeHolder}`" required>

  </div>
</template>

<script>
import './styles.sass'

export default {
  name: "InputBase",
  props: {
    isRequired: false,
    inputName: {
      type: String
    },
    placeHolder: {
      tytpe: String
    },
    inputType: {
      type: String,
      default: 'text',
      validator(value) {
        return ['text', 'email', 'password', 'tel', 'number'].includes(value)
      }
    }
  },

}
</script>

