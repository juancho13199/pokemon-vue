<script setup>

import { storeToRefs } from 'pinia';
import { useCounterStore } from '../store/counter';
const useCounter=useCounterStore();

const increment=useCounter.increment;
//Para haces destructuración de ref y computed usamos storetorefs
const {count,double}= storeToRefs(useCounter)
</script>

<template>
  <div class="about">
    <h1>Contador: {{useCounter.count}}</h1>
    <h2>Incremento Double: {{useCounter.double}}</h2>
    <button @click="increment">Increment</button>
  </div>
</template>

