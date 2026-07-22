import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { owner, posts, projects, stack } from '@/components/site/data'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export const metadata: Metadata = {
  title: 'Mary (snikmas) — Backend Developer & CS Student',
  description:
    'Personal portfolio and writing space of Mary, a computer science student in China building backend tools and experimenting with AI, LLMs, and automation.',
}

function MarginLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="block font-mono text-xs uppercase tracking-widest text-accent lg:pt-1.5 lg:text-right">
      {children}
    </span>
  )
}

function Entry({
  label,
  children,
  id,
}: {
  label: React.ReactNode
  children: React.ReactNode
  id?: string
}) {
  return (
    <section
      id={id}
      className="grid gap-3 border-t border-border py-10 lg:grid-cols-[10rem_1fr] lg:gap-10"
    >
      <MarginLabel>{label}</MarginLabel>
      <div>{children}</div>
    </section>
  )
}

const navLinks = [
  ['#about', 'about'],
  ['#projects', 'projects'],
  ['#stack', 'stack'],
  ['#writing', 'writing'],
  ['#contact', 'contact'],
] as const

export default function JournalPage() {
  return (
    <div className="dir-journal min-h-svh bg-background text-foreground">
      {/* Sticky top header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-5xl flex-wrap items-baseline justify-between gap-x-8 gap-y-2 px-6 py-4 lg:px-10">
          <a href="#about" className="flex items-baseline gap-2">
            <span className="text-lg font-medium">{owner.name}</span>
            <span className="text-sm text-muted-foreground">/ {owner.handle}</span>
          </a>
          <nav aria-label="Sections" className="flex flex-wrap gap-x-5 gap-y-1 font-mono text-xs">
            {navLinks.map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="text-muted-foreground transition-colors hover:text-accent"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl px-6 pb-32 lg:px-10">
        {/* About: short bio, facts, and reserved photo space */}
        <section id="about" className="grid gap-10 pb-16 pt-24 lg:grid-cols-[1fr_auto] lg:gap-16 lg:pb-20 lg:pt-32">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              about
            </p>
            <h1 className="mt-5 font-mono text-3xl font-medium leading-snug tracking-tight text-balance md:text-4xl">
              Hi, I&apos;m {owner.name}.
            </h1>
            <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
              I&apos;m a computer science student studying in China. {owner.tagline}{' '}
              I also write about programming, AI, books, life, and studying in China.
            </p>

            <dl className="mt-10 grid max-w-2xl gap-x-8 gap-y-4 font-mono text-xs leading-relaxed sm:grid-cols-2">
              <div>
                <dt className="text-accent">location</dt>
                <dd className="text-muted-foreground">{owner.location}</dd>
              </div>
              <div>
                <dt className="text-accent">focus</dt>
                <dd className="text-muted-foreground">backend development · AI/LLM tooling</dd>
              </div>
              <div>
                <dt className="text-accent">now</dt>
                <dd className="text-muted-foreground">{owner.now}</dd>
              </div>
              <div>
                <dt className="text-accent">open to</dt>
                <dd className="text-muted-foreground">{owner.openTo}</dd>
              </div>
            </dl>
          </div>

          <div className="aspect-square w-52 self-start overflow-hidden border border-border bg-muted sm:w-60 lg:mt-5 lg:w-64">
            <Image
              src={`${basePath}/mary-profile.webp`}
              alt="Portrait of Mary"
              width={800}
              height={800}
              priority
              sizes="(min-width: 1024px) 256px, (min-width: 640px) 240px, 208px"
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        <Entry label="projects" id="projects">
          <div className="flex flex-col gap-10">
            {projects.map((p) => (
              <article key={p.slug} className="group">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h2 className="font-mono text-lg font-medium tracking-tight">
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      className="transition-colors group-hover:text-accent"
                    >
                      {p.name} <span aria-hidden="true">↗</span>
                    </a>
                  </h2>
                  <span className="font-mono text-xs text-muted-foreground">
                    {p.year} · {p.kind.toLowerCase()} · {p.stack.join(', ')}
                  </span>
                </div>
                <p className="mt-2 max-w-2xl font-mono text-sm leading-relaxed">
                  {p.summary}
                </p>
                <p className="mt-2 max-w-2xl border-l-2 border-accent pl-4 text-sm leading-relaxed text-muted-foreground">
                  {p.detail}
                </p>
              </article>
            ))}
          </div>
        </Entry>

        <Entry label="stack" id="stack">
          <div className="grid max-w-2xl gap-x-8 gap-y-5 sm:grid-cols-2">
            {Object.entries({
              languages: stack.languages,
              backend: stack.backend,
              frontend: stack.frontend,
              'data & AI': stack.data,
              'databases & tools': stack.tools,
            }).map(([label, items]) => (
              <div key={label}>
                <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {label}
                </h3>
                <p className="mt-1.5 leading-relaxed">{items.join(', ')}</p>
              </div>
            ))}
          </div>
        </Entry>

        <Entry label="writing" id="writing">
          <div className="max-w-2xl">
            {posts.map((post) => (
              <article key={post.slug} className="group">
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {post.date} · {post.category} · {post.readingTime}
                </p>
                <h2 className="mt-3 font-mono text-lg font-medium tracking-tight">
                  <Link
                    href={`/writing/${post.slug}`}
                    className="transition-colors group-hover:text-accent"
                  >
                    {post.title} <span aria-hidden="true">→</span>
                  </Link>
                </h2>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
              </article>
            ))}
          </div>
        </Entry>

        <Entry label="contact" id="contact">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Here&apos;s where you can find me
          </p>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3 font-mono text-sm">
            <a href={`mailto:${owner.email}`} className="underline decoration-border underline-offset-4 transition-colors hover:text-accent">
              email
            </a>
            <a href={owner.github} target="_blank" rel="noreferrer" className="underline decoration-border underline-offset-4 transition-colors hover:text-accent">
              github
            </a>
            <a href={owner.linkedin} target="_blank" rel="noreferrer" className="underline decoration-border underline-offset-4 transition-colors hover:text-accent">
              linkedin
            </a>
          </div>
        </Entry>

        <footer className="flex flex-wrap justify-between gap-3 border-t border-border py-6 font-mono text-xs text-muted-foreground">
          <span>© 2026 {owner.name} / {owner.handle}</span>
          <span>{owner.location}</span>
        </footer>
      </main>
    </div>
  )
}
