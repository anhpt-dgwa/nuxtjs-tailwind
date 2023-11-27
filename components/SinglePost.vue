<template>

  <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="max-w-screen-md px-4 md:px-8 mx-auto">
      <h1 class="text-gray-800 text-2xl sm:text-3xl font-bold text-center mb-4 md:mb-6">{{ props.post.fields.title }}
      </h1>
      <span class="block text-gray-200 text-sm">{{ formatDate(props.post.sys.updatedAt) }}</span>
      <div class="bg-gray-100 overflow-hidden rounded-lg shadow-lg relative mb-6 md:mb-8">
        <img :src="props.post.fields.thumnail.fields.file.url"
          loading="lazy" alt="" class="w-full h-full object-cover object-center"/>
      </div>
      <!-- <blockquote class="text-gray-500 sm:text-lg italic border-l-4 pl-4 md:pl-6 mb-6 md:mb-8">“
        {{ props.post.fields.summary }}”
      </blockquote> -->
      <p class="text-gray-500 sm:text-lg mb-6 md:mb-8">
        {{ props.post.fields.content }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({post: Object})
function formatDate(time) {
    const date = new Date(time);
    
    // Get year, month, and day part from the date
    const year = date.toLocaleString("default", { year: "numeric" });
    const month = date.toLocaleString("default", { month: "2-digit" });
    const day = date.toLocaleString("default", { day: "2-digit" });
    
    return `${year}/${month}/${day}`;
}
</script>

<style>
</style>