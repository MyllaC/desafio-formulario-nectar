<template>
  <form class="form">

    <InputBase :isRequired="true" inputName="userName" inputType="text"
               placeHolder="Seu nome" required v-model="modelValue.username"
                @update="userUpdated()">
      <template v-slot:label>Nome</template>
    </InputBase>

    <InputBase :isRequired="true" inputName="userEmail" inputType="email"
               placeHolder="E-mail" required v-model="modelValue.email">
      <template v-slot:label>E-mail/Login</template>
    </InputBase>

    <div class="flex items-center space-x-4">
      <InputBase :isRequired="true" inputName="userPassword" inputType="password"
                 placeHolder="Sua senha" v-model="modelValue.password">
        <template v-slot:label>Senha</template>

      </InputBase>
      <ButtonIconLabel color="secondary" :has-icon="true" :has-label="true">
        <template v-slot:icon>
          <IconEditPencil/>
        </template>
        Alterar
      </ButtonIconLabel>
    </div>



    <label class="form-label" for="role">Cargo</label>
    <select class="form-input" id="role">
      <option value="Buscar por um cargo...">Buscar por um cargo...</option>
      <option value="vendedor">Vendedor</option>
    </select>


    <InputBase :isRequired="false" inputName="userCellphone" inputType="tel"
               placeHolder="(xx)xxxx-xxxx" >
      <template v-slot:label>Celular</template>
    </InputBase>

    <div class="flex flex-row items-start justify-between pb-6">
      <label class="form-label-dif" for="absent">Ausente</label>
      <toggle v-model="toggleState" />
    </div>

    <div class="form-container">
      <label class="form-label-dif" for="ramal">Ramal</label>
      <input class="form-input-dif" id="ramal" type="text" step="none"/>
    </div>

    <div class="form-container ">
      <label class="form-label-dif" for="discount">Desconto máximo em %</label>
      <input class="form-input-dif" id="discount" type="number" step="none"/>
    </div>


    <label class="form-label" for="obs">Observação</label>
    <textarea id="obs" wrap></textarea>

  </form>
</template>

<script>
import '../../styles/form.sass'


export default {
  name: "Form",
  components: {toggle},
  props: {
    modelValue: Object,
  },
  data() {
    return {
      username: '',
    }
  },
  methods: {
    userUpdated() {
      // alert('funcionou')
    }
  }
}
</script>

<script setup>
import {ref} from "vue";
import toggle from "./toggle.vue";

import IconEditPencil from "../Icons/Icons/IconEditPencil.vue";
import ButtonIconLabel from "../Buttons/ButtonIconLabel.vue";
import InputBase from "../Inputs/InputBase.vue";
const toggleState = ref(false)
</script>

