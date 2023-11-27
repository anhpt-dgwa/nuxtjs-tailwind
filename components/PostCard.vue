<template>
  <div>
    <NuxtLink
      :to="`/post/${props.post.sys.id}`"
      class="group flex flex-col bg-gray-100 rounded-lg shadow-lg overflow-hidden relative"
    >
      <!-- <img :src="props.post.fields.thumbnail.fields.file.url" /> -->
      
      <img :src="props.post.fields.thumnail.fields.file.url"
          loading="lazy" :alt="props.post.fields.title" class="object-cover object-center"/>
      
      <div
        class="bg-gradient-to-t from-gray-800 md:via-transparent to-transparent absolute inset-0 pointer-events-none"
      ></div>

      <div class="relative p-4 mt-auto">
        <span class="block text-gray-200 text-sm">{{ formatDate(props.post.sys.updatedAt) }}</span>
        <h2
          class="text-xl font-semibold transition duration-100 mb-2"
        >
          {{ props.post.fields.title }}
        </h2>

        <span class="text-indigo-300 font-semibold">Read more</span>
      </div>
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