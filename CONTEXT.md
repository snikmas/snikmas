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
