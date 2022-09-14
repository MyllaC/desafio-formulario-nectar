<template>
  <button
      class="button transition-effect group">
    <IconBase class="button-icon-base transition-effect">
      <IconTrashAlt class="w-[10.67px] h-[12px]"/>
    </IconBase>

    <slot class=""/>

  </button>
</template>

<script>
import './ButtonSecondaryDestructive.sass'
import IconBase from "../Icons/IconBase.vue";
import IconTrashAlt from "../Icons/Icons/IconTrashAlt.vue";

export default {
  name: "ButtonSecondaryDestructive",
  components: {IconTrashAlt, IconBase}
}
</script>

