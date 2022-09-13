<template>
  <header class="header">
    <IconBase>
      <IconAvatarAlt/>
    </IconBase>
    <span  class="header-options">
      <p class="header-options-user">Edição de usuário</p>
      <p class="header-options-userName">Eduardo M</p>
    </span>

    <p class="header-iconx">X</p>
  </header>
</template>

<script>

import '../styles/header.sass'
import IconBase from "./Icons/IconBase.vue";
import IconAvatarAlt from "./Icons/Icons/IconAvatarAlt.vue";
export default {
  name: "Header",
  components: {
    IconAvatarAlt,
    IconBase

  }
}
</script>

