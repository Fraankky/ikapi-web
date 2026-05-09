import { Link } from 'react-router-dom'
import type { ProfilePageData } from '../../content/profilePages'

interface ProfilePageProps {
  data: ProfilePageData
  slugs: string[]
}

export function ProfilePage({ data, slugs }: ProfilePageProps) {
  void slugs

  return (
    <main>
      <section className="border-b border-[#e2d8c8] bg-[#f7f3ec]">
        <div className="mx-auto max-w-5xl px-4 pb-16 pt-32 sm:px-6 sm:pt-36 lg:px-8 lg:pb-24 lg:pt-40">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--ikapi-accent)]">{data.eyebrow}</p>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-[var(--ikapi-ink)] text-balance sm:text-6xl">
              {data.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 tracking-[-0.01em] text-slate-600">
              {data.lead}
            </p>
            <a
              href={data.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex border-b border-[#cbbda9] pb-1 text-sm font-semibold tracking-[-0.01em] text-[var(--ikapi-ink)] transition hover:border-[var(--ikapi-accent)] hover:text-[var(--ikapi-accent)] active:translate-y-[1px]"
            >
              Sumber: {data.sourceLabel}
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12">
          {data.sections.map((section) => (
                <article key={section.title} className="border-b border-[#e2d8c8] pb-12 last:border-b-0">
                  {section.eyebrow ? (
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ikapi-accent)]">{section.eyebrow}</p>
                  ) : null}
                  <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.035em] text-[var(--ikapi-ink)] sm:text-4xl">{section.title}</h2>

                  {section.body ? (
                    <div className="mt-6 grid max-w-3xl gap-4 text-base leading-8 text-slate-600">
                      {section.body.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  ) : null}

                  {section.cards ? (
                    <div className="mt-8 grid gap-4 md:grid-cols-2">
                      {section.cards.map((card) => (
                        <div key={card.title} className="rounded-xl border border-[#e5dbcd] bg-[#fffaf2] p-6">
                          <h3 className="text-xl font-semibold tracking-[-0.03em] text-[var(--ikapi-ink)]">{card.title}</h3>
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
                            <span className="grid h-10 w-10 place-items-center rounded-lg bg-[var(--ikapi-ink)] text-sm font-bold text-white">
                              {index + 1}
                            </span>
                            <span className="border-b border-[#e2d8c8] pb-3 leading-7 text-slate-600">{item}</span>
                          </li>
                        ))}
                      </ol>
                    ) : (
                      <ul className="mt-6 grid gap-3">
                        {section.items.map((item) => (
                          <li key={item} className="flex gap-3 border-b border-[#e2d8c8] pb-3 leading-7 text-slate-600">
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--ikapi-accent)]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )
                  ) : null}
                </article>
              ))}

          <div className="rounded-xl border border-[#e2d8c8] bg-[#fffaf2] p-6">
            <p className="text-2xl font-semibold tracking-[-0.035em] text-[var(--ikapi-ink)]">Butuh informasi lebih lanjut?</p>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
              Sekretariat IKAPI DIY dapat membantu menjelaskan program, keanggotaan, dan kebutuhan organisasi
              penerbit di Daerah Istimewa Yogyakarta.
            </p>
            <Link
              to="/kontak"
              className="mt-5 inline-flex rounded-md bg-[var(--ikapi-ink)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[var(--ikapi-ink-soft)] active:translate-y-[1px]"
            >
              Hubungi Sekretariat
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
