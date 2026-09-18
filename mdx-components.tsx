import type { MDXComponents } from 'mdx/types'
import { createElement, isValidElement, type ReactNode } from 'react'
import { ArticleImage } from '@/components/site/article-image'

function textOf(node: ReactNode): string {
  if (typeof node === 'string') return node
  if (typeof node === 'number') return String(node)
  if (Array.isArray(node)) return node.map(textOf).join('')
  if (isValidElement<{ children?: ReactNode }>(node)) return textOf(node.props.children)
  return ''
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function withSlugId(Tag: 'h2' | 'h3') {
  return function SluggedHeading({ children }: { children?: ReactNode }) {
    const id = slugify(textOf(children))
    return createElement(Tag, id ? { id } : undefined, children)
  }
}

function Pre({ children }: { children?: ReactNode }) {
  const codeClassName = isValidElement<{ className?: string }>(children)
    ? (children.props.className ?? '')
    : ''
  const isDiagram = codeClassName.includes('language-diagram')
  return <pre className={isDiagram ? 'diagram' : undefined}>{children}</pre>
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: withSlugId('h2'),
    h3: withSlugId('h3'),
    pre: Pre,
    img: ArticleImage,
    ...components,
  }
}
