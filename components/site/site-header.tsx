import Link from 'next/link'
import { type Locale, owner, siteCopy } from './data'

export function SiteHeader({
  locale,
  alternateHref,
}: {
  locale: Locale
  alternateHref?: string
}) {
  const copy = siteCopy[locale]
  const isChinese = locale === 'zh'
  const homeHref = isChinese ? '/zh' : '/'
  const languageHref = alternateHref ?? (isChinese ? '/' : '/zh')

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/88 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-6 px-6 py-3.5 lg:px-10">
        <Link
          href={`${homeHref}#about`}
          className="flex min-h-11 items-center gap-2"
          aria-label={isChinese ? 'Mary，首页' : 'Mary, home'}
        >
          <span className="font-semibold tracking-tight">{owner.name}</span>
          <span className="text-sm text-muted-foreground">@{owner.handle}</span>
        </Link>

        <div className="flex items-center gap-5">
          <nav
            aria-label={isChinese ? '页面导航' : 'Page sections'}
            className="hidden items-center gap-5 text-sm text-muted-foreground sm:flex"
          >
            <Link href={`${homeHref}#writing`} className="nav-link">
              {copy.nav.writing}
            </Link>
            <Link href={`${homeHref}#projects`} className="nav-link">
              {copy.nav.projects}
            </Link>
            <Link href={`${homeHref}#toolkit`} className="nav-link">
              {copy.nav.toolkit}
            </Link>
          </nav>

          <Link
            href={languageHref}
            hrefLang={isChinese ? 'en' : 'zh-CN'}
            className="language-switch inline-flex min-h-11 items-center gap-2 whitespace-nowrap px-1 text-xs font-medium"
            aria-label={isChinese ? 'Switch to English' : '切换到中文'}
          >
            <span className={isChinese ? 'text-muted-foreground' : 'text-foreground'}>EN</span>
            <span aria-hidden="true" className="text-border">/</span>
            <span className={isChinese ? 'text-foreground' : 'text-muted-foreground'}>中文</span>
          </Link>
        </div>
      </div>
    </header>
  )
}
