import type { Metadata } from 'next'
import { WritingIndex } from '@/components/site/writing-index'
import { siteCopy } from '@/components/site/data'
import { siteUrl } from '@/lib/url'

export const metadata: Metadata = {
  title: '文章 — snikmas',
  description: siteCopy.zh.writingIndex.description,
  alternates: {
    canonical: siteUrl('/zh/writing'),
    languages: {
      en: siteUrl('/writing'),
      'zh-CN': siteUrl('/zh/writing'),
    },
  },
}

export default function ChineseWritingIndexPage() {
  return <WritingIndex locale="zh" />
}
