import { Link } from 'react-router-dom'
import { usePosts } from '../../hooks/usePosts'
import { EmptyState } from '../ui/EmptyState'
import { ErrorMessage } from '../ui/ErrorMessage'
import { LoadingSpinner } from '../ui/LoadingSpinner'
import { PostCard } from '../ui/PostCard'

export function BeritaTerbaru() {
  const { data, isLoading, error } = usePosts(3)

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--ikapi-accent)]">Berita</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[var(--ikapi-ink)]">Berita terbaru IKAPI DIY</h2>
        </div>
        <Link to="/berita" className="text-sm font-semibold text-[var(--ikapi-ink)] hover:text-[var(--ikapi-accent)]">
          Lihat semua berita
        </Link>
      </div>
      {isLoading ? <LoadingSpinner variant="cards" /> : null}
      {error ? <ErrorMessage message={(error as Error).message} /> : null}
      {data && data.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-3">
          {data.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : null}
      {data && data.length === 0 ? (
        <EmptyState message="Berita terbaru akan tampil di sini setelah konten dipublikasikan dari WordPress." />
      ) : null}
    </section>
  )
}
