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
    <article className="group grid overflow-hidden rounded-[1.8rem] border border-[#e1d3c0] bg-[#fffaf2]/92 p-1.5 shadow-[0_22px_60px_-48px_rgb(20_34_58_/_0.82)] transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1.5 hover:shadow-[0_34px_80px_-52px_rgb(20_34_58_/_0.92)]">
      <Link to={`/berita/${post.slug}`} className="block aspect-[16/10] overflow-hidden rounded-[1.35rem] bg-slate-100">
        {image?.source_url ? (
          <img
            src={image.source_url}
            alt={image.alt_text || stripHtml(post.title.rendered)}
            className="h-full w-full object-cover transition duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-end bg-[linear-gradient(135deg,var(--ikapi-ink)_0%,#283951_100%)] px-6 py-6 text-left text-3xl font-black leading-none tracking-[-0.07em] text-white">
            IKAPI
            <br />
            DIY
          </div>
        )}
      </Link>
      <div className="grid gap-3 px-4 py-5">
        <div className="flex flex-wrap items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-slate-500">
          <span>{formatDate(post.date)}</span>
          {categories[0] ? <span className="text-[var(--ikapi-accent)]">{categories[0].name}</span> : null}
        </div>
        <h3 className="text-[1.35rem] font-black leading-tight tracking-[-0.04em] text-[var(--ikapi-ink)]">
          <Link
            to={`/berita/${post.slug}`}
            className="outline-none hover:text-[var(--ikapi-accent)]"
            dangerouslySetInnerHTML={{ __html: safeTitle }}
          />
        </h3>
        <p className="line-clamp-3 text-sm leading-6 text-slate-600">{stripHtml(post.excerpt.rendered)}</p>
        {tags.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag.id}
                className="rounded-full border border-[#dfd4c5] bg-[#f7f1e9] px-2.5 py-1 text-[0.66rem] font-bold uppercase tracking-[0.14em] text-slate-500"
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
