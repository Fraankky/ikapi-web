import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 pb-14 pt-32 sm:px-6 sm:pt-36 lg:px-8 lg:pb-20 lg:pt-40">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--ikapi-accent)]">404</p>
      <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-[var(--ikapi-ink)] sm:text-5xl">
        Halaman tidak ditemukan
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
        Alamat yang dibuka tidak tersedia atau kontennya sudah dipindahkan.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex min-h-[2.75rem] items-center justify-center rounded-md bg-[#102f58] px-5 text-sm font-semibold text-white hover:bg-[#173966]"
      >
        Kembali ke beranda
      </Link>
    </main>
  )
}
