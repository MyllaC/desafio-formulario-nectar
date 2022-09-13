<template>
  <div class="footer">
    <div class="footer-left-container">
      <button class="transition ease-in-out delay-100 footer-button-trash hover:bg-red-500 hover:border-red-500">
        <IconBase>
          <IconTrashAlt class="transition ease-in-out delay-100 group-hover:text-blue-500" />
        </IconBase>
      </button>

      <button class="footer-button-power group">
        <IconBase >
          <IconPowerOnOff class="transition ease-in-out delay-100 group-hover:text-blue-500"/>

        </IconBase>
        <p class="transition ease-in-out delay-100 group-hover:text-blue-500">Desativar</p>
      </button>
    </div>


    <button class="footer-button-save">
      Salvar
    </button>
  </div>
</template>

<script>
import '../styles/footer.sass'
import IconBase from "./Icons/IconBase.vue";
import IconTrashAlt from "./Icons/Icons/IconTrashAlt.vue";
import IconPowerOnOff from "./Icons/Icons/IconPowerOnOff.vue";

export default {
  name: "Footer",
  components: {IconPowerOnOff, IconTrashAlt, IconBase}
}
</script>

