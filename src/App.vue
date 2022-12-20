<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>

  <nav class="navbar bg-light">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img src="@/assets/logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
        Bootstrap
      </router-link>
      
        <div class="col-md-2">
          <RouterLink active-class="active" to="/" class="btn btn-outline-primary col-md-6">Home</RouterLink>
          <RouterLink active-class="active" to="/about" class="btn btn-outline-primary col-md-5 ms-1">Pokemon</RouterLink>
        </div>
    </div>
  </nav>
 
  <div class="container">
    <RouterView />
  </div>

 
</template>

