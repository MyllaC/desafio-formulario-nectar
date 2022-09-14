<template>
<button :class="`nectar-button nectar-button__${color} ${classes} group`">
  <IconBase :class="`nectar-button__${color}__icon`">
    <slot name="icon"></slot>
  </IconBase>

  <span><slot name="label"></slot></span>
</button>
</template>

<script>
import './styles.sass'
import IconBase from "../Icons/IconBase.vue";
export default {
  name: "ButtonBase",
  components: {IconBase},
  props: {
    hasIcon: false,
    color: {
      type: String,
      default: 'secondary',
      validator(value) {
        return ['primary', 'secondary', 'danger', 'primary-outline'].includes(value)
      }
    }
  },
  data() {
    return {
      classes: ''
    }
  },
  beforeMount() {
    // this.$slots
    if (this.hasIcon) {
      this.classes += ' nectar-button__has-icon '
    }
  },
}
</script>