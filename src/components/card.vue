<template>
  <figure class="m-4 flex h-auto w-auto flex-col">
    <img class="h-44 w-44 rounded-t-lg object-cover" :src="image" alt="image de personne" />

    <p class="mt-2 text-center text-3xl font-bold text-white">
      {{ nom }}
    </p>

    <p class="text-center text-xs font-bold text-white">
      {{ job }}
    </p>
  </figure>
</template> 

<script>
export default {
  name: "card",
  components: {},
  props: {
    image: {
      type: String,
    },

    nom: {
      type: String,
    },
    job: {
      type: String,
    },
  },
};
</script>
