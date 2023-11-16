<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="w-full p-2 bg-neutral-500">
    <nav class="flex flex-row gap-3">
      <RouterLink to="/" class="text-white">Exercise 1</RouterLink>
      <RouterLink to="/exercise-2" class="text-white">Exercise 2</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>
