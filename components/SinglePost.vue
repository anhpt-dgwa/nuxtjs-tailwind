<template>
  <div class="relative h-96">
    <img :src="props.post.fields.thumnail.fields.file.url" class="w-full h-full object-cover" />
  </div>

  <div class="max-w-4xl mx-auto bg-white py-12 px-12 lg:px-24 -mt-32 relative z-10">
      <h2 class="mt-4 uppercase tracking-widest text-xs text-gray-600">{{ formatDate(props.post.sys.updatedAt) }}</h2>
      <h1 class="font-display text-2xl md:text-3xl text-gray-900 mt-4">{{ props.post.fields.title }}</h1>

      <div class="prose prose-sm sm:prose lg:prose-lg mt-6">
        {{ props.post.fields.content }}
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