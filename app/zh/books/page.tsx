import type { Metadata } from 'next'
import { BooksIndex } from '@/components/site/books-index'
import { siteCopy } from '@/components/site/data'
import { siteUrl } from '@/lib/url'

export const metadata: Metadata = {
  title: '读书 — snikmas',
  description: siteCopy.zh.booksIndex.description,
  alternates: {
    canonical: siteUrl('/zh/books'),
    languages: {
      en: siteUrl('/books'),
      'zh-CN': siteUrl('/zh/books'),
    },
  },
}

export default function ChineseBooksIndexPage() {
  return <BooksIndex locale="zh" />
}
