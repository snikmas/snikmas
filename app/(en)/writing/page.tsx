import type { Metadata } from 'next'
import { WritingIndex } from '@/components/site/writing-index'
import { siteCopy } from '@/components/site/data'
import { siteUrl } from '@/lib/url'

export const metadata: Metadata = {
  title: 'Writing — snikmas',
  description: siteCopy.en.writingIndex.description,
  alternates: {
    canonical: siteUrl('/writing'),
  },
}

export default function WritingIndexPage() {
  return <WritingIndex locale="en" />
}
