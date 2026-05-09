import { Link, NavLink, useLocation } from 'react-router-dom'
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

function linkClass({ isActive }: { isActive: boolean }) {
  return `relative inline-flex min-h-10 items-center px-1 text-[0.92rem] font-medium tracking-[-0.02em] transition active:translate-y-[1px] ${
    isActive
      ? 'text-[var(--ikapi-ink)] after:absolute after:inset-x-1 after:bottom-0 after:h-px after:bg-[var(--ikapi-accent)]'
      : 'text-slate-500 hover:text-[var(--ikapi-ink)]'
  }`
}

function Dropdown({ label, items, active }: { label: string; items: string[][]; active: boolean }) {
  return (
    <div className="group relative">
      <button
        className={`relative inline-flex min-h-10 items-center px-1 text-[0.92rem] font-medium tracking-[-0.02em] transition hover:text-[var(--ikapi-ink)] active:translate-y-[1px] ${
          active
            ? 'text-[var(--ikapi-ink)] after:absolute after:inset-x-1 after:bottom-0 after:h-px after:bg-[var(--ikapi-accent)]'
            : 'text-slate-500'
        }`}
      >
        {label}
      </button>
      <div className="invisible absolute left-1/2 top-full z-20 mt-5 w-76 -translate-x-1/2 translate-y-2 rounded-[0.9rem] border border-[#ded4c6] bg-[#fffdfa] p-1.5 opacity-0 shadow-[0_26px_80px_-48px_rgb(20_34_58_/_0.7)] transition duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        <div className="absolute -top-5 left-0 h-5 w-full" />
        {items.map(([text, href]) => (
          <NavLink
            key={href}
            to={href}
            className={({ isActive }) =>
              `block rounded-[0.7rem] px-4 py-3 text-sm font-medium tracking-[-0.01em] transition ${
                isActive
                  ? 'bg-[#efe7da] text-[var(--ikapi-ink)]'
                  : 'text-slate-600 hover:bg-[#f7f1e9] hover:text-[var(--ikapi-ink)]'
              }`
            }
          >
            {text}
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export function Navbar() {
  const { pathname } = useLocation()
  const { data: pages } = usePages()
  const isTentang = pathname.startsWith('/tentang')
  const isAnggota = pathname.startsWith('/keanggotaan')
  const tentangLinks = [
    [resolvePageTitle(pages, navigationPageSlugs.sejarah, 'Sejarah IKAPI'), '/tentang/sejarah'],
    [resolvePageTitle(pages, navigationPageSlugs.visiMisi, 'Visi dan Misi'), '/tentang/visi-misi'],
    [resolvePageTitle(pages, navigationPageSlugs.adart, 'AD/ART IKAPI'), '/tentang/adart'],
    [resolvePageTitle(pages, navigationPageSlugs.struktur, 'Struktur Pengurus IKAPI DIY'), '/tentang/struktur'],
  ]
  const anggotaLinks = [
    [resolvePageTitle(pages, navigationPageSlugs.syarat, 'Syarat Menjadi Anggota'), '/keanggotaan/syarat'],
    [resolvePageTitle(pages, navigationPageSlugs.manfaat, 'Manfaat Menjadi Anggota'), '/keanggotaan/manfaat'],
    [resolvePageTitle(pages, navigationPageSlugs.dataAnggota, 'Data Anggota IKAPI DIY'), '/keanggotaan/data-anggota'],
  ]
  const programLabel = resolvePageTitle(pages, navigationPageSlugs.program, 'Program')
  const kontakLabel = resolvePageTitle(pages, navigationPageSlugs.kontak, 'Kontak')
  const jbfLabel = resolvePageTitle(pages, navigationPageSlugs.jogjaBookFair, 'Jogja Book Fair')

  return (
    <header className="sticky top-0 z-30 border-b border-[#e5dacb] bg-[#fffdfa]/96 backdrop-blur-xl">
      <div className="border-b border-[#eee5d8]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-slate-500 sm:px-6 lg:px-8">
          <span>Daerah Istimewa Yogyakarta</span>
          <span className="hidden sm:inline">Ikatan Penerbit Indonesia</span>
        </div>
      </div>

      <nav className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-5 px-4 py-5 sm:px-6 lg:grid-cols-[auto_1fr_auto] lg:px-8">
        <Link to="/" className="group flex w-fit items-center gap-4">
          <span className="grid h-12 w-12 place-items-center rounded-[0.85rem] bg-[var(--ikapi-ink)] p-2.5 shadow-[inset_0_1px_1px_rgb(255_255_255_/_0.18)] transition group-hover:-translate-y-[1px]">
            <img src={ikapiLogo} alt="IKAPI" className="h-full w-full object-contain" />
          </span>
          <span className="grid gap-1">
            <span className="block text-[1.45rem] font-black leading-none tracking-[-0.055em] text-[var(--ikapi-ink)]">
              IKAPI DIY
            </span>
            <span className="text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-slate-500">
              Literasi dan penerbitan
            </span>
          </span>
        </Link>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 lg:justify-center">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <Dropdown label="Tentang IKAPI" items={tentangLinks} active={isTentang} />
          <Dropdown label="Keanggotaan" items={anggotaLinks} active={isAnggota} />
          <NavLink to="/program" className={linkClass}>{programLabel}</NavLink>
          <NavLink to="/berita" className={linkClass}>Berita</NavLink>
          <NavLink to="/kontak" className={linkClass}>{kontakLabel}</NavLink>
        </div>

        <NavLink
          to="/jogja-book-fair"
          className={({ isActive }) =>
            `inline-flex min-h-11 w-fit items-center justify-center rounded-[0.85rem] px-4 text-sm font-semibold tracking-[-0.02em] transition active:translate-y-[1px] lg:justify-self-end ${
              isActive
                ? 'bg-[var(--ikapi-ink)] text-white'
                : 'bg-[var(--ikapi-ink)] text-white shadow-[0_18px_40px_-28px_rgb(20_34_58_/_0.9)] hover:bg-[var(--ikapi-ink-soft)]'
            }`
          }
        >
          {jbfLabel}
        </NavLink>
      </nav>
    </header>
  )
}
