import type { Metadata, Viewport } from 'next'
import { RootShell } from '@/components/site/root-shell'
import '../globals.css'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export const metadata: Metadata = {
  title: 'snikmas',
  description:
    'Mary 在这里记录后端开发、AI、读书和中俄生活，也介绍她用 Python 完成的软件项目。',
  icons: {
    icon: [{ url: `${basePath}/icon-dark-32x32.png` }],
    apple: `${basePath}/apple-icon.png`,
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#151412',
}

export default function ChineseRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <RootShell lang="zh-CN">{children}</RootShell>
}
