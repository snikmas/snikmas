import type { Metadata } from 'next'
import { HomePage } from '@/components/site/home-page'
import { siteUrl } from '@/components/site/data'

export const metadata: Metadata = {
  title: 'Mary (snikmas) | 文章与软件项目',
  description: 'Mary 在这里记录后端开发、AI、读书和中俄生活，也介绍她用 Python 和 Rust 完成的软件项目。',
  alternates: {
    canonical: `${siteUrl}/zh/`,
    languages: {
      en: `${siteUrl}/`,
      'zh-CN': `${siteUrl}/zh/`,
    },
  },
}

export default function ChineseHomePage() {
  return <HomePage locale="zh" />
}
