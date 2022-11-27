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

    <img class="my-auto h-auto max-h-96 w-[65%] self-center md:w-[85%] lg:w-[85%] xl:w-[85%]" :src="image" alt="image de projets" />
  </figure>
</template>

<script>
import { stringifyQuery } from "vue-router";

export default {
  name: "projetfirststone",
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
