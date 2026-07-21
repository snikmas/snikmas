export const owner = {
  name: 'Mary',
  handle: 'snikmas',
  role: 'Computer science student · Backend developer',
  location: 'Zhengzhou, China',
  tagline:
    'I build backend tools and enjoy experimenting with LLMs, automation, and whatever I’m curious about next.',
  email: 'mary.snikk@gmail.com',
  github: 'https://github.com/snikmas',
  linkedin: 'https://www.linkedin.com/in/snikmas/',
  now: 'Building backend tools · exploring AI systems',
  openTo: 'internships · collaborations · interesting projects',
}

export const projects = [
  {
    slug: 'codex-usage-watch',
    name: 'Codex Usage Watch',
    year: '2026',
    kind: 'Developer tooling',
    stack: ['Rust', 'SQLite', 'Shell'],
    url: 'https://github.com/snikmas/codex-usage-watch',
    summary:
      'A local tool that estimates five-hour Codex usage and makes the result visible while you work.',
    detail:
      'The estimate is available in the status line, through automatic updates inside Codex, and as a detailed terminal report. It is informational only and never prevents you from sending prompts.',
  },
  {
    slug: 'telegram-filer',
    name: 'Telegram Filer',
    year: '2026',
    kind: 'Automation / reliability',
    stack: ['Python', 'Telegram Bot API', 'systemd'],
    url: 'https://github.com/snikmas/telegram-filer',
    summary:
      'A private Telegram file browser that lets you safely browse, search, preview, download, and trash files from allowlisted folders on your laptop.',
    detail:
      'It includes proxy-aware monitoring and automatic recovery when Telegram polling silently stalls.',
  },
  {
    slug: 'customer-support-ticket-system',
    name: 'Customer Support Ticket System',
    year: '2026',
    kind: 'Backend API',
    stack: ['Python', 'FastAPI', 'SQLAlchemy', 'Redis'],
    url: 'https://github.com/snikmas/ai-customer-support-ticket-system',
    summary:
      'A backend-first customer support system with authentication, role-based permissions, ticket workflows, comments, pagination, and automated tests.',
    detail:
      'It includes service-layer authorization, ticket assignment and state flows, soft deletion, sorting, and pagination. Redis and background jobs are being integrated.',
  },
  {
    slug: 'study-in-china-faq-assistant',
    name: 'Study in China FAQ Assistant',
    year: '2026',
    kind: 'AI application',
    stack: ['Python', 'Streamlit', 'Gemini', 'Pydantic'],
    url: 'https://github.com/snikmas/study-china-faq-bot',
    summary:
      'A bilingual, trust-first FAQ assistant that helps study-abroad agencies answer common questions about studying in China.',
    detail:
      'The model identifies the question, but factual answers come from reviewed stored records with citations. Unsupported or sensitive questions are routed toward human confirmation.',
  },
]

export const stack = {
  backend: ['Python', 'FastAPI', 'SQLAlchemy', 'SQLite', 'Redis'],
  systems: ['Linux', 'systemd', 'Git', 'pytest'],
  ai: ['Gemini API', 'LLM APIs', 'Pydantic', 'Pandas', 'scikit-learn', 'Streamlit'],
}
