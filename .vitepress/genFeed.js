import { Feed } from 'feed'
import { createContentLoader } from 'vitepress'
import { writeFileSync } from 'fs'
import path from 'path'

const baseUrl = 'https://otabekoff.github.io/dev-docs'

export async function genFeed(config) {
  const feed = new Feed({
    title: 'The Vue Point',
    description: 'The official blog for the Vue.js project',
    id: baseUrl,
    link: baseUrl,
    language: 'en',
    image: 'https://vuejs.org/images/logo.png',
    favicon: `${baseUrl}/favicon.ico`,
    copyright:
      'Copyright (c) 2021-present, Yuxi (Evan) You and blog contributors'
  })

  const posts = await createContentLoader('/blog/posts/*.md', {
    excerpt: true,
    render: true
  }).load()

  posts.sort(
    (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
  )

  for (const { url, excerpt, frontmatter, html } of posts) {
    feed.addItem({
      title: frontmatter.title,
      id: `${baseUrl}${url}`,
      link: `${baseUrl}${url}`,
      description: excerpt,
      content: html?.replaceAll('&ZeroWidthSpace;', ''),
      author: [
        {
          name: frontmatter.author,
          link: frontmatter.twitter
            ? `https://twitter.com/${frontmatter.twitter}`
            : undefined
        }
      ],
      date: new Date(frontmatter.date)
    })
  }

  writeFileSync(path.join(config.outDir, 'feed.rss'), feed.rss2())
}
