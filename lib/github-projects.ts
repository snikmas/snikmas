import { fallbackProjects, type Project } from '@/components/site/data'

const githubLogin = 'snikmas'

type GitHubRepository = {
  name?: unknown
  nameWithOwner?: unknown
  url?: unknown
  description?: unknown
  languages?: {
    nodes?: Array<{ name?: unknown } | null> | null
  } | null
}

type GitHubResponse = {
  data?: {
    user?: {
      pinnedItems?: {
        nodes?: Array<GitHubRepository | null> | null
      } | null
    } | null
  }
  errors?: Array<{ message?: string }>
}

const pinnedProjectsQuery = `
  query PinnedProjects($login: String!) {
    user(login: $login) {
      pinnedItems(first: 3, types: REPOSITORY) {
        nodes {
          ... on Repository {
            name
            nameWithOwner
            url
            description
            languages(first: 3, orderBy: { field: SIZE, direction: DESC }) {
              nodes {
                name
              }
            }
          }
        }
      }
    }
  }
`

function asProject(repository: GitHubRepository): Project | null {
  if (
    typeof repository.name !== 'string' ||
    typeof repository.nameWithOwner !== 'string' ||
    typeof repository.url !== 'string'
  ) {
    return null
  }

  const languages = repository.languages?.nodes
    ?.flatMap((language) =>
      language && typeof language.name === 'string' ? [language.name] : [],
    ) ?? []

  return {
    slug: repository.nameWithOwner,
    name: repository.name,
    url: repository.url,
    description:
      typeof repository.description === 'string' ? repository.description : null,
    languages,
  }
}

export async function getPinnedProjects(): Promise<Project[]> {
  const token = process.env.GITHUB_TOKEN

  if (!token) {
    return fallbackProjects
  }

  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      'User-Agent': 'snikmas-site-build',
    },
    body: JSON.stringify({
      query: pinnedProjectsQuery,
      variables: { login: githubLogin },
    }),
  })

  if (!response.ok) {
    throw new Error(`GitHub GraphQL request failed with status ${response.status}`)
  }

  const result = (await response.json()) as GitHubResponse

  if (result.errors?.length) {
    throw new Error(
      `GitHub GraphQL request failed: ${result.errors[0]?.message ?? 'unknown error'}`,
    )
  }

  const projects = result.data?.user?.pinnedItems?.nodes
    ?.flatMap((repository) => {
      const project = repository ? asProject(repository) : null
      return project ? [project] : []
    }) ?? []

  if (projects.length === 0) {
    throw new Error(`GitHub returned no pinned repositories for ${githubLogin}`)
  }

  return projects
}
