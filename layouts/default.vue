<template>
  <div class="justify-center w-full md:flex">
    <SideNav
      v-if="toggleOpen"
      :tabs="tabs"
      :currentRoute="currentRoute"
      @toggleOpen="toggleOpen = $event"
    />
    <div v-else class="p-8">
      <img @click="toggleOpen = true" src="/menu-open.png" class="h-7" />
    </div>
    <div class="w-full max-w-5xl max-h-screen px-12 overflow-y-auto pb-9 pt-5">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
      toggleOpen: true,
      tabs: [
        {
          title: 'Register',
          path: '/signup',
        },
        {
          title: 'Login',
          path: '/signin',
        }
      ],
    };
  },
  computed: {
    currentRoute() {
      return this.$route.path;
    },
    currentTab() {
      return this.tabs.find((tab) => {
        return tab.path === this.currentRoute;
      });
    },
  },
};
</script>
