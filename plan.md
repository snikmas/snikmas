# Personal Site Plan

This document is the main map and source of truth for the personal site. It
captures the product direction, content model, design direction, technical
approach, and implementation stages.

## 1. Product vision

The site combines two related purposes:

1. A professional portfolio that Mary can send to recruiters, employers,
   collaborators, and anyone interested in her work.
2. A personal writing space for thoughts about programming, AI, books, life,
   and studying in China.

The site should feel personal and honest rather than like a generic developer
template. The portfolio should remain easy to understand professionally, while
the blog should allow informal and personal writing.

Working description:

> A personal portfolio and blog where I present my work and write honestly
> about programming, AI, books, life, and studying in China.

## 2. Audience

Primary audiences:

- Recruiters and employers evaluating Mary for technical roles
- Developers and students interested in her projects or writing
- Friends, collaborators, and people who discover her work online

The homepage should explain within a few seconds:

- Who Mary is
- What she builds
- What kinds of roles or technical areas interest her
- Where to see her projects and writing

## 3. Identity

### Name and site identity

- Real name: Mary
- Online identity and header wordmark: `snikmas`
- Suggested browser title:
  `Mary (snikmas) — Backend Developer & CS Student`

Suggested header:

```text
snikmas                         Projects  Writing  About
```

### Introduction

Approved introduction:

> Hi, I’m Mary. I’m a computer science student studying in China. I build
> backend tools and enjoy experimenting with LLMs, automation, and whatever
> I’m curious about next.

### Public personal information

It is acceptable to include:

- Real name
- A personal photo
- A short biography
- General location, such as a city or “China”
- Public email address
- GitHub and LinkedIn links
- Languages
- CV or résumé

Do not publish:

- Home or dormitory address
- Personal phone number
- Passport, visa, student ID, or legal documents
- Exact class schedule or daily routine
- Private university or internship information
- Internal company code, screenshots, credentials, or customer data
- API keys, tokens, passwords, or configuration secrets
- Identifiable stories about other people without permission

A separate public email address is preferable if the site begins receiving
spam.

## 4. Language strategy

- Version one is English only.
- Chinese and Russian may be added later.
- Version one should not include incomplete language selectors.
- The content structure should avoid making future translation unnecessarily
  difficult, but multilingual support is not part of the initial release.

## 5. Site structure

### Home

The homepage should contain:

- Header and navigation
- Introduction and photo or placeholder
- Short description of current interests
- Four featured projects
- Compact technology stack
- Latest two or three blog posts
- GitHub, LinkedIn, email, and CV links

### Projects

- An index of all projects
- Filters are not required for version one
- Each important project has a separate case-study page
- Projects use a reusable content template so new entries are easy to add

### Writing

- A chronological list of posts
- Each post shows its title, date, description, and category
- Individual article pages prioritize readability
- Categories are visible in version one
- Tags are supported but do not require dedicated index pages initially

### About

- Longer personal story
- Education and experience
- Technical interests
- Languages
- General location
- Contact links
- CV link

A separate Contact page is not required for version one. Contact links can
appear in the header, About page, and footer.

## 6. Portfolio projects

All five projects should appear on the Projects page. Four should be featured
on the homepage.

### Suggested order

1. **Codex Usage Watch**
   - Local Codex usage tracking
   - Rust, SQLite, hooks, CLI work, reliability, and release engineering

2. **Telegram Filer**
   - Local-first Telegram automation
   - Python service deployment, security boundaries, Linux/systemd, proxy-aware
     reliability, polling-stall diagnosis, and tested self-recovery
   - The strongest case-study story is the reliability incident and recovery,
     not merely transferring files

3. **Ticket Workflow Backend**
   - FastAPI backend with authentication, authorization, ticket states,
     persistence, testing, and background jobs
   - A strong learning story about developing real backend engineering skills

4. **Study in China Assistant**
   - Practical guidance for prospective students and parents
   - FAQ knowledge, intent handling, typo tolerance, and a personally relevant
     product problem

5. **Crypto Market Risk Monitor**
   - Multi-asset market-risk monitoring using public hourly market data
   - Feature engineering, model comparison, saved artifacts, and dashboard
   - It must be presented as a risk monitor, not as a trading or price-prediction
     system

