<template>
  <div id="app" :class="{ 'hide-menu': !isMenuVisible }">
    <Header title="Cod3r - Base de conhecimento"
    :hideToggle="false"
    :hideUserDropdown="false"/>
    <Menu/>
    <Content/>
    <Footer/>
  </div>
</template>

<script>
import { mapState } from "vuex";
// @ é a referencia de src do projeto
import Header from "@/components/template/Header";
import Menu from "@/components/template/Menu";
import Content from "@/components/template/Content";
import Footer from "@/components/template/Footer";

export default {
  name: "App",
  components: { Header, Menu, Content, Footer },
  computed: mapState(["isMenuVisible"]),
};
</script>

<style>
* {
  font-family: "Lato", sans-serif;
}

body {
  margin: 0px;
}

#app {
  /* Suaviza a fonte na renderização */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  height: 100vh;
  display: grid;
  /* 3 linhas, primeira linha (header) ocupa 60px, content ocupa a pagina inteira, e 40px o rodape */
  grid-template-rows: 60px 1fr 40px;
  /* 2 colunas, coluna 300px: menu aplicacao, e o resto ocupa td */
  grid-template-columns: 270px 1fr;
  grid-template-areas: 
  /* primeira linha header ocupa de ponta a ponta */
    "header header"
    /* segunda linha */
    "menu content"
    /* ultima linhas */
    "menu footer";
}

#app.hide-menu {
  grid-template-areas:
    "header header"
    "content content"
    "footer footer";
}
</style>