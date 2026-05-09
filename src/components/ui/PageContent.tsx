import type React from 'react'
import { stripHtml } from '../../utils/format'
import { sanitizeWordPressHtml } from '../../utils/wordpress'

interface PageContentProps {
  htmlContent?: string
  fallback?: React.ReactNode
}

export function PageContent({ htmlContent, fallback }: PageContentProps) {
  if (!htmlContent || !stripHtml(htmlContent)) {
    return (
      <div className="rounded-[1.5rem] border border-[#e2d8c8] bg-[#fffdfa] p-6 text-slate-600">
        {fallback ?? 'Konten halaman ini belum tersedia.'}
      </div>
    )
  }

  const sanitizedHtml = sanitizeWordPressHtml(htmlContent)

  return (
    <article
      className="prose prose-lg max-w-none overflow-hidden break-words prose-headings:font-sans prose-headings:font-extrabold prose-headings:tracking-tight prose-headings:text-[var(--ikapi-ink)] prose-p:text-slate-600 prose-li:text-slate-600 prose-strong:text-[var(--ikapi-ink)] prose-a:font-semibold prose-a:text-[var(--ikapi-ink)] prose-img:rounded-[1.5rem] prose-pre:overflow-x-auto prose-table:block prose-table:w-full prose-table:overflow-x-auto"
      dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
    />
  )
}
