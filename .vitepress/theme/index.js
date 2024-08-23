// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import './blog.css'

// Custom Layouts
import BlogLayout from './BlogLayout.vue'

// Custom components
// import BlogCard from "./BlogCard.vue";
// import BlogList from "./BlogList.vue";

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {})
  },
  enhanceApp({ app, router, siteData }) {
    // Register custom layout components globally
    app.component('BlogLayout', BlogLayout)
    // Register custom components components globally
    // app.component("BlogCard", BlogCard);
    // app.component("BlogList", BlogList);
  }
}
