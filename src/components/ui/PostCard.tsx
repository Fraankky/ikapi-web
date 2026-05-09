import { Link } from 'react-router-dom'
import type { WPPost } from '../../types/wordpress'
import { formatDate, stripHtml } from '../../utils/format'
import { getTermsByTaxonomy, sanitizeWordPressHtml } from '../../utils/wordpress'

export function PostCard({ post }: { post: WPPost }) {
  const image = post._embedded?.['wp:featuredmedia']?.[0]
  const categories = getTermsByTaxonomy(post._embedded?.['wp:term'], 'category')
  const tags = getTermsByTaxonomy(post._embedded?.['wp:term'], 'post_tag').slice(0, 2)
  const safeTitle = sanitizeWordPressHtml(post.title.rendered)

  return (
    <article className="group grid overflow-hidden rounded-[1.5rem] border border-[#e2d8c8] bg-[#fffdfa] shadow-[0_18px_48px_-40px_rgb(20_34_58_/_0.75)] transition duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:shadow-[0_28px_60px_-42px_rgb(20_34_58_/_0.85)]">
      <Link to={`/berita/${post.slug}`} className="block aspect-[16/10] overflow-hidden bg-slate-100">
        {image?.source_url ? (
          <img
            src={image.source_url}
            alt={image.alt_text || stripHtml(post.title.rendered)}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-[var(--ikapi-ink)] px-6 text-center text-xl font-extrabold tracking-tight text-white">
            IKAPI DIY
          </div>
        )}
      </Link>
      <div className="grid gap-3 p-5">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
          <span>{formatDate(post.date)}</span>
          {categories[0] ? <span className="text-[var(--ikapi-accent)]">{categories[0].name}</span> : null}
        </div>
        <h3 className="text-xl font-extrabold leading-tight tracking-tight text-[var(--ikapi-ink)]">
          <Link to={`/berita/${post.slug}`} dangerouslySetInnerHTML={{ __html: safeTitle }} />
        </h3>
        <p className="line-clamp-3 text-sm leading-6 text-slate-600">{stripHtml(post.excerpt.rendered)}</p>
        {tags.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag.id}
                className="rounded-full border border-[#dfd4c5] bg-[#f7f1e9] px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-slate-500"
              >
                {tag.name}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  )
}
