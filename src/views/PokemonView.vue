

<script setup>
import {ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import {useGetData} from "@/composables/getData"
import { useFavoritosStore } from "../store/favoritos.js";

const useFavoritos=useFavoritosStore();

const {add,findPoke}=useFavoritos;

const route=useRoute();
const router=useRouter();

const back=()=>{
    router.push('/');
}
const pokemon=ref({});

const {getData,loading,data}=useGetData();

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);
</script>




<template>
    <p v-if="loading">cargando...</p>

    <div v-if="data">
        <img :src="data.sprites?.front_default" alt="">
        <h1>Name: {{data.name}}</h1>
        <button :disabled="findPoke(data.name)" @click="add(data)" class="btn btn-outline-success">Agregar Favorito</button>
    </div>
    <h1 v-else>No existe el Pokemon</h1>
    <button @click="back" class="btn btn-outline-danger mt-3"> Volver</button>
</template>