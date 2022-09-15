<template>
<button :class="`nectar-button nectar-button__${color} ${classes} group`">
  <IconBase :class="`nectar-button__${color}__icon ${iconPadding}`">
    <slot name="icon"></slot>
  </IconBase>

  <span :class="`${textPadding}`"><slot name="label"></slot></span>
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
    hasLabel: false,
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
      classes: '',
      iconPadding: '',
      textPadding: '',
    }
  },
  beforeMount() {
    // this.$slots
    if (this.hasIcon && !this.hasLabel) {
      this.iconPadding += ' nectar-button__has-icon '
    } else if (!this.hasIcon && this.hasLabel) {
        this.iconPadding += ' nectar-button__has-label '
        this.textPadding += ' nectar-button__-label-padding '
      } else if (this.hasIcon && this.hasIcon) {
        this.iconPadding += ' nectar-button__has-label-and-icon '
        this.textPadding += ' nectar-button__-label-and-icon--padding'
      }
  },
}
</script>