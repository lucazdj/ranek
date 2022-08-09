import Vue from 'vue';
import App from './App.vue';
import PaginaCarregando from './components/PaginaCarregando.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.component('PaginaCarregando', PaginaCarregando);

Vue.filter('numeroPreco', (valor) => {
  // eslint-disable-next-line no-param-reassign
  valor = Number(valor);
  if (Number.isNaN(valor)) {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }
  return '';
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
