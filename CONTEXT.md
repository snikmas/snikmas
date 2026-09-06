# Domain Model

Vocabulary for the snikmas personal site. Architecture reviews and design
discussions use these terms.

## Post

A piece of long-form writing published under `/writing`. A Post has:

- a **slug** (URL identifier, language-neutral)
- a **body** in one or more locales (MDX)
- metadata: ISO date, category, excerpt per locale, computed reading time

**Rule: no cross-locale fallback.** A Post may exist only in English or only
in Chinese. A missing locale body is a deliberate absence, not a gap to fill —
the site must not silently substitute another locale's body. (Decided
2026-09-05: some posts will only ever be written in one language.)

## Locale

`en` (default, at `/`) or `zh` (at `/zh`). Homepage and site copy are fully
localized; Posts are not necessarily so (see above).

## Writing

The blog section of the site: an index of Posts plus one page per Post body.

## Book

A reading-log entry listed under `/books`. A Book has:

- a **slug** (also names its cover file: `public/books/<slug>.jpg`)
- a **title** and **author** (original language, not localized)
- a **status**: `reading`, `read`, `planned`, or `shelved` (abandoned or
  paused — one status for both; the reason goes in the note)
- a **category** (genre: psychology, people, life, writing, programming,
  fiction), rendered as a chip on each entry — there are no shelf subsections
- a short **note** — English is required, Chinese optional for now; the zh
  page falls back to the English note until translations are written

Books are plain data (`lib/books.ts`), not MDX. Covers are downloaded once
into `public/books/` by `scripts/fetch-book-covers.mjs` (Open Library) so the
static export never depends on an external image host. There is one index
page per locale and no per-book pages; long-form thoughts about a book belong
in `/writing`.
