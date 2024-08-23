<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import { useData } from 'vitepress'

const { frontmatter } = useData()
const route = useRoute()

const pageName = computed(() =>
    route.path.replace(/[./]+/g, '_').replace(/_html$/, '')
)
</script>

<template>
    <div class="VPPost">
        <header class="post-header">
            <h1>{{ frontmatter.title }}</h1>
            <p class="post-meta">
                <span class="post-date">{{ frontmatter.date }}</span>
                <span class="post-author">
                    <img :src="frontmatter.authorPic" alt="Author Picture" class="author-pic" />
                    <a :href="frontmatter.authorLink" class="author-name">{{ frontmatter.authorName }}</a>
                </span>
            </p>
        </header>
        <main class="content">
            <Content class="vp-post-content" :class="[
                pageName,
                'external-link-icon-enabled'
            ]" />
        </main>
    </div>
</template>


<style scoped>
.VPPost {
    padding: 32px 24px;
    width: 100%;
}

.post-header {
    margin-bottom: 24px;
}

.post-header h1 {
    font-size: 2rem;
    margin-bottom: 8px;
}

.post-meta {
    font-size: 0.875rem;
    color: var(--vp-c-text-secondary);
}

.post-date {
    margin-right: 16px;
}

.post-author {
    display: flex;
    align-items: center;
}

.author-pic {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin-right: 8px;
}

.author-name {
    color: var(--vp-c-link);
    text-decoration: none;
}

.author-name:hover {
    text-decoration: underline;
}

.content {
    max-width: 800px;
    margin: 0 auto;
}

@media (min-width: 768px) {
    .VPPost {
        padding: 48px 32px;
    }

    .content {
        padding: 0 32px;
    }
}

/* Newly added */
/**
 * Headings
 * -------------------------------------------------------------------------- */

.vp-post h1,
.vp-post h2,
.vp-post h3,
.vp-post h4,
.vp-post h5,
.vp-post h6 {
    position: relative;
    font-weight: 600;
    outline: none;
}

.vp-post h1 {
    letter-spacing: -0.02em;
    line-height: 40px;
    font-size: 28px;
}

.vp-post h2 {
    margin: 48px 0 16px;
    border-top: 1px solid var(--vp-c-divider);
    padding-top: 24px;
    letter-spacing: -0.02em;
    line-height: 32px;
    font-size: 24px;
}

.vp-post h3 {
    margin: 32px 0 0;
    letter-spacing: -0.01em;
    line-height: 28px;
    font-size: 20px;
}

.vp-post h4 {
    margin: 24px 0 0;
    letter-spacing: -0.01em;
    line-height: 24px;
    font-size: 18px;
}

.vp-post .header-anchor {
    position: absolute;
    top: 0;
    left: 0;
    margin-left: -0.87em;
    font-weight: 500;
    user-select: none;
    opacity: 0;
    text-decoration: none;
    transition:
        color 0.25s,
        opacity 0.25s;
}

.vp-post .header-anchor:before {
    content: var(--vp-header-anchor-symbol);
}

.vp-post h1:hover .header-anchor,
.vp-post h1 .header-anchor:focus,
.vp-post h2:hover .header-anchor,
.vp-post h2 .header-anchor:focus,
.vp-post h3:hover .header-anchor,
.vp-post h3 .header-anchor:focus,
.vp-post h4:hover .header-anchor,
.vp-post h4 .header-anchor:focus,
.vp-post h5:hover .header-anchor,
.vp-post h5 .header-anchor:focus,
.vp-post h6:hover .header-anchor,
.vp-post h6 .header-anchor:focus {
    opacity: 1;
}

@media (min-width: 768px) {
    .vp-post h1 {
        font-size: 32px;
    }
}

.vp-post h2 .header-anchor {
    top: 24px;
}

/**
 * Paragraph and inline elements
 * -------------------------------------------------------------------------- */

.vp-post p,
.vp-post summary {
    margin: 16px 0;
}

.vp-post p {
    line-height: 28px;
}

.vp-post blockquote {
    margin: 16px 0;
    border-left: 2px solid var(--vp-c-divider);
    padding-left: 16px;
    transition: border-color 0.5s;
    color: var(--vp-c-text-2);
}

.vp-post blockquote>p {
    margin: 0;
    font-size: 16px;
    transition: color 0.5s;
}

.vp-post a {
    font-weight: 500;
    color: var(--vp-c-brand-1);
    text-decoration: underline;
    text-underline-offset: 2px;
    transition:
        color 0.25s,
        opacity 0.25s;
}

.vp-post a:hover {
    color: var(--vp-c-brand-2);
}

.vp-post strong {
    font-weight: 600;
}

/**
 * Lists
 * -------------------------------------------------------------------------- */

.vp-post ul,
.vp-post ol {
    padding-left: 1.25rem;
    margin: 16px 0;
}

.vp-post ul {
    list-style: disc;
}

.vp-post ol {
    list-style: decimal;
}

.vp-post li+li {
    margin-top: 8px;
}

