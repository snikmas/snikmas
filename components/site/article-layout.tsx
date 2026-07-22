import Link from 'next/link'
import type { ReactNode } from 'react'

type ArticleLayoutProps = {
  title: string
  date: string
  category: string
  readingTime: string
  children: ReactNode
}

export function ArticleLayout({
  title,
  date,
  category,
  readingTime,
  children,
}: ArticleLayoutProps) {
  return (
    <div className="dir-journal min-h-svh bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex w-full max-w-3xl items-baseline justify-between gap-6 px-6 py-5 lg:px-10">
          <Link href="/" className="font-mono text-sm transition-colors hover:text-accent">
            Mary / snikmas
          </Link>
          <Link
            href="/#writing"
            className="font-mono text-xs text-muted-foreground transition-colors hover:text-accent"
          >
            ← all writing
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl px-6 pb-28 pt-20 lg:px-10 lg:pt-28">
        <article>
          <header className="border-b border-border pb-10">
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              {category}
            </p>
            <h1 className="mt-5 max-w-2xl font-mono text-3xl font-medium leading-tight tracking-tight text-balance md:text-5xl">
              {title}
            </h1>
            <p className="mt-6 font-mono text-xs text-muted-foreground">
              <time dateTime="2026-07-22">{date}</time> · {readingTime}
            </p>
          </header>

          <div className="article-copy pt-10">{children}</div>
        </article>

        <footer className="mt-20 border-t border-border pt-6 font-mono text-xs text-muted-foreground">
          <Link href="/#writing" className="transition-colors hover:text-accent">
            ← Back to writing
          </Link>
        </footer>
      </main>
    </div>
  )
}
