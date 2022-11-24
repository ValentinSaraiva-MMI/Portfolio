<template>
  <a name="top"></a>
  <div class="bg-noir">
    <div class="inline-flex w-full">
      <RouterLink class="my-auto" to="/">
        <logo-valentin class="ml-3 w-14" />
      </RouterLink>
      <navbar />
    </div>
    <!--NETLIFY INFOMANIAK-->
    <router-view />
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";

//logo Menu Hamburger
import MenuHamburger from "../src/components/icons/HamburgerMenue.vue";

//icons
import guillement from "./components/icons/guillement.vue";

//logo valentin
import LogoValentin from "./components/icons/Logo.vue";

//logo reseau sociaux

//logo map,localisation, mail

//component

import footer from "./components/footer.vue";
import navbar from "./components/navbar.vue";
import projetcard from "./components/projet.vue";
import cardComponent from "./components/card-component.vue";

export default {
  components: {
    footer,
    LogoValentin,
    guillement,
    navbar,
    cardComponent,
    projetcard,
  },
};
</script>
