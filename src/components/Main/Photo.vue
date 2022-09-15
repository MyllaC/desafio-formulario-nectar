<template>
  <div class="w-1/2 flex flex-col items-center space-y-4">
    <img src="https://images.unsplash.com/photo-1589526261866-ab0d34f8dc19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80">
    <div class="flex space-x-4">
      <ButtonIconLabel color="secondary" :has-icon="true" :has-label="true">
        <template v-slot:icon>
          <IconCamera/>
        </template>
        Enviar
      </ButtonIconLabel>

      <ButtonBase color="danger" :has-icon="true" :has-label="false">
        <template v-slot:icon><IconTrashAlt/></template>
      </ButtonBase>
    </div>

    <h2>Nome do usuário</h2>
    <p>1@nectar.com</p>
  </div>
</template>

<script>
import '../../styles/photo.sass'
import IconBase from "../Icons/IconBase.vue";
import IconCamera from "../Icons/Icons/IconCamera.vue";
import IconTrashAlt from "../Icons/Icons/IconTrashAlt.vue";
import ButtonIconLabel from "../Buttons/ButtonIconLabel.vue";
import ButtonBase from "../Buttons/ButtonBase.vue";
export default {
  name: "Photo",
  components: {ButtonBase, ButtonIconLabel, IconTrashAlt, IconCamera, IconBase}
}
</script>

