import { Link } from 'react-router-dom'
import ikapiLogo from '../../assets/ikapi-putih.png'
import { navigationPageSlugs } from '../../content/sitePages'
import { usePages } from '../../hooks/usePages'
import { stripHtml } from '../../utils/format'

function resolvePageTitle(
  pages: Array<{ slug: string; title: { rendered: string } }> | undefined,
  slugs: readonly string[],
  fallback: string,
) {
  const page = slugs
    .map((slug) => pages?.find((item) => item.slug === slug))
    .find(Boolean)

  return page?.title.rendered ? stripHtml(page.title.rendered) : fallback
}

export function Footer() {
  const { data: pages } = usePages()
  const tentangLabel = resolvePageTitle(pages, navigationPageSlugs.sejarah, 'Tentang IKAPI')
  const anggotaLabel = resolvePageTitle(pages, navigationPageSlugs.syarat, 'Keanggotaan')
  const programLabel = resolvePageTitle(pages, navigationPageSlugs.program, 'Program')

  return (
    <footer className="mt-24 px-3 pb-3 sm:px-4">
      <div className="overflow-hidden rounded-[2rem] bg-[var(--ikapi-ink)] text-white shadow-[0_30px_90px_-58px_rgb(20_34_56_/_0.95)]">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.5fr_1fr_1fr] lg:px-8 lg:py-20">
          <div>
            <div className="grid h-20 w-20 place-items-center rounded-[1.35rem] bg-white/8 p-3 shadow-[inset_0_1px_0_rgb(255_255_255_/_0.16)]">
              <img src={ikapiLogo} alt="IKAPI" className="h-full w-full object-contain" />
            </div>
            <p className="mt-6 max-w-md text-base leading-7 tracking-[-0.015em] text-slate-200">
              Wadah penerbit Daerah Istimewa Yogyakarta untuk memperkuat ekosistem literasi,
              penerbitan, dan perbukuan Indonesia.
            </p>
          </div>
          <div>
            <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-white/58">Navigasi</h3>
            <div className="mt-5 grid gap-3 text-sm font-semibold text-slate-200">
              <Link className="w-fit hover:translate-x-0.5 hover:text-white" to="/tentang/sejarah">{tentangLabel}</Link>
              <Link className="w-fit hover:translate-x-0.5 hover:text-white" to="/keanggotaan/syarat">{anggotaLabel}</Link>
              <Link className="w-fit hover:translate-x-0.5 hover:text-white" to="/program">{programLabel}</Link>
              <Link className="w-fit hover:translate-x-0.5 hover:text-white" to="/berita">Berita</Link>
            </div>
          </div>
          <div>
            <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-white/58">Kontak</h3>
            <div className="mt-5 grid gap-3 text-sm font-semibold text-slate-200">
              <span>Daerah Istimewa Yogyakarta</span>
              <a className="w-fit hover:translate-x-0.5 hover:text-white" href="https://ikapidiy.com/" target="_blank" rel="noreferrer">
                ikapidiy.com
              </a>
              <Link className="w-fit hover:translate-x-0.5 hover:text-white" to="/kontak">Hubungi Sekretariat</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 px-4 py-5 text-center text-xs font-semibold tracking-[-0.01em] text-slate-300">
          &copy; {new Date().getFullYear()} IKAPI DIY. Frontend headless WordPress.
        </div>
      </div>
    </footer>
  )
}
