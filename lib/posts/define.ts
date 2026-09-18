import { readFileSync } from 'node:fs'
import path from 'node:path'
import type { ComponentType } from 'react'
import type { Locale } from '@/components/site/data'
import type { PostEntry, PostMeta } from './types'

function readSource(slug: string, file: string): string {
  return readFileSync(path.join(process.cwd(), 'content', 'posts', slug, file), 'utf8')
}

export function definePost(
  meta: PostMeta,
  bodies: Partial<Record<Locale, ComponentType>>,
): PostEntry {
  return {
    meta,
    bodies: Object.fromEntries(
      Object.entries(bodies).map(([locale, Component]) => [
        locale,
        { Component, source: readSource(meta.slug, `${locale}.mdx`) },
      ]),
    ),
  }
}
