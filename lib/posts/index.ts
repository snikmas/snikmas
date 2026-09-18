import { createPostApi } from './core'
import { registry } from './registry.generated'

const { listPosts, getPost } = createPostApi(registry)

export { getPost, listPosts }
export type { Post, PostSummary } from './types'
