<template>
  <div>
    <div class="container mt-4">
      <div class="div__resume">
          <div class="div--resume">
            <h2 class="mb-4">Lucas Herculano Rodrigues</h2> 
            <span>22 years old, university done, junior full stack developer, i love to work with Node.js and Vue.js,
               always doing courses to develops more projects and expand my skills. I have as an objective to grow my carrier as a developer.</span>
            <p>
              <a target="_blank" href="https://drive.google.com/file/d/1l4Uq5CLh38MdUMJdJT6PSBBMDRx6eMn-/view?usp=sharing"><button class="btn btn__download mt-4">Download CV</button></a>
            </p>
          </div>
        <div class="div__img">
          <figure>
            <img src="@/assets/lucash.jpg">
          </figure>
        </div>
      </div>

        <h2>Skills</h2>
        
        <div class="div__habilidade mt-4">
          <div class="div--habilidade">
            <i class="bi bi-lightbulb"/>
              <nav>
                <li>Always bringing solutions.</li>
                <li>Working with agile projects, mostly Scrum.</li>
                <li>Communicative to always bring the bestest ideas!</li>
              </nav>
          </div>
          <div class="div--habilidade">
            <i class="bi bi-laptop"/>
              <nav>
                <li>HTML, CSS3, Javascript, SASS, Vue.js</li>
                <li>Node.js, .NET core</li>
                <li>mySQL, SQLServer, MongoDB, etc...</li>
                <li>Capacity to learn any new technology.</li>
              </nav>
          </div>
          <div class="div--habilidade">
            <i class="bi bi-journal-check"/>
              <nav>
                <li>Experience with unit tests, usability, etc..</li>
                <li>Automated software testing with Selenium.</li>
              </nav>
          </div>
          <div class="div--habilidade">
            <i class="bi bi-emoji-smile"/>
            <i class="bi bi-emoji-smile"/>
              <nav>
                <li>QA experience bringing the best for the final user.</li>
                <li>Always participative in reunions with the user.</li>
                <li>A great guy to work with =)</li>
              </nav>
          </div>
        </div>

        <h2>Projects</h2>

        <div class="div__projeto mt-4">
          <div class="div__descricao">
        <span>
          I always doing projects to apply my skills learned in my studies/courses, all of them can be founded in my Github page, and if you’re interessed, 
          you can see they in my <a href="./projeto-en">Project page</a>.</span>
              <p>
              <a target="_blank" href="https://github.com/Lucaswhy"><button class="btn btn__download">Lucaswhy <i class="bi bi-github mt-4"/></button></a>
              </p>
          </div>
          <div class="div__carrossel">
            <div class="div__arrow">
              <transition :name="slide"
              v-on:after-leave="afterLeave">
                <img v-if="animation" :src="image[position]" alt="">
              </transition>
              <div class="carrossel__left" @click="slide = 'slideback';animation = !animation; nextImage(0)">
                <i class="bi bi-arrow-left-circle-fill"></i>
              </div>
              <div class="carrossel__right" @click="slide = 'slide';animation = !animation; nextImage(1)">
                <i class="bi bi-arrow-right-circle-fill"></i>
              </div>
            </div>
          </div>
      </div>
    </div>
      <div class="div__contato mt-4">

        <div>
          <h2>Contact me!</h2>
          <span>lucas_herculano_2010@hotmail.com</span>
          <p>(11)-961994798</p>
        </div>
      </div>

      
  </div>
</template>

<script>
export default {

  data(){
    return{
      image: ['',
      'https://i.imgur.com/JNelO3l.jpg',
      'https://i.imgur.com/a3WobcC.jpg',
      'https://i.imgur.com/8t0is7f.jpg',
      'https://i.imgur.com/UwSjWkz.jpg',
      ],
      position: 1,
      animation: true,
      slide: 'slide'
    }
  },
  methods:{
    nextImage(index){
      if(index == 0){
        if((this.position - 1) == 0) this.position = this.image.length - 1;
        else{
          this.position = this.position - 1;
        }
      }
      if(index == 1){
        if((this.position + 1) == this.image.length) this.position = 1;
        else{
          this.position = this.position + 1;
        }
      }
    },
    afterLeave: function () {
      this.animation = true;
    },
  },


}
</script>

<style src="@/components/pt-br/home/style.scss" lang="scss" scoped>

</style>