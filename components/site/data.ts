export type Locale = 'en' | 'zh'

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
    readMore: 'Read more',
    writingIndex: {
      title: 'Writing',
      description:
        'Notes on programming, AI, books, and life between Russia and China.',
      intro:
        'Project notes, questions I am still working through, and thoughts on programming, AI, books, and life between Russia and China.',
      empty: 'Nothing here yet.',
      allWritingShort: 'all writing',
      backToWriting: 'Back to writing',
    },
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
    readMore: '阅读全文',
    writingIndex: {
      title: '文章',
      description: '关于编程、AI、读书和中俄生活的记录。',
      intro: '这里放项目笔记、还没想完的问题，以及关于编程、AI、读书和中俄生活的记录。',
      empty: '还没有中文文章。',
      allWritingShort: '全部文章',
      backToWriting: '返回文章列表',
    },
  },
}

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

