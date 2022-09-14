<template>
  <button class="btn group transition-effect">
    <IconBase class="btn-icon transition-effect">
      <slot />
    </IconBase>

    <p class="btn-label transition-effect">{{ label }}</p>

  </button>
</template>

<script>

import './ButtonSecondaryOutlined.sass'
import IconBase from "../Icons/IconBase.vue";
import IconPowerOnOff from "../Icons/Icons/IconPowerOnOff.vue";
export default {
  name: "ButtonSecondaryOutlined",
  components: {IconPowerOnOff, IconBase},
  props: {
    label: String
  }
}
</script>

