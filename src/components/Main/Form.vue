<template>
  <form class="form">
    <label class="form-label" for="name">Nome <sup>*</sup></label>
    <input class="form-input" id="name" type="name" placeholder="Seu nome" required>

    <label class="form-label" for="email">E-mail/Login<sup>*</sup></label>
    <input
        class="form-input"
        id="email"
        type="email"
        placeholder="E-mail"
        required/>

    <label class="form-label" for="password">Senha</label>
    <div class="flex items-center space-x-4">
      <input class="flex-1 text-sm border-gray-200 border px-2 py-2 rounded focus:shadow-sm placeholder-slate-400" id="password" minlength="6" type="password" placeholder="senha"/>
      <button class="h-8 flex space-x-1 group items-center">
        <IconBase>
          <IconEditPencil class="text-gray-600 transition ease-in-out delay-100 group-hover:text-blue-500"/>
        </IconBase>
        <p class="text-gray-600 transition ease-in-out delay-100 font-bold group-hover:text-blue-500">Alterar</p>
      </button>
    </div>

    <label class="form-label" for="role">Cargo</label>
    <select class="form-input" id="role">
      <option value="Buscar por um cargo...">Buscar por um cargo...</option>
      <option value="vendedor">Vendedor</option>
    </select>

    <label class="form-label" for="cellphone">Celular</label>
    <input class="form-input" id="cellphone" type="tel" value="(62)99270-6628">

    <div class="flex flex-row items-start justify-between pb-6">
      <label class="form-label-dif" for="absent">Ausente</label>
      <toggle v-model="toggleState" />
    </div>

    <div class="form-container">
      <label class="form-label-dif" for="ramal">Ramal</label>
      <input class="form-input-dif" id="ramal" type="text" value="123" step="none"/>
    </div>

    <div class="form-container">
      <label class="form-label-dif" for="discount">Desconto máximo em %</label>
      <input class="form-input-dif" id="discount" type="number" value="50" step="none"/>
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
}
</script>

<script setup>
import {ref} from "vue";
import toggle from "./toggle.vue";
import IconBase from "../Icons/IconBase.vue";
import IconEditPencil from "../Icons/Icons/IconEditPencil.vue";
const toggleState = ref(false)
</script>

