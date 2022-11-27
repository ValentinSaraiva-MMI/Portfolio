<template>
  <figure
    class="m-4 ml-[20%] flex h-[47vh] w-[58.84vw] flex-col bg-[#141414] md:mx-auto md:h-[55vh] md:w-[43.8vw] lg:ml-0 lg:h-[65vh] lg:w-[44.8vw] xl:ml-0 xl:h-[59vh] xl:w-[24.8vw]"
  >
    <div class="ml-4 mt-4">
      <p class="font-lato text-base font-light text-white md:text-base lg:text-base xl:text-base">
        {{ date }}
      </p>
      <h4 class="font-lat mt-2 text-2xl font-medium text-white md:text-2xl lg:text-3xl xl:text-4xl">
        {{ titre }}
      </h4>

      <h5 class="text-base font-medium text-white md:text-base lg:text-lg xl:text-xl">
        {{ tache }}
      </h5>
    </div>

    <img
      class="my-auto h-[60%] max-h-96 w-[35%] self-center sm:h-[55%] sm:w-[25%] md:h-[55%] md:w-[35%] lg:h-[53%] lg:w-[45%] xl:h-[55%] xl:w-[40%]"
      :src="image"
      alt="image de projets"
    />
    <a class="viewmore">
      <span class="tag">Voir projet</span>
      <span class="arrow arrow--right"></span>
    </a>
  </figure>
</template>

<script>
import { stringifyQuery } from "vue-router";

export default {
  name: "projetborne",
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
