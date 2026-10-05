import { existsSync } from 'node:fs'
import path from 'node:path'
import { books } from '@/lib/books'
import { siteUrl } from '@/lib/url'
import { type Locale } from './data'
import { BooksShelf } from './books-shelf'

export function BooksIndex({ locale }: { locale: Locale }) {
  const shelf = books.map((book) => ({
    ...book,
    cover: existsSync(path.join(process.cwd(), 'public', 'books', `${book.slug}.jpg`))
      ? siteUrl(`/books/${book.slug}.jpg`)
      : null,
  }))

  return <BooksShelf locale={locale} books={shelf} />
}
