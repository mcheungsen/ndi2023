<script>
import NavBar from './components/NavBar.vue';
import Style from './components/Style.vue';
import './style.css';
export default {
  methods: {
    async changeStylesheet() {
      const newStylesheet = this.isBlueTheme ? 'style.css' : 'noel.css';

      try {
        // Importer dynamiquement le fichier CSS en utilisant import()
        const module = await import(`./${newStylesheet}`);

        // Supprimer l'ancienne feuille de style (s'il y en a une)
        const oldLink = document.getElementById('dynamicStylesheet');
        if (oldLink) {
          oldLink.remove();
        }

        // Créer un nouveau lien pour le nouveau fichier CSS importé
        const link = document.createElement('link');
        link.id = 'dynamicStylesheet';
        link.rel = 'stylesheet';
        link.href = module.default;
        document.head.appendChild(link);

        // Inverser le thème
        this.isBlueTheme = !this.isBlueTheme;
      } catch (error) {
        console.error('Erreur lors du chargement du fichier CSS :', error);
      }
    }
  }
};
</script>

<template>
  <NavBar/>
  <select v-model="selected">
  <option disabled value="">Choisissez</option>
  <option>Style de Base</option>
  <option>Noël</option>
  <option>Horreur</option>
  <option>Arc-en-ciel</option>
</select>
<button @click="changeStylesheet">Changer de thème</button>
  <router-view></router-view>
</template>

<style>
</style>
