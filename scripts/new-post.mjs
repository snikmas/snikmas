// Scaffolds a new post: content/posts/<slug>/meta.ts + en.mdx, then regenerates
// the registry. Usage: pnpm new-post "Post title" [custom-slug]
import { execFileSync } from 'node:child_process'
import { existsSync, mkdirSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')

const [title, explicitSlug] = process.argv.slice(2)
if (!title) {
  console.error('Usage: pnpm new-post "Post title" [custom-slug]')
  process.exit(1)
}

const slug =
  explicitSlug ??
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
if (!slug || !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) {
  console.error(`Invalid slug "${slug}". Pass one explicitly: pnpm new-post "${title}" my-slug`)
  process.exit(1)
}

const dir = path.join(root, 'content', 'posts', slug)
if (existsSync(dir)) {
  console.error(`content/posts/${slug} already exists`)
  process.exit(1)
}

const now = new Date()
const date = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(
  now.getDate(),
).padStart(2, '0')}`

mkdirSync(dir, { recursive: true })
writeFileSync(
  path.join(dir, 'meta.ts'),
  `import type { PostMeta } from '@/lib/posts/types'

const meta: PostMeta = {
  slug: '${slug}',
  date: '${date}',
  category: 'Thoughts',
  title: {
    en: ${JSON.stringify(title)},
  },
  excerpt: {
    en: 'TODO: one or two sentences summarizing the post.',
  },
}

export default meta
`,
)
writeFileSync(
  path.join(dir, 'en.mdx'),
  `Start writing here. Save the file and the dev server will update the page instantly.

Open http://localhost:3000/writing/${slug}/ while \`pnpm dev\` is running.
`,
)

execFileSync(process.execPath, [path.join(root, 'scripts', 'generate-post-registry.mjs')], {
  stdio: 'inherit',
})

console.log(`Created content/posts/${slug}/`)
console.log(`Next: run \`pnpm dev\` and edit content/posts/${slug}/en.mdx`)
