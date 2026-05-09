export interface WPMedia {
  id?: number
  source_url: string
  alt_text: string
}

export interface WPTerm {
  id: number
  name: string
  slug: string
  taxonomy?: string
}

export interface WPPost {
  id: number
  slug: string
  date: string
  title: { rendered: string }
  excerpt: { rendered: string }
  content: { rendered: string }
  link?: string
  _embedded?: {
    'wp:featuredmedia'?: WPMedia[]
    'wp:term'?: WPTerm[][]
  }
}

export interface WPPage {
  id: number
  slug: string
  title: { rendered: string }
  content: { rendered: string }
  link?: string
}

export interface WPCategory {
  id: number
  name: string
  slug: string
  count: number
}
