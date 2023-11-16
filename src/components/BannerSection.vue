<script setup></script>
<template>
  <section id="banner-section" class="relative py-40 bg-neutral-500 bg-cover bg-center">
    <div class="overlay absolute top-0 left-0 bg-black/40 h-full w-full z-0"></div>
    <div class="main-container relative text-center">
      <h1 class="font-bold text-4xl lg:text-7xl text-white mb-5">
        <slot name="heading"></slot>
      </h1>
      <div class="subheading">
        <slot name="sub-heading"></slot>
      </div>
    </div>
  </section>
</template>
