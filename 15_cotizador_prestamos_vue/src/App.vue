<script setup>
  import { ref, computed } from 'vue';
  import Header from './components/Header.vue';
  import Button from './components/Button.vue';
  import { calcularTotalPagar } from './helpers';

  const cantidad = ref(10000);
  const meses = ref(6);
  const total = ref(calcularTotalPagar(cantidad.value, meses.value));
  
  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;

  const formatearDinero = (valor) => {
    const formatter = new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS'
    });
    return formatter.format(valor);
  };

  function handleChangeDecremento() {
    const valor = cantidad.value - STEP;

    if(cantidad.value <= MIN) {
      alert('Cantidad no válida');
      return;
    }
    cantidad.value = valor;
  }

  function handleChangeIncremento() {
    const valor = cantidad.value - STEP;

    if(cantidad.value >= MAX) {
      alert('Cantidad no válida');
      return;
    }
    cantidad.value = valor;
  }

</script>

<template>
  <div class="my-20 max-w-lg mx-auto bg-white shadow p-10">
    <Header />

    <div class="flex justify-between my-6">
      <Button
        :operador="'-'"
        @fn="handleChangeDecremento"
      />
      <Button
        :operador="'+'"
        @fn="handleChangeIncremento"
      />
    </div>

    <div class="my-5">
      <input
        type="range"
        class="w-full bg-gray-200 accent-lime-500 hover:accent-lime-600"
        :min="MIN"
        :max="MAX"
        :step="STEP"
        v-model.number="cantidad"
      />
      <p class="text-center my-10 text-5xl font-extrabold text-indigo-600">
        {{ formatearDinero(cantidad) }}
      </p>

      <h2 class="text-2xl font-extrabold text-gray-500 text-center">
        Elige un <span class="text-indigo-600">Plazo</span> a pagar
      </h2>
      <select
        class="w-full p-2 bg-white border border-gray-300 rounded-lg text-center text-xl font-bold text-gray-500 mt-5"
        :value="meses"
        v-model.number="meses"
      >
        <option value="6">6 Meses</option>
        <option value="12">12 Meses</option>
        <option value="24">24 Meses</option>
      </select>

      <div class="my-5 space-y-3 bg-gray-50 p-5">
          <h2 class="text-2xl font-extrabold text-gray-500 text-center">
              Resumen <span class="text-indigo-600">de pagos</span>
          </h2>

          <p class="text-xl text-gray-500 text-center font-bold">{{meses}} Meses</p>
          <p class="text-xl text-gray-500 text-center font-bold">Total a pagar: {{ formatearDinero(total) }}</p>
          <p class="text-xl text-gray-500 text-center font-bold">Mensuales:</p>
      </div>

    </div>
  </div>
</template>