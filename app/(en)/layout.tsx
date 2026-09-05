import type { Metadata, Viewport } from 'next'
import { RootShell } from '@/components/site/root-shell'
import '../globals.css'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export const metadata: Metadata = {
  title: 'snikmas',
  description:
    'A bilingual personal site with writing, selected software projects, and a small profile.',
  icons: {
    icon: [{ url: `${basePath}/icon-dark-32x32.png` }],
    apple: `${basePath}/apple-icon.png`,
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#151412',
}

export default function EnglishRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <RootShell lang="en">{children}</RootShell>
}
