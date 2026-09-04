import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { posts } from '@/components/site/data'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export const metadata: Metadata = {
  title: 'Writing — snikmas',
  description:
    'Notes on programming, AI, books, and life between Russia and China.',
  alternates: {
    canonical: `${basePath}/writing`,
  },
}

export default function WritingIndexPage() {
  return (
    <div className="dir-journal min-h-svh bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex w-full max-w-3xl items-baseline justify-between gap-6 px-6 py-5 lg:px-10">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-accent">
            Mary / snikmas
          </Link>
          <Link
            href="/"
            className="text-xs text-muted-foreground transition-colors hover:text-accent"
          >
            ← home
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl px-6 pb-28 pt-16 lg:px-10 lg:pt-24">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">Writing</h1>
        <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
          Project notes, questions I am still working through, and thoughts on
          programming, AI, books, and life between Russia and China.
        </p>

        <div className="-mx-3 mt-12 divide-y divide-border border-y border-border">
          {posts.map((post) => (
            <article key={post.slug} className="project-row px-3 py-7">
              <p className="text-sm text-muted-foreground">
                <time dateTime={post.dateTime}>{post.date.en}</time>
                <span aria-hidden="true"> · </span>
                {post.readingTime.en}
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                <Link href={`/writing/${post.slug}`} className="title-link inline-flex min-h-11 items-center gap-2">
                  {post.title.en}
                  <ArrowUpRight size={18} strokeWidth={1.8} aria-hidden="true" />
                </Link>
              </h2>
              <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">{post.excerpt.en}</p>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}
