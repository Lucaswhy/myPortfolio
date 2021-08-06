<template>
  <div id="app">
    <Header v-if="language == 'pt'"/>
    <HeaderEn v-if="language == 'en'"/>
    <div style="min-height: 80vh;">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/header/header.vue'
import HeaderEn from './components/header-en/header-en.vue'
import Footer from './components/footer/footer.vue'
export default {
  name: 'App',
  components: { Header, HeaderEn, Footer},
  data(){
    return{
    language: ''
    }
  },
  mounted(){
    let url = window.location.pathname;
    if (url.includes('en')) this.language = 'en';
    else this.language = 'pt';
  }
}
</script>

<style>
#app {
  font-family: 'Raleway Regular','Montserrat', Arial, sans-serif;
}

body {
  background-color: #2C3E50;
  background-image: linear-gradient(#2C3E50,#4CA1AF);
  min-height: 100vh;
}
</style>
