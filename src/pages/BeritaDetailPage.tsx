import { Link, useParams } from 'react-router-dom'
import { usePost } from '../hooks/usePost'
import { ErrorMessage } from '../components/ui/ErrorMessage'
import { LoadingSpinner } from '../components/ui/LoadingSpinner'
import { PageContent } from '../components/ui/PageContent'
import { formatDate, stripHtml } from '../utils/format'
import { getTermsByTaxonomy, sanitizeWordPressHtml } from '../utils/wordpress'

export function BeritaDetailPage() {
  const { slug = '' } = useParams()
  const { data: post, isLoading, error } = usePost(slug)
  const image = post?._embedded?.['wp:featuredmedia']?.[0]
  const categories = getTermsByTaxonomy(post?._embedded?.['wp:term'], 'category')
  const tags = getTermsByTaxonomy(post?._embedded?.['wp:term'], 'post_tag')
  const safeTitle = post ? sanitizeWordPressHtml(post.title.rendered) : ''

  return (
    <main className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <Link to="/berita" className="text-sm font-semibold text-[var(--ikapi-ink)] hover:text-[var(--ikapi-accent)]">
        Kembali ke berita
      </Link>
      {isLoading ? <LoadingSpinner /> : null}
      {error ? <ErrorMessage message={(error as Error).message} /> : null}
      {!isLoading && !error && !post ? <ErrorMessage message="Berita tidak ditemukan." /> : null}
      {post ? (
        <article className="mt-6">
          <div className="flex flex-wrap items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ikapi-accent)]">
            <span>{formatDate(post.date)}</span>
            {categories.map((category) => (
              <span key={category.id} className="rounded-full border border-[#dccfbe] px-2.5 py-1 text-[0.68rem] tracking-[0.14em]">
                {category.name}
              </span>
            ))}
          </div>
          <h1
            className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-[var(--ikapi-ink)] sm:text-5xl"
            dangerouslySetInnerHTML={{ __html: safeTitle }}
          />
          {image?.source_url ? (
            <div className="mt-8 rounded-[2rem] border border-[#e2d8c8] bg-[#ece5d9] p-2">
              <img
                src={image.source_url}
                alt={image.alt_text || stripHtml(post.title.rendered)}
                className="aspect-[16/9] w-full rounded-[calc(2rem-0.5rem)] object-cover"
              />
            </div>
          ) : null}
          {tags.length > 0 ? (
            <div className="mt-6 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag.id}
                  className="rounded-full border border-[#dfd4c5] bg-[#f7f1e9] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-slate-500"
                >
                  {tag.name}
                </span>
              ))}
            </div>
          ) : null}
          <div className="mt-10">
            <PageContent htmlContent={post.content.rendered} />
          </div>
        </article>
      ) : null}
    </main>
  )
}
