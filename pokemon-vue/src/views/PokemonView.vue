

<script setup>
import {ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import {useGetData} from "@/composables/getData"

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
        
    </div>
    <h1 v-else>No existe el Pokemon</h1>
    <button @click="back" class="btn btn-outline-danger"> Volver</button>
</template>