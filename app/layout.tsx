import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'Mary (snikmas) — Backend Developer & CS Student',
  description:
    'Personal portfolio and writing space of Mary, a computer science student in China building backend tools and experimenting with AI, LLMs, and automation.',
  icons: {
    icon: [
      { url: `${basePath}/icon-dark-32x32.png` },
      { url: `${basePath}/icon.svg`, type: 'image/svg+xml' },
    ],
    apple: `${basePath}/apple-icon.png`,
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#211e1a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`bg-background ${geist.variable} ${geistMono.variable}`}
    >
      <body className="antialiased font-sans">
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-749RBLDGH7"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-749RBLDGH7');
          `}
        </Script>
      </body>
    </html>
  )
}
