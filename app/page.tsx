import type { Metadata } from 'next'
import { HomePage } from '@/components/site/home-page'
import { siteUrl } from '@/components/site/data'

export const metadata: Metadata = {
  title: 'Mary (snikmas) | Writing and software projects',
  description:
    'Mary writes about backend engineering, AI, books, and life between Russia and China. She also shares selected Python and Rust projects.',
  alternates: {
    canonical: `${siteUrl}/`,
    languages: {
      en: `${siteUrl}/`,
      'zh-CN': `${siteUrl}/zh/`,
    },
  },
}

export default function EnglishHomePage() {
  return <HomePage locale="en" />
}
