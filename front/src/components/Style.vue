<script>
export default {
  methods: {
    async noel() {
      try {
        // Importer dynamiquement le fichier CSS en utilisant import()
        const module = await import(`./../noel.css`);

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
    },
    async horreur() {
      try {
        // Importer dynamiquement le fichier CSS en utilisant import()
        const module = await import(`./../horreur.css`);

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
    },
    async reset(){
        location.reload()
        
    }
  }
};
</script>

<template>
    <button @click="noel">noel</button>
    <button @click="horreur">horreur</button>
    <button @click="reset">reset</button>
</template>

<style scoped>
</style>
