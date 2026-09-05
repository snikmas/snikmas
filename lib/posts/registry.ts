import { readFileSync } from 'node:fs'
import path from 'node:path'
import type { ComponentType } from 'react'
import type { Locale } from '@/components/site/data'
import aiHypeMeta from '@/content/posts/ai-hype-my-thoughts/meta'
import AiHypeEn from '@/content/posts/ai-hype-my-thoughts/en.mdx'
import outsideMeta from '@/content/posts/i-thought-i-was-outside-the-race/meta'
import OutsideEn from '@/content/posts/i-thought-i-was-outside-the-race/en.mdx'
import OutsideZh from '@/content/posts/i-thought-i-was-outside-the-race/zh.mdx'
import type { PostEntry, PostMeta } from './types'

function readSource(slug: string, file: string): string {
  return readFileSync(path.join(process.cwd(), 'content', 'posts', slug, file), 'utf8')
}

function definePost(
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

export const registry: PostEntry[] = [
  definePost(outsideMeta, { en: OutsideEn, zh: OutsideZh }),
  definePost(aiHypeMeta, { en: AiHypeEn }),
]
