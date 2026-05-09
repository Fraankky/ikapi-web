import type { ReactNode } from 'react'
import { profilePages, type ProfilePageData, type ProfilePageKey } from './profilePages'

export type StaticPageConfig = {
  title: string
  eyebrow?: string
  slugs: string[]
  fallback?: ReactNode
  preferFallback?: boolean
}

export type ProfilePageConfig = {
  key: ProfilePageKey
  slugs: string[]
  data: ProfilePageData
}

export const homePageConfig: StaticPageConfig = {
  title: 'IKAPI DIY',
  eyebrow: 'IKAPI DIY',
  slugs: ['beranda', 'home'],
  fallback: (
    <>
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--ikapi-accent)]">Sekilas</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[var(--ikapi-ink)]">Tentang IKAPI</h2>
        </div>
        <div className="grid gap-5 text-lg leading-8 text-slate-600">
          <p>
            Ikatan Penerbit Indonesia adalah asosiasi penerbitan profesional yang menyatukan
            penerbit buku dari seluruh Indonesia. IKAPI DIY menjadi ruang kolaborasi penerbit
            di Yogyakarta untuk memperkuat industri buku dan budaya baca.
          </p>
          <p>
            Organisasi ini menjaga hubungan antara penerbit, toko buku, sekolah, kampus, dan
            komunitas agar literasi publik tumbuh bersama industri perbukuan yang sehat.
          </p>
        </div>
      </section>
      <section className="bg-[#efe9df]">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-20 sm:px-6 md:grid-cols-[1.15fr_0.85fr] lg:px-8">
          {[
            ['Forum Penerbit', 'Ruang koordinasi dan advokasi bagi penerbit anggota IKAPI DIY.'],
            ['Literasi Publik', 'Program yang mempertemukan penerbit, pembaca, sekolah, dan komunitas.'],
            ['Pameran Buku', 'Dukungan agenda pameran dan promosi buku di Daerah Istimewa Yogyakarta.'],
          ].map(([title, body], index) => (
            <div
              key={title}
              className={`rounded-[1.5rem] border border-[#e0d5c4] bg-[#fffdfa] p-6 shadow-[0_18px_50px_-38px_rgb(20_34_58_/_0.65)] ${
                index === 0 ? 'md:row-span-2 md:p-8' : ''
              }`}
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ikapi-accent)]">
                0{index + 1}
              </p>
              <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-[var(--ikapi-ink)]">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  ),
}

