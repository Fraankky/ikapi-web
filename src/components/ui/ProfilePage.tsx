import { Link, NavLink } from 'react-router-dom'
import { profileNav, type ProfilePageData } from '../../content/profilePages'
import { usePage } from '../../hooks/usePage'
import { sanitizeWordPressHtml } from '../../utils/wordpress'
import { ErrorMessage } from './ErrorMessage'
import { LoadingSpinner } from './LoadingSpinner'
import { PageContent } from './PageContent'

interface ProfilePageProps {
  data: ProfilePageData
  slugs: string[]
}

function navClass({ isActive }: { isActive: boolean }) {
  return `block rounded-2xl border-l-2 px-4 py-3 text-sm font-semibold transition active:translate-y-[1px] ${
    isActive
      ? 'border-[var(--ikapi-accent)] bg-white text-[var(--ikapi-ink)] shadow-[0_12px_35px_-30px_rgb(20_34_58_/_0.8)]'
      : 'border-transparent text-slate-600 hover:border-[#d9cfc0] hover:bg-white hover:text-[var(--ikapi-ink)]'
  }`
}

export function ProfilePage({ data, slugs }: ProfilePageProps) {
  const navItems = profileNav[data.category]
  const { data: wpPage, isLoading, error } = usePage(slugs)
  const safeTitle = wpPage?.title.rendered ? sanitizeWordPressHtml(wpPage.title.rendered) : ''

  return (
    <main>
      <section className="border-b border-[#e7dece] bg-[#f2ede5]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--ikapi-accent)]">{data.eyebrow}</p>
            {wpPage?.title.rendered ? (
              <h1
                className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-[var(--ikapi-ink)] text-balance sm:text-5xl"
                dangerouslySetInnerHTML={{ __html: safeTitle }}
              />
            ) : (
              <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-[var(--ikapi-ink)] text-balance sm:text-5xl">
                {data.title}
              </h1>
            )}
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              {wpPage?.content.rendered ? 'Konten halaman ini dikelola melalui WordPress Admin.' : data.lead}
            </p>
            {!wpPage?.content.rendered ? (
              <a
                href={data.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex rounded-full border border-[#d8cfbf] bg-[#fffdfa] px-5 py-2.5 text-sm font-semibold text-[var(--ikapi-ink)] transition hover:border-[var(--ikapi-accent)] active:translate-y-[1px]"
              >
                Sumber: {data.sourceLabel}
              </a>
            ) : null}
          </div>

          {data.stats && !wpPage?.content.rendered ? (
            <div className="grid content-end gap-3 sm:grid-cols-3">
              {data.stats.map((stat) => (
                <div key={stat.label} className="rounded-[1.5rem] border border-[#e2d8c8] bg-[#fffdfa] p-5">
                  <p className="text-3xl font-extrabold leading-none tracking-tight text-[var(--ikapi-ink)]">{stat.value}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[18rem_1fr] lg:px-8 lg:py-20">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-[1.5rem] border border-[#e2d8c8] bg-[#f6f1e9] p-3">
            <p className="px-4 pb-3 pt-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--ikapi-accent)]">
              Navigasi
            </p>
            {navItems.map((item) => (
              <NavLink key={item.href} to={item.href} className={navClass}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </aside>

        <div className="grid gap-10">
          {isLoading ? <LoadingSpinner /> : null}
          {error ? <ErrorMessage message={(error as Error).message} /> : null}
          {!isLoading && wpPage?.content.rendered ? (
            <article className="rounded-[2rem] border border-[#e2d8c8] bg-[#fffdfa] p-6 sm:p-8">
              <PageContent htmlContent={wpPage.content.rendered} />
            </article>
          ) : null}
          {!isLoading && !wpPage?.content.rendered
            ? data.sections.map((section) => (
                <article key={section.title} className="border-b border-[#ded4c6] pb-10 last:border-b-0">
                  {section.eyebrow ? (
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ikapi-accent)]">{section.eyebrow}</p>
                  ) : null}
                  <h2 className="mt-2 text-3xl font-extrabold leading-tight tracking-tight text-[var(--ikapi-ink)]">{section.title}</h2>

                  {section.body ? (
                    <div className="mt-5 grid gap-4 text-base leading-8 text-slate-600">
                      {section.body.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  ) : null}

                  {section.cards ? (
                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                      {section.cards.map((card) => (
                        <div key={card.title} className="rounded-[1.5rem] border border-[#e2d8c8] bg-[#fffdfa] p-5">
                          <h3 className="text-2xl font-extrabold tracking-tight text-[var(--ikapi-ink)]">{card.title}</h3>
                          <p className="mt-3 text-sm leading-6 text-slate-600">{card.body}</p>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  {section.items ? (
                    section.ordered ? (
                      <ol className="mt-6 grid gap-3">
                        {section.items.map((item, index) => (
                          <li key={item} className="grid grid-cols-[2.5rem_1fr] gap-3">
                            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[var(--ikapi-ink)] text-sm font-bold text-white">
                              {index + 1}
                            </span>
                            <span className="border-b border-[#ded4c6] pb-3 leading-7 text-slate-600">{item}</span>
                          </li>
                        ))}
                      </ol>
                    ) : (
                      <ul className="mt-6 grid gap-3">
                        {section.items.map((item) => (
                          <li key={item} className="flex gap-3 border-b border-[#ded4c6] pb-3 leading-7 text-slate-600">
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--ikapi-accent)]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )
                  ) : null}
                </article>
              ))
            : null}

          <div className="rounded-[2rem] bg-[var(--ikapi-ink)] p-6 text-white shadow-[0_28px_60px_-42px_rgb(20_34_58_/_0.95)]">
            <p className="text-2xl font-extrabold tracking-tight">Butuh informasi lebih lanjut?</p>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-200">
              Sekretariat IKAPI DIY dapat membantu menjelaskan program, keanggotaan, dan kebutuhan organisasi
              penerbit di Daerah Istimewa Yogyakarta.
            </p>
            <Link
              to="/kontak"
              className="mt-5 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[var(--ikapi-ink)] hover:bg-[#f2e7db] active:translate-y-[1px]"
            >
              Hubungi Sekretariat
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
