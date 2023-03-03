<script setup>
  import { ref, computed } from 'vue';
  import Header from './components/Header.vue';

  const cantidad = ref(10000);
  
  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;

  const formatearDinero = computed( () => {
    const formatter = new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS'
    });
    return formatter.format(cantidad.value);
  });

</script>

<template>
  <div class="my-20 max-w-lg mx-auto bg-white shadow p-10">
    <Header />

    <div class="my-5">
      <input
        type="range"
        class="w-full bg-gray-200 accent-lime-500 hover:accent-lime-600"
        :min="MIN"
        :max="MAX"
        :step="STEP"
        v-model.number="cantidad"
      />
      <p className="text-center my-10 text-5xl font-extrabold text-indigo-600">
        {{ formatearDinero }}
      </p>
    </div>
  </div>
</template>