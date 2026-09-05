import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { posts } from '@/components/site/data'
import { SiteHeader } from '@/components/site/site-header'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export const metadata: Metadata = {
  title: '文章 — snikmas',
  description: '关于编程、AI、读书和中俄生活的记录。',
  alternates: {
    canonical: `${basePath}/zh/writing`,
    languages: {
      en: `${basePath}/writing`,
      'zh-CN': `${basePath}/zh/writing`,
    },
  },
}

export default function ChineseWritingIndexPage() {
  return (
    <div className="dir-journal min-h-svh bg-background text-foreground" lang="zh-CN">
      <SiteHeader locale="zh" alternateHref="/writing" />

      <main className="mx-auto w-full max-w-3xl px-6 pb-28 pt-16 lg:px-10 lg:pt-24">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">文章</h1>
        <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
          这里放项目笔记、还没想完的问题，以及关于编程、AI、读书和中俄生活的记录。
        </p>

        <div className="-mx-3 mt-12 divide-y divide-border border-y border-border">
          {posts.map((post) => {
            const articleLocale = post.locales.includes('zh') ? 'zh' : 'en'
            const articleHref = articleLocale === 'zh'
              ? `/zh/writing/${post.slug}`
              : `/writing/${post.slug}`

            return (
              <article key={post.slug} className="project-row px-3 py-7">
                <p className="text-sm text-muted-foreground">
                  <time dateTime={post.dateTime}>{post.date.zh}</time>
                  <span aria-hidden="true"> · </span>
                  {post.readingTime.zh}
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                  <Link href={articleHref} className="title-link inline-flex min-h-11 items-center">
                    {post.title[articleLocale]}
                  </Link>
                </h2>
                <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">{post.excerpt.zh}</p>
                <Link
                  href={articleHref}
                  className="title-link mt-4 inline-flex min-h-11 items-center gap-1.5 text-sm font-medium"
                  aria-label={`阅读全文：${post.title[articleLocale]}`}
                >
                  阅读全文
                  <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden="true" />
                </Link>
              </article>
            )
          })}
        </div>
      </main>
    </div>
  )
}
