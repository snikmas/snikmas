import Link from 'next/link'
import type { ReactNode } from 'react'
import type { PostSummary } from '@/lib/posts'
import { localePrefix } from '@/lib/url'
import type { Locale } from './data'
import { SiteHeader } from './site-header'

type ArticleLayoutProps = {
  post: PostSummary
  locale: Locale
  alternateHref?: string
  children: ReactNode
}

export function ArticleLayout({ post, locale, alternateHref, children }: ArticleLayoutProps) {
  const prefix = localePrefix(locale)

  return (
    <div className="dir-journal min-h-svh bg-background text-foreground" lang={locale === 'zh' ? 'zh-CN' : 'en'}>
      <SiteHeader locale={locale} alternateHref={alternateHref} />

      <main className="mx-auto w-full max-w-3xl px-6 pb-28 pt-20 lg:px-10 lg:pt-28">
        <article>
          <header className="border-b border-border pb-10">
            <p className="text-xs font-medium uppercase tracking-wider text-accent">
              {post.category}
            </p>
            <h1 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-balance md:text-5xl">
              {post.title}
            </h1>
            <p className="mt-6 text-xs text-muted-foreground">
              <time dateTime={post.dateTime}>{post.date}</time> · {post.readingTime}
            </p>
          </header>

          <div className="article-copy pt-10">{children}</div>
        </article>

        <footer className="mt-20 border-t border-border pt-6 text-xs text-muted-foreground">
          <Link href={`${prefix}/writing`} className="transition-colors hover:text-accent">
            {locale === 'zh' ? '← 返回文章列表' : '← Back to writing'}
          </Link>
        </footer>
      </main>
    </div>
  )
}
