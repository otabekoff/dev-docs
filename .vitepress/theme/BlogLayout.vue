<script setup>
import { useData, useRoute } from 'vitepress'
import Home from './Home.vue'
import Article from './Article.vue'

const route = useRoute();
const { frontmatter } = useData()
</script>

<template>
  <div class="antialiased vp-blog vp-doc">
    <main class="max-w-5xl mx-auto px-4 sm:px-6 xl:max-w-4xl xl:px-0">
      <Home v-if="frontmatter['blog-home']" />
      <Article v-else-if="frontmatter['post']" />
    </main>
  </div>
</template>
