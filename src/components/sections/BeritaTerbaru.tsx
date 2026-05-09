import { Link } from 'react-router-dom'
import { usePosts } from '../../hooks/usePosts'
import { EmptyState } from '../ui/EmptyState'
import { ErrorMessage } from '../ui/ErrorMessage'
import { LoadingSpinner } from '../ui/LoadingSpinner'
import { PostCard } from '../ui/PostCard'

export function BeritaTerbaru() {
  const { data, isLoading, error } = usePosts(3)

  return (
    <section className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-10 grid gap-6 lg:grid-cols-[0.78fr_auto] lg:items-end">
        <div>
          <p className="inline-flex rounded-full border border-[#d8cbb8] bg-[#fffaf2]/75 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[var(--ikapi-accent)]">
            Berita
          </p>
          <h2 className="mt-4 max-w-2xl text-4xl font-black leading-none tracking-[-0.06em] text-[var(--ikapi-ink)] md:text-5xl">
            Kabar terbaru dari jejaring penerbit DIY.
          </h2>
        </div>
        <Link
          to="/berita"
          className="group inline-flex min-h-11 w-fit items-center gap-3 rounded-full border border-[#d7c9b6] bg-[#fffaf2]/75 px-5 text-sm font-semibold text-[var(--ikapi-ink)] shadow-[inset_0_1px_0_rgb(255_255_255_/_0.72)] hover:-translate-y-0.5 hover:border-[var(--ikapi-ink)] active:translate-y-[1px]"
        >
          Lihat semua berita
          <span className="grid h-7 w-7 place-items-center rounded-full bg-[var(--ikapi-ink)]/8 transition group-hover:translate-x-0.5">
            <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4">
              <path
                d="M3 8h9M8.5 3.5 13 8l-4.5 4.5"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
              />
            </svg>
          </span>
        </Link>
      </div>
      {isLoading ? <LoadingSpinner variant="cards" /> : null}
      {error ? <ErrorMessage message={(error as Error).message} /> : null}
      {data && data.length > 0 ? (
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-[1.15fr_0.92fr_0.92fr]">
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
