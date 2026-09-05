import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, AtSign, BookOpen, BriefcaseBusiness, Code2, Mail } from 'lucide-react'
import { listPosts } from '@/lib/posts'
import { localePrefix, siteUrl } from '@/lib/url'
import { type Locale, owner, type Project, siteCopy, toolkit } from './data'
import { SiteHeader } from './site-header'

const socialLinks = [
  { label: 'GitHub', href: owner.github, icon: Code2 },
  { label: 'LinkedIn', href: owner.linkedin, icon: BriefcaseBusiness },
  { label: 'X', href: owner.x, icon: AtSign },
  { label: 'Email', href: `mailto:${owner.email}`, icon: Mail },
]

const rednoteLink = {
  label: '小红书',
  href: `https://www.xiaohongshu.com/search_result?keyword=${owner.rednote}`,
  icon: BookOpen,
}

function Section({
  id,
  label,
  children,
}: {
  id: string
  label: string
  children: React.ReactNode
}) {
  return (
    <section
      id={id}
      className="site-section scroll-mt-24 grid gap-6 border-t border-border py-12 md:grid-cols-[9rem_1fr] md:gap-12 md:py-16"
    >
      <h2 className="section-label text-sm font-medium text-muted-foreground">{label}</h2>
      <div>{children}</div>
    </section>
  )
}

export function HomePage({ locale, projects }: { locale: Locale; projects: Project[] }) {
  const copy = siteCopy[locale]
  const prefix = localePrefix(locale)
  const writingPosts = listPosts(locale)
  const links = locale === 'zh'
    ? [...socialLinks.slice(0, 3), rednoteLink, ...socialLinks.slice(3)]
    : socialLinks

  return (
    <div className="dir-journal min-h-svh bg-background text-foreground" lang={copy.htmlLang}>
      <SiteHeader locale={locale} />

      <main className="mx-auto w-full max-w-5xl px-6 pb-20 lg:px-10">
        <section id="about" className="scroll-mt-24 pt-10 md:pt-14">
          <div className="grid items-end gap-5 md:grid-cols-[1fr_13rem] md:gap-14 lg:grid-cols-[1fr_15rem]">
            <div className="max-w-2xl pb-12 md:pb-16">
              <p className="section-label text-sm font-medium text-muted-foreground">{copy.aboutLabel}</p>
              <h1 className="mt-4 text-4xl font-semibold leading-[1.12] tracking-[-0.035em] text-balance md:text-5xl">
                {copy.greeting}
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-8 text-foreground/90">{copy.bio}</p>
              <p className="mt-3 max-w-xl leading-7 text-muted-foreground">{copy.note}</p>

              <div className="mt-7 flex flex-wrap items-center gap-2" aria-label={copy.socialLabel}>
                {links.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noreferrer' : undefined}
                    className="social-link inline-flex min-h-11 items-center gap-2 text-sm"
                  >
                    <Icon size={16} strokeWidth={1.8} aria-hidden="true" />
                    {label}
                  </a>
                ))}
              </div>
            </div>

            <div className="avatar-wrap -mt-6 h-56 w-40 justify-self-end sm:-mt-10 sm:h-64 sm:w-44 md:mt-0 md:h-72 md:w-52 lg:h-80 lg:w-60">
              <Image
                src={siteUrl('/mary-avatar-pixel-v2.png')}
                alt={locale === 'zh' ? 'Mary 的像素风头像' : 'Pixel-art avatar of Mary'}
                width={1024}
                height={1536}
                priority
                sizes="(min-width: 1024px) 240px, (min-width: 768px) 208px, 176px"
                className="avatar-sprite h-full w-full object-contain object-bottom"
              />
              <div className="avatar-step" aria-hidden="true" />
            </div>
          </div>
        </section>

        <Section id="toolkit" label={copy.toolkitLabel}>
          <p className="mb-8 max-w-2xl leading-7 text-muted-foreground">{copy.toolkitNote}</p>
          <dl className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
            {toolkit.map((group) => (
              <div key={group.label.en}>
                <dt className="text-sm font-medium">{group.label[locale]}</dt>
                <dd className="mt-2 leading-7 text-muted-foreground">{group.items.join(', ')}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="projects" label={copy.projectsLabel}>
          <p className="mb-8 max-w-2xl leading-7 text-muted-foreground">{copy.projectsNote}</p>
          <div className="-mx-3 divide-y divide-border border-y border-border">
            {projects.map((project, index) => (
              <article key={project.slug} className="project-row grid gap-3 px-3 py-6 sm:grid-cols-[2.25rem_1fr_auto] sm:gap-5">
                <span className="project-number pt-1 text-xs text-muted-foreground" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">{project.name}</h3>
                  {project.description && (
                    <p className="mt-1.5 max-w-2xl leading-7 text-muted-foreground">{project.description}</p>
                  )}
                  {project.languages.length > 0 && (
                    <p className="mt-3 text-xs text-muted-foreground">{project.languages.join(' · ')}</p>
                  )}
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link inline-flex min-h-11 items-center gap-1.5 self-start text-sm font-medium"
                  aria-label={`${copy.openProject}: ${project.name}`}
                >
                  {copy.openProject}
                  <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </Section>

        {writingPosts.length > 0 && (
          <Section id="writing" label={copy.writingLabel}>
            <div className="divide-y divide-border">
              {writingPosts.slice(0, 3).map((post) => (
                <article key={post.slug} className="group max-w-2xl py-8 first:pt-0 last:pb-0">
                  <p className="text-sm text-muted-foreground">
                    <time dateTime={post.dateTime}>{post.date}</time>
                    <span aria-hidden="true"> · </span>
                    {post.languages.join(' · ')}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                    <Link href={`${prefix}/writing/${post.slug}`} className="title-link inline-flex min-h-11 items-center">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-3 leading-7 text-muted-foreground">{post.excerpt}</p>
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
            <Link
              href={`${prefix}/writing`}
              className="title-link mt-8 inline-flex min-h-11 items-center gap-2 text-sm font-medium"
            >
              {copy.allWriting}
              <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden="true" />
            </Link>
          </Section>
        )}

        <footer className="border-t border-border py-6 text-sm text-muted-foreground">
          <span>© 2026 {owner.name}</span>
        </footer>
      </main>
    </div>
  )
}
