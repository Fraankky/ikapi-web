import { Link } from 'react-router-dom'
import anggotaPhoto from '../../assets/ikapi-anggota.jpeg'
import ikapiLogo from '../../assets/ikapi-putih.png'

function HeroBadge() {
  return (
    <span className="inline-flex w-fit rounded-full border border-[#d8cfbf] bg-[#fffdfa] px-3 py-1 text-sm font-medium tracking-[-0.02em] text-[var(--ikapi-ink)]">
      Portal resmi sudah aktif
    </span>
  )
}

function HeroArrow() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className="h-4 w-4 transition duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5"
    >
      <path
        d="M3 8h9M8.5 3.5 13 8l-4.5 4.5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}

function HeroPhone() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4">
      <path
        d="M5.1 2.4 6.3 5c.2.4.1.8-.2 1.1l-.8.7a8.3 8.3 0 0 0 3.9 3.9l.7-.8c.3-.3.8-.4 1.1-.2l2.6 1.2c.4.2.6.6.5 1.1l-.3 1.4c-.1.5-.5.8-1 .8A11 11 0 0 1 1.8 3.2c0-.5.3-.9.8-1l1.4-.3c.5-.1.9.1 1.1.5Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.45"
      />
    </svg>
  )
}

function HeroButton({
  children,
  to,
  variant = 'primary',
}: {
  children: React.ReactNode
  to: string
  variant?: 'primary' | 'outline'
}) {
  const className =
    variant === 'primary'
      ? 'bg-[var(--ikapi-ink)] text-white hover:bg-[var(--ikapi-ink-soft)]'
      : 'border border-[#d4c8b8] bg-transparent text-[var(--ikapi-ink)] hover:border-[var(--ikapi-ink)] hover:bg-[#fffdfa]'

  return (
    <Link
      to={to}
      className={`group inline-flex h-12 items-center justify-center gap-4 rounded-[0.8rem] px-5 text-sm font-semibold tracking-[-0.02em] transition active:translate-y-[1px] ${className}`}
    >
      {children}
    </Link>
  )
}

export function HeroSection() {
  return (
    <section className="w-full border-b border-[#e7dece] bg-[var(--ikapi-paper)] py-20 lg:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <div>
              <HeroBadge />
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="max-w-lg text-left text-5xl font-normal leading-[0.9] tracking-[-0.065em] text-[var(--ikapi-ink)] text-balance md:text-7xl">
                Menguatkan penerbit, merawat literasi.
              </h1>
              <p className="max-w-md text-left text-xl leading-relaxed tracking-[-0.03em] text-slate-600">
                IKAPI DIY mempertemukan penerbit, pembaca, sekolah, dan komunitas agar ekosistem
                buku Yogyakarta bergerak lebih rapi dan terbaca.
              </p>
            </div>

            <div className="flex flex-col gap-4 pt-1 sm:flex-row">
              <HeroButton to="/kontak" variant="outline">
                Hubungi sekretariat
                <HeroPhone />
              </HeroButton>
              <HeroButton to="/keanggotaan/syarat">
                Menjadi anggota
                <HeroArrow />
              </HeroButton>
            </div>
          </div>

          <div className="relative aspect-square overflow-hidden rounded-md bg-[#e8dfd2]">
            <img
              src={anggotaPhoto}
              alt="Anggota IKAPI DIY dalam Musyawarah Daerah"
              className="h-full w-full object-cover grayscale-[12%]"
            />
            <div className="absolute inset-0 bg-[var(--ikapi-ink)]/10" />
            <div className="absolute inset-x-6 bottom-6 grid gap-3 rounded-[0.85rem] border border-white/20 bg-[var(--ikapi-ink)]/82 p-5 text-white backdrop-blur-md">
              <div className="flex items-center justify-between gap-4">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/65">
                  Dokumentasi organisasi
                </p>
                <img src={ikapiLogo} alt="" className="h-8 w-auto" />
              </div>
              <p className="max-w-sm text-2xl font-medium leading-tight tracking-[-0.04em]">
                Musyawarah Daerah IKAPI DIY 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
