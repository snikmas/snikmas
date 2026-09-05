export type Locale = 'en' | 'zh'

export type Post = {
  slug: string
  title: Record<Locale, string>
  date: Record<Locale, string>
  dateTime: string
  category: Record<Locale, string>
  readingTime: Record<Locale, string>
  locales: Locale[]
  excerpt: Record<Locale, string>
}

export const owner = {
  name: 'Mary',
  handle: 'snikmas',
  email: 'mary.snikk@gmail.com',
  github: 'https://github.com/snikmas',
  linkedin: 'https://www.linkedin.com/in/snikmas/',
  x: 'https://x.com/snikmas',
  rednote: '1282530219',
}

export const siteCopy = {
  en: {
    localeName: 'English',
    htmlLang: 'en',
    nav: {
      writing: 'Writing',
      projects: 'Projects',
      toolkit: 'Toolkit',
    },
    aboutLabel: 'About me',
    greeting: "Hi, I'm Mary",
    bio: 'Computer science student in China. I build backend systems — APIs, background jobs, developer tools, and small AI applications.',
    note: 'Project notes, half-finished questions, and thoughts on programming, AI, books, and life between Russia and China.',
    socialLabel: 'Find me online',
    writingLabel: 'Latest writing',
    projectsLabel: 'Projects',
    projectsNote: 'Three projects currently pinned on GitHub.',
    toolkitLabel: 'Working toolkit',
    toolkitNote: "What I reach for when something needs to ship. If it's here, it's been in one of my projects.",
    openProject: 'Open project',
    allWriting: 'All writing',
  },
  zh: {
    localeName: '中文',
    htmlLang: 'zh-CN',
    nav: {
      writing: '文章',
      projects: '项目',
      toolkit: '技术栈',
    },
    aboutLabel: '关于我',
    greeting: '嗨，我是 Mary',
    bio: '在中国读计算机科学，主要做后端开发：API、后台任务、开发者工具和小型 AI 应用。',
    note: '这里放项目笔记、还没想完的问题，以及关于编程、AI、读书和中俄生活的记录。',
    socialLabel: '社交主页',
    writingLabel: '最近写的',
    projectsLabel: '项目',
    projectsNote: '目前置顶在 GitHub 的三个项目。',
    toolkitLabel: '常用技术',
    toolkitNote: '真正要交付项目时我会用的东西。列在这里的，都在我自己的项目里跑过。',
    openProject: '查看项目',
    allWriting: '全部文章',
  },
} satisfies Record<Locale, object>

export type Project = {
  slug: string
  name: string
  url: string
  description: string | null
  languages: string[]
}

export const fallbackProjects: Project[] = [
  {
    slug: 'codex-watch',
    name: 'codex-watch',
    url: 'https://github.com/snikmas/codex-watch',
    description: 'local, non-blocking estimate of Codex five-hour usage pressure',
    languages: ['Rust'],
  },
  {
    slug: 'ai-customer-support-ticket-system',
    name: 'ai-customer-support-ticket-system',
    url: 'https://github.com/snikmas/ai-customer-support-ticket-system',
    description: 'FastAPI support-ticket backend: JWT, RBAC, Redis, RQ routing, SLA, tests',
    languages: ['Python'],
  },
  {
    slug: 'reckoning-3.0',
    name: 'reckoning-3.0',
    url: 'https://github.com/snikmas/reckoning-3.0',
    description: 'A local-first personal agent for decisions that matter.',
    languages: ['Python'],
  },
]

export const toolkit = [
  {
    label: { en: 'Main stack', zh: '主力技术栈' },
    items: ['Python', 'TypeScript', 'SQL', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker'],
  },
  {
    label: { en: 'Also worked with', zh: '也用这些做过项目' },
    items: [
      'Pydantic',
      'SQLAlchemy',
      'pytest',
      'GitHub Actions',
      'React',
      'Telegram Bot API',
      'faster-whisper',
      'Linux',
    ],
  },
]

export const posts: Post[] = [
  {
    slug: 'i-thought-i-was-outside-the-race',
    title: {
      en: 'I thought I was outside the race',
      zh: '我以为内卷和我没关系',
    },
    date: {
      en: 'September 5, 2026',
      zh: '2026 年 9 月 5 日',
    },
    dateTime: '2026-09-05',
    category: {
      en: 'Thoughts',
      zh: '想法',
    },
    readingTime: {
      en: '3 min read',
      zh: '阅读约 3 分钟',
    },
    locales: ['en', 'zh'],
    excerpt: {
      en: 'On San Francisco, Shenzhen, 卷, and realizing that you do not have to be inside a race for its pressure to follow you home.',
      zh: '我以为自己不在旧金山的圈子里，内卷就和我没关系。去了一次深圳后，我发现好像不是这样。',
    },
  },
  {
    slug: 'ai-hype-my-thoughts',
    title: {
      en: 'AI Hype: My Thoughts',
      zh: 'AI Hype: My Thoughts',
    },
    date: {
      en: 'July 22, 2026',
      zh: '2026 年 7 月 22 日',
    },
    dateTime: '2026-07-22',
    category: {
      en: 'Thoughts',
      zh: '想法',
    },
    readingTime: {
      en: '4 min read',
      zh: '阅读约 4 分钟',
    },
    locales: ['en'],
    excerpt: {
      en: 'On AI pressure, the fear of falling behind, and choosing to learn and build at your own pace.',
      zh: '写给被 AI 浪潮推着走的人：不用害怕落后，也不用按照别人的速度学习和生活。',
    },
  },
]
