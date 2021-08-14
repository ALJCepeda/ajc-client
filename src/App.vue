<template>
  <main class="flex flex-col h-full">
    <router-view></router-view>

    <nav class="flex flex-row justify-around w-full mt-auto">
      <router-link
        v-for="button in navigation"
        :key="button.url"
        :to="button.url"
        class="flex-grow flex"
      >
        <div class="py-5 mx-auto">
          <i class="fas fa-home fa-3x" :class="[button.icon]"></i>
        </div>
      </router-link>
    </nav>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  data: () => {
    return {
      navigation: [
        { icon: "fa-home", url: "/" },
        { icon: "fa-toolbox", url: "/tools" },
        { icon: "fa-blog", url: "/blog" },
      ],
    };
  },
});
</script>

<style>
</style>
