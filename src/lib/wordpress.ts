import type { WPCategory, WPPage, WPPost } from '../types/wordpress'

const DEFAULT_WP_API_BASE = 'https://cms.ikapidiy.com/wp-json/wp/v2'
const DEFAULT_REQUEST_TIMEOUT_MS = 12000

const WP_API_BASE = normalizeApiBase(import.meta.env.VITE_WP_API_BASE)
const WP_REQUEST_TIMEOUT_MS = normalizeRequestTimeout(import.meta.env.VITE_WP_REQUEST_TIMEOUT_MS)

class WordPressApiError extends Error {
  status?: number

  constructor(message: string, options?: { cause?: unknown; status?: number }) {
    super(message, { cause: options?.cause })
    this.name = 'WordPressApiError'
    this.status = options?.status
  }
}

function normalizeApiBase(apiBase?: string) {
  const base = apiBase?.trim() || DEFAULT_WP_API_BASE
  return base.replace(/\/+$/, '')
}

function normalizeRequestTimeout(timeout?: string) {
  const parsedTimeout = Number(timeout)

  if (!Number.isFinite(parsedTimeout) || parsedTimeout <= 0) {
    return DEFAULT_REQUEST_TIMEOUT_MS
  }

  return Math.min(Math.max(parsedTimeout, 3000), 30000)
}

function buildApiUrl(endpoint: string) {
  const path = endpoint.startsWith('/') ? endpoint : `/${endpoint}`
  return `${WP_API_BASE}${path}`
}

async function fetchFromWP<T>(endpoint: string, errorMessage: string): Promise<T> {
  let response: Response
  const controller = new AbortController()
  const timeoutId = window.setTimeout(() => controller.abort(), WP_REQUEST_TIMEOUT_MS)

  try {
    response = await fetch(buildApiUrl(endpoint), {
      headers: {
        Accept: 'application/json',
      },
      signal: controller.signal,
    })
  } catch (error) {
    const isTimeout = error instanceof DOMException && error.name === 'AbortError'

    throw new WordPressApiError(
      isTimeout
        ? `${errorMessage}. WordPress API tidak merespons dalam ${Math.round(WP_REQUEST_TIMEOUT_MS / 1000)} detik.`
        : `${errorMessage}. Tidak dapat terhubung ke WordPress API di ${WP_API_BASE}.`,
      { cause: error },
    )
  } finally {
    window.clearTimeout(timeoutId)
  }

  if (!response.ok) {
    const details = await readErrorDetails(response)

    throw new WordPressApiError(
      `${errorMessage}. ${response.status} ${response.statusText}${details ? ` - ${details}` : ''}`,
      { status: response.status },
    )
  }

  const contentType = response.headers.get('content-type') ?? ''
  if (!contentType.includes('application/json')) {
    const preview = await response.text()

    throw new WordPressApiError(
      `${errorMessage}. WordPress API mengembalikan ${contentType || 'konten non-JSON'} dari ${buildApiUrl(endpoint)}${
        preview.trim().startsWith('<!doctype') || preview.trim().startsWith('<html')
          ? '. Endpoint kemungkinan mengarah ke halaman frontend, bukan REST API WordPress.'
          : '.'
      }`,
      { status: response.status },
    )
  }

  return (await response.json()) as T
}

async function readErrorDetails(response: Response) {
  try {
    const data = (await response.json()) as { message?: string }
    return data.message?.trim()
  } catch {
    return ''
  }
}

function buildCollectionQuery(params: Record<string, string | number | boolean | undefined>) {
  const query = new URLSearchParams()

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) {
      query.set(key, String(value))
    }
  })

  return query.toString()
}

export function getAllPosts(perPage = 10): Promise<WPPost[]> {
  const query = buildCollectionQuery({
    _embed: true,
    per_page: Math.min(100, Math.max(perPage * 4, perPage)),
  })

  return fetchFromWP<WPPost[]>(`/posts?${query}`, 'Gagal mengambil daftar berita').then(
    (posts) => posts.filter(isPublishedContentPost).slice(0, perPage),
  )
}

function isPublishedContentPost(post: WPPost) {
  const searchableText = [
    post.slug,
    post.title.rendered,
    post.excerpt.rendered,
  ]
    .join(' ')
    .replace(/<[^>]*>/g, ' ')
    .toLowerCase()

  const dummyPatterns = [
    'hello world',
    'sample post',
    'dummy',
    'lorem ipsum',
    'test post',
    'contoh berita',
    'blog 1',
    'blog 2',
    'blog 3',
    'blog 4',
    'fintech',
    'banking industry',
    'small business owners',
    'future of fintech',
    'technology is changing finance',
    'her old collecting she considered discovered',
  ]

  return (
    !/^blog-\d+$/i.test(post.slug) &&
    !dummyPatterns.some((pattern) => searchableText.includes(pattern))
  )
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  const query = buildCollectionQuery({
    slug,
    _embed: true,
  })

  const posts = await fetchFromWP<WPPost[]>(
    `/posts?${query}`,
    `Gagal mengambil berita "${slug}"`,
  )

  const post = posts[0] ?? null

  return post && isPublishedContentPost(post) ? post : null
}

export function getAllPages(): Promise<WPPage[]> {
  const query = buildCollectionQuery({
    _embed: true,
    per_page: 100,
  })

  return fetchFromWP<WPPage[]>(`/pages?${query}`, 'Gagal mengambil halaman')
}

export async function getPageBySlug(slug: string | string[]): Promise<WPPage | null> {
  const slugs = Array.isArray(slug) ? slug : [slug]
  const validSlugs = slugs.map((item) => item.trim()).filter(Boolean)

  if (validSlugs.length === 0) {
    return null
  }

  for (const currentSlug of validSlugs) {
    const query = buildCollectionQuery({
      slug: currentSlug,
      _embed: true,
      per_page: 1,
    })

    const pages = await fetchFromWP<WPPage[]>(
      `/pages?${query}`,
      `Gagal mengambil halaman "${currentSlug}"`,
    )

    if (pages[0]) {
      return pages[0]
    }
  }

  return null
}

export function getCategories(): Promise<WPCategory[]> {
  return fetchFromWP<WPCategory[]>('/categories?per_page=100', 'Gagal mengambil kategori')
}

export function getPostsByCategory(categoryId: number): Promise<WPPost[]> {
  const query = buildCollectionQuery({
    _embed: true,
    categories: categoryId,
    per_page: 10,
  })

  return fetchFromWP<WPPost[]>(
    `/posts?${query}`,
    `Gagal mengambil berita kategori ${categoryId}`,
  )
}

export { WP_API_BASE, WordPressApiError }
