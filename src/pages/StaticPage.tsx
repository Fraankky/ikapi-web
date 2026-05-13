import type { ReactNode } from 'react'
import { usePage } from '../hooks/usePage'
import { EmptyState } from '../components/ui/EmptyState'
import { ErrorMessage } from '../components/ui/ErrorMessage'
import { LoadingSpinner } from '../components/ui/LoadingSpinner'
import { PageContent } from '../components/ui/PageContent'
import { sanitizeWordPressHtml } from '../utils/wordpress'

interface StaticPageProps {
  title: string
  slugs: string[]
  eyebrow?: string
  fallback?: ReactNode
  preferFallback?: boolean
}

export function StaticPage({ title, slugs, eyebrow = 'IKAPI DIY', fallback, preferFallback = false }: StaticPageProps) {
  const { data, isLoading, error } = usePage(slugs)
  const pageData = preferFallback ? undefined : data
  const pageIsLoading = preferFallback ? false : isLoading
  const pageError = preferFallback ? null : error
  const safeTitle = pageData?.title.rendered ? sanitizeWordPressHtml(pageData.title.rendered) : ''

  return (
    <main className="mx-auto max-w-4xl px-4 pb-14 pt-20 sm:px-6 sm:pt-24 lg:px-8 lg:pb-20 lg:pt-28">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--ikapi-accent)]">{eyebrow}</p>
      {pageData?.title.rendered ? (
        <h1
          className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-[var(--ikapi-ink)] sm:text-5xl"
          dangerouslySetInnerHTML={{ __html: safeTitle }}
        />
      ) : (
        <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-[var(--ikapi-ink)] sm:text-5xl">
          {title}
        </h1>
      )}
      <div className="mt-8">
        {pageIsLoading ? <LoadingSpinner /> : null}
        {pageError ? <ErrorMessage message={(pageError as Error).message} /> : null}
        {!pageIsLoading ? (
          pageData?.content.rendered ? (
            <PageContent htmlContent={pageData.content.rendered} fallback={fallback} />
          ) : fallback ? (
            <PageContent fallback={fallback} />
          ) : (
            <EmptyState message="Konten halaman ini belum tersedia di WordPress." />
          )
        ) : null}
      </div>
    </main>
  )
}
