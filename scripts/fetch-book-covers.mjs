// Fetches book covers from Open Library into public/books/<slug>.jpg.
// Uses curl so it honors the system proxy env vars.
// Usage: node scripts/fetch-book-covers.mjs
import { execFileSync } from 'node:child_process'
import { mkdirSync } from 'node:fs'
import path from 'node:path'

const books = [
  ['behave', 'Behave', 'Robert Sapolsky'],
  ['mindsight', 'Mindsight', 'Daniel J. Siegel'],
  ['mistakes-were-made', 'Mistakes Were Made (But Not by Me)', 'Carol Tavris'],
  ['influence', 'Influence', 'Robert Cialdini'],
  ['the-righteous-mind', 'The Righteous Mind', 'Jonathan Haidt'],
  ['the-elephant-in-the-brain', 'The Elephant in the Brain', 'Kevin Simler'],
  ['the-status-game', 'The Status Game', 'Will Storr'],
  ['livewired', 'Livewired', 'David Eagleman'],
  ['games-people-play', 'Games People Play', 'Eric Berne'],
  ['what-do-you-say-after-you-say-hello', 'What Do You Say After You Say Hello?', 'Eric Berne'],
  ['how-to-know-a-person', 'How to Know a Person', 'David Brooks'],
  ['the-good-life', 'The Good Life', 'Robert Waldinger'],
  ['nonviolent-communication', 'Nonviolent Communication', 'Marshall Rosenberg'],
  ['hold-me-tight', 'Hold Me Tight', 'Sue Johnson'],
  ['barking-up-the-wrong-tree', 'Barking Up the Wrong Tree', 'Eric Barker'],
  ['the-culture-map', 'The Culture Map', 'Erin Meyer'],
  ['four-thousand-weeks', 'Four Thousand Weeks', 'Oliver Burkeman'],
  ['mans-search-for-meaning', "Man's Search for Meaning", 'Viktor Frankl'],
  ['how-to-fail-at-almost-everything', 'How to Fail at Almost Everything and Still Win Big', 'Scott Adams'],
  ['poor-charlies-almanack', "Poor Charlie's Almanack", 'Charlie Munger'],
  ['the-creative-act', 'The Creative Act', 'Rick Rubin'],
  ['the-happiness-hypothesis', 'The Happiness Hypothesis', 'Jonathan Haidt'],
  ['die-with-zero', 'Die With Zero', 'Bill Perkins'],
  ['stolen-focus', 'Stolen Focus', 'Johann Hari'],
  ['on-writing-well', 'On Writing Well', 'William Zinsser'],
  ['made-to-stick', 'Made to Stick', 'Chip Heath'],
  ['storyworthy', 'Storyworthy', 'Matthew Dicks'],
  ['several-short-sentences-about-writing', 'Several Short Sentences About Writing', 'Verlyn Klinkenborg'],
  ['everybody-writes', 'Everybody Writes', 'Ann Handley'],
  ['show-your-work', 'Show Your Work!', 'Austin Kleon'],
  ['bird-by-bird', 'Bird by Bird', 'Anne Lamott'],
  ['a-philosophy-of-software-design', 'A Philosophy of Software Design', 'John Ousterhout'],
  ['the-pragmatic-programmer', 'The Pragmatic Programmer', 'David Thomas'],
  ['refactoring', 'Refactoring', 'Martin Fowler'],
  ['designing-data-intensive-applications', 'Designing Data-Intensive Applications', 'Martin Kleppmann'],
  ['domain-driven-design', 'Domain-Driven Design', 'Eric Evans'],
  ['working-effectively-with-legacy-code', 'Working Effectively with Legacy Code', 'Michael Feathers'],
  ['the-design-of-design', 'The Design of Design', 'Frederick Brooks'],
  ['architecture-patterns-with-python', 'Architecture Patterns with Python', 'Harry Percival'],
  ['release-it', 'Release It!', 'Michael Nygard'],
  ['software-engineering-at-google', 'Software Engineering at Google', 'Titus Winters'],
  ['12-rules-for-life', '12 Rules for Life', 'Jordan B. Peterson'],
  ['the-let-them-theory', 'The Let Them Theory', 'Mel Robbins'],
  ['the-count-of-monte-cristo', 'The Count of Monte Cristo', 'Alexandre Dumas'],
  ['atomic-habits', 'Atomic Habits', 'James Clear'],
  ['dont-believe-everything-you-feel', "Don't Believe Everything You Feel", 'Robert L. Leahy'],
  ['the-defining-decade', 'The Defining Decade', 'Meg Jay'],
]

const outDir = path.join(process.cwd(), 'public', 'books')
mkdirSync(outDir, { recursive: true })

const missing = []

function curl(args) {
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      return execFileSync('curl', args, { stdio: ['ignore', 'pipe', 'ignore'] })
    } catch {
      if (attempt === 2) return null
    }
  }
  return null
}

for (const [slug, title, author] of books) {
  const out = path.join(outDir, `${slug}.jpg`)
  const query = new URLSearchParams({ title, author, limit: '1', fields: 'cover_i' })
  const body = curl(['-sf', '--max-time', '20', `https://openlibrary.org/search.json?${query}`])
  const [doc] = body ? JSON.parse(body.toString()).docs ?? [] : []

  if (!doc?.cover_i) {
    missing.push(slug)
    continue
  }

  const saved = curl(['-sfL', '--max-time', '20', '-o', out, `https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg`])
  if (saved === null) {
    missing.push(slug)
    continue
  }

  console.log(`${slug} <- cover ${doc.cover_i}`)
  await new Promise((resolve) => setTimeout(resolve, 300))
}

if (missing.length > 0) {
  console.log(`\nNo cover found for: ${missing.join(', ')}`)
}
