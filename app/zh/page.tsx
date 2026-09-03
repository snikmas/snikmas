import type { Metadata } from 'next'
import { HomePage } from '@/components/site/home-page'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export const metadata: Metadata = {
  title: 'snikmas',
  description: 'Mary 在这里记录后端开发、AI、读书和中俄生活，也介绍她用 Python 完成的软件项目。',
  alternates: {
    canonical: `${basePath}/zh`,
    languages: {
      en: `${basePath}/`,
      'zh-CN': `${basePath}/zh`,
    },
  },
}

export default function ChineseHomePage() {
  return <HomePage locale="zh" />
}
