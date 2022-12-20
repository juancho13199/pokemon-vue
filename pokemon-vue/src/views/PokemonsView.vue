<script setup>
import axios from "axios";
import {ref} from "vue";
import {RouterLink} from "vue-router";
import {useGetData} from "@/composables/getData"

const pokemons=ref([]);

const {data,loading, getData,error}= useGetData();

getData("https://pokeapi.co/api/v2/pokemon/");

</script>

<template>
  <h1>Pokemons List</h1>
  <p v-if="loading">cargando...</p>
  <div class="alert alert-danger mt-2" v-if="error"> {{error}}</div>
  <div v-if="data">
    <ul>
      <li v-for="pokemon in data.results" :key="pokemon.id"> <router-link :to="`/${pokemon.name}`">{{pokemon.name}}</router-link></li>
    </ul>

    <button :disabled="!data.previous" class="btn btn-primary" @click="getData(data.previous)">Previous</button>
    <button :disabled="!data.next" class="btn btn-secondary ms-2" @click="getData(data.next)">Next</button>

  </div>


  
</template>
