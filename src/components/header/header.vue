<template>
  <div>
     <div class="container-fluid">
        <h1 class="menu__logo">Lucas Herculano</h1>
            <div class="box__hamburger" @click="isOpened = !isOpened">
              <div style="margin-top: 0;"></div>
              <div></div>
              <div></div>
            </div>
            <nav :style="isOpened == false ? '' : 'display:flex;'" class="menu__item">
              <router-link tag="li" to="/" class="nav-link">Home</router-link>
              <router-link tag="li" to="/sobre-mim" class="nav-link">Sobre Mim</router-link>
              <router-link tag="li" to="/habilidade" class="nav-link">Habilidades</router-link>
              <router-link tag="li" to="/projeto" class="nav-link">Projetos</router-link>
              <router-link tag="li" to="/contato" class="nav-link">Contato</router-link>
              <div @click="isDropped = !isDropped">
                <div class="menu__arrow" :style="isDropped == false ? '' : 'transform:rotate(180deg)'" />
                <img src="@/assets/brazil.jpg">
                <transition name="fade">
                  <a href="./home-en">
                    <div v-if="isDropped" class="menu--drop">
                        <img src="@/assets/united-states.jpg">
                    </div>  
                  </a>
                </transition>
              </div>
            </nav>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
    isDropped: false,
    isOpened: false,
    };
  },
}
</script>

<style src="./style.scss" lang="scss" scoped>
</style>