### Homepage selection

Initial featured projects:

- Codex Usage Watch
- Telegram Filer
- Ticket Workflow Backend
- Study in China Assistant

The Crypto Market Risk Monitor remains available on the full Projects page.
The selection can change depending on the role Mary is applying for.

### Publication rule

Before publishing a project case study, verify the current public repository:

- README accurately describes the project
- Public code contains the work being claimed
- Repository and product names are consistent
- Screenshots contain no private information
- Links work
- Tests and validation claims are current
- Demo instructions are reproducible
- Limitations and current status are stated honestly

### Reusable project template

Each project entry should support:

```text
Title
Slug
Short summary
Cover image
Status
Featured flag
Problem
What I built
My responsibilities
Important technical decisions
Technology used
Difficulties
What I learned
Screenshots
GitHub link
Live demo link
Related blog posts
Published date
Updated date
```

Not every field is mandatory. Private or unfinished projects may not have a
public repository or live demo.

Project pages should tell a story rather than display only a list of
technologies:

```text
Problem → decisions → implementation → difficulty → result → lessons
```

## 7. Technology stack presentation

The stack belongs on the homepage, but it should remain compact and factual.
Do not use percentage bars or unsupported expertise claims.

Working format:

```text
Backend
Python · FastAPI · PostgreSQL · Redis

Systems and tooling
Rust · SQLite · Linux · systemd · Git

AI and data
LLM APIs · RAG · Pandas · scikit-learn
```

Every listed technology should be verified against actual project work before
publication.

## 8. Blog direction

The blog is personal, not only professional. Posts may be polished essays,
technical learning notes, project retrospectives, book insights, or short
personal thoughts.

### Initial post ideas

- How I coded my internship project
- My thoughts about the current AI wave
- Problems with being a student in China
- What I like about programming

The internship-project article is the preferred first published post because
it connects the portfolio and writing sides of the site.

### Categories and tags

Every post has one primary category:

- Programming
- Life
- Books
- Thoughts

Each post may also have zero to three optional tags, such as:

- FastAPI
- Backend
- AI
- LLMs
- China
- Student Life

Version one behavior:

- Display the primary category on post cards and article pages
- Display tags on the article page when present
- Do not build dedicated tag archive pages until there is enough content

## 9. Content management

Use Markdown for blog posts and project case studies.

Example blog-post metadata:

```md
---
title: "How I Built My Internship Project"
description: "What I learned while building a backend application."
published: 2026-07-20
updated:
category: "Programming"
tags: ["FastAPI", "Backend", "Learning"]
draft: false
---
```

Content requirements:

- Draft posts must not appear in production.
- Dates should be stored consistently.
- Project and post metadata should be validated during the build.
- Adding a post or project should require copying a template and editing a
  Markdown file, not changing page code.
- A full CMS is not required for version one.

A CMS may be considered later if publishing from a phone or browser becomes
important.

## 10. Visual direction

### Core direction

The working visual direction is:

> Dark editorial developer journal

The site should feel technical, thoughtful, personal, and slightly
experimental.

### Visual principles

- Charcoal background rather than pure black
- Warm white rather than harsh bright-white text
- One restrained accent color
- Strong editorial typography
- Clear visual hierarchy
- Monospace used only for metadata, dates, tags, and technical details
- Structured portfolio pages
- More intimate and readable writing pages
- Subtle lines, annotations, timestamps, or notebook-inspired details
- Minimal, purposeful motion
- Responsive layout

### Avoid

- Purple gradients as a default accent
- Cyberpunk or “Matrix” terminal clichés
- Generic SaaS landing-page sections
- Repeated identical rounded cards
- Excessive glassmorphism
- Skill percentage bars
- Large animations that delay or obstruct reading
- A design that looks impressive but makes projects difficult to understand

### Photo placeholder

Do not use a random person’s photograph.

Until a real photo is selected, use:

- A simple `M` monogram
- A neutral abstract illustration
- A dark texture or gradient
- A clearly non-personal silhouette

The placeholder must be easy to replace later.

## 11. Design research and AI workflow

### Inspiration resources

