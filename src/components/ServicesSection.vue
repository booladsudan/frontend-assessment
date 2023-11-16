<script setup>
import ServicesList from '../components/ServicesList.vue'

const services = [
  {
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nisi blanditiis in perspiciatis cumque hic consequuntur dicta aliquid incidunt molestias, debitis est explicabo laboriosam quia eum sunt amet illum soluta.',
    url: '#'
  },
  {
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nisi blanditiis in perspiciatis.',
    url: '#'
  },
  {
    description:
      'Quibusdam nisi blanditiis in perspiciatis cumque hic consequuntur dicta aliquid incidunt molestias, debitis est explicabo laboriosam quia eum',
    url: '#'
  }
]
</script>

<template>
  <section id="services-section">
    <div class="py-12 main-container">
      <ServicesList :items="services" />
    </div>
  </section>
</template>
