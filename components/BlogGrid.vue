<template>
  <div class="text-center py-12 px-6 mt-12">
    <h1 class="font-display font-bold text-5xl mb-6">The Blog</h1>
    <p class="max-w-lg mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel arcu commodo, sodales nibh sed, efficitur sapien.</p>
  </div>

  <div class="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 pt-12 pb-24">
    <div>
      <a href="#">
          <img src="https://images.unsplash.com/photo-1501631259223-89d4e246ed23?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1960&q=80" class="w-full h-52 md:h-64 lg:h-96 xl:h-64 object-cover" />
      </a>

      <div class="bg-gray-50 p-8">
        <div class="text-xs text-gray-600 uppercase font-semibold">23 SEP 2020</div>
        <h2 class="mt-3 text-3xl mb-6 font-display text-black leading-tight max-w-sm">
          This is my third & latest post
        </h2>
        <p class="mt-4 max-w-md">
          Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.
        </p>
        <a href="#" class="flex items-center mt-6 uppercase text-sm text-black font-semibold">
            Read article
          <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 5l7 7-7 7"></path></svg>
        </a>
      </div>
    </div>
    <div>
      <a href="#">
          <img src="https://images.unsplash.com/photo-1521145239174-279dc2227166?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80://images.unsplash.com/photo-1501631259223-89d4e246ed23?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1960&q=80" class="w-full h-52 md:h-64 lg:h-96 xl:h-64 object-cover" />
      </a>

      <div class="bg-gray-50 p-8">
        <div class="text-xs text-gray-600 uppercase font-semibold">03 SEP 2020</div>
        <h2 class="mt-3 text-3xl mb-6 font-display text-black leading-tight max-w-sm">
          This is my second post
        </h2>
        <p class="mt-4 max-w-md">
          Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
        </p>
        <a href="#" class="flex items-center mt-6 uppercase text-sm text-black font-semibold">
            Read article
          <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 5l7 7-7 7"></path></svg>
        </a>
      </div>
    </div>
    <div>
      <a href="#">
          <img src="https://images.unsplash.com/photo-1513279922550-250c2129b13a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80://images.unsplash.com/photo-1521145239174-279dc2227166?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80://images.unsplash.com/photo-1501631259223-89d4e246ed23?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1960&q=80" class="w-full h-52 md:h-64 lg:h-96 xl:h-64 object-cover" />
      </a>

      <div class="bg-gray-50 p-8">
        <div class="text-xs text-gray-600 uppercase font-semibold">01 SEP 2020</div>
        <h2 class="mt-3 text-3xl mb-6 font-display text-black leading-tight max-w-sm">
          This is my first post
        </h2>
        <p class="mt-4 max-w-md">
          Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps.
        </p>
        <a href="#" class="flex items-center mt-6 uppercase text-sm text-black font-semibold">
            Read article
          <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 5l7 7-7 7"></path></svg>
        </a>
      </div>
    </div>
  </div>
  <div class="bg-white py-6 sm:py-8 lg:py-12 ">
    <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
      <div class="mb-10 md:mb-16">
        <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
          Demo display content by contentful !
        </h2>
        <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
          This is a section of some simple filler text, also known as
          placeholder text. It shares some characteristics of a real written
          text but is random or otherwise generated.
        </p>
      </div>
      <!-- Loading Skelton -->
      <div v-if="!data"
        class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8 animate-pulse">
        <PostCard  />
      </div>  
      <!-- Loading Posts -->
      <div v-else class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8">
        <span v-for="post in data?.items" :key="post.id">
          <PostCard :post="post" />
        </span>
      </div>
    </div>
  </div>
</template>


<script setup>
  import {useNuxtApp} from "nuxt/app";
  const {$client}=useNuxtApp()

  const data =await $client.getEntries()
  console.log(data)
</script>