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
              <router-link tag="li" to="/home-en" class="nav-link">Home</router-link>
              <router-link tag="li" to="/sobre-mim-en" class="nav-link">About Me</router-link>
              <router-link tag="li" to="/habilidade-en" class="nav-link">Skills</router-link>
              <router-link tag="li" to="/projeto-en" class="nav-link">Projects</router-link>
              <router-link tag="li" to="/contato-en" class="nav-link">Contact</router-link>
              <div @click="isDropped = !isDropped">
                <div class="menu__arrow" :style="isDropped == false ? '' : 'transform:rotate(180deg)'" />
                <img src="@/assets/united-states.jpg">
                <transition name="fade">
                  <a href="./">
                    <div v-if="isDropped" class="menu--drop">
                        <img src="@/assets/brazil.jpg">
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

<style src="../header/style.scss" lang="scss" scoped>
</style>