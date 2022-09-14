<template>
  <ButtonBase :color="color" :has-icon="true">
    <template v-slot:icon>
      <slot></slot>
    </template>
  </ButtonBase>
</template>

<script>
import ButtonBase from "./ButtonBase.vue";
export default {
  name: "ButtonIcon",
  components: {ButtonBase},
  props: {
    color: String,
  }
}
</script>