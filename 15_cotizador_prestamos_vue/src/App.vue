<script setup>
  import { ref, reactive } from 'vue';
  import Header from './components/Header.vue';

  const cantidad = ref(0);
  const state = reactive({
    cantidad: 0
  });

  function handleChange(e) {
    cantidad.value = +e.target.value;
  }

  console.log(cantidad.value);
  console.log(state.cantidad);

</script>

<template>
  <div class="my-20 max-w-lg mx-auto bg-white shadow p-10">
    <Header />

    <div class="my-5">
      <input
        type="range"
        class="w-full bg-gray-200 accent-lime-500 hover:accent-lime-600"
        v-on:input="handleChange"
      />

      {{ cantidad }}
    </div>
  </div>
</template>