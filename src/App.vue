<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>

  <nav class="navbar bg-dark">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img src="@/assets/logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
        <span class="text-white">Poke Api</span>
      </router-link>
      
        <div class="col-md-3">
          <RouterLink active-class="active" to="/" class="btn btn-outline-primary ">Home</RouterLink>
          <RouterLink active-class="active" to="/about" class="btn btn-outline-primary ms-1">Pokemon</RouterLink>
          <RouterLink active-class="active" to="/favoritos" class="btn btn-outline-primary ms-1">Favoritos</RouterLink>
        </div>
    </div>
  </nav>
 
  <div class="container">
    <RouterView />
  </div>

 
</template>

