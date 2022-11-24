<template>
  <div class="relative h-[308px] w-[325px]">
    <img :src="image" class="absolute left-[-1px] top-[-1px] h-[180px] w-auto" alt="image logiciel" />
    <div class="absolute left-[-1px] top-[-1px] h-[260px] w-[325px]"></div>

    <p class="absolute right-20 top-48 w-[325px] text-center font-lato text-[28px] text-white">
      {{ nom }}
    </p>
  </div>
</template>

<script>
export default {
  name: "cardComponent",
  components: {},
  props: {
    image: {
      type: String,
    },

    nom: {
      type: String,
    },
  },
};
</script>
