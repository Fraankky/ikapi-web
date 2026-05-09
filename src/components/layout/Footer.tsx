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
    <footer className="mt-24 bg-[var(--ikapi-ink)] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
        <div>
          <img src={ikapiLogo} alt="IKAPI" className="h-20 w-auto" />
          <p className="mt-5 max-w-md text-sm leading-6 text-slate-200">
            Wadah penerbit Daerah Istimewa Yogyakarta untuk memperkuat ekosistem literasi,
            penerbitan, dan perbukuan Indonesia.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/75">Navigasi</h3>
          <div className="mt-4 grid gap-2 text-sm text-slate-200">
            <Link className="hover:text-white" to="/tentang/sejarah">{tentangLabel}</Link>
            <Link className="hover:text-white" to="/keanggotaan/syarat">{anggotaLabel}</Link>
            <Link className="hover:text-white" to="/program">{programLabel}</Link>
            <Link className="hover:text-white" to="/berita">Berita</Link>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/75">Kontak</h3>
          <div className="mt-4 grid gap-2 text-sm text-slate-200">
            <span>Daerah Istimewa Yogyakarta</span>
            <a className="hover:text-white" href="https://ikapidiy.com/" target="_blank" rel="noreferrer">
              ikapidiy.com
            </a>
            <Link className="hover:text-white" to="/kontak">Hubungi Sekretariat</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-slate-300">
        &copy; {new Date().getFullYear()} IKAPI DIY. Frontend headless WordPress.
      </div>
    </footer>
  )
}
