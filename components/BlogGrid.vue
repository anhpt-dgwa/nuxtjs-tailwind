<template>
  <div class="text-center py-12 px-6 mt-12">
    <h1 class="font-display font-bold text-5xl mb-6">The Blog</h1>
    <p class="max-w-lg mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel arcu commodo, sodales nibh sed, efficitur sapien.</p>
  </div>

  <div class="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 pt-12 pb-24">
    <div v-for="post in data?.items" :key="post.id">
      <PostCard :post="post" />
    </div>
  </div>
  <!-- <v-pagination
    v-model="page"
    :length="length"
    @input = "pageChange"
  ></v-pagination> -->
  <nav class="flex justify-center pb-24" aria-label="Page navigation example">
    <ul class="inline-flex -space-x-px text-base h-10">
      <li>
        <a href="#" class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
      </li>
      <li>
        <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
      </li>
      <li>
        <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
      </li>
      <li>
        <a href="#" aria-current="page" class="flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
      </li>
      <li>
        <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
      </li>
      <li>
        <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
      </li>
      <li>
        <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
      </li>
    </ul>
  </nav>
</template>


<script setup>
  import {useNuxtApp} from "nuxt/app";
  const {$client}=useNuxtApp()

  const data =await $client.getEntries({
    content_type: ['blog'],
    skip: 0,
    limit: 2
  })
  console.log(data)
</script>

<script>
//import draftChip from '~/components/posts/draftChip'
//import { mapState, mapGetters } from 'vuex' 

export default {
  data () {
    return {
      page: 1,
      length:0,
      data: [],
      pageSize: 2,
    }
  },
  mounted: function(){
    this.posts
    this.length = Math.ceil(this.posts.length/this.pageSize);
    this.data = this.posts.slice(0,this.pageSize);
    this.data = this.posts.slice(this.pageSize*(this.page -1), this.pageSize*(this.page));
  },
  methods: {
    pageChange: function(pageNumber){
      this.data = this.posts.slice(this.pageSize*(pageNumber -1), this.pageSize*(pageNumber));
    },
  },
}
</script>