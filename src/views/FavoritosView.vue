<script setup>
import { defineStore, storeToRefs } from "pinia";
import { useFavoritosStore } from "../store/favoritos";
import {RouterLink, useRoute, useRouter} from "vue-router";

const useFavoritos=useFavoritosStore();

const{favoritos}= storeToRefs(useFavoritos);
const{remove}=useFavoritos;


const route=useRoute();
const router=useRouter();
</script>

<template>
    <div>
        <h1>Favoritos</h1>
        <p v-if="favoritos.length===0">Sin Favoritos</p>
        <ul class="list-group" v-else>
            <li v-for="poke in favoritos" :key="poke.id" class="list-group-item">
                <img :src="poke.sprites?.front_default" alt="">
                <div>
                    {{poke.name}}
                </div>
                <div>
                   <router-link :to="`/pokemons/${poke.name}`" ><button class="btn btn-success btn-sm">+Info</button></router-link>
                    <button @click="remove(poke.id)" class="btn btn-danger btn-sm ms-2">Eliminar</button>
                </div>
            </li>
            
          </ul>
    </div>
</template>