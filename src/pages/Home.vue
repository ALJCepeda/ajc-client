<template>
  <main class='flex flex-col'>
    <h1 class="mb-10 py-5">Welcome to AJ's Website!</h1>

    <p>Hi! This is AJ's website and the person who made this website is I... AJ!</p>
    <p>It's mostly web development stuff so if you aren't a web developer you probably don't want to be here</p>
    <p>I also have a cat named Luna</p>
    <p>She's got an attitude</p>

    <template v-for='photo in photos'>
      <img class='w-6/12 mx-auto my-32' :src='photo' v-if='photo === currentPhoto' />
    </template>
  </main>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import { shuffle } from 'lodash';

interface HomePageData {
  remainingPhotos: string[]
  currentPhoto: string
  photos: string[]
}

export default defineComponent({
  name: "Home",
  
  data() {
    return {
      remainingPhotos: [],
      currentPhoto: '',
      photos: [
        'https://storage.cloud.google.com/cepedaio.appspot.com/luna/20210717_213807.jpg',
        'https://storage.cloud.google.com/cepedaio.appspot.com/luna/20210801_125503.jpg',
        'https://storage.cloud.google.com/cepedaio.appspot.com/luna/20210810_134007.jpg',
        'https://storage.cloud.google.com/cepedaio.appspot.com/luna/20210813_165559.jpg'
      ],
    } as HomePageData;
  },
  mounted() {
    this.pickPhoto();
    setInterval(() => this.pickPhoto(), 5000);
  },
  methods: {
    pickPhoto() {
      if(this.remainingPhotos.length === 0) this.remainingPhotos = shuffle(this.photos)
      this.currentPhoto = this.remainingPhotos.pop() as string;
    }
  }
});
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
