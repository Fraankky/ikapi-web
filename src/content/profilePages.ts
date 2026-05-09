export type ProfilePageKey =
  | 'sejarah'
  | 'visiMisi'
  | 'adart'
  | 'struktur'
  | 'syarat'
  | 'manfaat'
  | 'dataAnggota'

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
    { label: 'Struktur Pengurus IKAPI', href: '/tentang/struktur' },
  ],
  keanggotaan: [
    { label: 'Syarat Menjadi Anggota IKAPI', href: '/keanggotaan/syarat' },
    { label: 'Manfaat Menjadi Anggota', href: '/keanggotaan/manfaat' },
    { label: 'Data Anggota IKAPI DIY', href: '/keanggotaan/data-anggota' },
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
      { value: '13-14', label: 'Penerbit bergabung pada masa awal' },
      { value: 'Panca Daya', label: 'Semangat dasar kerja organisasi' },
    ],
    sections: [
      {
        eyebrow: 'Awal Organisasi',
        title: 'Lahir dari kebutuhan penerbit nasional',
        body: [
          'IKAPI didirikan pada 17 Mei 1950 di Jakarta sebagai asosiasi profesi penerbit buku Indonesia. Para inisiator yang disebut dalam sejarah IKAPI adalah Sutan Takdir Alisjahbana, M. Jusuf Ahmad, dan Nyonya A. Notosoetardjo.',
          'Organisasi ini lahir dari semangat nasionalisme setelah kemerdekaan. Pada masa awal, IKAPI menjadi wadah bagi penerbit untuk menyatukan kerja profesi, memperkuat ekosistem buku, dan ikut mencerdaskan kehidupan bangsa.',
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
            body: 'IKAPI merangkul Gabungan Penerbit Medan sehingga lahir cabang Sumatra Utara sebagai cabang IKAPI pertama.',
          },
          {
            title: '1954',
            body: 'Kongres IKAPI I di Jakarta mengesahkan pembentukan cabang Jakarta, Jawa Tengah, Jawa Timur, Sumatra Barat, dan Sumatra Utara.',
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
          'Memperluas kesempatan membaca melalui pengembangan perpustakaan.',
          'Mengembangkan penerbitan buku pendidikan dan pengajaran.',
          'Menyebarkan karya sastra Indonesia melalui ekspor hak cipta dan buku.',
          'Melindungi hak cipta serta membantu penerbitan buku universitas dan sastra.',
          'Mengembangkan industri grafika untuk mendukung kebutuhan pencetakan buku.',
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
        title: 'Industri penerbitan yang mampu berkiprah luas',
        body: [
          'IKAPI menetapkan visi agar industri penerbitan buku di Indonesia mampu memenuhi kebutuhan pasar dalam negeri dan berkiprah di pasar internasional.',
        ],
      },
      {
        eyebrow: 'Misi',
        title: 'Ikut mencerdaskan kehidupan bangsa',
        items: [
          'Menciptakan iklim perbukuan yang kondusif.',
          'Mengembangkan sistem perbukuan yang kompetitif.',
          'Meningkatkan profesionalisme asosiasi dan para anggotanya.',
          'Mendorong perbukuan nasional agar berperan optimal dalam masyarakat demokratis yang terbuka dan bertanggung jawab.',
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
          'AD/ART adalah landasan operasional dasar organisasi. Dokumen ini bukan hanya memuat aturan, tetapi juga menjelaskan visi, misi, struktur organisasi, dan pembagian tugas dalam IKAPI.',
          'Untuk kebutuhan legal, administrasi, dan keputusan formal, halaman IKAPI Pusat tetap menjadi rujukan dokumen terbaru yang perlu diperiksa oleh pengurus dan anggota.',
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
    title: 'Struktur Pengurus IKAPI',
    lead:
      'Struktur organisasi IKAPI memperlihatkan pembagian peran pengurus dalam menjalankan fungsi asosiasi, layanan anggota, advokasi, dan program perbukuan.',
    sourceLabel: 'Struktur Pengurus IKAPI Pusat - IKAPI Pusat',
    sourceUrl: 'https://www.ikapi.org/struktur-organisasi/',
    category: 'tentang',
    stats: [
      { value: '2025-2030', label: 'Periode pengurus pusat terbaru' },
      { value: 'DPP', label: 'Dewan Pertimbangan Pusat' },
      { value: 'Bidang', label: 'Mengelola program strategis' },
    ],
    sections: [
      {
        eyebrow: 'Susunan',
        title: 'Susunan Pengurus IKAPI Pusat 2025-2030',
        body: [
          'Sumber IKAPI Pusat menampilkan susunan pengurus periode 2025-2030. Di dalamnya terdapat Dewan Pertimbangan Pusat dan Pengurus Pusat yang menjalankan mandat organisasi pada tingkat nasional.',
        ],
      },
      {
        eyebrow: 'Kelompok Kerja',
        title: 'Fokus kerja dalam struktur',
        cards: [
          {
            title: 'Dewan Pertimbangan Pusat',
            body: 'Berisi unsur ketua, wakil ketua, dan anggota yang memberi pertimbangan bagi arah organisasi.',
          },
          {
            title: 'Ketua Umum dan Sekretariat',
            body: 'Memimpin arah organisasi, mengelola administrasi, komunikasi, dokumentasi, dan pelaksanaan agenda.',
          },
          {
            title: 'Bendahara Umum',
            body: 'Menangani pencatatan, pelaporan, dan tata kelola keuangan organisasi.',
          },
          {
            title: 'Bidang Kerja',
            body: 'Mengelola organisasi, kerja sama, kebijakan perbukuan, pameran, budaya baca, hukum, riset, dan transformasi perbukuan.',
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
          'Anggota biasa adalah badan usaha atau lembaga penerbit buku, baik swasta maupun milik negara.',
          'Penerbit berbentuk badan usaha atau badan hukum yang disahkan melalui akta notaris atau dokumen resmi dari instansi terkait.',
          'Memiliki izin usaha dari instansi pemerintah yang berwenang.',
          'Kegiatan menerbitkan buku tercantum jelas dalam anggaran dasar dan/atau izin usaha.',
          'Memiliki alamat kantor tetap, karyawan tetap sekurang-kurangnya tiga orang, dan telah menerbitkan minimal tiga judul buku ber-ISBN.',
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
            body: 'Salinan akta notaris atau dokumen resmi, izin usaha, dan surat keterangan domisili sesuai jenis keanggotaan.',
          },
          {
            title: 'Daftar Terbitan',
            body: 'Masing-masing dua eksemplar dari sekurang-kurangnya tiga judul buku yang telah diterbitkan dan memiliki ISBN.',
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
          'Pengurus daerah menyampaikan pendapat dan saran kepada Pengurus Pusat sesuai mekanisme organisasi.',
          'Pengurus Pusat memberikan keputusan tertulis kepada pengurus daerah atau calon anggota sesuai ketentuan.',
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
            body: 'Anggota terhubung dengan penerbit lain sehingga dapat membangun silaturahim, kerja sama penerbitan bersama, dan kolaborasi lain.',
          },
          {
            title: 'Informasi Industri',
            body: 'Mendapat informasi tentang kebijakan pemerintah, proyek pengadaan buku, dan kegiatan nasional maupun internasional di bidang perbukuan.',
          },
          {
            title: 'Advokasi Perbukuan',
            body: 'IKAPI memberi perlindungan kode etik bisnis penerbitan buku serta bantuan advokasi untuk masalah terkait perbukuan.',
          },
          {
            title: 'Pameran dan Promosi',
            body: 'Anggota dapat mengikuti agenda promosi buku, pameran, dan kegiatan publik yang dikelola atau didukung IKAPI.',
          },
          {
            title: 'Penguatan Kapasitas',
            body: 'Seminar, lokakarya, pelatihan, dan forum organisasi membantu penerbit meningkatkan profesionalitas perbukuan.',
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
  dataAnggota: {
    eyebrow: 'Keanggotaan',
    title: 'Data Anggota IKAPI DIY',
    lead:
      'Halaman ini disiapkan untuk menampilkan data anggota IKAPI DIY dengan rujukan struktur data anggota IKAPI pusat.',
    sourceLabel: 'Anggota IKAPI - IKAPI Pusat',
    sourceUrl: 'https://www.ikapi.org/anggota-ikapi/',
    category: 'keanggotaan',
    stats: [
      { value: '1 Mei 2026', label: 'Tanggal data anggota pada laman IKAPI pusat' },
      { value: 'Nama', label: 'Kolom utama daftar penerbit' },
      { value: 'Status', label: 'Status aktif dan tidak aktif' },
    ],
    sections: [
      {
        eyebrow: 'Rujukan Data',
        title: 'Format data anggota IKAPI',
        body: [
          'Laman anggota IKAPI pusat menampilkan data anggota per 1 Mei 2026. Struktur pencarian mencakup nama penerbit, nomor anggota, masa berlaku KTA, dan status keanggotaan.',
          'Untuk IKAPI DIY, halaman ini dapat dipakai sebagai ruang publik daftar penerbit anggota wilayah DIY. Jika data lokal tersedia dari WordPress, konten WordPress akan otomatis menggantikan fallback ini.',
        ],
      },
      {
        eyebrow: 'Kolom Data',
        title: 'Informasi yang perlu ditampilkan',
        cards: [
          {
            title: 'Nama Penerbit',
            body: 'Nama resmi penerbit anggota sesuai data keanggotaan.',
          },
          {
            title: 'Nomor Anggota',
            body: 'Nomor anggota IKAPI untuk identifikasi administratif.',
          },
          {
            title: 'Masa KTA',
            body: 'Tanggal atau periode berakhirnya Kartu Tanda Anggota.',
          },
          {
            title: 'Status',
            body: 'Status aktif atau tidak aktif agar publik dapat memverifikasi keanggotaan.',
          },
        ],
      },
      {
        eyebrow: 'Catatan Implementasi',
        title: 'Data DIY perlu dipisahkan dari data nasional',
        items: [
          'Gunakan data lokal IKAPI DIY jika sekretariat sudah memiliki daftar final anggota daerah.',
          'Tampilkan pranala ke data IKAPI pusat sebagai rujukan nasional.',
          'Hindari menyalin tabel nasional secara penuh jika kebutuhan halaman adalah daftar anggota khusus DIY.',
          'Pastikan pembaruan data dilakukan dari WordPress atau endpoint terstruktur agar tidak perlu mengubah kode.',
        ],
      },
    ],
  },
}
