<template>
  <main class="Screen">
    <div class="Form">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  </main>
</template>

<script>
import './styles/global.sass'
import './assets/tailwind.css'
import Header from "./components/Header.vue";
import Main from "./components/Main/Main.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {Footer, Main, Header}
}


</script>

