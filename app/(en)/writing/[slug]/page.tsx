import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArticleLayout } from '@/components/site/article-layout'
import { getPost, listPosts } from '@/lib/posts'
import { siteUrl } from '@/lib/url'

type Props = {
  params: Promise<{ slug: string }>
}

export const dynamicParams = false

export async function generateStaticParams() {
  return listPosts('en').map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug, 'en')
  if (!post) return {}

  const languages: Record<string, string> = {}
  if (getPost(slug, 'en')) languages.en = siteUrl(`/writing/${slug}`)
  if (getPost(slug, 'zh')) languages['zh-CN'] = siteUrl(`/zh/writing/${slug}`)

  return {
    title: `${post.title} — snikmas`,
    description: post.excerpt,
    alternates: {
      canonical: siteUrl(`/writing/${slug}`),
      languages,
    },
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  const post = getPost(slug, 'en')
  if (!post) notFound()

  const hasZh = getPost(slug, 'zh') !== null

  return (
    <ArticleLayout
      post={post}
      locale="en"
      alternateHref={hasZh ? `/zh/writing/${post.slug}` : undefined}
    >
      <post.Component />
    </ArticleLayout>
  )
}
