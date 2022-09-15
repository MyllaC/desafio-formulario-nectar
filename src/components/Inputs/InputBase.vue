<template>
  <div class="input">
    <label class="input-label" :for="`${inputName}`">
      <span><slot name="label"></slot></span>
      <span v-if="isRequired" ><sup>*</sup></span>
    </label>

    <input class="input-container" :id="`${inputName}`" :type="`${inputType}`"
           :placeholder="`${placeHolder}`" required v-model="message">

  </div>
</template>

<script>
import './styles.sass'

export default {
  name: "InputBase",
  data(){
    return{
      message: ''
    }
  },
  props: {
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

}
</script>

