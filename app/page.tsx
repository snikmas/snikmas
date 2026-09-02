import type { Metadata } from 'next'
import { HomePage } from '@/components/site/home-page'

export const metadata: Metadata = {
  title: 'Mary (snikmas) | Writing and software projects',
  description:
    'Mary writes about backend engineering, AI, books, and life between Russia and China. She also shares selected Python and Rust projects.',
  alternates: {
    canonical: '/',
    languages: {
      en: '/',
      'zh-CN': '/zh',
    },
  },
}

export default function EnglishHomePage() {
  return <HomePage locale="en" />
}
