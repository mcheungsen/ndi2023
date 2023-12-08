<script setup>

</script>

<template>
  <h1>About</h1>
  <p>Les boutons permettent de changer le style de la page actuelle jusqu'au prochain rechargement de la page.</p>
  <p>Le bouton reset permet de retrouver le thème de base.</p>
  <p>La page Ecology regroupe l'ensemble des ressources utiles pour bien commencer à déméler le vrai du faux. Rien de mieux que lire les documents officiels à la source plutôt que des résumés obscurs.</p>
  <p>Il n'y a pas de quiz mais vous pouvez faire le quiz de l'empreinte carbone, c'est amusant.</p>
  <p>Si vous vous perdez sur le site, vous pourrez jouer à un tetris déréglé par le changement climatique.(ps : n'importe quel url invalide vous y emmenera)</p>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
