<template>
  <section>
    <div class="bg-black text-white">
      <div class="flex h-screen">
        <img src="/images/4044.png" alt="Image de la page 404" />
      </div>

      <div class="-mt-20 flex justify-center">
        <RouterLink to="/">
          <boutonstroke2>
            <P>Retour à l'acceuil</P>
          </boutonstroke2>
        </RouterLink>
      </div>
    </div>
  </section>
</template>


<script>
/*
import boutonstroke from '../components/BoutonstrokeView.vue';
import boutonstroke2 from '../components/BoutonstrokeblackView.vue' */
export default {
  name: "Page404View ",
  components: {},
};
</script>

