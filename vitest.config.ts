import { fileURLToPath } from 'node:url'
import { defineConfig, type Plugin } from 'vitest/config'

const mdxStub: Plugin = {
  name: 'mdx-stub',
  enforce: 'pre',
  transform(_code, id) {
    if (id.endsWith('.mdx')) {
      return { code: 'export default function MdxStub() { return null }', map: null }
    }
  },
}

export default defineConfig({
  plugins: [mdxStub],
  resolve: {
    alias: { '@': fileURLToPath(new URL('.', import.meta.url)) },
  },
})
