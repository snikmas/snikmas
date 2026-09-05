import Link from 'next/link'
import type { ReactNode } from 'react'
import type { Locale } from './data'
import { SiteHeader } from './site-header'

type ArticleLayoutProps = {
  locale: Locale
  title: string
  date: string
  dateTime: string
  category: string
  readingTime: string
  alternateHref?: string
  children: ReactNode
}

export function ArticleLayout({
  locale,
  title,
  date,
  dateTime,
  category,
  readingTime,
  alternateHref,
  children,
}: ArticleLayoutProps) {
  const isChinese = locale === 'zh'
  const writingHref = isChinese ? '/zh/writing' : '/writing'

  return (
    <div className="dir-journal min-h-svh bg-background text-foreground" lang={isChinese ? 'zh-CN' : 'en'}>
      <SiteHeader locale={locale} alternateHref={alternateHref} />

      <main className="mx-auto w-full max-w-3xl px-6 pb-28 pt-20 lg:px-10 lg:pt-28">
        <article>
          <header className="border-b border-border pb-10">
            <p className="text-xs font-medium uppercase tracking-wider text-accent">
              {category}
            </p>
            <h1 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-balance md:text-5xl">
              {title}
            </h1>
            <p className="mt-6 text-xs text-muted-foreground">
              <time dateTime={dateTime}>{date}</time> · {readingTime}
            </p>
          </header>

          <div className="article-copy pt-10">{children}</div>
        </article>

        <footer className="mt-20 border-t border-border pt-6 text-xs text-muted-foreground">
          <Link href={writingHref} className="transition-colors hover:text-accent">
            {isChinese ? '← 返回文章列表' : '← Back to writing'}
          </Link>
        </footer>
      </main>
    </div>
  )
}
