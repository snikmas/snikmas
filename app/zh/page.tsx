import type { Metadata } from 'next'
import { HomePage } from '@/components/site/home-page'
import { getPinnedProjects } from '@/lib/github-projects'
import { siteUrl } from '@/lib/url'

export const metadata: Metadata = {
  title: 'snikmas',
  description: 'Mary 在这里记录后端开发、AI、读书和中俄生活，也介绍她用 Python 完成的软件项目。',
  alternates: {
    canonical: siteUrl('/zh'),
    languages: {
      en: siteUrl('/'),
      'zh-CN': siteUrl('/zh'),
    },
  },
}

export default async function ChineseHomePage() {
  const projects = await getPinnedProjects()

  return <HomePage locale="zh" projects={projects} />
}
