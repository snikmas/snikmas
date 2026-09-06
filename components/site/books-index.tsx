import { existsSync } from 'node:fs'
import path from 'node:path'
import { BookOpen } from 'lucide-react'
import { books, type Book, type BookCategory, type BookStatus } from '@/lib/books'
import { siteUrl } from '@/lib/url'
import { siteCopy, type Locale } from './data'
import { SiteHeader } from './site-header'

const sectionOrder: BookStatus[] = ['reading', 'read', 'planned', 'shelved']
const categoryOrder: BookCategory[] = ['psychology', 'people', 'life', 'writing', 'programming', 'fiction']

function coverFor(slug: string): string | null {
  const file = path.join(process.cwd(), 'public', 'books', `${slug}.jpg`)
  return existsSync(file) ? siteUrl(`/books/${slug}.jpg`) : null
}

function BookRow({ book, locale }: { book: Book; locale: Locale }) {
  const copy = siteCopy[locale]
  const cover = coverFor(book.slug)
  const note = book.note[locale] ?? book.note.en

  return (
    <li className="flex gap-4">
      {cover ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={cover}
          alt=""
          loading="lazy"
          className="h-24 w-16 shrink-0 rounded-sm border border-border object-cover"
        />
      ) : (
        <div
          className="flex h-24 w-16 shrink-0 items-center justify-center rounded-sm border border-border text-muted-foreground"
          aria-hidden="true"
        >
          <BookOpen size={18} strokeWidth={1.5} />
        </div>
      )}
      <div className="min-w-0">
        <h4 className="text-sm font-medium leading-snug tracking-tight">{book.title}</h4>
        <p className="mt-0.5 text-xs text-muted-foreground">{book.author}</p>
        <p className="mt-1.5 text-xs leading-5 text-muted-foreground line-clamp-3">{note}</p>
        <p className="mt-2">
          <span className="rounded-full border border-border px-2 py-0.5 text-xs text-muted-foreground">
            {copy.booksIndex.categories[book.category]}
          </span>
        </p>
      </div>
    </li>
  )
}

export function BooksIndex({ locale }: { locale: Locale }) {
  const copy = siteCopy[locale]
  const alternateHref = locale === 'zh' ? '/books' : '/zh/books'
  const sections = sectionOrder
    .map((status) => ({
      status,
      items: books
        .filter((book) => book.status === status)
        .sort((a, b) => categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category)),
    }))
    .filter((section) => section.items.length > 0)

  return (
    <div
      className="dir-journal min-h-svh bg-background text-foreground"
      lang={locale === 'zh' ? 'zh-CN' : undefined}
    >
      <SiteHeader locale={locale} alternateHref={alternateHref} />

      <main className="mx-auto w-full max-w-5xl px-6 pb-28 pt-16 lg:px-10 lg:pt-24">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">{copy.booksIndex.title}</h1>
        <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
          {copy.booksIndex.intro}
        </p>

        {sections.length === 0 ? (
          <p className="mt-12 leading-7 text-muted-foreground">{copy.booksIndex.empty}</p>
        ) : (
          sections.map(({ status, items }) => (
            <section key={status} className="mt-14">
              <h2 className="border-b border-border pb-3 text-lg font-semibold tracking-tight">
                {copy.booksIndex.sections[status]}
              </h2>
              <ul className="mt-8 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((book) => (
                  <BookRow key={book.slug} book={book} locale={locale} />
                ))}
              </ul>
            </section>
          ))
        )}
      </main>
    </div>
  )
}
