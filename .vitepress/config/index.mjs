import { defineConfig } from 'vitepress'
import { genFeed } from '../genFeed.js'
import head from './head'
import themeConfig from './themeConfig'
import nav from './nav'
import search from './search'
import sidebar from './sidebar'
import socialLinks from './socialLinks'
import footer from './footer'
import editLink from './editLink'
import lastUpdated from './lastUpdated'
import carbonAds from './carbonAds'
import vue from '@vitejs/plugin-vue'
import 'dotenv/config';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Dev docs',
  lang: 'uz',
  base: process.env.BASE_URL,
  head,
  description:
    "Dasturlash tillari va texnologiyalarining O'zbek tilidagi interaktiv qo'llanmalari uchun platforma.",
  cleanUrls: true,
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    ...themeConfig,
    nav,
    search,
    sidebar,
    socialLinks,
    footer,
    // carbonAds,
    blog: {
      title: 'My Blog',
      description: 'Some articles for sample Blog'
    }
  },

  editLink,
  lastUpdated,
  plugins: [vue()],
  vite: {
    ssr: {
      noExternal: ['vitepress-plugin-testcomponents']
    }
  },
  // server: {
  //   watch: {
  //     usePolling: true, // Enables polling for file changes
  //   },
  //   timeout: 30000, // Increase server timeout (e.g., 30 seconds)
  // },
  // build: {
  //   timeout: 30000, // Increase build timeout (e.g., 30 seconds)
  // },
  buildEnd: genFeed
})
