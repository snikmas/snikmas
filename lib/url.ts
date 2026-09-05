import type { Locale } from '@/components/site/data'

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export function siteUrl(path: string): string {
  return `${basePath}${path}`
}

export function localePrefix(locale: Locale): string {
  return locale === 'zh' ? '/zh' : ''
}
