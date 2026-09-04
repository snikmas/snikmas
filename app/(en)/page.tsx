import type { Metadata } from 'next'
import { HomePage } from '@/components/site/home-page'
import { getPinnedProjects } from '@/lib/github-projects'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export const metadata: Metadata = {
  title: 'snikmas',
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

export default async function EnglishHomePage() {
  const projects = await getPinnedProjects()

  return <HomePage locale="en" projects={projects} />
}
