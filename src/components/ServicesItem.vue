<script setup>
defineProps({
  description: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
})
</script>
<template>
  <div
    class="w-full services__item p-5 border border-stone-200 shadow-md shadow-stone-200 rounded-xl flex flex-col justify-between items-center gap-3"
  >
    <div class="flex flex-col gap-3 items-center text-center flex-grow">
      <div class="rounded-lg overflow-hidden">
        <img
          src="https://via.placeholder.com/400x300"
          width="400"
          height="300"
          alt=""
          class="object-cover h-full w-full"
        />
      </div>
      <p class="text-gray-800 text-lg">
        {{ description }}
      </p>
    </div>
    <a
      href="{{ link }}"
      class="block px-5 py-2 border-[3px] border-gray-800 rounded-full tracking-widest text-gray-800 uppercase font-bold"
      >Read More</a
    >
  </div>
</template>
