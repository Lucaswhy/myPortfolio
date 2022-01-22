<template>
  <div class="container-fluid">
    <footer>
      <div class="footer__box">
        <span> © {{year}} Lucas Herculano Rodrigues | Fullstack Developer | Brasil - São Paulo | Portfolio Pessoal </span>
        <div>
          <a target="_blank" href="https://api.whatsapp.com/send?phone=5511961994798&text=Ol%C3%A1!%20Tudo%20bom??"><i class="bi bi-whatsapp"/></a>
          <a target="_blank" href="https://www.linkedin.com/in/lucas-rodrigues-ab797b190/"><i class="bi bi-linkedin"/></a>
          <a target="_blank" href="https://github.com/Lucaswhy"><i class="bi bi-github"/></a>
          <a href="mailto:lucas_herculano_2010@hotmail.com"><i class="bi bi-envelope-fill"/></a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data(){
    return{
    year: new Date().getFullYear()
    }
  }
}
</script>

<style src="./style.scss" lang="scss" scoped>

</style>