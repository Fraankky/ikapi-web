import { usePosts } from '../hooks/usePosts'
import { EmptyState } from '../components/ui/EmptyState'
import { ErrorMessage } from '../components/ui/ErrorMessage'
import { LoadingSpinner } from '../components/ui/LoadingSpinner'
import { PostCard } from '../components/ui/PostCard'

export function BeritaPage() {
  const { data, isLoading, error } = usePosts(10)

  return (
    <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--ikapi-accent)]">Publikasi</p>
      <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-[var(--ikapi-ink)] sm:text-5xl">
        Berita IKAPI DIY
      </h1>
      <div className="mt-10">
        {isLoading ? <LoadingSpinner variant="cards" /> : null}
        {error ? <ErrorMessage message={(error as Error).message} /> : null}
        {data && data.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : null}
        {data && data.length === 0 ? (
          <EmptyState message="Belum ada berita yang dipublikasikan dari WordPress untuk saat ini." />
        ) : null}
      </div>
    </main>
  )
}
