<script setup>
import BannerSection from '../components/BannerSection.vue'
import tabData from '../assets/data.json'
import { ref } from 'vue'

const currentTab = ref(0)
</script>

<template>
  <BannerSection
    class="bg-[url('https://via.placeholder.com/600x600')] md:bg-[url('https://via.placeholder.com/1920x650')]"
  >
    <template #heading>Exercise 2</template>
  </BannerSection>
  <section>
    <div class="main-container py-12">
      <div class="tabs">
        <nav class="tabs__nav flex flex-col md:block">
          <button
            v-for="(tab, index) in tabData"
            :key="index"
            :class="[{ 'bg-stone-400 text-white': currentTab === index }]"
            class="px-5 py-3 border border-b-0 last:border-b md:border-l md:border-y md:border-r-0 border-stone-400 md:last:border-r"
            @click="currentTab == index ? (currentTab = null) : (currentTab = index)"
          >
            {{ tab.title }}
          </button>
        </nav>
        <div
          class="tab__content hidden sm:block border border-stone-400 p-5 -mt-[1px]"
          v-if="currentTab != null"
        >
          <span v-html="tabData[currentTab].content"></span>
        </div>
      </div>
    </div>
  </section>
</template>
