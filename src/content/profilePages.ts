export type ProfilePageKey =
  | 'sejarah'
  | 'visiMisi'
  | 'adart'
  | 'struktur'
  | 'syarat'
  | 'manfaat'

type NavItem = {
  label: string
  href: string
}

type StatItem = {
  value: string
  label: string
}

type CardItem = {
  title: string
  body: string
}

type Section = {
  title: string
  eyebrow?: string
  body?: string[]
  items?: string[]
  ordered?: boolean
  cards?: CardItem[]
}

export type ProfilePageData = {
  eyebrow: string
  title: string
  lead: string
  sourceLabel: string
  sourceUrl: string
  category: 'tentang' | 'keanggotaan'
  stats?: StatItem[]
  sections: Section[]
}

export const profileNav: Record<ProfilePageData['category'], NavItem[]> = {
  tentang: [
    { label: 'Sejarah IKAPI', href: '/tentang/sejarah' },
    { label: 'Visi dan Misi', href: '/tentang/visi-misi' },
    { label: 'AD/ART IKAPI', href: '/tentang/adart' },
    { label: 'Struktur Organisasi', href: '/tentang/struktur' },
  ],
  keanggotaan: [
    { label: 'Syarat Anggota', href: '/keanggotaan/syarat' },
    { label: 'Manfaat Anggota', href: '/keanggotaan/manfaat' },
    { label: 'Data Anggota DIY', href: '/keanggotaan/data-anggota' },
  ],
}

