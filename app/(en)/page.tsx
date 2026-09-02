import type { Metadata } from 'next'
import { HomePage } from '@/components/site/home-page'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export const metadata: Metadata = {
  title: 'Mary (snikmas) | Writing and software projects',
  description:
    'Mary writes about backend engineering, AI, books, and life between Russia and China. She also shares selected Python projects.',
  alternates: {
    canonical: `${basePath}/`,
    languages: {
      en: `${basePath}/`,
      'zh-CN': `${basePath}/zh`,
    },
  },
}

export default function EnglishHomePage() {
  return <HomePage locale="en" />
}
