import { createContentLoader } from 'vitepress'
import 'dotenv/config'

const formatDate = (raw) => {
  const date = new Date(raw)
  date.setUTCHours(12)
  return {
    time: +date,
    string: date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }
}

const base = process.env.BASE_URL
// Fallback to '/' if the environment variable is not set

const data = createContentLoader('/blog/posts/*.md', {
  excerpt: true,
  transform(raw) {
    return raw
      .map(({ url, frontmatter, excerpt }) => ({
        title: frontmatter.title,
        url: base === '/dev-docs/' ? '/dev-docs' + url : url,
        excerpt,
        date: formatDate(frontmatter.date)
      }))
      .sort((a, b) => b.date.time - a.date.time)
  }
})

export { data }
export default data
