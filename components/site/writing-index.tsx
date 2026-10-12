import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { listPosts } from '@/lib/posts'
import { localePrefix } from '@/lib/url'
import { siteCopy, type Locale } from './data'
import { SiteHeader } from './site-header'

export function WritingIndex({ locale }: { locale: Locale }) {
  const copy = siteCopy[locale]
  const prefix = localePrefix(locale)
  const alternateHref = locale === 'zh' ? '/writing' : '/zh/writing'
  const posts = listPosts(locale)

  return (
    <div
      className="dir-journal min-h-svh bg-background text-foreground"
      lang={locale === 'zh' ? 'zh-CN' : undefined}
    >
      <SiteHeader locale={locale} alternateHref={alternateHref} />

      <main className="mx-auto w-full max-w-3xl px-6 pb-28 pt-16 lg:px-10 lg:pt-24">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">{copy.writingIndex.title}</h1>
        <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
          {copy.writingIndex.intro}
        </p>

        {posts.length === 0 ? (
          <p className="mt-12 leading-7 text-muted-foreground">{copy.writingIndex.empty}</p>
        ) : (
          <div className="-mx-3 mt-12 divide-y divide-border border-y border-border">
            {posts.map((post) => (
              <article key={post.slug} className="project-row px-3 py-7">
                <p className="text-sm text-muted-foreground">
                  <time dateTime={post.dateTime}>{post.date}</time>
                  <span aria-hidden="true"> · </span>
                  {post.readingTime}
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                  <Link href={`${prefix}/writing/${post.slug}`} className="title-link inline-flex min-h-11 items-center">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">{post.excerpt}</p>
                <Link
                  href={`${prefix}/writing/${post.slug}`}
                  className="title-link mt-4 inline-flex min-h-11 items-center gap-1.5 text-sm font-medium"
                  aria-label={`${copy.readMore}: ${post.title}`}
                >
                  {copy.readMore}
                  <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
