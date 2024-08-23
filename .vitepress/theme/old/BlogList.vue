<template>
    <div class="blog-list">
        <BlogCard v-for="post in posts" :key="post.slug" :post="post" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import BlogCard from './BlogCard.vue';

const posts = ref([]);

onMounted(async () => {
    // Fetch or import your list of blog posts
    // Example: posts.value = await fetch('/api/posts').then(res => res.json());
});
</script>

<style>
.blog-list {
    display: flex;
    flex-wrap: wrap;
}
</style>
