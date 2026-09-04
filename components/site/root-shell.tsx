import { Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
import type { ReactNode } from 'react'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export function RootShell({
  lang,
  children,
}: {
  lang: string
  children: ReactNode
}) {
  return (
    <html
      lang={lang}
      data-scroll-behavior="smooth"
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
