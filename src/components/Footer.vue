<template>
  <div class="footer">
    <div class="footer-left-container">
      <ButtonSecondaryDestructive/>
      <ButtonSecondaryOutlined label="desativar">
        <IconPowerOnOff/>
      </ButtonSecondaryOutlined>

      <ButtonBase color="primary">
        <template v-slot:icon><IconTrashAlt/></template>
      </ButtonBase>

      <ButtonIcon>
        <IconTrashAlt/>
      </ButtonIcon>

      <ButtonIconLabel>
        <template v-slot:icon>
          <IconTrashAlt/>
        </template>
        teste
      </ButtonIconLabel>

    </div>


    <button class="footer-button-save">
      Salvar
    </button>
  </div>
</template>

<script>
import '../styles/footer.sass'


import ButtonSecondaryDestructive from "./Buttons/ButtonSecondaryDestructive.vue";
import ButtonSecondaryOutlined from "./Buttons/ButtonSecondaryOutlined.vue";
import IconPowerOnOff from "./Icons/Icons/IconPowerOnOff.vue";
import ButtonBase from "./Buttons/ButtonBase.vue";
import IconTrashAlt from "./Icons/Icons/IconTrashAlt.vue";
import ButtonIcon from "./Buttons/ButtonIcon.vue";
import ButtonIconLabel from "./Buttons/ButtonIconLabel.vue";

export default {
  name: "Footer",
  components: {
    ButtonIconLabel,
    ButtonIcon, IconTrashAlt, ButtonBase, IconPowerOnOff, ButtonSecondaryOutlined, ButtonSecondaryDestructive}
}
</script>

