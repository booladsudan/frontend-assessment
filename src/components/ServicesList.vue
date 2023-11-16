<script setup>
import ServicesItem from './ServicesItem.vue'

defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>
<template>
  <div class="flex flex-col gap-10 md:flex-row">
    <ServicesItem
      v-for="(item, index) in items"
      :key="index"
      :description="item.description"
      :link="item.url"
    />
  </div>
</template>
