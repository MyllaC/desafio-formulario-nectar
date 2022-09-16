<template>
  <main class="Screen">
    <div class="Form">

      <Header :user="user"/>
      <div class="Main">
        <Nav/>
        <div class="flex py-5 ">
          <Form v-model="user"/>
          <Photo :user="user"/>
        </div>

      </div>
      <Footer/>
    </div>
  </main>
</template>

<script>
import './styles/main.sass'
import './styles/global.sass'
import './assets/tailwind.css'
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Nav from "./components/Nav.vue";
import Form from "./components/Form.vue";
import Photo from "./components/Photo.vue";

export default {
  components: {Photo, Form, Nav, Footer, Header},
  data() {
    return {
      user: {
        username: 'testeCamila',
        email: 'nectarteste@gmail.com',
        password: 'teste123',
      }
    }
  }
}


</script>

