import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const Home = () => import(/* webpackChunkName: "portfolio-pt" */'./components/pt-br/home/home.vue');
const Sobre = () => import(/* webpackChunkName: "portfolio-pt" */'./components/pt-br/sobre/sobre.vue');
const Habilidade = () => import(/* webpackChunkName: "portfolio-pt" */'./components/pt-br/habilidade/habilidade.vue');
const Projeto = () => import(/* webpackChunkName: "portfolio-pt" */'./components/pt-br/projeto/projeto.vue');
const Contato = () => import(/* webpackChunkName: "portfolio-pt" */'./components/pt-br/contato/contato.vue');

const HomeEn = () => import(/* webpackChunkName: "portfolio-en" */'./components/en-us/home/home-en.vue');
const SobreEn = () => import(/* webpackChunkName: "portfolio-en" */'./components/en-us/sobre/sobre-en.vue');
const HabilidadeEn = () => import(/* webpackChunkName: "portfolio-en" */'./components/en-us/habilidade/habilidade-en.vue');
const ProjetoEn = () => import(/* webpackChunkName: "portfolio-en" */'./components/en-us/projeto/projeto-en.vue');
const ContatoEn = () => import(/* webpackChunkName: "portfolio-en" */'./components/en-us/contato/contato-en.vue');



const router = new Router({
    mode: 'history',
    routes: [{
        name: 'Home',
        path: '/',
        component: Home,
    }, {
        path: '/sobre-mim',
        component: Sobre,
      }, {
        path: '/habilidade',
        component: Habilidade,
      }, {
        path: '/projeto',
        component: Projeto,
      }, {
        path: '/contato',
        component: Contato,
      }, {
        path: '/home-en',
        component: HomeEn,
      }, {
        path: '/sobre-mim-en',
        component: SobreEn,
      }, {
        path: '/habilidade-en',
        component: HabilidadeEn,
      }, {
        path: '/projeto-en',
        component: ProjetoEn,
      }, {
        path: '/contato-en',
        component: ContatoEn,
      },
      {
        path: '*',
        redirect: '/',
      }],    
});
    
export default router;
    