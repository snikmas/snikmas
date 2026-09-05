import type { Metadata } from 'next'
import { HomePage } from '@/components/site/home-page'
import { getPinnedProjects } from '@/lib/github-projects'
import { siteUrl } from '@/lib/url'

export const metadata: Metadata = {
  title: 'snikmas',
  description:
    'Mary writes about backend engineering, AI, books, and life between Russia and China. She also shares selected Python projects.',
  alternates: {
    canonical: siteUrl('/'),
    languages: {
      en: siteUrl('/'),
      'zh-CN': siteUrl('/zh'),
    },
  },
}

export default async function EnglishHomePage() {
  const projects = await getPinnedProjects()

  return <HomePage locale="en" projects={projects} />
}
