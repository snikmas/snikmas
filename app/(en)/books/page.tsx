import type { Metadata } from 'next'
import { BooksIndex } from '@/components/site/books-index'
import { siteCopy } from '@/components/site/data'
import { siteUrl } from '@/lib/url'

export const metadata: Metadata = {
  title: 'Books — snikmas',
  description: siteCopy.en.booksIndex.description,
  alternates: {
    canonical: siteUrl('/books'),
  },
}

export default function BooksIndexPage() {
  return <BooksIndex locale="en" />
}
