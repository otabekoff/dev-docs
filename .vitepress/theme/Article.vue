<script setup>
import Date from './Date.vue'
import Author from './Author.vue'
import { computed } from 'vue'
import { useData, useRoute, withBase } from 'vitepress'
import { data as posts } from './posts.data.js'

const { frontmatter: data } = useData()
const route = useRoute()

const currentIndex = computed(() => {
  return posts.findIndex((p) => p.url === route.path)
})

const date = computed(() => {
  const index = currentIndex.value
  const post = posts[index]
  if (post) {
    return post.date
  } else {
    console.error('Post not found for route:', route.path)
    return { time: 0, string: 'Date not available' }
  }
})

const nextPost = computed(() => {
  const index = currentIndex.value
  if (index > 0) {
    return {
      ...posts[index - 1],
      url: posts[index - 1].url // Apply base URL
    }
  } else {
    return null
  }
})

const prevPost = computed(() => {
  const index = currentIndex.value
  if (index < posts.length - 1) {
    return {
      ...posts[index + 1],
      url: posts[index + 1].url // Apply base URL
    }
  } else {
    return null
  }
})
</script>

<template>
  <article class="article-page">
    <header class="pt-6 space-y-1 text-center">
      <Author />
      <Date :date="date" />
      <h1 class="text-7xl leading-9 font-extrabold tracking-wide sm:text-7xl sm:leading-10 md:text-7xl md:leading-14">
        {{ data.title || 'Title not available' }}
      </h1>
    </header>

    <div class="divide-y xl:divide-y-0 pb-16 xl:pb-6">
      <section class="article-navigation">

        <div v-if="prevPost" class="article-navigation-btn">
          <h6 class="text-xs tracking-wide uppercase">Avvalgi maqola</h6>
          <div class="link">
            <a :href="prevPost.url">{{ prevPost.title }}</a>
          </div>
        </div>
        <div class="article-navigation-btn">
          <h6 class="text-xs tracking-wide uppercase">Ortga qaytish</h6>
          <a class="link" :href="withBase('/blog/')">Maqolalar sahifasi</a>
        </div>
        <div v-if="nextPost" class="article-navigation-btn">
          <h6 class="text-xs tracking-wide uppercase">Keyingi maqola</h6>
          <div class="link">
            <a :href="nextPost.url">{{ nextPost.title }}</a>
          </div>
        </div>
      </section>
      <div class="divide-y xl:pb-0 xl:col-span-3 xl:row-span-2">
        <Content class="max-w-none pb-1" />
      </div>

      <section class="article-navigation">

        <div v-if="prevPost" class="article-navigation-btn">
          <h6 class="text-xs tracking-wide uppercase">Avvalgi maqola</h6>
          <div class="link">
            <a :href="prevPost.url">{{ prevPost.title }}</a>
          </div>
        </div>
        <div class="article-navigation-btn">
          <h6 class="text-xs tracking-wide uppercase">Ortga qaytish</h6>
          <a class="link" :href="withBase('/blog/')">Maqolalar sahifasi</a>
        </div>
        <div v-if="nextPost" class="article-navigation-btn">
          <h6 class="text-xs tracking-wide uppercase">Keyingi maqola</h6>
          <div class="link">
            <a :href="nextPost.url">{{ nextPost.title }}</a>
          </div>
        </div>
      </section>
    </div>
  </article>
</template>

<style lang="scss">
.article-page {

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  span {
    * {
      font-family: ui-sans-serif,
        system-ui,
        sans-serif,
        "Apple Color Emoji",
        "Segoe UI Emoji",
        Segoe UI Symbol,
        "Noto Color Emoji";
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: auto;
    }
  }

  .article-navigation {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    min-width: 100%;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0px;
  }

  pre,
  code {
    font-family: ui-monospace,
      SFMono-Regular,
      Menlo,
      Monaco,
      Consolas,
      "Liberation Mono",
      "Courier New",
      monospace;
  }

  .link,
  a,
  .vp-doc a {
    // color: greenyellow;
    text-decoration: none !important;
  }

  .link:hover,
  a:hover {
    text-decoration: underline #5c73e7;
  }
}

.article-navigation-btn {
  border: 1px solid #3a3a3a;
  border-radius: 6px;
  padding: 12px 20px;
  min-height: 60px;
  height: 64px;
  max-height: 66px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  vertical-align: middle;
  color: white !important;
  width: 250px;
  min-width: 250px;
  white-space: nowrap;
  overflow: hidden;

  * {
    color: rgb(158, 158, 158) !important;
    text-overflow: ellipsis;
    overflow: hidden;
    display: block;
    max-width: calc(250px - 40px);
  }
}

@media (min-width: 768px) {
  .vp-doc h1 {
    letter-spacing: 0.012em;
    line-height: 60px;
    font-size: 46px;
  }
}

.article-navigation-btn:hover {
  background-color: #6f82ff12;
  border-color: #6f82ff;
  cursor: pointer;
  color: #6f82ff !important;

  * {
    color: #6f82ff !important;

    :hover {
      color: #6f82ff !important;
    }
  }
}
</style>