import { Link } from 'react-router-dom'

export function BookFairBanner() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 lg:px-8">
      <div className="rounded-[2.35rem] border border-[#d9c8b3] bg-[#fffaf2]/58 p-2 shadow-[0_26px_80px_-54px_rgb(20_34_56_/_0.82)]">
        <div className="relative isolate grid overflow-hidden rounded-[1.85rem] bg-[var(--ikapi-ink)] p-7 text-white shadow-[inset_0_1px_0_rgb(255_255_255_/_0.14)] md:grid-cols-[1fr_auto] md:items-center md:p-10 lg:p-12">
          <div className="absolute -right-16 -top-20 -z-10 h-72 w-72 rounded-full bg-[var(--ikapi-accent-soft)]/16 blur-3xl" />
          <div className="absolute -bottom-24 left-20 -z-10 h-72 w-72 rounded-full bg-white/8 blur-3xl" />
          <div>
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[#e3b28f]">
              Agenda literasi
            </p>
            <h2 className="mt-4 text-4xl font-black leading-none tracking-[-0.06em] md:text-5xl">
              Jogja Book Fair
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 tracking-[-0.015em] text-slate-200">
              Temukan informasi pameran buku, agenda penerbit, dan ruang temu pembaca di Yogyakarta.
            </p>
          </div>
          <Link
            to="/jogja-book-fair"
            className="group mt-8 inline-flex min-h-12 w-fit items-center gap-3 rounded-full bg-white px-5 pl-6 text-center text-sm font-bold text-[var(--ikapi-ink)] shadow-[0_18px_40px_-30px_rgb(0_0_0_/_0.75)] hover:-translate-y-0.5 hover:bg-[#f2e7db] active:translate-y-[1px] md:mt-0"
          >
            Lihat Agenda
            <span className="grid h-8 w-8 place-items-center rounded-full bg-[var(--ikapi-ink)]/8 transition group-hover:translate-x-1 group-hover:-translate-y-0.5">
              <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4">
                <path
                  d="M3 8h9M8.5 3.5 13 8l-4.5 4.5"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
