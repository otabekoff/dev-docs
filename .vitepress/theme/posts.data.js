import { createContentLoader, loadEnv } from 'vitepress'
const env = loadEnv('', process.cwd()) // Load environment variables

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

// Get the base URL from environment variables (fallback to '/')
const base = env.BASE_URL || '/'

const data = createContentLoader('/blog/posts/*.md', {
  excerpt: true,
  transform(raw) {
    return raw
      .map(({ url, frontmatter, excerpt }) => ({
        title: frontmatter.title,
        url: base === '/dev-docs/' ? '/dev-docs' + url : url, // Adjust the base URL dynamically
        excerpt,
        date: formatDate(frontmatter.date)
      }))
      .sort((a, b) => b.date.time - a.date.time)
  }
})

export { data }
export default data
