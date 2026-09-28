import localFont from 'next/font/local'
import Script from 'next/script'
import type { ReactNode } from 'react'

const geist = localFont({
  src: '../../app/fonts/Geist-Variable.woff2',
  variable: '--font-geist',
})
const geistMono = localFont({
  src: '../../app/fonts/GeistMono-Variable.woff2',
  variable: '--font-geist-mono',
})

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
