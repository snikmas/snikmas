export type Locale = 'en' | 'zh'

export const owner = {
  name: 'Mary',
  handle: 'snikmas',
  email: 'mary.snikk@gmail.com',
  github: 'https://github.com/snikmas',
  linkedin: 'https://www.linkedin.com/in/snikmas/',
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
    greeting: "Hi, I'm Mary.",
    bio: 'I study computer science in Zhengzhou. Most of my work is backend engineering: APIs, background jobs, developer tools, and small AI applications.',
    note: 'I use this site for project notes, questions I am still working through, and thoughts on programming, AI, books, and life between Russia and China.',
    socialLabel: 'Find me online',
    writingLabel: 'Latest writing',
    projectsLabel: 'Selected projects',
    projectsNote: 'Three projects I currently keep pinned on GitHub. I care more about the problem and the engineering choices than a long list of tools.',
    toolkitLabel: 'Working toolkit',
    toolkitNote: 'The tools behind the projects above. I list what I use, not every library I have opened once.',
    openProject: 'Open project',
    articleLanguage: 'English article',
    footer: 'Built and written by Mary.',
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
    greeting: '你好，我是 Mary。',
    bio: '我在郑州读计算机科学，主要做后端开发。我喜欢把 API、后台任务和 AI 模型组合成能解决具体问题的小工具。',
    note: '这里放我的项目笔记、还没想完的问题，以及关于编程、AI、读书和中俄生活的记录。',
    socialLabel: '社交主页',
    writingLabel: '最近写的',
    projectsLabel: '项目',
    projectsNote: '这里放三个目前置顶在 GitHub 的项目。我更想说明它们解决了什么问题，以及我如何实现它们，而不是只列技术栈。',
    toolkitLabel: '常用技术',
    toolkitNote: '这些技术都用在上面的项目里。我只列常用的，不把碰过一次的库也塞进来。',
    openProject: '查看项目',
    articleLanguage: '英文文章',
    footer: '由 Mary 设计、编写并维护。',
  },
} satisfies Record<Locale, object>

export const projects = [
  {
    slug: 'codex-watch',
    name: 'Codex Usage Watch',
    year: '2026',
    stack: ['Rust', 'SQLite', 'Shell'],
    url: 'https://github.com/snikmas/codex-watch',
    summary: {
      en: 'A Rust CLI that turns locally recorded weekly usage changes into a five-hour Codex estimate. It keeps the history in SQLite and reports status, warning levels, and diagnostics without blocking Codex.',
      zh: '一个用 Rust 写的本地 CLI，把 Codex 记录的周用量变化换算成五小时使用估算。它用 SQLite 保存历史，并提供状态、预警和诊断命令，但不会限制 Codex 的使用。',
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
      en: 'A self-hosted Telegram bot that gives one approved user access to allowlisted laptop folders. It searches filenames and file contents, previews or downloads files, moves confirmed deletions to trash, and opens no inbound port.',
      zh: '一个本地部署、仅限指定用户使用的 Telegram 文件机器人。它只访问白名单文件夹，可以搜索、预览、下载文件，并在确认后把文件移入回收站，无需开放入站端口。',
    },
  },
]

export const toolkit = [
  {
    label: { en: 'Core', zh: '主要语言' },
    items: ['Python', 'TypeScript', 'Rust', 'SQL'],
  },
  {
    label: { en: 'Backend', zh: '后端' },
    items: ['FastAPI', 'Pydantic', 'SQLAlchemy', 'PostgreSQL', 'Redis'],
  },
  {
    label: { en: 'Testing and delivery', zh: '测试与交付' },
    items: ['pytest', 'Docker', 'GitHub Actions', 'Linux'],
  },
  {
    label: { en: 'Applied AI', zh: 'AI 应用' },
    items: ['structured outputs', 'evaluation cases', 'provider APIs', 'faster-whisper'],
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
    excerpt: {
      en: 'On AI pressure, the fear of falling behind, and choosing to learn and build at your own pace.',
      zh: '写给被 AI 浪潮推着走的人：不用害怕落后，也不用按照别人的速度学习和生活。',
    },
  },
]
