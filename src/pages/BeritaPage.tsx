import { usePosts } from '../hooks/usePosts'
import { EmptyState } from '../components/ui/EmptyState'
import { LoadingSpinner } from '../components/ui/LoadingSpinner'
import { PostCard } from '../components/ui/PostCard'

export function BeritaPage() {
  const { data, isLoading, error } = usePosts(10)

  return (
    <main className="mx-auto max-w-7xl px-4 pb-14 pt-20 sm:px-6 sm:pt-24 lg:px-8 lg:pb-20 lg:pt-28">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--ikapi-accent)]">Publikasi</p>
      <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-[var(--ikapi-ink)] sm:text-5xl">
        Berita IKAPI DIY
      </h1>
      <div className="mt-10">
        {isLoading ? <LoadingSpinner variant="cards" /> : null}
        {error ? (
          <EmptyState
            title="Berita belum bisa dimuat"
            message="Koneksi ke sumber berita sedang tidak tersedia. Silakan coba lagi beberapa saat lagi, atau hubungi sekretariat IKAPI DIY untuk informasi terbaru."
          />
        ) : null}
        {data && data.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : null}
        {data && data.length === 0 ? (
          <EmptyState
            title="Belum ada berita"
            message="Belum ada berita yang dipublikasikan dari WordPress untuk saat ini. Konten terbaru akan tampil otomatis setelah tersedia."
          />
        ) : null}
      </div>
    </main>
  )
}
