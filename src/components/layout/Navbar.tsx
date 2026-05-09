import { useState } from 'react'
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
  return `relative inline-flex min-h-[2.375rem] items-center rounded-md px-3.5 text-sm font-semibold tracking-[-0.02em] transition active:translate-y-[1px] ${
    isActive
      ? 'bg-[#e9dfd1] text-[var(--ikapi-ink)]'
      : 'text-slate-600 hover:bg-[#f1e8dc] hover:text-[var(--ikapi-ink)]'
  }`
}

function Dropdown({ label, items, active }: { label: string; items: string[][]; active: boolean }) {
  return (
    <div className="group relative">
      <button
        className={`relative inline-flex min-h-[2.375rem] items-center rounded-md px-3.5 text-sm font-semibold tracking-[-0.02em] transition active:translate-y-[1px] ${
          active
            ? 'bg-[#e9dfd1] text-[var(--ikapi-ink)]'
            : 'text-slate-600 hover:bg-[#f1e8dc] hover:text-[var(--ikapi-ink)]'
        }`}
      >
        {label}
      </button>
      <div className="invisible absolute left-1/2 top-full z-20 mt-3 w-76 -translate-x-1/2 translate-y-2 rounded-lg border border-[#ded4c6] bg-[#fffaf2]/92 p-1.5 opacity-0 shadow-[0_12px_32px_-24px_rgb(20_34_58_/_0.7)] backdrop-blur-lg transition duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        <div className="absolute -top-5 left-0 h-5 w-full" />
        {items.map(([text, href]) => (
          <NavLink
            key={href}
            to={href}
            className={({ isActive }) =>
              `block rounded-md px-3 py-2.5 text-sm font-semibold tracking-[-0.01em] transition ${
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

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block h-4 w-5" aria-hidden="true">
      <span
        className={`absolute left-0 top-1 h-0.5 w-5 rounded-full bg-current transition duration-300 ${
          open ? 'translate-y-1.5 rotate-45' : ''
        }`}
      />
      <span
        className={`absolute left-0 top-3 h-0.5 w-5 rounded-full bg-current transition duration-300 ${
          open ? '-translate-y-1.5 -rotate-45' : ''
        }`}
      />
    </span>
  )
}

function mobileLinkClass({ isActive }: { isActive: boolean }) {
  return `block rounded-md px-3 py-2.5 text-sm font-semibold tracking-[-0.01em] transition ${
    isActive
      ? 'bg-[#e9dfd1] text-[var(--ikapi-ink)]'
      : 'text-slate-600 hover:bg-[#f1e8dc] hover:text-[var(--ikapi-ink)]'
  }`
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const { data: pages } = usePages()
  const isTentang = pathname.startsWith('/tentang')
  const isAnggota = pathname.startsWith('/keanggotaan')
  const tentangLinks = [
    [resolvePageTitle(pages, navigationPageSlugs.sejarah, 'Sejarah IKAPI'), '/tentang/sejarah'],
    [resolvePageTitle(pages, navigationPageSlugs.visiMisi, 'Visi dan Misi'), '/tentang/visi-misi'],
    [resolvePageTitle(pages, navigationPageSlugs.adart, 'AD/ART IKAPI'), '/tentang/adart'],
    [resolvePageTitle(pages, navigationPageSlugs.struktur, 'Struktur Pengurus IKAPI'), '/tentang/struktur'],
  ]
  const anggotaLinks = [
    [resolvePageTitle(pages, navigationPageSlugs.syarat, 'Syarat Menjadi Anggota IKAPI'), '/keanggotaan/syarat'],
    [resolvePageTitle(pages, navigationPageSlugs.manfaat, 'Manfaat Menjadi Anggota'), '/keanggotaan/manfaat'],
    [resolvePageTitle(pages, navigationPageSlugs.dataAnggota, 'Data Anggota IKAPI DIY'), '/keanggotaan/data-anggota'],
  ]
  const programLabel = resolvePageTitle(pages, navigationPageSlugs.program, 'Program')
  const kontakLabel = resolvePageTitle(pages, navigationPageSlugs.kontak, 'Kontak')
  const jbfLabel = resolvePageTitle(pages, navigationPageSlugs.jogjaBookFair, 'Jogja Book Fair')

  return (
    <header className="sticky top-5 z-30 mx-auto -mb-18 w-full px-3 sm:px-4">
      <div className="mx-auto max-w-5xl rounded-lg border border-[#ded4c6] bg-[#fffaf2]/78 shadow-[0_8px_22px_-18px_rgb(20_34_58_/_0.35)] backdrop-blur-lg">
        <nav className="mx-auto p-2">
          <div className="flex items-center justify-between gap-3">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="group flex w-fit items-center gap-2 rounded-md px-2 py-1.5 transition hover:bg-[#f1e8dc]"
            >
              <img
                src={ikapiLogo}
                alt="IKAPI"
                className="h-[2.375rem] w-[2.375rem] rounded-md bg-[#102f58] object-contain p-1 transition group-hover:-translate-y-[1px]"
              />
              <span className="block text-base font-black leading-none tracking-[-0.04em] text-[var(--ikapi-ink)]">
                IKAPI DIY
              </span>
            </Link>

            <button
              type="button"
              className="inline-flex h-[2.375rem] items-center justify-center gap-2 rounded-md border border-[#ded4c6] bg-[#fffaf2] px-3 text-sm font-semibold text-[var(--ikapi-ink)] transition active:translate-y-[1px] lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-navigation"
              onClick={() => setOpen((current) => !current)}
            >
              Menu
              <MenuIcon open={open} />
            </button>
          </div>

          <div className="hidden flex-wrap items-center gap-1 lg:flex lg:justify-center">
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
              `hidden min-h-[2.375rem] w-fit items-center justify-center rounded-md px-4 text-sm font-semibold tracking-[-0.02em] transition hover:-translate-y-0.5 active:translate-y-[1px] lg:inline-flex ${
                isActive
                  ? 'bg-[#102f58] text-white'
                  : 'bg-[#102f58] text-white hover:bg-[#173966]'
              }`
            }
          >
            {jbfLabel}
          </NavLink>

          <div
            id="mobile-navigation"
            className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] lg:hidden ${
              open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
            }`}
          >
            <div className="min-h-0">
              <div className="mt-3 border-t border-[#ded4c6] pt-3">
                <div className="grid gap-1">
                  <NavLink to="/" onClick={() => setOpen(false)} className={mobileLinkClass}>
                    Home
                  </NavLink>

                  <div className="rounded-md bg-[#f7f1e9]/70 p-1.5">
                    <p className="px-2 pb-1 pt-1 text-[0.66rem] font-bold uppercase tracking-[0.18em] text-[var(--ikapi-accent)]">
                      Tentang IKAPI
                    </p>
                    {tentangLinks.map(([text, href]) => (
                      <NavLink key={href} to={href} onClick={() => setOpen(false)} className={mobileLinkClass}>
                        {text}
                      </NavLink>
                    ))}
                  </div>

                  <div className="rounded-md bg-[#f7f1e9]/70 p-1.5">
                    <p className="px-2 pb-1 pt-1 text-[0.66rem] font-bold uppercase tracking-[0.18em] text-[var(--ikapi-accent)]">
                      Keanggotaan
                    </p>
                    {anggotaLinks.map(([text, href]) => (
                      <NavLink key={href} to={href} onClick={() => setOpen(false)} className={mobileLinkClass}>
                        {text}
                      </NavLink>
                    ))}
                  </div>

                  <NavLink to="/program" onClick={() => setOpen(false)} className={mobileLinkClass}>
                    {programLabel}
                  </NavLink>
                  <NavLink to="/berita" onClick={() => setOpen(false)} className={mobileLinkClass}>
                    Berita
                  </NavLink>
                  <NavLink to="/kontak" onClick={() => setOpen(false)} className={mobileLinkClass}>
                    {kontakLabel}
                  </NavLink>
                  <NavLink
                    to="/jogja-book-fair"
                    onClick={() => setOpen(false)}
                    className="mt-1 inline-flex min-h-[2.375rem] items-center justify-center rounded-md bg-[#102f58] px-4 text-sm font-semibold text-white"
                  >
                    {jbfLabel}
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
