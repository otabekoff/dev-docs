<script setup>
import { useRoute } from 'vitepress'
import Home from './Home.vue'

const route = useRoute()
</script>

<template>
    <div class="blog layout-container">
        <nav class="navbar">
            <a class="logo" href="/" aria-label="The Vue Point">
                <img class="logo-img" alt="logo" src="/logo.png" />
                <span v-if="!route.path == '/blog/'" class="logo-text">The Vue Point</span>
            </a>
            <div class="nav-links">
                <a class="nav-link" href="https://github.com/vuejs/blog" target="_blank" rel="noopener">
                    <span class="nav-link-text">GitHub Source</span>
                </a>
                <span class="nav-separator">·</span>
                <a class="nav-link" href="/feed.rss">
                    RSS Lenta
                </a>
                <span class="nav-separator">·</span>
                <a class="nav-link" href="https://vuejs.org" target="_blank" rel="noopener">
                    Vuejs.org →
                </a>
            </div>
        </nav>
        <main class="main-content">
            <Home />
            <!-- v-if="frontmatter['blog-home']" / -->
        </main>
    </div>
</template>

<style>
.VPNav.no-sidebar {
    display: none !important;
}

.blog.layout-container {
    font-family: sans-serif;
    /* Set a max-width and center content */
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 16px;

    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 0;
        font-weight: bold;
    }

    .logo {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: inherit;
    }

    .logo-img {
        width: 36px;
        height: auto;
        margin-right: 8px;
    }

    .logo-text {
        display: none;
        /* Show this on larger screens if needed */
    }

    .nav-links {
        font-size: 14px;
        color: gray;
    }

    .nav-link {
        text-decoration: none;
        color: inherit;
        margin: 0 8px;
    }

    .nav-link:hover {
        color: darkgray;
    }

    .nav-separator {
        margin: 0 8px;
    }

    .main-content {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 16px;
    }
}
</style>