export const staticPages = {
  program: {
    title: 'Program',
    eyebrow: 'IKAPI DIY',
    slugs: ['program'],
    fallback: (
      <div className="grid gap-6">
        <p>
          Program IKAPI DIY mencakup penguatan organisasi, kolaborasi literasi, pelatihan
          penerbit, advokasi perbukuan, dan partisipasi dalam agenda publik yang mempertemukan
          penerbit dengan pembaca.
        </p>
        <p>
          Saat konten WordPress untuk halaman ini tersedia, struktur program dan agenda dapat
          dikelola penuh dari WP Admin tanpa mengubah tampilan frontend.
        </p>
      </div>
    ),
  },
  kontak: {
    title: 'Hubungi IKAPI DIY',
    eyebrow: 'Kontak',
    slugs: ['kontak', 'contact'],
    preferFallback: true,
    fallback: (
      <div className="grid gap-4">
        <div className="rounded-xl border border-[#e2d8c8] bg-[#fffaf2] p-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ikapi-accent)]">
            Sekretariat
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-[var(--ikapi-ink)]">
            IKAPI Daerah Istimewa Yogyakarta
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-600">
            Jl. Kenanga No. 164, Sambilegi Kidul, Maguwoharjo, Kec. Depok,
            Sleman, Daerah Istimewa Yogyakarta.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ['Email', 'sekre.ikapidiy@gmail.com', 'mailto:sekre.ikapidiy@gmail.com'],
            ['Telepon/WhatsApp', '0812-1239-7791', 'https://wa.me/6281212397791'],
            ['Media Sosial', '@ikapi_yogyakarta', 'https://www.instagram.com/ikapi_yogyakarta/'],
          ].map(([label, value, href]) => (
            <a
              key={label}
              className="rounded-xl border border-[#e2d8c8] bg-[#fffaf2] p-5 transition hover:-translate-y-0.5 hover:border-[#cbbda9]"
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ikapi-accent)]">
                {label}
              </p>
              <p className="mt-3 font-semibold tracking-[-0.02em] text-[var(--ikapi-ink)]">{value}</p>
            </a>
          ))}
        </div>
      </div>
    ),
  },
  jogjaBookFair: {
    title: 'Jogja Book Fair',
    eyebrow: 'Agenda',
    slugs: ['jogja-book-fair', 'jbf'],
    fallback: (
      <div className="grid gap-6">
        <p>
          Jogja Book Fair adalah etalase publik bagi ekosistem buku Yogyakarta. Halaman ini dapat
          dipakai untuk memuat jadwal, tema acara, mitra, dan informasi partisipasi dari WP Admin.
        </p>
        <p>
          Frontend mempertahankan tampilan editorial, sementara konten agenda bisa berganti sesuai
          kebutuhan penyelenggaraan tahunan.
        </p>
      </div>
    ),
  },
  dataAnggota: {
    title: 'Data Anggota IKAPI DIY',
    eyebrow: 'Keanggotaan',
    slugs: ['data-anggota-ikapi-diy', 'data-anggota'],
    fallback: (
      <div className="grid gap-6">
        <p>
          Data anggota dapat dikelola dari WordPress untuk menampilkan daftar penerbit, status
          keanggotaan, atau pranala menuju profil anggota bila sudah tersedia.
        </p>
        <p>
          Jika dibutuhkan struktur data yang lebih rinci, halaman ini siap dikembangkan memakai
          ACF REST API atau custom endpoint tanpa menaruh kredensial admin di frontend.
        </p>
      </div>
    ),
  },
} satisfies Record<string, StaticPageConfig>

export const profilePageConfigs: Record<ProfilePageKey, ProfilePageConfig> = {
  sejarah: {
    key: 'sejarah',
    slugs: ['sejarah-ikapi', 'sejarah'],
    data: profilePages.sejarah,
  },
  visiMisi: {
    key: 'visiMisi',
    slugs: ['visi-dan-misi', 'visi-misi'],
    data: profilePages.visiMisi,
  },
  adart: {
    key: 'adart',
    slugs: ['ad-art-ikapi', 'ad-art', 'adart'],
    data: profilePages.adart,
  },
  struktur: {
    key: 'struktur',
    slugs: ['struktur-organisasi', 'struktur-pengurus-ikapi-diy', 'struktur-pengurus', 'struktur'],
    data: profilePages.struktur,
  },
  syarat: {
    key: 'syarat',
    slugs: ['syarat-menjadi-anggota-ikapi', 'syarat-menjadi-anggota', 'syarat-keanggotaan', 'syarat-anggota', 'syarat'],
    data: profilePages.syarat,
  },
  manfaat: {
    key: 'manfaat',
    slugs: ['manfaat-menjadi-anggota', 'manfaat-keanggotaan', 'manfaat-anggota', 'manfaat'],
    data: profilePages.manfaat,
  },
  dataAnggota: {
    key: 'dataAnggota',
    slugs: ['anggota-ikapi', 'data-anggota-ikapi-diy', 'data-anggota'],
    data: profilePages.dataAnggota,
  },
}

export const navigationPageSlugs = {
  sejarah: profilePageConfigs.sejarah.slugs,
  visiMisi: profilePageConfigs.visiMisi.slugs,
  adart: profilePageConfigs.adart.slugs,
  struktur: profilePageConfigs.struktur.slugs,
  syarat: profilePageConfigs.syarat.slugs,
  manfaat: profilePageConfigs.manfaat.slugs,
  dataAnggota: profilePageConfigs.dataAnggota.slugs,
  program: staticPages.program.slugs,
  kontak: staticPages.kontak.slugs,
  jogjaBookFair: staticPages.jogjaBookFair.slugs,
} as const
