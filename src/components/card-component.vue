<template>
  <!--h-[156px] w-[175px] md:h-[184px] md:w-[207px] lg:h-[246px] lg:w-[260px] xl:h-[308px] xl:w-[325px]-->

  <div class="relative h-[280px] w-[260px] md:ml-5 md:h-[246px] md:w-[260px] lg:h-[308px] lg:w-[325px]">
    <img :src="image" class="absolute left-[-1px] top-[-1px] w-auto sm:h-[115px] md:h-[144px] lg:h-[180px]" alt="image logiciel" />

    <p class="absolute right-20 top-48 w-[325px] text-center font-lato text-[28px] text-white sm:-mt-14 md:-mt-7 xl:mt-1 xl:mb-1">
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
