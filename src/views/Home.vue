<!-- eslint-disable import/no-unresolved -->
<template>
  <section>
    <h1>👍 Compre ou Venda 👎</h1>
    <ProdutosBuscar />
    <ProdutosLista />
  </section>
</template>

<script>
// eslint-disable-next-line import/no-unresolved
import ProdutosBuscar from '@/components/ProdutosBuscar.vue';
// eslint-disable-next-line import/no-unresolved
import ProdutosLista from '@/components/ProdutosLista.vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'home',
  components: {
    ProdutosBuscar,
    ProdutosLista,
  },
};
</script>

<style scoped>
h1 {
  color: #87f;
  margin-top: 40px;
  font-size: 2rem;
  text-align: center;
}
</style>
