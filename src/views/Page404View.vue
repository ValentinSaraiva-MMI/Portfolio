<template>
  <section>
    <div class="bg-black text-white">
      <div class="flex h-screen">
        <img src="/public/images/4044.png" alt="Image de la page 404" />
      </div>

      <div class="-mt-20 flex justify-center">
        <RouterLink to="/">
          <button
            class="h-12 border-2 border-black px-12 text-base text-black transition-[color,box-shadow] duration-[400ms,450ms] hover:border-noir hover:text-noir hover:shadow-[inset_14rem_0_0_0] hover:shadow-white lg:text-lg"
          >
            Accueil <i class="fa-regular fa-arrow-down-to-bracket text-white"></i>
          </button>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Page404View ",
};
</script>
