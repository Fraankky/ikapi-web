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
}

export function StaticPage({ title, slugs, eyebrow = 'IKAPI DIY', fallback }: StaticPageProps) {
  const { data, isLoading, error } = usePage(slugs)
  const safeTitle = data?.title.rendered ? sanitizeWordPressHtml(data.title.rendered) : ''

  return (
    <main className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--ikapi-accent)]">{eyebrow}</p>
      {data?.title.rendered ? (
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
        {isLoading ? <LoadingSpinner /> : null}
        {error ? <ErrorMessage message={(error as Error).message} /> : null}
        {!isLoading ? (
          data?.content.rendered ? (
            <PageContent htmlContent={data.content.rendered} fallback={fallback} />
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
