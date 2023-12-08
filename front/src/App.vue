<script setup>
import NavBar from './components/NavBar.vue';
import Style from './components/Style.vue';
import './style.css';

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
<div v-if="selected =='Noël'"></div>
  <router-view></router-view>
</template>

<style>
.dark-mode {
    @import './style.css';
}
.light-mode {
    @import './noel.css';
}
</style>
