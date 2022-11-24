<template>
  <div class="bg-Beige-150">
    <h5 class="font-oswald text-3xl text-noir">Liste des artistes</h5>
    <div class="h-2 w-[200px] bg-noir"></div>

    <input type="text" v-model="filter" class="border-2" />
    <button type="button" title="Filtrage">filtrage</button>
    <div v-for="artiste in filterByArtistes" :key="artiste.id">
      <div>
        <p class="mt-3 mb-2 font-oswald text-noir">{{ artiste.nom }}</p>
        <img class="w-[80vh]" :src="artiste.image" alt="" />
      </div>

      <BoutonstrokeblackView type="button" @click="deleteArtistes(artiste.id)" title="Supprimer"> Supprimer </BoutonstrokeblackView>

      <div v-if="affformajout">
        <creation-view />
        <button @click="affformajout = false">cancel</button>
      </div>
    </div>
    -->
    <button v-if="!affformajout" @click="affformajout = true">ajout</button>
    <!--   boucle -->
  </div>
</template>


<script>
import { getStorage, ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";
import Bouton1View from "../components/Bouton1View.vue";
import BoutonstrokeblackView from "../components/BoutonstrokeblackView.vue";

import {
  getFirestore,
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";
import CreationView from "./CreationView.vue";

export default {
  data() {
    return {
      listeArtistes: [],
      nom: null,
      affformajout: false,
      filter: "",
    };
  },

  components: { Bouton1View, BoutonstrokeblackView, CreationView },
  computed: {
    orderByArtistes: function () {
      return this.listeArtistes.sort(function (a, b) {
        if (a.nom < b.nom) return -1;
        if (a.nom > b.nom) return 1;
        return 0;
      });
    },

    filterByArtistes: function () {
      if (this.filter.length > 0) {
        let filter = this.filter.toLowerCase();
        return this.orderByArtistes.filter(function (artistes) {
          return artistes.nom.toLowerCase().includes(filter);
        });
      } else {
        return this.orderByArtistes;
      }
    },
  },
  mounted() {
    this.getArtistes();
  },
  methods: {
    async getArtistes() {
      const firestore = getFirestore();
      const dbArtistes = collection(firestore, "artistes");
      const query = await onSnapshot(dbArtistes, (snapshot) => {
        console.log("query", query);
        this.listeArtistes = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        this.listeArtistes.forEach(function (artistes) {
          const storage = getStorage();
          const spaceRef = ref(storage, "artistes/" + artistes.image);
          getDownloadURL(spaceRef)
            .then((url) => {
              artistes.image = url;
              console.log("artistes", artistes);
            })
            .catch((error) => {
              console.log("erreur downloadUrl", error);
            });
        });
        console.log("listeArtistes", this.listeArtistes);
      });
    },

    async createArtistes() {
      const firestore = getFirestore();
      const dbArtistes = collection(firestore, "artistes");
      const docRef = await addDoc(dbArtistes, {
        Nom: this.Nom,
      });
      //console.log('document créé avec le id : ', docRef.id);
    },
    async deleteArtistes(id) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "artistes", id);
      await deleteDoc(docRef);
    },
  },
};
</script>
