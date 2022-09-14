<template>
  <ButtonBase>
    <template v-slot:icon>
      <slot name="icon"></slot>
    </template>
    <template v-slot:label>
      <slot></slot>
    </template>
  </ButtonBase>
</template>

<script>
import ButtonBase from "./ButtonBase.vue";
export default {
  name: "ButtonIconLabel",
  components: {ButtonBase},
  props: {
    color: String
  }
}
</script>