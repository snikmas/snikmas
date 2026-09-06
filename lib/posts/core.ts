import type { Locale } from '@/components/site/data'
import type { Post, PostEntry, PostSummary } from './types'

const EN_MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const CJK_CHAR = /[　-ヿ㐀-䶿一-鿿豈-﫿]/g
const WORD_CHAR = /[\p{L}\p{N}]/u

export function formatDate(iso: string, locale: Locale): string {
  const [year, month, day] = iso.split('-').map(Number)
  if (locale === 'zh') return `${year} 年 ${month} 月 ${day} 日`
  return `${EN_MONTHS[month - 1]} ${day}, ${year}`
}

export function readingTimeMinutes(source: string): number {
  const text = source.replace(/<[^>]*>/g, ' ')
  const cjkChars = (text.match(CJK_CHAR) ?? []).length
  const latinWords = text
    .replace(CJK_CHAR, ' ')
    .split(/\s+/)
    .filter((token) => WORD_CHAR.test(token)).length
  return Math.max(1, Math.ceil(latinWords / 200 + cjkChars / 400))
}

function formatReadingTime(minutes: number, locale: Locale): string {
  return locale === 'zh' ? `阅读约 ${minutes} 分钟` : `${minutes} min read`
}

function renderLocale(locale: Locale): string {
  return locale === 'en' ? 'EN' : '中文'
}

function summarize(entry: PostEntry, locale: Locale): PostSummary | null {
  const body = entry.bodies[locale]
  const excerpt = entry.meta.excerpt[locale]
  const title = entry.meta.title[locale]
  if (!body || !excerpt || !title) return null
  return {
    slug: entry.meta.slug,
    title,
    category: entry.meta.category,
    date: formatDate(entry.meta.date, locale),
    dateTime: entry.meta.date,
    readingTime: formatReadingTime(readingTimeMinutes(body.source), locale),
    excerpt,
    languages: (Object.keys(entry.bodies) as Locale[]).map(renderLocale),
  }
}

export function createPostApi(entries: PostEntry[]) {
  return {
    listPosts(locale: Locale): PostSummary[] {
      return entries
        .map((entry) => summarize(entry, locale))
        .filter((post): post is PostSummary => post !== null)
        .sort((a, b) => b.dateTime.localeCompare(a.dateTime))
    },

    getPost(slug: string, locale: Locale): Post | null {
      const entry = entries.find((e) => e.meta.slug === slug)
      const summary = entry && summarize(entry, locale)
      if (!entry || !summary) return null
      return { ...summary, Component: entry.bodies[locale]!.Component }
    },
  }
}
