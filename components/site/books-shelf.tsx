'use client'

import { useState } from 'react'
import { BookOpen, ChevronDown, ChevronUp } from 'lucide-react'
import { type Book, type BookCategory, type BookStatus } from '@/lib/books'
import { siteCopy, type Locale } from './data'
import { SiteHeader } from './site-header'

type ShelfBook = Book & { cover: string | null }
type Topic = 'all' | BookCategory

const sectionOrder: BookStatus[] = ['reading', 'read', 'planned', 'shelved']
const categoryOrder: BookCategory[] = ['psychology', 'people', 'life', 'writing', 'programming', 'fiction']
const plannedPreviewLimit = 6

function BookRow({
  book,
  locale,
  showCategory,
}: {
  book: ShelfBook
  locale: Locale
  showCategory: boolean
}) {
  const copy = siteCopy[locale].booksIndex
  const note = book.note[locale] ?? book.note.en

  return (
    <li className="flex gap-5">
      {book.cover ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={book.cover}
          alt=""
          loading="lazy"
          className="h-28 w-[4.5rem] shrink-0 rounded-sm border border-border object-cover"
        />
      ) : (
        <div
          className="flex h-28 w-[4.5rem] shrink-0 items-center justify-center rounded-sm border border-border text-muted-foreground"
          aria-hidden="true"
        >
          <BookOpen size={20} strokeWidth={1.5} />
        </div>
      )}
      <div className="min-w-0">
        <h3 className="text-base font-medium leading-snug tracking-tight">{book.title}</h3>
        <p className="mt-1 text-xs leading-5 text-muted-foreground">{book.author}</p>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">{note}</p>
        {showCategory && (
          <p className="mt-2 text-xs leading-5 text-muted-foreground/80">
            {copy.categories[book.category]}
          </p>
        )}
      </div>
    </li>
  )
}

export function BooksShelf({ locale, books }: { locale: Locale; books: ShelfBook[] }) {
  const copy = siteCopy[locale].booksIndex
  const [topic, setTopic] = useState<Topic>('all')
  const [showAllPlanned, setShowAllPlanned] = useState(false)
  const alternateHref = locale === 'zh' ? '/books' : '/zh/books'
  const filteredBooks = books.filter((book) => topic === 'all' || book.category === topic)
  const sections = sectionOrder
    .map((status) => ({
      status,
      items: filteredBooks
        .filter((book) => book.status === status)
        .sort((a, b) => categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category)),
    }))
    .filter((section) => section.items.length > 0)
  const topics: Topic[] = ['all', ...categoryOrder.filter((category) => books.some((book) => book.category === category))]

  return (
    <div className="dir-journal min-h-svh bg-background text-foreground" lang={locale === 'zh' ? 'zh-CN' : 'en'}>
      <SiteHeader locale={locale} alternateHref={alternateHref} />

      <main className="mx-auto w-full max-w-5xl px-6 pb-28 pt-16 lg:px-10 lg:pt-24">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">{copy.title}</h1>
        <p className="mt-4 max-w-xl leading-7 text-muted-foreground">{copy.intro}</p>

        <div className="mt-6 flex flex-wrap gap-x-1.5" role="group" aria-label={copy.filterLabel}>
          {topics.map((value) => (
            <button
              key={value}
              type="button"
              aria-pressed={topic === value}
              aria-controls="book-results"
              onClick={() => {
                setTopic(value)
                setShowAllPlanned(false)
              }}
              className="group inline-flex min-h-11 min-w-11 cursor-pointer items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <span
                className={`rounded-full border px-3 py-1 text-xs leading-5 transition-colors motion-reduce:transition-none ${
                  topic === value
                    ? 'border-accent/40 bg-accent/15 text-accent'
                    : 'border-border text-muted-foreground group-hover:border-accent/40 group-hover:text-foreground'
                }`}
              >
                {value === 'all' ? copy.allTopics : copy.topicLabels[value]}
              </span>
            </button>
          ))}
        </div>

        <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">
          {locale === 'zh' ? `共 ${filteredBooks.length} 本书` : `${filteredBooks.length} books`}
        </p>

        <div id="book-results">
          {sections.length === 0 ? (
            <p className="mt-12 leading-7 text-muted-foreground">{copy.empty}</p>
          ) : (
            sections.map(({ status, items }) => {
              const canExpand = status === 'planned' && items.length > plannedPreviewLimit
              const visibleItems = canExpand && !showAllPlanned ? items.slice(0, plannedPreviewLimit) : items

              return (
                <section key={status} className="mt-12 md:mt-14" aria-labelledby={`books-${status}-heading`}>
                  <h2 id={`books-${status}-heading`} className="flex items-baseline gap-3 border-b border-border pb-3 text-lg font-semibold tracking-tight">
                    {copy.sections[status]}
                    <span className="text-xs font-normal tabular-nums text-muted-foreground">{items.length}</span>
                  </h2>
                  <ul id={`books-${status}-list`} className="mt-7 grid gap-x-12 gap-y-9 md:grid-cols-2">
                    {visibleItems.map((book) => (
                      <BookRow key={book.slug} book={book} locale={locale} showCategory={topic === 'all'} />
                    ))}
                  </ul>
                  {canExpand && (
                    <button
                      type="button"
                      aria-expanded={showAllPlanned}
                      aria-controls={`books-${status}-list`}
                      onClick={() => setShowAllPlanned((expanded) => !expanded)}
                      className="mt-8 inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-sm text-sm text-muted-foreground transition-colors hover:text-accent motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                    >
                      {showAllPlanned ? copy.showFewerPlanned : copy.showAllPlanned}
                      {!showAllPlanned && <span className="tabular-nums">({items.length})</span>}
                      {showAllPlanned ? <ChevronUp size={16} aria-hidden="true" /> : <ChevronDown size={16} aria-hidden="true" />}
                    </button>
                  )}
                </section>
              )
            })
          )}
        </div>
      </main>
    </div>
  )
}
