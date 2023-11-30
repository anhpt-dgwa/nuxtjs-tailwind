<template>
  <NuxtLink :to="`/post/${props.post.sys.id}`" >
      <img :src="props.post.fields.thumnail.fields.file.url" class="w-full h-52 md:h-64 lg:h-96 xl:h-64 object-cover" />
  </NuxtLink>

  <div class="bg-gray-50 p-8">
    <div class="text-xs text-gray-600 uppercase font-semibold">{{ formatDate(props.post.sys.updatedAt) }}</div>
    <h2 class="mt-3 text-3xl mb-6 font-display text-black leading-tight max-w-sm">
      {{ props.post.fields.title }}
    </h2>
    <p class="mt-4 max-w-md">
      {{ props.post.fields.description }}
    </p>
    <NuxtLink :to="`/post/${props.post.sys.id}`" class="flex items-center mt-6 uppercase text-sm text-black font-semibold">
        Read article
      <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 5l7 7-7 7"></path></svg>
    </NuxtLink>
  </div>
</template>

<script setup>
  const props =  defineProps({post: Object})
  function formatDate(time) {
    const date = new Date(time);
    
    // Get year, month, and day part from the date
    const year = date.toLocaleString("default", { year: "numeric" });
    const month = date.toLocaleString("default", { month: "2-digit" });
    const day = date.toLocaleString("default", { day: "2-digit" });
    
    return `${year}/${month}/${day}`;
}
</script>