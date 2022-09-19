<template>
  <div>
    <div class="flex items-center space-x-4">
      <div class="input">
        <label class="input-label" :for="`${inputName}`">
          <span><slot name="label"></slot></span>
          <span v-if="isRequired"><sup>*</sup></span>
        </label>

        <input class="input-container" :id="`${inputName}`" type="password"
               :placeholder="`${placeHolder}`" required
               :value="modelValue"
               v-on:input="onInput">

      </div>
      <ButtonIconLabel color="secondary" :has-icon="true" :has-label="true"
                       @click="changePassword">
        <template v-slot:icon>
          <IconEditPencil/>
        </template>
        Alterar
      </ButtonIconLabel>
    </div>

    <div class="flex full space-x-3">
      <div v-if="box" class="flex relative w-1/2">
        <div class="input">
          <label class="input-label" :for="`${inputName}`">
            <span><slot name="label"></slot></span>
            <span v-if="isRequired"><sup>*</sup></span>
          </label>

          <input class="input-container" :id="`${inputName}`" :type="inputType"
                 :placeholder="`${placeHolder}`" required
                 :value="modelValue"
                 v-on:input="onInput">

        </div>
        <span v-if="type">
          <icon-base class="absolute top-9 left-50 mr-2 right-0 fixed"
                     @click="changePasswordType">
            <IconEyeOpen/>
          </icon-base>
        </span>
        <span v-else="!type">
          <IconBase class="absolute top-9 left-50 mr-2 right-0 fixed"
                            @click="changePasswordType">
          <IconEyeClosed/>
        </IconBase>
        </span>

      </div>

      <div v-if="box" class="flex relative w-1/2">
        <div class="input">
          <label class="input-label" :for="`${inputName}`">
            <span><slot name="label"></slot></span>
            <span v-if="isRequired"><sup>*</sup></span>
          </label>

          <input class="input-container" :id="`${inputName}`" :type="inputType"
                 :placeholder="`${placeHolder}`" required
                 :value="modelValue"
                 v-on:input="onInput">

        </div>
        <span v-if="type">
          <icon-base class="absolute top-9 left-50 mr-2 right-0 fixed"
                     @click="changePasswordType">
            <IconEyeOpen/>
          </icon-base>
        </span>
        <span v-else="!type">
          <IconBase class="absolute top-9 left-50 mr-2 right-0 fixed"
                    @click="changePasswordType">
          <IconEyeClosed/>
        </IconBase>
        </span>

      </div>


    </div>

  </div>


</template>

<script>
import InputBase from "./InputBase.vue";
import ButtonIconLabel from "../Buttons/ButtonIconLabel.vue";
import IconEditPencil from "../Icons/Icons/IconEditPencil.vue";
import ButtonBase from "../Buttons/ButtonBase.vue";
import IconEyeOpen from "../Icons/Icons/IconEyeOpen.vue";
import IconEyeClosed from "../Icons/Icons/IconEyeClosed.vue";
import IconBase from "../Icons/IconBase.vue";

export default {
  name: "InputPassword",
  components: {
    IconBase,
    IconEyeOpen,
    IconEyeClosed,
    ButtonBase, IconEditPencil, ButtonIconLabel, InputBase
  },

  data() {
    return {
      box: false,
      type: false,
      inputType: {
        type: String,
        default: 'password'
      }
    }
  },
  props: {
    modelValue: '',
    isRequired: false,
    inputName: '',
    placeHolder: {
      type: String
    }
  },
  methods: {
    changePassword() {
      this.box = !this.box
      if (this.type === false) {
        this.inputType = 'password'
      } else {
        this.inputType = 'text'
      }
    },
    changePasswordType() {
      this.type = !this.type

      if (this.type === false) {
        this.inputType = 'password'
      } else {
        this.inputType = 'text'
      }
    },
    onInput(event) {
      this.$emit("update:modelValue", event.target.value)
      this.$emit("update");
    }
  }

}
</script>

<style scoped>

</style>