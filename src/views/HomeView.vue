<script setup>
import BannerSection from '../components/BannerSection.vue'
import ServicesSection from '../components/ServicesSection.vue'
</script>

<template>
  <BannerSection
    class="bg-[url('https://via.placeholder.com/600x600')] md:bg-[url('https://via.placeholder.com/1920x650')]"
  >
    <template #heading>Hello Developers!</template>
    <template #sub-heading>
      <p class="text-3xl text-white tracking-widest">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </template>
  </BannerSection>
  <ServicesSection />
</template>
