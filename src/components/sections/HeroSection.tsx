import { Link } from 'react-router-dom'
import anggotaPhoto from '../../assets/ikapi-anggota.jpeg'

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
      ? 'bg-[#102f58] text-white hover:bg-[#173966]'
      : 'border border-[#d4c8b8] bg-[#fffaf2]/72 text-[var(--ikapi-ink)] hover:border-[#102f58] hover:bg-[#fffaf2]'

  return (
    <Link
      to={to}
      className={`group inline-flex h-[3.25rem] items-center justify-center gap-4 rounded-md px-5 pl-6 text-sm font-semibold tracking-[-0.02em] transition duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 active:translate-y-[1px] ${className}`}
    >
      {children}
    </Link>
  )
}

export function HeroSection() {
  return (
    <section className="relative isolate w-full overflow-hidden border-b border-[#e2d5c4] bg-[linear-gradient(135deg,#fffaf2_0%,#f3ebde_55%,#e8ddcd_100%)] pb-16 pt-20 sm:pb-20 sm:pt-24 lg:pb-28 lg:pt-28">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:gap-12">
          <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-5 text-center">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 -z-10 size-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#dfd2bf]/70 p-16 [mask-image:linear-gradient(to_top,transparent,white,white,transparent)] md:size-[72rem] md:p-28"
            >
              <div className="size-full rounded-full border border-[#dfd2bf]/65 p-16 md:p-28">
                <div className="size-full rounded-full border border-[#dfd2bf]/60" />
              </div>
            </div>

            <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-[var(--ikapi-ink)] md:text-6xl lg:text-7xl">
              Menguatkan penerbit, merawat literasi.
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-8 tracking-[-0.01em] text-[var(--ikapi-muted)] md:text-lg">
              IKAPI DIY mempertemukan penerbit, pembaca, sekolah, dan komunitas agar ekosistem
              buku Yogyakarta bergerak lebih rapi dan terbaca.
            </p>

            <div className="flex flex-col items-center justify-center gap-3 pt-3 sm:flex-row">
              <HeroButton to="/kontak" variant="outline">
                Hubungi sekretariat
                <span className="grid h-8 w-8 place-items-center rounded-md bg-[#102f58]/8 text-[#102f58] transition group-hover:translate-x-0.5">
                  <HeroPhone />
                </span>
              </HeroButton>
              <HeroButton to="/keanggotaan/syarat">
                Menjadi anggota
                <span className="grid h-8 w-8 place-items-center rounded-md bg-white/12 text-white transition group-hover:translate-x-1 group-hover:-translate-y-0.5">
                  <HeroArrow />
                </span>
              </HeroButton>
            </div>

            <div className="pb-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Forum penerbit, agenda buku, dan jejaring literasi Yogyakarta
            </div>
          </div>

          <div className="mx-auto w-full max-w-6xl">
            <div className="rounded-[1.25rem] border border-[#d8cbb8] bg-[#fffaf2]/72 p-2">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-[#e8dfd2] sm:aspect-[16/8.4]">
                <img
                  src={anggotaPhoto}
                  alt="Anggota IKAPI DIY dalam Musyawarah Daerah"
                  className="h-full w-full object-cover object-center transition duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(20_34_56_/_0.01),rgb(20_34_56_/_0.1))]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
