<template>
  <div class="flex h-16 w-full items-center justify-between p-7">
    <div class="flex h-12 w-32 place-items-center justify-between p-1"></div>
    <ul class="x-justify-center z-50 hidden flex-auto gap-2 sm:flex">
      <!-- menu deployée -->

      <li class="hover-underline-animation mx-2 flex flex-auto font-lato text-base text-white">
        <router-link to="/">Accueil</router-link>
      </li>
      <li class="hover-underline-animation mx-2 flex flex-auto font-lato text-base text-white">
        <router-link to="/apropos">À propos</router-link>
      </li>
      <li class="hover-underline-animation mx-2 flex flex-auto font-lato text-base text-white">
        <router-link to="/">Projets</router-link>
      </li>

      <li class="hover-underline-animation mx-2 flex flex-auto font-lato text-base text-white">
        <a href="../public/document/CV.pdf" download>CV</a>
      </li>

      <li class="hover-underline-animation mx-2 flex flex-auto font-lato text-base text-white">
        <router-link to="/contact">Contact</router-link>
      </li>
    </ul>

    <button
      class="relative z-111 text-xl sm:hidden"
      aria-haspopup="true"
      aria-controls="menu"
      :aria-expanded="menuOuvert"
      @click="menuOuvert = !menuOuvert"
    >
      <menu-hamburger-portfolio class="flex w-7" />
    </button>

    <div
      id="menu"
      class="fixed inset-0 z-100 translate-x-full overflow-y-hidden bg-noir motion-safe:transition-transform motion-safe:duration-1000"
      :class="{ 'translate-x-0': menuOuvert }"
    >
      <div class="mt-7">
        <p class="ml-4 inline-block pr-3 font-montserrat text-4xl text-white">Portfolio</p>
        <p class="ml-4 inline-block font-montserrat text-2xl text-white">Valentin Saraiva</p>
      </div>

      <ul class="ml-4 flex h-screen flex-col justify-evenly font-montserrat text-5xl text-white">
        <li class=""><router-link to="/">Accueil </router-link></li>
        <li class=""><router-link to="/apropos">À propos </router-link></li>
        <li class=""><router-link to="/">Projets </router-link></li>
        <li class=""><router-link to="/contact">Contact</router-link></li>
      </ul>
    </div>

    <!-- "z-50" place le menu eu dessus de tous les autes éléments.
            "relative" est indispensable avec un z- sinon ce dernier n'est pas pris en compte
            "sm:hidden permet de cacher l'élément lorsque l'écran est moins large que 640px    -->
  </div>
</template>

<script>
import HamburgerMenueVue from "./icons/HamburgerMenue.vue";
import MenuHamburgerPortfolio from "./icons/HamburgerMenu.vue";

export default {
  name: "navbar",
  components: { HamburgerMenueVue, MenuHamburgerPortfolio },
  data() {
    return {
      menuOuvert: false,
    };
  },
};
</script>
