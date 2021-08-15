<template>
  <main class="flex flex-col">
    <router-view class='container mx-auto'></router-view>

    <nav class="flex flex-row justify-around fixed left-0 right-0 bottom-0 bg-white shadow-2xl">
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