- [Awwwards](https://www.awwwards.com/) for typography and unusual art
  direction; treat it as an art gallery rather than a usability standard
- [Godly](https://godly.website/) for contemporary visual and interaction ideas
- [SiteInspire](https://www.siteinspire.com/) for calmer practical references
- [One Page Love](https://onepagelove.com/) for simple portfolio structures
- [Land-book](https://land-book.com/) for section and typography ideas

Collect references for specific parts:

- One header
- One project presentation
- One blog layout
- One color palette
- One typography treatment

### AI tool roles

1. **Kimi Websites**
   - Generate complete visual directions in the browser
   - Accept prompts and screenshot references
   - Iterate visually
   - Export code if an idea is worth preserving

2. **Google Stitch**
   - Explore high-fidelity UI directions
   - Compare concepts
   - Develop a design system before implementation

3. **Lovable**
   - Generate several lightweight design directions
   - Compare typography, colors, hero sections, and layouts

4. **v0**
   - Translate approved screenshots or mockups into working components
   - Use after selecting a design rather than as the main source of taste

5. **Framer**
   - Optional visual prototyping tool
   - Not the preferred final platform if the site uses Astro and GitHub Pages

6. **Sol/Codex**
   - Critique generated concepts
   - Identify generic AI-design patterns
   - Combine the strongest parts into a coherent system
   - Create the final `DESIGN.md`
   - Implement and polish the selected design

### Design workflow

1. Collect three to five real website references.
2. Record exactly what is appealing about each reference.
3. Give the same brief to Kimi Websites and Google Stitch.
4. Generate genuinely different directions, not only color variations.
5. Save screenshots of the strongest directions.
6. Critique them for clarity, personality, responsiveness, and recruiter
   usefulness.
7. Combine the strongest choices into one coherent direction.
8. Write the approved design rules into `DESIGN.md`.
9. Begin implementation only after the direction is accepted.

### Design-generation brief

```text
Create three distinct visual directions for a dark personal portfolio and
editorial blog.

The owner is Mary, online as “snikmas,” a computer science student studying
in China. She builds backend tools and experiments with LLMs and automation.

The site must work for two audiences:
1. Recruiters who need to understand her skills and projects quickly.
2. Readers who visit for personal writing about programming, AI, books,
   student life, and China.

Required pages:
- Home
- Projects
- Individual project case study
- Writing
- Individual article
- About

The homepage should include an introduction, selected projects, technology
stack, latest writing, and contact links.

Visual direction:
- Dark editorial developer journal
- Charcoal background and warm white text
- One restrained accent color
- Strong typography and clear hierarchy
- Monospace only for metadata and technical details
- Personal, thoughtful, and slightly experimental
- Responsive and readable

Avoid:
- Purple gradients
- Cyberpunk terminal clichés
- Generic SaaS landing-page sections
- Repeated rounded cards
- Excessive glassmorphism
- Skill percentage bars
- Animations that make reading harder

Show three genuinely different directions, not three color variations.
```

## 12. Technical direction

Current recommendation:

- Astro
- TypeScript where useful
- Astro content collections
- Markdown for posts and projects
- CSS based on the approved design system
- Minimal client-side JavaScript
- GitHub Actions for building and deployment
- GitHub Pages for the first release

Why this fits:

- The site is primarily static content.
- Markdown supports easy updates.
- Projects and posts can share validated templates.
- Static output is fast and works with GitHub Pages.
- The site does not need a database or traditional backend for version one.

The final frontend styling approach should be selected after visual discovery.
Do not add React or another client framework unless a real interaction requires
it.

## 13. Deployment

### Version one

- Free hosting
- GitHub Pages
- Automatic deployment from the main branch through GitHub Actions
- GitHub-provided URL initially
- Public repository unless a paid/private arrangement becomes necessary

### Later

- Buy and connect a custom domain
- Verify the custom domain before use
- Consider Cloudflare Pages only if previews, hosting features, or future
  server-side functions make it meaningfully better

The site must not depend on a custom domain for its first release.

## 14. Accessibility and quality

Version one must include:

- Mobile-first responsive behavior
- Keyboard-accessible navigation and controls
- Visible focus states
- Sufficient text and interface contrast
- Descriptive alternative text for meaningful images
- Semantic heading order
- Readable article width and line height
- Reduced-motion support
- No essential information communicated only by color
- Working internal and external links
- Useful page titles and descriptions
- A custom 404 page

## 15. Maintenance

Target publishing rhythm:

- Ideal: one post per week
- Acceptable: one post every one or two weeks

This schedule is personal guidance, not a public promise.

Maintenance should remain simple:

- Add posts and projects through Markdown templates
- Keep drafts unpublished
- Review external links periodically
- Update project status when repositories change
- Compress and optimize new images
- Check the production deployment after meaningful changes

## 16. Version-one scope

### Required

- English-only site
- Home page
- Projects index
- Reusable project case-study template
- At least three complete project pages
- Writing index
- Reusable article template
- At least one real published post
- About page
- Compact stack section
- Contact and social links
- Neutral photo placeholder
- Responsive dark design
- Accessibility basics
- GitHub Pages deployment

### Explicitly deferred

- Chinese and Russian translations
- Full CMS
- User accounts
- Comments
- Newsletter
- Site search
- Analytics beyond a privacy-respecting basic option
- Dedicated tag archive pages
- Complex animations
- Backend or database
- Custom domain
- Light theme

## 17. Success criteria

Version one is complete when:

- A visitor understands who Mary is and what she builds within a few seconds.
- The site contains at least three accurate project case studies.
- The site contains at least one real blog post.
- Projects and posts can be added through reusable Markdown templates.
- The layout works on phones and desktop screens.
- Navigation is clear and keyboard accessible.
- All public claims match the current repositories.
- Important links work.
- No private information or secrets are exposed.
- The production build deploys successfully to GitHub Pages.
- Mary is comfortable sending the URL to a recruiter.

## 18. Implementation stages

### Stage 0 — Content and reference collection

- [ ] Confirm the public name and links
- [ ] Collect three to five design references
- [ ] Select a neutral photo placeholder
- [ ] Choose the first three complete project case studies
- [ ] Gather safe screenshots and project links
- [ ] Draft the first blog post

### Stage 1 — Visual exploration

- [ ] Generate distinct directions with Kimi Websites and/or Google Stitch
- [ ] Compare homepage, project page, and article page concepts
- [ ] Select the design direction
- [ ] Choose typography and accent color
- [ ] Write `DESIGN.md`

### Stage 2 — Project foundation

- [ ] Initialize Astro
- [ ] Configure formatting, linting, and type checking
- [ ] Define the page routes
- [ ] Define post and project content schemas
- [ ] Add Markdown templates
- [ ] Configure draft exclusion

### Stage 3 — Shared design system

- [ ] Implement global colors and typography
- [ ] Implement spacing and layout tokens
- [ ] Build the header and footer
- [ ] Build reusable project and post components
- [ ] Add responsive and reduced-motion behavior

### Stage 4 — Main pages

- [ ] Build Home
- [ ] Build Projects index
- [ ] Build project case-study pages
- [ ] Build Writing index
- [ ] Build article pages
- [ ] Build About
- [ ] Build 404

### Stage 5 — Real content

- [ ] Add the approved introduction
- [ ] Add and verify the stack
- [ ] Publish at least three project case studies
- [ ] Publish the first blog post
- [ ] Add public contact and social links
- [ ] Add safe images and alternative text

### Stage 6 — Quality review

- [ ] Test desktop and mobile layouts
- [ ] Test keyboard navigation
- [ ] Check contrast and reduced motion
- [ ] Check metadata and social previews
- [ ] Check all links
- [ ] Check image sizes and loading
- [ ] Run the production build
- [ ] Review the site for private information

### Stage 7 — Deployment

- [ ] Create or connect the GitHub repository
- [ ] Configure the GitHub Pages workflow
- [ ] Deploy the production build
- [ ] Test the public URL
- [ ] Confirm that future pushes deploy automatically

## 19. Decisions still open

These choices should be settled during content collection and visual
exploration:

- Exact public location wording
- Public email address
- GitHub and LinkedIn URLs
- Whether to publish a CV in version one
- Which three project case studies will be complete at launch
- Final accent color
- Final fonts
- Final photo placeholder
- Whether the first release shows two or three recent posts on the homepage

These open choices do not change the overall site direction.
