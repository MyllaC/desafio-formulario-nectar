<template>
  <div class="w-1/2 flex flex-col items-center space-y-4">
    <img src="https://images.unsplash.com/photo-1589526261866-ab0d34f8dc19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80">
    <div class="flex space-x-4">
      <button class="flex items-center space-x-1 group">
        <IconBase>
          <IconCamera class="text-gray-600 group-hover:text-blue-500"/>
        </IconBase>
        <span class="group-hover:text-blue-500">Enviar</span>
      </button>
      <button class="px-2 ">
        <IconBase>
          <IconTrashAlt class="bg-red-500 text-lg border border-red-500"/>
        </IconBase>
      </button>
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
export default {
  name: "Photo",
  components: {IconTrashAlt, IconCamera, IconBase}
}
</script>

