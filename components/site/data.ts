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

export const projects = [
  {
    slug: 'codex-watch',
    name: 'Codex Usage Watch',
    year: '2026',
    stack: ['CLI', 'SQLite', 'Shell'],
    url: 'https://github.com/snikmas/codex-watch',
    summary: {
      en: 'A local CLI that turns recorded weekly usage changes into a five-hour Codex estimate. It keeps the history in SQLite and reports status, warning levels, and diagnostics while you keep working.',
      zh: '一个本地 CLI，把 Codex 记录的周用量变化换算成五小时使用估算。它用 SQLite 保存历史，并在你正常使用的同时提供状态、预警和诊断命令。',
    },
  },
  {
    slug: 'resolve-ai',
    name: 'ResolveAI',
    year: '2026',
    stack: ['FastAPI', 'PostgreSQL', 'Redis + RQ', 'React'],
    url: 'https://github.com/snikmas/ai-customer-support-ticket-system',
    summary: {
      en: 'A full-stack support-ticket system with JWT authentication, role-based permissions, automatic routing through Redis and RQ, SLA tracking, and durable AI analysis. The React staff workspace uses the FastAPI backend.',
      zh: '一个完整的客服工单系统，包含 JWT 登录、角色权限、Redis 和 RQ 自动分单、SLA 跟踪及可持久化的 AI 分析。React 工作台直接使用同一套 FastAPI 后端。',
    },
  },
  {
    slug: 'telegram-filer',
    name: 'Telegram Filer',
    year: '2026',
    stack: ['Python', 'Telegram Bot API', 'systemd'],
    url: 'https://github.com/snikmas/telegram-filer',
    summary: {
      en: 'A self-hosted Telegram bot that gives one approved user access to allowlisted folders on your laptop from anywhere. It searches filenames and file contents, previews or downloads files, moves confirmed deletions to trash, and opens no inbound port.',
      zh: '一个本地部署、仅限指定用户使用的 Telegram 文件机器人。它只访问白名单文件夹，可以搜索、预览、下载文件，并在确认后把文件移入回收站，无需开放入站端口。',
    },
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

export const posts = [
  {
    slug: 'ai-hype-my-thoughts',
    title: 'AI Hype: My Thoughts',
    date: 'July 22, 2026',
    dateZh: '2026 年 7 月 22 日',
    category: 'Thoughts',
    readingTime: '4 min read',
    languages: ['EN'],
    excerpt: {
      en: 'On AI pressure, the fear of falling behind, and choosing to learn and build at your own pace.',
      zh: '写给被 AI 浪潮推着走的人：不用害怕落后，也不用按照别人的速度学习和生活。',
    },
  },
]
