<template>
  <div class="footer">
    <div class="footer-left-container">

      <ButtonBase color="danger" :has-icon="true" :has-label="false">
        <template v-slot:icon><IconTrashAlt/></template>
      </ButtonBase>

      <ButtonIconLabel color="secondary" :has-icon="true" :has-label="true">
        <template v-slot:icon>
          <IconPowerOnOff/>
        </template>
        Desativar
      </ButtonIconLabel>



    </div>


    <ButtonIconLabel color="primary" :has-icon="false" :has-label="true">
      Salvar
    </ButtonIconLabel>
  </div>
</template>

<script>
import '../styles/footer.sass'


import IconPowerOnOff from "./Icons/Icons/IconPowerOnOff.vue";
import ButtonBase from "./Buttons/ButtonBase.vue";
import IconTrashAlt from "./Icons/Icons/IconTrashAlt.vue";
import ButtonIcon from "./Buttons/ButtonIcon.vue";
import ButtonIconLabel from "./Buttons/ButtonIconLabel.vue";

export default {
  name: "Footer",
  components: {
    ButtonIconLabel,
    ButtonIcon, IconTrashAlt, ButtonBase, IconPowerOnOff}
}
</script>

