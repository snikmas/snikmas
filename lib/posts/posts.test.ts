import { describe, expect, it } from 'vitest'
import { createPostApi, formatDate, readingTimeMinutes } from './core'
import { getPost, listPosts } from './index'
import type { PostEntry } from './types'

const repeat = (s: string, n: number) => Array(n).fill(s).join('')

function makeFixture(): PostEntry {
  return {
    meta: {
      slug: 'bilingual-fixture',
      date: '2026-08-15',
      category: 'Test',
      title: 'Bilingual Fixture',
      excerpt: {
        en: 'English excerpt.',
        zh: '中文摘要。',
      },
    },
    bodies: {
      en: {
        Component: () => null,
        source: `${repeat('word ', 399)}word`,
      },
      zh: {
        Component: () => null,
        source: repeat('字', 800),
      },
    },
  }
}

describe('real registry', () => {
  it('lists English posts newest first', () => {
    const posts = listPosts('en')
    expect(posts.map((p) => p.slug)).toEqual([
      'i-thought-i-was-outside-the-race',
      'ai-hype-my-thoughts',
    ])
  })

  it('lists only Chinese posts for zh', () => {
    const posts = listPosts('zh')
    expect(posts.map((p) => p.slug)).toEqual(['i-thought-i-was-outside-the-race'])
  })

  it('does not include English-only posts in Chinese list', () => {
    const posts = listPosts('zh')
    expect(posts.some((p) => p.slug === 'ai-hype-my-thoughts')).toBe(false)
  })

  it('returns null for a Chinese-only missing locale', () => {
    expect(getPost('ai-hype-my-thoughts', 'zh')).toBeNull()
  })

  it('returns the Chinese post', () => {
    const post = getPost('i-thought-i-was-outside-the-race', 'zh')
    expect(post).not.toBeNull()
    expect(post?.Component).toBeTypeOf('function')
    expect(post?.title).toBe('I thought I was outside the race')
    expect(post?.dateTime).toBe('2026-09-05')
    expect(post?.category).toBe('Thoughts')
  })

  it('renders bilingual post languages', () => {
    const post = getPost('i-thought-i-was-outside-the-race', 'en')
    expect(post?.languages).toEqual(['EN', '中文'])
  })

  it('renders English-only post languages', () => {
    const post = getPost('ai-hype-my-thoughts', 'en')
    expect(post?.languages).toEqual(['EN'])
  })

  it('has unique slugs', () => {
    const slugs = listPosts('en').map((p) => p.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it('has valid ISO dates', () => {
    for (const post of listPosts('en')) {
      expect(post.dateTime).toMatch(/^\d{4}-\d{2}-\d{2}$/)
      expect(Number.isNaN(Date.parse(post.dateTime))).toBe(false)
    }
  })

  it('has positive reading time', () => {
    for (const post of listPosts('en')) {
      expect(Number(post.readingTime.match(/\d+/)?.[0])).toBeGreaterThan(0)
    }
  })
})

describe('createPostApi fixtures', () => {
  it('renders bilingual languages as EN and 中文', () => {
    const { listPosts } = createPostApi([makeFixture()])
    expect(listPosts('en')[0]?.languages).toEqual(['EN', '中文'])
  })

  it('computes reading time for English', () => {
    const { listPosts } = createPostApi([makeFixture()])
    expect(listPosts('en')[0]?.readingTime).toBe('2 min read')
  })

  it('computes reading time for Chinese', () => {
    const { listPosts } = createPostApi([makeFixture()])
    expect(listPosts('zh')[0]?.readingTime).toBe('阅读约 2 分钟')
  })
})

describe('formatDate', () => {
  it('formats English dates', () => {
    expect(formatDate('2026-07-22', 'en')).toBe('July 22, 2026')
  })

  it('formats Chinese dates', () => {
    expect(formatDate('2026-07-22', 'zh')).toBe('2026 年 7 月 22 日')
  })
})

describe('readingTimeMinutes', () => {
  it('rounds 400 English words up to 2 minutes', () => {
    expect(readingTimeMinutes(`${repeat('word ', 399)}word`)).toBe(2)
  })

  it('rounds 800 CJK characters up to 2 minutes', () => {
    expect(readingTimeMinutes(repeat('字', 800))).toBe(2)
  })
})
