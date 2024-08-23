<template>
    <div class="blog-card">
        <h2>{{ post.title }}</h2>
        <p>{{ post.description }}</p>
        <router-link :to="`/blog/${post.slug}`">Read More</router-link>
    </div>
</template>

<script setup>
const props = defineProps({
    post: {
        type: Object,
        required: true
    }
});
</script>

<style>
.blog-card {
    border: 1px solid #ddd;
    padding: 1rem;
    margin-bottom: 1rem;
}
</style>
