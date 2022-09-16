<template>
  <div>
    <div class="flex items-center space-x-4">
      <InputBase :isRequired="true" inputName="userPassword" :type="inputType"
                 placeHolder="Sua senha" :value="modelValue">
        <template v-slot:label>Senha</template>
      </InputBase>
      <ButtonIconLabel color="secondary" :has-icon="true" :has-label="true"
                       @click="changePassword">
        <template v-slot:icon>
          <IconEditPencil/>
        </template>
        Alterar
      </ButtonIconLabel>
    </div>
    <div v-if="box" class="flex relative">
      <InputBase inputName="changePassword" inputType="password">
        <template v-slot:label>Senha </template>
      </InputBase>

      <IconBase class="absolute top-8 left-50 mr-2 right-0"
                @click="changePasswordType">
        <IconEyeClosedAlt/>
      </IconBase>
    </div>
  </div>


</template>

<script>
import InputBase from "./InputBase.vue";
import ButtonIconLabel from "../Buttons/ButtonIconLabel.vue";
import IconEditPencil from "../Icons/Icons/IconEditPencil.vue";
import ButtonBase from "../Buttons/ButtonBase.vue";
import IconEyeClosedAlt from "../Icons/Icons/IconEyeClosedAlt.vue";
import IconBase from "../Icons/IconBase.vue";
export default {
  name: "InputPassword",
  components: {
    IconBase,
    IconEyeClosedAlt,
    ButtonBase, IconEditPencil, ButtonIconLabel, InputBase},

  data() {
    return {
      box: false,
      type: false,
      inputType:''
    }
  },
  props: {
    modelValue: '',

  },
  methods: {
    changePassword() {
      this.box = !this.box
    },
    changePasswordType() {
      this.type = !this.type
    }
  },
  watch: {

  }
}
</script>

<style scoped>

</style>