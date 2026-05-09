import { Link } from 'react-router-dom'

export function BookFairBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-8 rounded-[2rem] bg-[var(--ikapi-ink)] p-8 text-white shadow-[0_30px_70px_-44px_rgb(20_34_58_/_0.9)] md:grid-cols-[1fr_auto] md:items-center md:p-10">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#e3b28f]">Agenda Literasi</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight">Jogja Book Fair</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-200">
            Temukan informasi pameran buku, agenda penerbit, dan ruang temu pembaca di Yogyakarta.
          </p>
        </div>
        <Link
          to="/jogja-book-fair"
          className="rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-[var(--ikapi-ink)] hover:bg-[#f2e7db] active:translate-y-[1px]"
        >
          Lihat Agenda
        </Link>
      </div>
    </section>
  )
}
