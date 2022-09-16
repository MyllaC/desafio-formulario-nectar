<template>
  <body class="Main">
  <Nav/>
  <div class="flex space-x-2 py-5 space-x-10 ">
    <Form v-model="user"/>
    <Photo/>
  </div>

  </body>
</template>

<script>
import '../../styles/main.sass'
import Nav from "./Nav.vue";
import Form from "./Form.vue";
import Photo from "./Photo.vue";

export default {
  name: "Main",
  components: {Photo, Form, Nav},
  data() {
    return {
      user: {
        username: 'Camila',
        email: 'email',
        password: 'senha',
      }
    }
  }
}
</script>