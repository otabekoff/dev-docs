import { createContentLoader } from "vitepress";

// Initialize as an empty array or with actual data if available
export const data = [];

// Create the content loader for posts
export default createContentLoader("/blog/posts/*.md", {
  excerpt: true,
  transform(raw) {
    return raw
      .map(({ url, frontmatter, excerpt }) => ({
        title: frontmatter.title,
        url,
        excerpt,
        date: formatDate(frontmatter.date),
      }))
      .sort((a, b) => b.date.time - a.date.time);
  },
});

// Format the date into a structured object
function formatDate(raw) {
  const date = new Date(raw);
  date.setUTCHours(12); // Set the time to noon UTC
  return {
    time: +date, // Convert date to timestamp
    string: date.toLocaleDateString("en-US", {
      // Format date as a string
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  };
}
