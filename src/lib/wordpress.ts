import type { WPCategory, WPPage, WPPost } from '../types/wordpress'

const DEFAULT_WP_API_BASE = '/wp-json/wp/v2'

const WP_API_BASE = normalizeApiBase(import.meta.env.VITE_WP_API_BASE)

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

function buildApiUrl(endpoint: string) {
  const path = endpoint.startsWith('/') ? endpoint : `/${endpoint}`
  return `${WP_API_BASE}${path}`
}

async function fetchFromWP<T>(endpoint: string, errorMessage: string): Promise<T> {
  let response: Response

  try {
    response = await fetch(buildApiUrl(endpoint), {
      headers: {
        Accept: 'application/json',
      },
    })
  } catch (error) {
    throw new WordPressApiError(
      `${errorMessage}. Tidak dapat terhubung ke WordPress API di ${WP_API_BASE}.`,
      { cause: error },
    )
  }

  if (!response.ok) {
    const details = await readErrorDetails(response)

    throw new WordPressApiError(
      `${errorMessage}. ${response.status} ${response.statusText}${details ? ` - ${details}` : ''}`,
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
    per_page: perPage,
  })

  return fetchFromWP<WPPost[]>(`/posts?${query}`, 'Gagal mengambil daftar berita')
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

  return posts[0] ?? null
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