.vp-post li>ol,
.vp-post li>ul {
    margin: 8px 0 0;
}

/**
 * Table
 * -------------------------------------------------------------------------- */

.vp-post table {
    display: block;
    border-collapse: collapse;
    margin: 20px 0;
    overflow-x: auto;
}

.vp-post tr {
    background-color: var(--vp-c-bg);
    border-top: 1px solid var(--vp-c-divider);
    transition: background-color 0.5s;
}

.vp-post tr:nth-child(2n) {
    background-color: var(--vp-c-bg-soft);
}

.vp-post th,
.vp-post td {
    border: 1px solid var(--vp-c-divider);
    padding: 8px 16px;
}

.vp-post th {
    text-align: left;
    font-size: 14px;
    font-weight: 600;
    color: var(--vp-c-text-2);
    background-color: var(--vp-c-bg-soft);
}

.vp-post td {
    font-size: 14px;
}

/**
 * Decorational elements
 * -------------------------------------------------------------------------- */

.vp-post hr {
    margin: 16px 0;
    border: none;
    border-top: 1px solid var(--vp-c-divider);
}

/**
 * Custom Block
 * -------------------------------------------------------------------------- */

.vp-post .custom-block {
    margin: 16px 0;
}

.vp-post .custom-block p {
    margin: 8px 0;
    line-height: 24px;
}

.vp-post .custom-block p:first-child {
    margin: 0;
}

.vp-post .custom-block div[class*='language-'] {
    margin: 8px 0;
    border-radius: 8px;
}

.vp-post .custom-block div[class*='language-'] code {
    font-weight: 400;
    background-color: transparent;
}

.vp-post .custom-block .vp-code-group .tabs {
    margin: 0;
    border-radius: 8px 8px 0 0;
}

/**
 * Code
 * -------------------------------------------------------------------------- */

/* inline code */
.vp-post :not(pre, h1, h2, h3, h4, h5, h6)>code {
    font-size: var(--vp-code-font-size);
    color: var(--vp-code-color);
}

.vp-post :not(pre)>code {
    border-radius: 4px;
    padding: 3px 6px;
    background-color: var(--vp-code-bg);
    transition:
        color 0.25s,
        background-color 0.5s;
}

.vp-post a>code {
    color: var(--vp-code-link-color);
}

.vp-post a:hover>code {
    color: var(--vp-code-link-hover-color);
}

.vp-post h1>code,
.vp-post h2>code,
.vp-post h3>code,
.vp-post h4>code {
    font-size: 0.9em;
}

.vp-post div[class*='language-'],
.vp-block {
    position: relative;
    margin: 16px -24px;
    background-color: var(--vp-code-block-bg);
    overflow-x: auto;
    transition: background-color 0.5s;
}

@media (min-width: 640px) {

    .vp-post div[class*='language-'],
    .vp-block {
        border-radius: 8px;
        margin: 16px 0;
    }
}

@media (max-width: 639px) {
    .vp-post li div[class*='language-'] {
        border-radius: 8px 0 0 8px;
    }
}

.vp-post div[class*='language-']+div[class*='language-'],
.vp-post div[class$='-api']+div[class*='language-'],
.vp-post div[class*='language-']+div[class$='-api']>div[class*='language-'] {
    margin-top: -8px;
}

.vp-post [class*='language-'] pre,
.vp-post [class*='language-'] code {
    /*rtl:ignore*/
    direction: ltr;
    /*rtl:ignore*/
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
}

.vp-post [class*='language-'] pre {
    position: relative;
    z-index: 1;
    margin: 0;
    padding: 20px 0;
    background: transparent;
    overflow-x: auto;
}

.vp-post [class*='language-'] code {
    display: block;
    padding: 0 24px;
    width: fit-content;
    min-width: 100%;
    line-height: var(--vp-code-line-height);
    font-size: var(--vp-code-font-size);
    color: var(--vp-code-block-color);
    transition: color 0.5s;
}

.vp-post [class*='language-'] code .highlighted {
    background-color: var(--vp-code-highlight-bg);
}

.vp-post [class*='language-'] pre {
    background: var(--vp-code-block-bg);
    border-radius: 8px;
    padding: 16px;
    margin: 0;
    overflow-x: auto;
    border: 1px solid var(--vp-c-divider);
}

.vp-post pre>code {
    line-height: var(--vp-code-line-height);
    font-size: var(--vp-code-font-size);
}

.vp-post pre code {
    font-size: var(--vp-code-font-size);
}

/**
 * Footer and header
 * -------------------------------------------------------------------------- */

.vp-post .vp-footer {
    margin-top: 40px;
    padding-top: 24px;
    border-top: 1px solid var(--vp-c-divider);
}

.vp-post .vp-header {
    margin-bottom: 16px;
    border-bottom: 1px solid var(--vp-c-divider);
}

.vp-post .vp-header-title {
    font-size: 24px;
    font-weight: 600;
}

.vp-post .vp-footer-content {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    font-size: 14px;
}

.vp-post .vp-footer-content a {
    color: var(--vp-c-brand-1);
}
</style>