export const profilePages: Record<ProfilePageKey, ProfilePageData> = {
  sejarah: {
    eyebrow: 'Tentang IKAPI',
    title: 'Sejarah IKAPI',
    lead:
      'IKAPI lahir sebagai wadah penerbit Indonesia untuk menguatkan profesi penerbitan, memperjuangkan perbukuan nasional, dan membangun budaya baca yang lebih luas.',
    sourceLabel: 'Sejarah IKAPI - IKAPI Pusat',
    sourceUrl: 'https://www.ikapi.org/sejarah-ikapi/',
    category: 'tentang',
    stats: [
      { value: '17 Mei 1950', label: 'IKAPI didirikan di Jakarta' },
      { value: '13 pendiri', label: 'Penerbit awal yang menggagas organisasi' },
      { value: 'Panca Daya', label: 'Semangat dasar kerja organisasi' },
    ],
    sections: [
      {
        eyebrow: 'Awal Organisasi',
        title: 'Lahir dari kebutuhan penerbit nasional',
        body: [
          'IKAPI dibentuk pada masa awal Republik Indonesia ketika dunia penerbitan membutuhkan wadah bersama. Organisasi ini menjadi tempat penerbit menyatukan suara, memperkuat tata kelola profesi, dan ikut membangun pendidikan bangsa melalui buku.',
          'Sejak awal, IKAPI bergerak dengan semangat kebersamaan. Penerbit dipandang bukan hanya sebagai pelaku usaha, tetapi juga bagian dari kerja kebudayaan dan pendidikan nasional.',
        ],
      },
      {
        eyebrow: 'Linimasa',
        title: 'Tonggak perjalanan IKAPI',
        cards: [
          {
            title: '1950',
            body: 'IKAPI berdiri di Jakarta pada 17 Mei 1950 sebagai organisasi penerbit buku Indonesia.',
          },
          {
            title: '1953',
            body: 'IKAPI mulai memperluas jaringan kerja organisasi dan memperkuat peran penerbit dalam ekosistem buku nasional.',
          },
          {
            title: '1954',
            body: 'Organisasi terus mengonsolidasikan penerbit anggota dan menegaskan peran buku dalam pembangunan bangsa.',
          },
          {
            title: 'Kini',
            body: 'IKAPI berkembang melalui pengurus pusat dan daerah, termasuk IKAPI DIY, untuk menjawab kebutuhan penerbit di wilayah masing-masing.',
          },
        ],
      },
      {
        eyebrow: 'Nilai Kerja',
        title: 'Panca Daya sebagai arah gerak',
        items: [
          'Meningkatkan mutu penerbitan dan profesionalisme penerbit.',
          'Memperkuat jaringan antar-penerbit dan pemangku kepentingan perbukuan.',
          'Mendorong distribusi buku yang sehat dan menjangkau pembaca lebih luas.',
          'Mengembangkan budaya baca dan apresiasi terhadap buku.',
          'Menjaga peran penerbit sebagai bagian dari pembangunan ilmu pengetahuan dan kebudayaan.',
        ],
      },
    ],
  },
  visiMisi: {
    eyebrow: 'Tentang IKAPI',
    title: 'Visi dan Misi',
    lead:
      'Visi dan misi IKAPI menempatkan penerbit sebagai penggerak industri buku, literasi, pendidikan, dan kebudayaan Indonesia.',
    sourceLabel: 'Visi Misi - IKAPI Pusat',
    sourceUrl: 'https://www.ikapi.org/visi-misi/',
    category: 'tentang',
    stats: [
      { value: 'Literasi', label: 'Arah utama kontribusi organisasi' },
      { value: 'Profesional', label: 'Standar kerja penerbit anggota' },
      { value: 'Kolaboratif', label: 'Cara IKAPI membangun ekosistem buku' },
    ],
    sections: [
      {
        eyebrow: 'Visi',
        title: 'Industri penerbitan yang kuat dan bermartabat',
        body: [
          'IKAPI mendorong terwujudnya industri penerbitan buku Indonesia yang sehat, profesional, mandiri, dan mampu memenuhi kebutuhan pembaca di dalam negeri maupun pasar yang lebih luas.',
        ],
      },
      {
        eyebrow: 'Misi',
        title: 'Ruang kerja bagi penerbit dan literasi',
        items: [
          'Memperjuangkan kepentingan penerbit anggota dalam kebijakan perbukuan dan ekosistem literasi.',
          'Meningkatkan kapasitas, etika, dan profesionalisme penerbit.',
          'Mendorong kerja sama antara penerbit, pemerintah, lembaga pendidikan, komunitas, dan pembaca.',
          'Memperluas akses masyarakat terhadap buku yang bermutu.',
          'Mengembangkan promosi, pameran, dan kegiatan perbukuan yang berdampak bagi anggota.',
        ],
      },
      {
        eyebrow: 'Makna Untuk DIY',
        title: 'Diterjemahkan dalam konteks Yogyakarta',
        cards: [
          {
            title: 'Penerbit Lokal',
            body: 'IKAPI DIY menjadi ruang koordinasi bagi penerbit Yogyakarta agar dapat tumbuh bersama dan saling menguatkan.',
          },
          {
            title: 'Ekosistem Buku',
            body: 'Program organisasi diarahkan untuk mempertemukan penerbit, penulis, toko buku, kampus, sekolah, dan komunitas literasi.',
          },
          {
            title: 'Agenda Publik',
            body: 'Kegiatan seperti pameran, diskusi, dan advokasi perbukuan menjadi sarana memperluas dampak buku di masyarakat.',
          },
        ],
      },
    ],
  },
  adart: {
    eyebrow: 'Tentang IKAPI',
    title: 'AD/ART IKAPI',
    lead:
      'Anggaran Dasar dan Anggaran Rumah Tangga menjadi rujukan tata kelola organisasi, hak dan kewajiban anggota, serta mekanisme pengambilan keputusan IKAPI.',
    sourceLabel: 'AD/ART IKAPI - IKAPI Pusat',
    sourceUrl: 'https://www.ikapi.org/ad-art-ikapi/',
    category: 'tentang',
    stats: [
      { value: 'AD', label: 'Landasan organisasi' },
      { value: 'ART', label: 'Aturan pelaksanaan' },
      { value: 'Anggota', label: 'Hak dan kewajiban diatur jelas' },
    ],
    sections: [
      {
        eyebrow: 'Dokumen Organisasi',
        title: 'Rujukan resmi tata kelola IKAPI',
        body: [
          'AD/ART IKAPI memuat ketentuan dasar organisasi, tujuan, keanggotaan, struktur, permusyawaratan, dan aturan operasional yang menjadi pedoman seluruh pengurus serta anggota.',
          'Untuk kebutuhan legal dan keputusan formal, halaman IKAPI Pusat tetap menjadi rujukan dokumen terbaru.',
        ],
      },
      {
        eyebrow: 'Pokok Pengaturan',
        title: 'Hal yang biasanya menjadi acuan anggota',
        items: [
          'Kedudukan, asas, tujuan, dan fungsi organisasi.',
          'Jenis keanggotaan serta hak dan kewajiban anggota.',
          'Struktur kepengurusan dan masa bakti pengurus.',
          'Permusyawaratan organisasi dan mekanisme pengambilan keputusan.',
          'Ketentuan iuran, administrasi, serta disiplin organisasi.',
        ],
      },
      {
        eyebrow: 'Praktis',
        title: 'Cara menggunakan halaman ini',
        cards: [
          {
            title: 'Untuk calon anggota',
            body: 'Gunakan AD/ART untuk memahami posisi, hak, kewajiban, dan standar partisipasi dalam organisasi.',
          },
          {
            title: 'Untuk penerbit anggota',
            body: 'Jadikan dokumen ini sebagai panduan saat mengikuti musyawarah, program, atau keputusan organisasi.',
          },
          {
            title: 'Untuk publik',
            body: 'AD/ART membantu menjelaskan bahwa IKAPI bekerja dengan tata kelola organisasi yang tertulis dan terukur.',
          },
        ],
      },
    ],
  },
  struktur: {
    eyebrow: 'Tentang IKAPI',
    title: 'Struktur Organisasi IKAPI',
    lead:
      'Struktur organisasi IKAPI memperlihatkan pembagian peran pengurus dalam menjalankan fungsi asosiasi, layanan anggota, advokasi, dan program perbukuan.',
    sourceLabel: 'Struktur Organisasi - IKAPI Pusat',
    sourceUrl: 'https://www.ikapi.org/struktur-organisasi/',
    category: 'tentang',
    stats: [
      { value: 'Pengurus', label: 'Memimpin arah organisasi' },
      { value: 'Bidang', label: 'Mengelola program strategis' },
      { value: 'Daerah', label: 'Menguatkan jaringan wilayah' },
    ],
    sections: [
      {
        eyebrow: 'Susunan',
        title: 'Pembagian peran organisasi',
        body: [
          'Secara umum, struktur IKAPI terdiri dari unsur ketua, sekretariat, bendahara, dan bidang-bidang kerja. Pembagian ini memastikan organisasi dapat menjalankan administrasi, program, komunikasi, advokasi, dan layanan keanggotaan secara terarah.',
        ],
      },
      {
        eyebrow: 'Kelompok Kerja',
        title: 'Fokus kerja dalam struktur',
        cards: [
          {
            title: 'Kepemimpinan',
            body: 'Menentukan arah strategis organisasi, menjaga hubungan antarlembaga, dan memastikan keputusan berjalan.',
          },
          {
            title: 'Sekretariat',
            body: 'Mengelola administrasi, komunikasi, dokumentasi, agenda rapat, serta kebutuhan layanan anggota.',
          },
          {
            title: 'Keuangan',
            body: 'Mengatur pencatatan, pelaporan, dan tata kelola keuangan organisasi.',
          },
          {
            title: 'Bidang Program',
            body: 'Merancang kegiatan literasi, pameran buku, pelatihan, advokasi, dan kerja sama perbukuan.',
          },
        ],
      },
      {
        eyebrow: 'Catatan Lokal',
        title: 'Struktur IKAPI DIY',
        body: [
          'Untuk halaman IKAPI DIY, struktur lokal dapat dilengkapi dengan nama pengurus daerah saat data final tersedia. Saat ini halaman disiapkan sebagai layout resmi agar daftar pengurus dapat dimasukkan tanpa mengubah desain.',
        ],
      },
    ],
  },
  syarat: {
    eyebrow: 'Keanggotaan',
    title: 'Syarat Menjadi Anggota IKAPI',
    lead:
      'Keanggotaan IKAPI ditujukan bagi penerbit yang menjalankan kegiatan penerbitan secara profesional dan bersedia mengikuti ketentuan organisasi.',
    sourceLabel: 'Syarat Menjadi Anggota IKAPI - IKAPI Pusat',
    sourceUrl: 'https://www.ikapi.org/syarat-menjadi-anggota-ikapi/',
    category: 'keanggotaan',
    stats: [
      { value: 'Penerbit', label: 'Berbadan usaha atau berbadan hukum' },
      { value: 'Administrasi', label: 'Dokumen usaha dan katalog buku' },
      { value: 'Verifikasi', label: 'Diperiksa oleh pengurus IKAPI' },
    ],
    sections: [
      {
        eyebrow: 'Kriteria Umum',
        title: 'Siapa yang dapat mendaftar',
        items: [
          'Penerbit yang memiliki kegiatan penerbitan buku secara nyata dan berkelanjutan.',
          'Memiliki legalitas usaha atau badan hukum sesuai ketentuan yang berlaku.',
          'Memiliki alamat dan penanggung jawab yang jelas.',
          'Menerbitkan buku dengan identitas penerbit yang dapat diverifikasi.',
          'Bersedia menaati AD/ART, keputusan organisasi, dan kewajiban keanggotaan.',
        ],
      },
      {
        eyebrow: 'Dokumen',
        title: 'Berkas yang perlu disiapkan',
        cards: [
          {
            title: 'Profil Penerbit',
            body: 'Nama penerbit, alamat, kontak resmi, penanggung jawab, serta informasi kegiatan penerbitan.',
          },
          {
            title: 'Legalitas',
            body: 'Dokumen usaha atau badan hukum yang menunjukkan penerbit beroperasi secara sah.',
          },
          {
            title: 'Daftar Terbitan',
            body: 'Katalog atau contoh buku yang memperlihatkan aktivitas penerbitan.',
          },
        ],
      },
      {
        eyebrow: 'Alur',
        title: 'Tahapan menjadi anggota',
        ordered: true,
        items: [
          'Calon anggota menyiapkan dokumen dan menghubungi sekretariat IKAPI daerah.',
          'Pengurus melakukan pemeriksaan administrasi dan verifikasi data penerbit.',
          'Permohonan diproses sesuai mekanisme organisasi.',
          'Penerbit yang diterima memenuhi kewajiban administrasi dan iuran anggota.',
        ],
      },
    ],
  },
  manfaat: {
    eyebrow: 'Keanggotaan',
    title: 'Manfaat Menjadi Anggota IKAPI',
    lead:
      'Anggota IKAPI memperoleh akses jaringan, informasi, advokasi, dan ruang promosi yang mendukung pertumbuhan penerbit.',
    sourceLabel: 'Manfaat Menjadi Anggota - IKAPI Pusat',
    sourceUrl: 'https://www.ikapi.org/manfaat-menjadi-anggota/',
    category: 'keanggotaan',
    stats: [
      { value: 'Jaringan', label: 'Terhubung dengan penerbit Indonesia' },
      { value: 'Advokasi', label: 'Didukung dalam isu perbukuan' },
      { value: 'Promosi', label: 'Akses kegiatan dan pameran buku' },
    ],
    sections: [
      {
        eyebrow: 'Benefit Utama',
        title: 'Yang didapat penerbit anggota',
        cards: [
          {
            title: 'Jaringan Profesional',
            body: 'Anggota terhubung dengan penerbit lain, pengurus, mitra, komunitas literasi, dan pemangku kepentingan perbukuan.',
          },
          {
            title: 'Informasi Industri',
            body: 'Mendapat akses kabar, kebijakan, peluang kerja sama, dan agenda penting di dunia penerbitan.',
          },
          {
            title: 'Advokasi Perbukuan',
            body: 'IKAPI menjadi wadah bersama untuk menyuarakan kepentingan penerbit dalam isu regulasi dan ekosistem buku.',
          },
          {
            title: 'Pameran dan Promosi',
            body: 'Anggota dapat mengikuti agenda promosi buku, pameran, dan kegiatan publik yang dikelola atau didukung IKAPI.',
          },
          {
            title: 'Penguatan Kapasitas',
            body: 'Pelatihan, diskusi, dan forum organisasi membantu penerbit meningkatkan mutu kerja dan daya saing.',
          },
          {
            title: 'Kredibilitas Organisasi',
            body: 'Keanggotaan memberi pengakuan bahwa penerbit menjadi bagian dari asosiasi profesi resmi di bidang perbukuan.',
          },
        ],
      },
      {
        eyebrow: 'Untuk IKAPI DIY',
        title: 'Manfaat dalam konteks Yogyakarta',
        body: [
          'Bagi penerbit di Yogyakarta, keanggotaan IKAPI DIY membuka ruang koordinasi lokal, kolaborasi program literasi, serta partisipasi dalam agenda perbukuan daerah seperti pameran dan forum penerbit.',
        ],
      },
      {
        eyebrow: 'Langkah Berikutnya',
        title: 'Siapkan penerbit untuk bergabung',
        items: [
          'Rapikan profil penerbit dan data legalitas.',
          'Kumpulkan daftar buku yang sudah diterbitkan.',
          'Hubungi sekretariat IKAPI DIY untuk proses pendaftaran dan verifikasi.',
        ],
      },
    ],
  },
}
