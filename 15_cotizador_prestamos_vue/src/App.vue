<script setup>
  import { ref } from 'vue';
  import Header from './components/Header.vue';

  const cantidad = ref(50);

  function handleChange(e) {
    cantidad.value = +e.target.value;
  }

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
      <p>$ {{ cantidad }}</p>
      <!-- <p v-text="`$ ${cantidad}`"></p> -->
    </div>
  </div>
</template>