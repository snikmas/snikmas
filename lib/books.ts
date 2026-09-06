export type BookStatus = 'reading' | 'read' | 'planned' | 'shelved'
export type BookCategory = 'psychology' | 'people' | 'life' | 'writing' | 'programming' | 'fiction'

export type Book = {
  slug: string
  title: string
  author: string
  status: BookStatus
  category: BookCategory
  note: { en: string; zh?: string }
}

export const books: Book[] = [
  // 1. Psychology & cognition
  {
    slug: 'behave',
    title: 'Behave',
    author: 'Robert Sapolsky',
    status: 'planned',
    category: 'psychology',
    note: {
      en: 'The deepest answer to "why does a person actually do this?" — behavior traced from one second back to evolution and culture.',
    },
  },
  {
    slug: 'mindsight',
    title: 'Mindsight',
    author: 'Daniel J. Siegel',
    status: 'planned',
    category: 'psychology',
    note: {
      en: 'Noticing the script that is currently "living you" instead of automatically acting it out.',
    },
  },
  {
    slug: 'mistakes-were-made',
    title: 'Mistakes Were Made (But Not by Me)',
    author: 'Carol Tavris, Elliot Aronson',
    status: 'planned',
    category: 'psychology',
    note: {
      en: 'Cognitive dissonance and self-justification — what people do after a bad decision to protect their self-image.',
    },
  },
  {
    slug: 'influence',
    title: 'Influence',
    author: 'Robert Cialdini',
    status: 'planned',
    category: 'psychology',
    note: {
      en: 'Reciprocity, social proof, authority, scarcity — how environments change behavior without coercion.',
    },
  },
  {
    slug: 'the-righteous-mind',
    title: 'The Righteous Mind',
    author: 'Jonathan Haidt',
    status: 'planned',
    category: 'psychology',
    note: {
      en: 'Why intelligent people sincerely believe completely different things — moral intuition precedes rational explanation.',
    },
  },
  {
    slug: 'the-elephant-in-the-brain',
    title: 'The Elephant in the Brain',
    author: 'Kevin Simler, Robin Hanson',
    status: 'planned',
    category: 'psychology',
    note: {
      en: 'Hidden motives behind what people say motivates them: status, signalling, social competition.',
    },
  },
  {
    slug: 'the-status-game',
    title: 'The Status Game',
    author: 'Will Storr',
    status: 'planned',
    category: 'psychology',
    note: {
      en: 'How status shapes identity, groups, internet behavior, ambition and why groups become strange.',
    },
  },
  {
    slug: 'livewired',
    title: 'Livewired',
    author: 'David Eagleman',
    status: 'planned',
    category: 'psychology',
    note: {
      en: 'Neuroplasticity — how the brain continually rewires itself around incoming information and changing demands.',
    },
  },

  // 2. Human behavior, relationships & social dynamics
  {
    slug: 'games-people-play',
    title: 'Games People Play',
    author: 'Eric Berne',
    status: 'planned',
    category: 'people',
    note: {
      en: 'Transactional analysis and the recurring interpersonal "games" people unconsciously enact.',
    },
  },
  {
    slug: 'what-do-you-say-after-you-say-hello',
    title: 'What Do You Say After You Say Hello?',
    author: 'Eric Berne',
    status: 'planned',
    category: 'people',
    note: {
      en: "Berne's deeper treatment of life scripts: early narratives that shape later choices and relationships.",
    },
  },
  {
    slug: 'how-to-know-a-person',
    title: 'How to Know a Person',
    author: 'David Brooks',
    status: 'planned',
    category: 'people',
    note: {
      en: 'Attention, listening, conversation — actually seeing another person, not merely explaining them.',
    },
  },
  {
    slug: 'the-good-life',
    title: 'The Good Life',
    author: 'Robert Waldinger, Marc Schulz',
    status: 'planned',
    category: 'people',
    note: {
      en: 'Lessons from the Harvard Study of Adult Development: connection over money or status.',
    },
  },
  {
    slug: 'nonviolent-communication',
    title: 'Nonviolent Communication',
    author: 'Marshall Rosenberg',
    status: 'planned',
    category: 'people',
    note: {
      en: 'Separating observation, feelings, needs and requests — a protocol for when two people read the same event differently.',
    },
  },
  {
    slug: 'hold-me-tight',
    title: 'Hold Me Tight',
    author: 'Sue Johnson',
    status: 'planned',
    category: 'people',
    note: {
      en: 'Repeating emotional cycles in close relationships — the interaction loop between two people, not attachment-style labels.',
    },
  },
  {
    slug: 'barking-up-the-wrong-tree',
    title: 'Barking Up the Wrong Tree',
    author: 'Eric Barker',
    status: 'planned',
    category: 'people',
    note: {
      en: 'Research and stories on success, persistence and social connection — psychology applied to practical life questions.',
    },
  },
  {
    slug: 'the-culture-map',
    title: 'The Culture Map',
    author: 'Erin Meyer',
    status: 'planned',
    category: 'people',
    note: {
      en: 'How trust, feedback, hierarchy and disagreement differ across cultures — directly relevant to living between Russia and China.',
    },
  },

  // 3. Life, meaning, agency & mental models
  {
    slug: 'four-thousand-weeks',
    title: 'Four Thousand Weeks',
    author: 'Oliver Burkeman',
    status: 'planned',
    category: 'life',
    note: {
      en: 'Life is radically finite — what actually deserves your time, rather than optimizing every minute.',
    },
  },
  {
    slug: 'mans-search-for-meaning',
    title: "Man's Search for Meaning",
    author: 'Viktor Frankl',
    status: 'planned',
    category: 'life',
    note: {
      en: 'Meaning, suffering and responsibility — a serious counterweight to modern self-help.',
    },
  },
  {
    slug: 'how-to-fail-at-almost-everything',
    title: 'How to Fail at Almost Everything and Still Win Big',
    author: 'Scott Adams',
    status: 'read',
    category: 'life',
    note: {
      en: 'Systems instead of goals, skill stacking and increasing your exposure to luck.',
    },
  },
  {
    slug: 'poor-charlies-almanack',
    title: "Poor Charlie's Almanack",
    author: 'Charlie Munger',
    status: 'planned',
    category: 'life',
    note: {
      en: 'Mental models, incentives and avoiding predictable stupidity — principles that transfer between domains.',
    },
  },
  {
    slug: 'the-creative-act',
    title: 'The Creative Act',
    author: 'Rick Rubin',
    status: 'planned',
    category: 'life',
    note: {
      en: 'Creativity as attention and taste — building a life around things you genuinely care about.',
    },
  },
  {
    slug: 'the-happiness-hypothesis',
    title: 'The Happiness Hypothesis',
    author: 'Jonathan Haidt',
    status: 'planned',
    category: 'life',
    note: {
      en: 'Ancient ideas about happiness examined through modern psychology — a bridge between the two.',
    },
  },
  {
    slug: 'die-with-zero',
    title: 'Die With Zero',
    author: 'Bill Perkins',
    status: 'planned',
    category: 'life',
    note: {
      en: 'Using money to maximize meaningful experiences instead of automatically maximizing net worth.',
    },
  },
  {
    slug: 'stolen-focus',
    title: 'Stolen Focus',
    author: 'Johann Hari',
    status: 'planned',
    category: 'life',
    note: {
      en: 'Why sustained attention is getting harder — technology, sleep, stress and incentives.',
    },
  },

  // 4. Writing, storytelling & content
  {
    slug: 'on-writing-well',
    title: 'On Writing Well',
    author: 'William Zinsser',
    status: 'planned',
    category: 'writing',
    note: {
      en: 'Clear nonfiction: simplicity, clutter, voice, structure and revision. The best starting point for this site.',
    },
  },
  {
    slug: 'made-to-stick',
    title: 'Made to Stick',
    author: 'Chip Heath, Dan Heath',
    status: 'planned',
    category: 'writing',
    note: {
      en: 'Why some ideas survive — knowing something is different from making another person remember it.',
    },
  },
  {
    slug: 'storyworthy',
    title: 'Storyworthy',
    author: 'Matthew Dicks',
    status: 'planned',
    category: 'writing',
    note: {
      en: 'Finding meaningful stories in ordinary life and structuring them around change.',
    },
  },
  {
    slug: 'several-short-sentences-about-writing',
    title: 'Several Short Sentences About Writing',
    author: 'Verlyn Klinkenborg',
    status: 'planned',
    category: 'writing',
    note: {
      en: 'Constructing good sentences and distrusting autopilot writing habits.',
    },
  },
  {
    slug: 'everybody-writes',
    title: 'Everybody Writes',
    author: 'Ann Handley',
    status: 'planned',
    category: 'writing',
    note: {
      en: 'Practical writing for websites and newsletters — a bridge between craft and internet publishing.',
    },
  },
  {
    slug: 'show-your-work',
    title: 'Show Your Work!',
    author: 'Austin Kleon',
    status: 'planned',
    category: 'writing',
    note: {
      en: 'Sharing process and learning publicly — publishing before you feel like an expert.',
    },
  },
  {
    slug: 'bird-by-bird',
    title: 'Bird by Bird',
    author: 'Anne Lamott',
    status: 'planned',
    category: 'writing',
    note: {
      en: 'Bad first drafts, fear and perfectionism — for when you judge a post before you have written it.',
    },
  },

  // 5. Programming & software design
  {
    slug: 'a-philosophy-of-software-design',
    title: 'A Philosophy of Software Design',
    author: 'John Ousterhout',
    status: 'planned',
    category: 'programming',
    note: {
      en: 'Complexity, deep modules, design judgment — agents write lines fast; you still judge whether they created complexity.',
    },
  },
  {
    slug: 'the-pragmatic-programmer',
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt, David Thomas',
    status: 'planned',
    category: 'programming',
    note: {
      en: 'Durable engineering habits independent of any current framework. Read in my first year.',
    },
  },
  {
    slug: 'refactoring',
    title: 'Refactoring',
    author: 'Martin Fowler',
    status: 'planned',
    category: 'programming',
    note: {
      en: 'AI makes rewriting cheap — this teaches what a safe structural improvement actually is.',
    },
  },
  {
    slug: 'designing-data-intensive-applications',
    title: 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
    status: 'planned',
    category: 'programming',
    note: {
      en: 'Storage, replication, consistency — the trade-offs underneath the APIs agents know.',
    },
  },
  {
    slug: 'domain-driven-design',
    title: 'Domain-Driven Design',
    author: 'Eric Evans',
    status: 'planned',
    category: 'programming',
    note: {
      en: 'Ubiquitous language, bounded contexts — forces you to model the right problem, not a clean-looking wrong one.',
    },
  },
  {
    slug: 'working-effectively-with-legacy-code',
    title: 'Working Effectively with Legacy Code',
    author: 'Michael Feathers',
    status: 'planned',
    category: 'programming',
    note: {
      en: 'Safely changing ugly, untested systems through seams and tests — where coding agents will increasingly work.',
    },
  },
  {
    slug: 'the-design-of-design',
    title: 'The Design of Design',
    author: 'Frederick P. Brooks',
    status: 'planned',
    category: 'programming',
    note: {
      en: 'What design itself is — constraints, iteration, conceptual integrity. For when humans make decisions and agents implement.',
    },
  },
  {
    slug: 'architecture-patterns-with-python',
    title: 'Architecture Patterns with Python',
    author: 'Harry Percival, Bob Gregory',
    status: 'planned',
    category: 'programming',
    note: {
      en: 'Domain models, repositories, unit of work — the bridge from abstract design books to real Python backends.',
    },
  },
  {
    slug: 'release-it',
    title: 'Release It!',
    author: 'Michael Nygard',
    status: 'planned',
    category: 'programming',
    note: {
      en: 'Production failure modes and stability patterns — software that passes tests but collapses in production.',
    },
  },
  {
    slug: 'software-engineering-at-google',
    title: 'Software Engineering at Google',
    author: 'Titus Winters, Tom Manshreck, Hyrum Wright',
    status: 'planned',
    category: 'programming',
    note: {
      en: 'The difference between "code works" and "a codebase remains healthy" over years.',
    },
  },

  // Already read
  {
    slug: '12-rules-for-life',
    title: '12 Rules for Life',
    author: 'Jordan B. Peterson',
    status: 'read',
    category: 'life',
    note: {
      en: 'An antidote to chaos: twelve practical rules mixing clinical psychology, myth and personal responsibility.',
    },
  },
  {
    slug: 'the-let-them-theory',
    title: 'The Let Them Theory',
    author: 'Mel Robbins',
    status: 'read',
    category: 'people',
    note: {
      en: 'Let people do what they do and focus on your own response — a simple tool for letting go of control.',
    },
  },
  {
    slug: 'the-count-of-monte-cristo',
    title: 'The Count of Monte Cristo',
    author: 'Alexandre Dumas',
    status: 'read',
    category: 'fiction',
    note: {
      en: "Dumas' revenge epic — betrayal, patience and reinvention. Long, and worth it.",
    },
  },
  {
    slug: 'atomic-habits',
    title: 'Atomic Habits',
    author: 'James Clear',
    status: 'read',
    category: 'life',
    note: {
      en: 'Tiny changes compound — the habit-building handbook: cues, environment, identity.',
    },
  },
  {
    slug: 'dont-believe-everything-you-feel',
    title: "Don't Believe Everything You Feel",
    author: 'Robert L. Leahy',
    status: 'read',
    category: 'psychology',
    note: {
      en: "A CBT workbook: thoughts aren't facts — spotting and reframing automatic thinking patterns.",
    },
  },
  {
    slug: 'the-defining-decade',
    title: 'The Defining Decade',
    author: 'Meg Jay',
    status: 'read',
    category: 'life',
    note: {
      en: 'Why your twenties matter — decisions about work, love and identity compound early.',
    },
  },
]
