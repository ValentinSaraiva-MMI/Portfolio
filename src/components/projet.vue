<template>
  <figure class="m-4 flex h-[59vh] w-[24.8vw] flex-col bg-[#141414]">
    <div class="ml-4 mt-4">
      <p class="font-lato text-base font-light text-white">
        {{ date }}
      </p>
      <h4 class="font-lat mt-2 text-4xl font-medium text-white">
        {{ titre }}
      </h4>

      <h5 class="text-xl font-medium text-white">
        {{ tache }}
      </h5>
    </div>

    <img class="my-auto h-auto max-h-96 w-[85%] self-center" :src="image" alt="image de projets" />
    <a class="viewmore">
      <span class="tag">Voir projet</span>
      <span class="arrow arrow--right"></span>
    </a>
  </figure>
</template>

<script>
import { stringifyQuery } from "vue-router";

export default {
  name: "projetcard",
  components: {},
  props: {
    image: {
      type: String,
    },

    titre: {
      type: String,
    },

    tache: {
      type: String,
    },

    date: {
      type: String,
    },
  },
};
</script>
