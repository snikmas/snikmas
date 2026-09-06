import type { ComponentType } from 'react'
import type { Locale } from '@/components/site/data'

export type PostMeta = {
  slug: string
  /** ISO date, e.g. '2026-07-22' */
  date: string
  category: string
  /** One title per locale the post has a body in */
  title: Partial<Record<Locale, string>>
  /** One excerpt per locale the post has a body in */
  excerpt: Partial<Record<Locale, string>>
}

export type PostBody = {
  Component: ComponentType
  /** Raw MDX source, used to compute reading time */
  source: string
}

export type PostEntry = {
  meta: PostMeta
  bodies: Partial<Record<Locale, PostBody>>
}

export type PostSummary = {
  slug: string
  title: string
  category: string
  /** Display date, formatted per locale */
  date: string
  /** ISO date for dateTime attributes */
  dateTime: string
  /** Display reading time, per locale */
  readingTime: string
  excerpt: string
  /** Locales the post has a body in, rendered as 'EN' or '中文' */
  languages: string[]
}

export type Post = PostSummary & {
  Component: ComponentType
}
